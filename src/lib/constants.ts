import { BLOG_ARTICLES, readingTime } from './blogContent'

export const SITE_CONFIG = {
  name: 'Dr. Manasi Das',
  title: 'Dr. Manasi Das — Expert Neurologist in Cuttack, Odisha',
  description:
    'Consult Dr. Manasi Das, MD (Medicine), DM (Neurology), Asst. Professor at IMS & SUM Hospital. Expert care for Stroke, Epilepsy, Parkinson\'s, MS, Migraine & more.',
  // Canonical origin: Vercel serves www and redirects the apex to it.
  url: 'https://www.drmanasidas.com',
  phone: ['9692579904', '7008512773'],
  email: 'drmanasidas@gmail.com',
  whatsapp: '9692579904',
  // NAP must match https://www.saishreepolyclinic.com/contact and the Google Business Profile exactly.
  clinic: {
    name: 'Sai Shree Polyclinic',
    streetAddress: 'Kathagola Rd, near Shreema Hospital, Mangalabag',
    address: 'Kathagola Rd, near Shreema Hospital, Mangalabag, Cuttack, Odisha 753001',
    phone: '7008512773',
    email: 'saishreepolyclinic@gmail.com',
    website: 'https://www.saishreepolyclinic.com/',
    doctorProfileUrl: 'https://www.saishreepolyclinic.com/doctors/dr-manasi-das',
    placeId: 'ChIJ2TOgzagTGToR7Sbpbc3FlhI',
    // From the clinic's own Google Maps directions link (saishreepolyclinic.com/contact)
    geo: { lat: 20.4770033, lng: 85.8854868 },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sai+Shree+Polyclinic+Cuttack&query_place_id=ChIJ2TOgzagTGToR7Sbpbc3FlhI',
    reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJ2TOgzagTGToR7Sbpbc3FlhI',
    mapUrl:
      'https://maps.google.com/maps?q=20.4770033,85.8854868&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  hospital: {
    name: 'IMS & SUM Hospital',
    role: 'Assistant Professor, Department of Neurology',
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
}

export const DOCTOR = {
  name: 'Dr. Manasi Das',
  shortName: 'Dr. Das',
  qualifications: ['MD (Medicine)', 'DM (Neurology)'],
  role: 'Asst. Professor — IMS & SUM Hospital',
  specialization: 'Neurology',
  experience: '10+',
  patientsServed: '5000+',
  bio: `Dr. Manasi Das is a Neurologist and Assistant Professor at IMS & SUM Hospital, Bhubaneswar. With qualifications in Medicine (MD) and Neurology (DM), she combines academic training with careful, compassionate clinical care.

Specialising in complex neurological conditions including Stroke, Parkinson's Disease, Epilepsy, Multiple Sclerosis, and Alzheimer's, Dr. Das is committed to delivering evidence-based treatment with a patient-first approach. Her practice at Sai Shree Polyclinic in Cuttack serves patients from across Odisha.`,
  credentials: [
    { label: 'MD (Medicine)', institution: 'AIIMS / SCB Medical College', year: '' },
    { label: 'DM (Neurology)', institution: 'Advanced Neurology Training', year: '' },
    { label: 'Asst. Professor', institution: 'IMS & SUM Hospital, Bhubaneswar', year: 'Current' },
    { label: 'Senior Neurologist', institution: 'Sai Shree Polyclinic, Cuttack', year: 'Current' },
  ],
  achievements: [
    'Specialist in Stroke Management & Prevention',
    'Expert in Movement Disorders (Parkinson\'s)',
    'Advanced training in Epilepsy & Seizure Management',
    'Academic excellence in Neurological Sciences',
    'Sees patients from across Odisha',
  ],
}

export const SERVICES = [
  {
    slug: 'stroke',
    title: 'Stroke',
    icon: '🧠',
    color: 'red',
    shortDesc: 'Rapid diagnosis and advanced management of ischemic and hemorrhagic stroke.',
    description:
      'Stroke is a medical emergency requiring immediate care. Dr. Das provides rapid assessment, thrombolysis guidance, and comprehensive post-stroke rehabilitation planning to minimise long-term disability.',
    symptoms: ['Sudden numbness in face/arm/leg', 'Confusion or trouble speaking', 'Vision problems', 'Severe headache', 'Loss of balance'],
    benefits: ['Emergency stroke protocol', 'Advanced imaging interpretation', 'Post-stroke rehabilitation plan', 'Secondary prevention strategies'],
    category: 'Emergency Neurology',
  },
  {
    slug: 'parkinsons-disease',
    title: "Parkinson's Disease",
    icon: '🫀',
    color: 'purple',
    shortDesc: 'Personalised management plans for movement disorders and Parkinson\'s disease.',
    description:
      "Parkinson's Disease is a progressive neurological condition affecting movement. Dr. Das offers comprehensive evaluation, accurate staging, and individualized treatment strategies including medications and lifestyle guidance.",
    symptoms: ['Tremors at rest', 'Stiffness of limbs', 'Slowed movements', 'Balance problems', 'Soft or slurred speech'],
    benefits: ['Precise diagnosis & staging', 'Personalised medication plans', 'Movement therapy guidance', 'Long-term management support'],
    category: 'Movement Disorders',
  },
  {
    slug: 'epilepsy',
    title: 'Epilepsy',
    icon: '⚡',
    color: 'yellow',
    shortDesc: 'Seizure disorder diagnosis, anti-epileptic therapy, and long-term management.',
    description:
      'Epilepsy affects millions worldwide. Dr. Das expertly classifies seizure types, interprets EEG findings, and crafts anti-epileptic regimens that maximise seizure control while preserving quality of life.',
    symptoms: ['Recurring seizures', 'Sudden confusion', 'Staring spells', 'Uncontrolled jerking movements', 'Temporary awareness loss'],
    benefits: ['EEG interpretation expertise', 'Precise anti-epileptic therapy', 'Drug-resistant epilepsy evaluation', 'Driving & lifestyle counselling'],
    category: 'Seizure Disorders',
  },
  {
    slug: 'multiple-sclerosis',
    title: 'Multiple Sclerosis (MS)',
    icon: '🔬',
    color: 'blue',
    shortDesc: 'Early diagnosis and disease-modifying therapy for Multiple Sclerosis.',
    description:
      'Multiple Sclerosis is a complex autoimmune disease of the central nervous system. Dr. Das provides cutting-edge diagnostic evaluation and disease-modifying therapy to slow progression and improve quality of life.',
    symptoms: ['Fatigue and weakness', 'Vision disturbances', 'Numbness & tingling', 'Balance and coordination issues', 'Cognitive changes'],
    benefits: ['MRI-based early diagnosis', 'Disease-modifying treatment plans', 'Relapse management', 'Multidisciplinary care coordination'],
    category: 'Autoimmune Neurology',
  },
  {
    slug: 'headache-migraine',
    title: 'Headache / Migraine',
    icon: '💊',
    color: 'green',
    shortDesc: 'Evidence-based treatment for chronic headaches, migraines, and cluster headaches.',
    description:
      'Chronic headaches and migraines can be debilitating. Dr. Das provides thorough evaluation to identify triggers, classify headache types, and prescribe targeted treatment including preventive and abortive therapies.',
    symptoms: ['Throbbing head pain', 'Nausea and vomiting', 'Light and sound sensitivity', 'Aura before headache', 'Neck stiffness'],
    benefits: ['Comprehensive headache diary review', 'Acute & preventive treatment', 'Trigger identification', 'Lifestyle modification guidance'],
    category: 'Headache Medicine',
  },
  {
    slug: 'neuropathies',
    title: 'Neuropathies',
    icon: '🦴',
    color: 'orange',
    shortDesc: 'Diagnosis and management of peripheral neuropathies and nerve disorders.',
    description:
      'Peripheral neuropathies cause pain, numbness, and weakness. Dr. Das performs detailed neurological examination and nerve conduction studies to diagnose and manage diabetic, inflammatory, and hereditary neuropathies.',
    symptoms: ['Burning or tingling sensations', 'Numbness in hands/feet', 'Muscle weakness', 'Sharp shooting pain', 'Loss of reflexes'],
    benefits: ['Nerve conduction study interpretation', 'Diabetic neuropathy management', 'Pain management strategies', 'Underlying cause treatment'],
    category: 'Peripheral Neurology',
  },
  {
    slug: 'alzheimers',
    title: "Alzheimer's Disease",
    icon: '🌿',
    color: 'teal',
    shortDesc: 'Early detection, cognitive assessment, and family-centred care for Alzheimer\'s.',
    description:
      "Alzheimer's disease is the most common cause of dementia. Dr. Das offers comprehensive cognitive assessments, biomarker evaluation, and evidence-based strategies to slow progression while supporting families through the journey.",
    symptoms: ['Memory loss affecting daily life', 'Difficulty planning or problem-solving', 'Confusion with time/place', 'Language difficulties', 'Personality changes'],
    benefits: ['Early cognitive screening', 'Neuropsychological assessment', 'Medication management', 'Family caregiver support'],
    category: 'Memory & Cognition',
  },
  {
    slug: 'brain-nerve-science',
    title: 'Brain & Nerve Science',
    icon: '🔭',
    color: 'indigo',
    shortDesc: 'Comprehensive neurology consultations for all brain and nervous system conditions.',
    description:
      'Dr. Das offers expert consultations for all neurological conditions affecting the brain, spinal cord, and peripheral nerves — including vertigo, sleep disorders, neuromuscular diseases, and more.',
    symptoms: ['Unexplained neurological symptoms', 'Vertigo & balance issues', 'Sleep disorders', 'Neuromuscular weakness', 'Chronic neurological conditions'],
    benefits: ['Comprehensive neurological workup', 'Specialist referral coordination', 'Second opinion consultations', 'Preventive neurology advice'],
    category: 'General Neurology',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya M.',
    location: 'Cuttack',
    rating: 5,
    text: "Dr. Manasi Das took the time to evaluate my mother's Parkinson's symptoms carefully. Her patience, clear explanations and treatment plan gave our family real confidence.",
    condition: "Parkinson's Disease",
    initials: 'PM',
  },
  {
    id: 2,
    name: 'Rajesh S.',
    location: 'Bhubaneswar',
    rating: 5,
    text: 'I had suffered from migraines for years. Dr. Das helped me understand my triggers and started a preventive plan — my headaches are now much better controlled.',
    condition: 'Chronic Migraine',
    initials: 'RK',
  },
  {
    id: 3,
    name: 'Sujata P.',
    location: 'Kendrapara',
    rating: 5,
    text: 'My son has epilepsy and we were very worried. Dr. Das was calm, thorough and reassuring, and explained every step of his treatment to us.',
    condition: 'Epilepsy',
    initials: 'SP',
  },
  {
    id: 4,
    name: 'Ashok R.',
    location: 'Puri',
    rating: 5,
    text: "After my stroke I was devastated. Dr. Das's prompt care and detailed rehabilitation plan made a real difference to my recovery. I am grateful for her guidance.",
    condition: 'Stroke Recovery',
    initials: 'AR',
  },
]

// Listing data for the blog. Full article bodies live in ./blogContent.ts.
const BLOG_LIST = [
  {
    slug: 'warning-signs-of-stroke',
    title: 'FAST: Know the Warning Signs of Stroke',
    excerpt:
      'Every minute counts during a stroke. Learn the FAST test — Face drooping, Arm weakness, Speech difficulty, Time to call 108 — and what to do while help is on the way.',
    category: 'Stroke',
    date: 'June 12, 2024',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&fm=webp',
  },
  {
    slug: 'living-with-parkinsons',
    title: "Living with Parkinson's: A Guide for Patients & Families",
    excerpt:
      "A Parkinson's diagnosis is life-changing, but it doesn't have to stop you living well. Symptoms, treatment options, exercise and practical tips for patients and caregivers.",
    category: "Parkinson's",
    date: 'May 28, 2024',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80&fm=webp',
  },
  {
    slug: 'migraine-triggers-and-prevention',
    title: 'Migraine Triggers: Identify Yours & Take Control',
    excerpt:
      'Understanding your migraine triggers is the first step to fewer attacks. Common triggers, how to keep a headache diary, treatment and prevention, and when a headache is urgent.',
    category: 'Migraine',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&q=80&fm=webp',
  },
  {
    slug: 'epilepsy-myths-debunked',
    title: 'Epilepsy Myths Debunked: What You Need to Know',
    excerpt:
      'Misinformation about epilepsy can be dangerous. Seven common myths, the facts behind them, and the correct first aid for a seizure — including when to call 108.',
    category: 'Epilepsy',
    date: 'April 22, 2024',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80&fm=webp',
  },
  {
    // Slug kept for existing links; title and content are no longer promotional.
    slug: 'best-neurologist-in-cuttack',
    title: "When to See a Neurologist in Cuttack: A Patient's Guide",
    excerpt:
      'Not sure whether your symptoms need a neurologist? What neurologists treat, which symptoms to watch for, how to prepare, and what happens at a consultation in Cuttack.',
    category: 'Local Health',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&fm=webp',
  },
  {
    slug: 'stroke-treatment-cuttack-odisha',
    title: 'Stroke Treatment in Cuttack: What To Do in the Critical First Hour',
    excerpt:
      'Fast action after a stroke protects the brain. A step-by-step guide for families in Cuttack and Odisha: recognise it, call 108, reach a hospital that can scan, and what to avoid.',
    category: 'Stroke',
    date: 'February 20, 2025',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80&fm=webp',
  },
  {
    slug: 'epilepsy-doctor-odisha',
    title: 'Living with Epilepsy in Odisha: What Every Patient Should Know',
    excerpt:
      'Diagnosis, taking medicines correctly, seizure triggers, safety, driving, work and pregnancy — practical advice for people with epilepsy and their families in Odisha.',
    category: 'Epilepsy',
    date: 'January 10, 2025',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80&fm=webp',
  },
  {
    slug: 'migraine-headache-specialist-bhubaneswar',
    title: 'Chronic Migraine Relief in Bhubaneswar: When to See a Specialist',
    excerpt:
      "Not all headaches are the same. What chronic migraine is, the warning signs that need urgent care, and the treatments a neurologist in Bhubaneswar or Cuttack can offer.",
    category: 'Migraine',
    date: 'December 5, 2024',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&q=80&fm=webp',
  },
]

export const BLOGS = BLOG_LIST.map((b) => {
  const article = BLOG_ARTICLES[b.slug]
  return {
    ...b,
    readTime: article ? `${readingTime(article).minutes} min read` : '3 min read',
    updated: article?.updated,
  }
})


export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Patient Corner', href: '/patient-corner' },
  { label: 'Contact', href: '/contact' },
]

export const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: 'Mon–Sat', label: 'Clinic Days' },
  { value: '8', label: 'Specializations' },
  { value: '100%', label: 'Dedicated Care' },
]

export const FAQS = [
  {
    q: 'How do I book an appointment with Dr. Manasi Das?',
    a: 'You can call us directly at 9692579904 or 7008512773 to schedule a consultation at Sai Shree Polyclinic, Cuttack.',
  },
  {
    q: 'What conditions does Dr. Das specialise in?',
    a: 'Dr. Das specialises in Stroke, Parkinson\'s Disease, Epilepsy, Multiple Sclerosis, Migraine, Neuropathies, Alzheimer\'s Disease, and general Brain & Nerve conditions.',
  },
  {
    q: 'Where is Sai Shree Polyclinic located?',
    a: 'Sai Shree Polyclinic is located at Kathagola Rd, near Shreema Hospital, Mangalabag, Cuttack, Odisha 753001.',
  },
  {
    q: 'Does Dr. Das see patients at IMS & SUM Hospital?',
    a: 'Yes. Dr. Das is an Assistant Professor in the Department of Neurology at IMS & SUM Hospital, Bhubaneswar, and also consults at Sai Shree Polyclinic in Cuttack.',
  },
  {
    q: 'What should I bring to my first neurology consultation?',
    a: 'Please bring all previous medical records, recent blood test reports, any brain/spine MRI or CT scans, a list of current medications, and a description of your symptoms with timeline.',
  },
  {
    q: 'Is epilepsy curable?',
    a: 'Many forms of epilepsy can be well-controlled with the right anti-epileptic medications. Some patients achieve complete seizure freedom. Dr. Das will evaluate your specific condition and discuss realistic treatment goals.',
  },
  {
    q: 'What is the best neurology clinic in Cuttack?',
    a: 'Sai Shree Polyclinic on Kathagola Rd, Cuttack offers specialist neurology consultations with Dr. Manasi Das, MD (Medicine), DM (Neurology), Monday to Saturday.',
  },
  {
    q: 'Does Dr. Das treat patients from outside Cuttack?',
    a: 'Yes. Dr. Manasi Das regularly sees patients from across Odisha — including Bhubaneswar, Puri, Kendrapara, Balasore, Sambalpur, Angul, and beyond. The Cuttack clinic is centrally located for easy access.',
  },
  {
    q: 'Is there a WhatsApp option to contact the clinic?',
    a: 'Yes. You can reach the clinic via WhatsApp at +91 9692579904 for appointment inquiries, sharing reports, or asking quick questions before your visit.',
  },
  {
    q: 'What is the consultation fee for Dr. Manasi Das?',
    a: 'Consultation fees are reasonable and in line with Cuttack clinic standards. Please call 9692579904 directly for the current fee structure.',
  },
  {
    q: 'Can children see Dr. Manasi Das for neurological issues?',
    a: 'Dr. Manasi Das primarily treats adult neurological conditions. For paediatric neurology, she will guide you to the appropriate specialist while addressing any conditions that continue into adulthood.',
  },
  {
    q: 'Is parking available at Sai Shree Polyclinic, Cuttack?',
    a: 'Yes. Sai Shree Polyclinic on Kathagola Rd, Cuttack has parking available nearby. The clinic is easily accessible by auto-rickshaw, private vehicle, and ride-share apps from all parts of Cuttack and from Bhubaneswar.',
  },
]

export const PATIENT_RESOURCES = [
  {
    title: 'Stroke First Aid Guide',
    desc: 'Learn the FAST protocol and what to do in the first hour after a stroke.',
    icon: '🚨',
    type: 'Emergency Guide',
  },
  {
    title: 'Epilepsy Safety Tips',
    desc: 'Practical advice on seizure safety, medication adherence, and lifestyle adjustments.',
    icon: '⚡',
    type: 'Patient Guide',
  },
  {
    title: "Parkinson's Exercise Manual",
    desc: 'Recommended exercises and physiotherapy tips for better movement control.',
    icon: '🏃',
    type: 'Exercise Guide',
  },
  {
    title: 'Migraine Diary Template',
    desc: 'Track your triggers, frequency, and severity to improve treatment outcomes.',
    icon: '📋',
    type: 'Tracking Tool',
  },
  {
    title: 'MS Living Well Guide',
    desc: 'Comprehensive guide to lifestyle, diet, and coping with Multiple Sclerosis.',
    icon: '🌿',
    type: 'Wellness Guide',
  },
  {
    title: "Caregiver's Handbook for Dementia",
    desc: "Supporting a loved one with Alzheimer's — practical advice for families.",
    icon: '💚',
    type: 'Caregiver Guide',
  },
]

export const LOCAL_PAGES = [
  {
    slug: 'doctor-in-cuttack',
    city: 'Cuttack',
    title: 'Best Neurologist in Cuttack',
    description: 'Expert neurological care at Sai Shree Polyclinic, Cuttack. Specialising in Stroke, Epilepsy, Parkinson\'s & more.',
  },
  {
    slug: 'doctor-in-bhubaneswar',
    city: 'Bhubaneswar',
    title: 'Expert Neurologist in Bhubaneswar',
    description: 'Consultant Neurologist & Asst. Professor at IMS & SUM Hospital, Bhubaneswar — Dr. Manasi Das.',
  },
  {
    slug: 'clinic-in-odisha',
    city: 'Odisha',
    title: 'Best Neurology Clinic in Odisha',
    description: 'Serving patients from across Odisha at Sai Shree Polyclinic, Cuttack — centrally located for easy access.',
  },
]

export const VOICE_FAQS = [
  {
    q: 'Who is the best neurologist near me in Cuttack?',
    a: 'Dr. Manasi Das, MD (Medicine), DM (Neurology), is a neurologist at Sai Shree Polyclinic, Kathagola Rd, Cuttack, Odisha.',
  },
  {
    q: 'Where can I find a neurologist in Bhubaneswar?',
    a: 'Dr. Manasi Das serves patients at IMS & SUM Hospital in Bhubaneswar as an Assistant Professor of Neurology. Private consultations are available at Sai Shree Polyclinic, Cuttack.',
  },
  {
    q: 'What is the phone number for Dr. Manasi Das?',
    a: 'You can reach Dr. Manasi Das at +91 9692579904 or +91 7008512773.',
  },
  {
    q: 'How do I book an appointment with a neurologist in Cuttack?',
    a: 'Call Sai Shree Polyclinic at 9692579904 or WhatsApp to book an appointment with Dr. Manasi Das, neurologist in Cuttack, Odisha.',
  },
  {
    q: 'What time is the neurology clinic open in Cuttack?',
    a: 'Sai Shree Polyclinic in Cuttack is open Monday to Saturday from 9:00 AM to 7:00 PM.',
  },
  {
    q: 'Can Dr. Manasi Das treat epilepsy in Odisha?',
    a: 'Yes. Dr. Manasi Das treats epilepsy at Sai Shree Polyclinic, Cuttack, and sees patients from across Odisha.',
  },
  {
    q: 'Is there a stroke specialist in Cuttack?',
    a: 'Yes. Dr. Manasi Das, DM (Neurology), is a stroke specialist at Sai Shree Polyclinic, Cuttack, Odisha.',
  },
  {
    q: 'What is the address of Sai Shree Polyclinic Cuttack?',
    a: 'Sai Shree Polyclinic is at Kathagola Rd, near Shreema Hospital, Mangalabag, Cuttack, Odisha 753001.',
  },
  {
    q: "Who treats Parkinson's disease in Cuttack?",
    a: "Dr. Manasi Das at Sai Shree Polyclinic, Cuttack specialises in Parkinson's disease management and movement disorders.",
  },
  {
    q: 'Where to go for migraine treatment in Bhubaneswar?',
    a: 'Dr. Manasi Das at IMS & SUM Hospital, Bhubaneswar offers expert migraine and headache treatment. Private consultations at Sai Shree Polyclinic, Cuttack.',
  },
]
