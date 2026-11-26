import Script from 'next/script'

/**
 * GA4 + conversion tracking. Renders nothing until NEXT_PUBLIC_GA_ID is set
 * (Vercel → Project → Settings → Environment Variables, then redeploy).
 *
 * One delegated listener tracks every current and future CTA:
 *   tel:            → click_call
 *   wa.me/whatsapp  → click_whatsapp
 *   mailto:         → click_email
 * The contact form fires generate_lead itself (see ContactForm).
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function Analytics() {
  if (!GA_ID) return null
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', ${JSON.stringify(GA_ID)});
document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest ? e.target.closest('a') : null;
  if (!a || !window.gtag) return;
  var h = a.getAttribute('href') || '';
  var ev = h.indexOf('tel:') === 0 ? 'click_call'
    : /wa\\.me\\/|api\\.whatsapp\\.com/.test(h) ? 'click_whatsapp'
    : h.indexOf('mailto:') === 0 ? 'click_email' : null;
  if (ev) gtag('event', ev, { link_url: h.split('?')[0], page_path: location.pathname });
}, true);
`}
      </Script>
    </>
  )
}
