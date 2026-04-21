import { ReactNode } from 'react'

interface PageHeaderProps {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHeader({ badge, title, titleHighlight, subtitle, children }: PageHeaderProps) {
  return (
    <div
      className="relative page-bg"
      style={{ marginTop: 'var(--navbar-height)' }}
    >
      <div className="page-bg-overlay">
        <div className="container-custom py-20 md:py-28 relative z-10">
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full border border-white/30 uppercase tracking-wider mb-5 font-outfit">
              {badge}
            </span>
          )}
          <h1 className="heading-xl text-white mb-5">
            {title}
            {titleHighlight && (
              <>
                {' '}
                <span className="text-[#BAE6FD]">{titleHighlight}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="text-[#BAE6FD] text-lg max-w-2xl leading-relaxed font-outfit">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
