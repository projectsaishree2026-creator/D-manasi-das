/**
 * Full article bodies for /blogs/[slug]. Listing data (title, excerpt, date, image)
 * stays in BLOGS in constants.ts; this file holds the long-form content.
 *
 * Content is general patient education. Keep claims conservative and
 * guideline-based; no statistics that can't be sourced.
 */

export interface BlogSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export interface BlogArticle {
  /** Shown as "Updated …" and used for dateModified. */
  updated: string
  intro: string
  sections: BlogSection[]
  faqs: { q: string; a: string }[]
  /** Service slugs to link to at the end of the article. */
  relatedServices: string[]
}

export const BLOG_UPDATED = 'November 26, 2026'

export const BLOG_ARTICLES: Record<string, BlogArticle> = {
  // ───────────────────────────────────────────────────────────────────────────
  'warning-signs-of-stroke': {
    updated: BLOG_UPDATED,
    intro:
      'A stroke happens when blood flow to part of the brain is blocked or a blood vessel in the brain bursts. Brain cells start to die within minutes, which is why recognising the warning signs — and acting on them immediately — makes such a difference to recovery. This guide explains the FAST test, the less obvious signs, and exactly what to do if you think someone is having a stroke.',
    sections: [
      {
        heading: 'The FAST test',
        paragraphs: [
          'FAST is a simple way to remember the most common signs of stroke. If you notice any one of them, treat it as an emergency.',
        ],
        bullets: [
          'F — Face drooping: ask the person to smile. Does one side of the face droop or feel numb?',
          'A — Arm weakness: ask them to raise both arms. Does one arm drift downward or feel weak?',
          'S — Speech difficulty: is their speech slurred, strange or hard to understand? Can they repeat a simple sentence?',
          'T — Time to call: call 108 (ambulance) immediately and note the time the symptoms started.',
        ],
      },
      {
        heading: 'Other warning signs you should not ignore',
        paragraphs: [
          'Not every stroke causes face, arm or speech problems. Some doctors use "BE FAST" to add two more checks — Balance and Eyes. Watch for any of the following, especially if they come on suddenly:',
        ],
        bullets: [
          'Sudden loss of balance, dizziness or difficulty walking',
          'Sudden blurred, double or lost vision in one or both eyes',
          'Sudden numbness or weakness in the leg, or on one side of the body',
          'Sudden confusion or trouble understanding what others are saying',
          'A sudden, severe headache unlike any you have had before',
        ],
      },
      {
        heading: 'Mini-strokes (TIA) are a warning, not a relief',
        paragraphs: [
          'Sometimes stroke symptoms disappear within minutes. This is called a transient ischaemic attack (TIA) or "mini-stroke". Even if the person feels normal again, a TIA means the brain was briefly short of blood and the risk of a full stroke in the following days is high.',
          'Anyone who has had stroke-like symptoms — even for a few minutes — should be assessed by a doctor the same day so that the cause can be found and treatment started.',
        ],
      },
      {
        heading: 'What to do while you wait for help',
        paragraphs: [
          'Every minute matters, so do not wait to see whether the symptoms improve. While help is on the way:',
        ],
        bullets: [
          'Call 108 and say you suspect a stroke.',
          'Note the exact time the symptoms started, or when the person was last seen well. Doctors need this to decide on treatment.',
          'Keep the person lying on their side with the head slightly raised if they are drowsy or vomiting.',
          'Do not give food, water or medicines — including aspirin — because swallowing may be affected and some strokes are caused by bleeding.',
          'Gather their medicine list and medical reports to take to the hospital.',
        ],
      },
      {
        heading: 'Why speed changes the outcome',
        paragraphs: [
          'Most strokes are caused by a clot blocking a blood vessel. In eligible patients, clot-dissolving medicine (thrombolysis) can be given within about 4.5 hours of symptom onset, and some patients with a large blocked vessel can have the clot removed with a procedure (thrombectomy). Both treatments work best the earlier they are given — which is why the patient should go straight to a hospital that can do an urgent brain scan.',
          'A CT or MRI scan is needed before treatment, to tell a clot from a bleed. That is another reason not to give aspirin at home.',
        ],
      },
      {
        heading: 'Reducing your risk of stroke',
        paragraphs: [
          'Many strokes can be prevented by controlling the conditions that damage blood vessels. Talk to your doctor about:',
        ],
        bullets: [
          'Keeping blood pressure under control — the single most important risk factor',
          'Managing diabetes and cholesterol',
          'Stopping smoking and tobacco chewing, and limiting alcohol',
          'Checking for an irregular heartbeat (atrial fibrillation), which can cause clots',
          'Staying active, keeping a healthy weight and eating less salt',
        ],
      },
    ],
    faqs: [
      {
        q: 'What should I do if stroke symptoms go away on their own?',
        a: 'Still seek medical care the same day. Symptoms that disappear may have been a TIA (mini-stroke), which is a strong warning that a full stroke may follow. A doctor can find the cause and start preventive treatment.',
      },
      {
        q: 'Should I give aspirin to someone having a stroke?',
        a: 'No. Some strokes are caused by bleeding in the brain, and aspirin can make these worse. A brain scan at the hospital is needed first. Do not give any food, drink or medicine at home.',
      },
      {
        q: 'Which number should I call for a stroke emergency in Odisha?',
        a: 'Call 108 for an ambulance and say that you suspect a stroke. Note the time symptoms started and go to a hospital that can perform an urgent CT or MRI scan.',
      },
    ],
    relatedServices: ['stroke'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  'living-with-parkinsons': {
    updated: BLOG_UPDATED,
    intro:
      "Parkinson's disease is a long-term condition in which the brain gradually produces less dopamine, a chemical that helps control movement. It usually progresses slowly, and with the right treatment, exercise and support, most people continue to live full and independent lives for many years. This guide covers the symptoms, how Parkinson's is treated, and practical tips for patients and families.",
    sections: [
      {
        heading: "Recognising the symptoms of Parkinson's",
        paragraphs: [
          "Symptoms usually start gradually, often on one side of the body. The main movement symptoms are:",
        ],
        bullets: [
          'Tremor — shaking, typically of a hand or finger when it is at rest',
          'Slowness of movement (bradykinesia) — everyday tasks take longer',
          'Stiffness of the arms, legs or neck',
          'Balance problems and a shuffling walk in later stages',
        ],
      },
      {
        heading: 'The symptoms that are easy to miss',
        paragraphs: [
          "Parkinson's is not only a movement disorder. Many people notice other changes, sometimes years before the tremor appears. These are just as important to mention to your doctor because many of them can be treated:",
        ],
        bullets: [
          'Loss of sense of smell',
          'Constipation',
          'Sleep problems, including acting out dreams',
          'Low mood, anxiety or loss of motivation',
          'Soft speech, smaller handwriting, or less facial expression',
          'Dizziness on standing, and bladder problems',
        ],
      },
      {
        heading: "How Parkinson's is diagnosed",
        paragraphs: [
          "There is no single blood test or scan that confirms Parkinson's. A neurologist makes the diagnosis by taking a careful history and examining how you move. Scans such as MRI are sometimes done to rule out other conditions. Because other disorders can look similar, an assessment by a neurologist is important before starting long-term treatment.",
        ],
      },
      {
        heading: 'Treatment options',
        paragraphs: [
          "Medicines cannot yet stop Parkinson's, but they can greatly improve symptoms. The most common treatments replace or mimic dopamine — such as levodopa, dopamine agonists and MAO-B inhibitors. Your neurologist will choose and adjust medicines according to your age, symptoms and side effects.",
          'Take doses at the times prescribed and do not stop medicines suddenly. If you notice the effect wearing off before the next dose, or new involuntary movements, tell your doctor — the timing or dose can often be adjusted. For some people with advanced disease, procedures such as deep brain stimulation may be considered.',
        ],
      },
      {
        heading: 'Exercise is part of the treatment',
        paragraphs: [
          "Regular physical activity is one of the most helpful things you can do. Walking, stretching, cycling, yoga and balance exercises can improve mobility, posture and mood. A physiotherapist can design a safe programme, and speech therapy can help with soft speech or swallowing difficulties.",
        ],
      },
      {
        heading: 'Practical tips for daily life',
        paragraphs: ['Small changes at home can make a big difference to safety and independence:'],
        bullets: [
          'Remove loose rugs and clutter, and add grab bars in the bathroom',
          'Wear shoes with good grip and stand up slowly',
          'Eat a high-fibre diet and drink enough water to help with constipation',
          'Keep a simple symptom diary to share at follow-up visits',
          'Stay socially active — isolation can worsen mood',
        ],
      },
      {
        heading: 'Support for families and caregivers',
        paragraphs: [
          "Caring for someone with Parkinson's is a long journey. Caregivers should attend appointments when possible, learn how the medicines work, and look after their own health and rest too. Let your neurologist know if there are falls, confusion, hallucinations or swallowing problems, as these need prompt review.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Parkinson's disease curable?",
        a: "There is no cure yet, but treatment can control symptoms well for many years. Medicines, exercise and therapy help most people stay active and independent.",
      },
      {
        q: "Is every tremor a sign of Parkinson's?",
        a: "No. Tremor has many causes, including essential tremor, thyroid problems, anxiety and some medicines. A neurologist can tell the difference through examination.",
      },
      {
        q: "Can exercise slow down Parkinson's?",
        a: "Regular exercise improves mobility, balance and mood, and is strongly recommended for everyone with Parkinson's. Ask your doctor or physiotherapist which activities are safe for you.",
      },
    ],
    relatedServices: ['parkinsons-disease'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  'migraine-triggers-and-prevention': {
    updated: BLOG_UPDATED,
    intro:
      'Migraine is a common neurological condition that causes repeated attacks of moderate to severe headache, often with nausea and sensitivity to light and sound. Attacks are frequently set off by "triggers". Learning to spot yours — and using the right treatment — can mean fewer and milder attacks.',
    sections: [
      {
        heading: 'How migraine differs from an ordinary headache',
        paragraphs: [
          'A migraine headache is usually throbbing, often on one side of the head, and gets worse with physical activity. It can last from a few hours to up to three days. Some people get an "aura" beforehand — temporary visual changes such as zig-zag lines or flashing lights, or tingling in the face or hand.',
        ],
      },
      {
        heading: 'Common migraine triggers',
        paragraphs: [
          'Triggers vary from person to person, and often it is a combination of several that sets off an attack. Common ones include:',
        ],
        bullets: [
          'Too little or irregular sleep — or oversleeping at weekends',
          'Skipping meals or fasting',
          'Not drinking enough water',
          'Stress, or the "let-down" period after stress',
          'Hormonal changes around periods',
          'Bright or flickering light, loud noise, strong smells',
          'Alcohol, and changes in caffeine intake',
          'Hot weather and long hours in the sun',
        ],
      },
      {
        heading: 'Use a headache diary to find your triggers',
        paragraphs: [
          'For four to eight weeks, write down each headache: the date, time, how severe it was, what medicine you took, and what happened in the 24 hours before — sleep, meals, stress, periods, travel. Patterns often become clear, and the diary is also very useful for your neurologist when choosing treatment.',
        ],
      },
      {
        heading: 'Treating an attack',
        paragraphs: [
          'Treat early — medicines work best when taken at the start of the headache. Your doctor may advise simple painkillers, anti-sickness medicine, or migraine-specific medicines such as triptans. Resting in a dark, quiet room often helps.',
          'Be careful not to take painkillers too often. Using them on many days a month can lead to "medication overuse headache", where the headaches become more frequent. If you need painkillers on more than about 10 days a month, see a doctor.',
        ],
      },
      {
        heading: 'Preventing migraine',
        paragraphs: [
          'Lifestyle changes help many people: regular sleep and meal times, enough water, regular exercise and stress management. If attacks are frequent or disabling despite this, a neurologist may suggest a daily preventive medicine. Several options exist, and the choice depends on your other health conditions and preferences.',
        ],
      },
      {
        heading: 'Migraine in women',
        paragraphs: [
          'Migraine is more common in women, and many notice attacks around their periods. Keeping track of your cycle in your headache diary helps your doctor plan treatment around these days.',
          'If you have migraine with aura, tell your doctor before starting combined hormonal contraceptive pills, as they may not be suitable. If you are pregnant or planning a pregnancy, check with your doctor before taking any migraine medicine.',
        ],
      },
      {
        heading: 'When a headache needs urgent attention',
        paragraphs: ['Most headaches are not dangerous, but seek medical help urgently if you have:'],
        bullets: [
          'A sudden, severe "worst ever" headache that peaks within seconds or minutes',
          'Headache with fever, stiff neck, confusion or a rash',
          'Headache with weakness, numbness, slurred speech or loss of vision',
          'A new headache after a head injury',
          'A new or changed headache pattern after the age of 50',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can certain foods trigger migraine?',
        a: 'For some people, yes — common examples include alcohol, aged cheese and processed meats — but food triggers are less common than sleep, stress and skipped meals. A headache diary helps you check before cutting foods out.',
      },
      {
        q: 'Is migraine hereditary?',
        a: 'Migraine often runs in families. Having a parent with migraine increases the chance of having it too.',
      },
      {
        q: 'When should I see a neurologist for migraine?',
        a: 'See a neurologist if headaches are frequent, affect work or studies, do not respond to simple treatment, change in pattern, or if you need painkillers on many days a month.',
      },
    ],
    relatedServices: ['headache-migraine'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  'epilepsy-myths-debunked': {
    updated: BLOG_UPDATED,
    intro:
      'Epilepsy is a condition in which a person has repeated seizures caused by sudden bursts of electrical activity in the brain. It is one of the most common neurological conditions, yet it is still surrounded by myths that lead to stigma and, sometimes, dangerous first aid. Here are the facts.',
    sections: [
      {
        heading: 'Myth: You should put something in the mouth during a seizure',
        paragraphs: [
          'Fact: Never put anything in the person\'s mouth — not a spoon, cloth, fingers or water. A person cannot swallow their tongue during a seizure. Forcing something into the mouth can break teeth, injure the jaw or block the airway.',
        ],
      },
      {
        heading: 'Myth: Epilepsy is caused by evil spirits or is contagious',
        paragraphs: [
          'Fact: Epilepsy is a medical condition of the brain. It can follow a head injury, stroke, brain infection, birth difficulties or genetic factors, and in many people no single cause is found. It cannot be passed on by touch or by being near someone during a seizure.',
        ],
      },
      {
        heading: 'Myth: All seizures involve shaking and falling',
        paragraphs: [
          'Fact: There are many types of seizure. Some cause the whole body to stiffen and jerk, but others cause only brief staring spells, confusion, repeated movements like lip-smacking, or a sudden jerk of the arms. Because some seizures are subtle, they can go unnoticed for a long time — especially in children.',
        ],
      },
      {
        heading: 'Myth: Epilepsy cannot be treated',
        paragraphs: [
          'Fact: Most people with epilepsy can have their seizures well controlled with the right anti-seizure medicine, taken regularly. For people whose seizures continue despite trying medicines, other options — including surgery for selected patients — may be considered by a specialist.',
        ],
      },
      {
        heading: 'Myth: People with epilepsy cannot study, work or marry',
        paragraphs: [
          'Fact: Most people with epilepsy go to school, work, marry and have children. Women with epilepsy can have healthy pregnancies, but they should plan pregnancy with their neurologist because some medicines need to be changed or adjusted beforehand.',
        ],
      },
      {
        heading: 'Myth: Flashing lights cause seizures in everyone with epilepsy',
        paragraphs: [
          'Fact: Only a small minority of people with epilepsy are sensitive to flashing or flickering lights (photosensitive epilepsy). For most people, the common triggers are missed medicine, lack of sleep, alcohol and illness. Your neurologist can tell you whether light sensitivity is relevant for you — an EEG can help check this.',
        ],
      },
      {
        heading: 'Myth: You should hold the person down during a seizure',
        paragraphs: [
          'Fact: Holding someone down cannot stop a seizure and may cause injury to them or to you. Let the seizure run its course while keeping them safe from hard objects, and time how long it lasts.',
        ],
      },
      {
        heading: 'Seizure first aid: what you should do',
        paragraphs: ['If you see someone having a seizure with shaking:'],
        bullets: [
          'Stay calm and note the time the seizure starts',
          'Move hard or sharp objects away; put something soft under the head',
          'Loosen anything tight around the neck; do not hold the person down',
          'When the shaking stops, turn them onto their side to help breathing',
          'Stay with them until they are fully awake, and speak reassuringly',
        ],
      },
      {
        heading: 'When to call 108',
        paragraphs: ['Call for an ambulance if:'],
        bullets: [
          'The seizure lasts more than 5 minutes, or one seizure follows another',
          'It is the person\'s first seizure',
          'The person is injured, pregnant, or has diabetes',
          'The seizure happened in water',
          'The person has trouble breathing or does not wake up afterwards',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a person swallow their tongue during a seizure?',
        a: 'No. This is a myth. Never put anything in the mouth. Instead, protect the head and turn the person onto their side once the shaking stops.',
      },
      {
        q: 'Does one seizure mean I have epilepsy?',
        a: 'Not necessarily. Epilepsy is usually diagnosed after two or more unprovoked seizures, or one seizure with a high risk of more. A neurologist will assess you, often with an EEG and a brain scan.',
      },
      {
        q: 'Can I stop my epilepsy medicine once the seizures stop?',
        a: 'Do not stop or reduce anti-seizure medicine on your own — stopping suddenly can trigger severe seizures. Some people can come off medicine after a long seizure-free period, but only under a neurologist\'s supervision.',
      },
    ],
    relatedServices: ['epilepsy'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  'best-neurologist-in-cuttack': {
    updated: BLOG_UPDATED,
    intro:
      'Neurologists diagnose and treat conditions of the brain, spinal cord, nerves and muscles. Many people are not sure whether their symptoms need a neurologist or which tests to expect. This guide explains when to see one, how to prepare, and what happens at a neurology consultation at Sai Shree Polyclinic, Cuttack.',
    sections: [
      {
        heading: 'What does a neurologist treat?',
        paragraphs: ['A neurologist looks after conditions such as:'],
        bullets: [
          'Stroke and its after-effects, and stroke prevention',
          'Epilepsy and seizures, including fainting episodes that need evaluation',
          'Migraine and other long-term headaches',
          "Parkinson's disease, tremor and other movement disorders",
          'Numbness, tingling or burning in the hands and feet (neuropathy)',
          'Memory problems and dementia, including Alzheimer\'s disease',
          'Multiple sclerosis and other conditions affecting the nerves',
          'Vertigo, dizziness and balance problems',
        ],
      },
      {
        heading: 'Symptoms that are worth a neurology consultation',
        paragraphs: [
          'You may want to see a neurologist if you have headaches that are frequent or changing in pattern, episodes of blackout or jerking, ongoing numbness or weakness, tremor, problems with walking or balance, or memory difficulties that affect daily life. Your family doctor can also refer you.',
          'Sudden symptoms — face drooping, arm weakness, slurred speech, a sudden severe headache, or a seizure lasting more than 5 minutes — are emergencies. Call 108 and go to the nearest hospital emergency department instead of waiting for a clinic appointment.',
        ],
      },
      {
        heading: 'How to prepare for your first visit',
        paragraphs: ['Bringing the right information helps your neurologist make an accurate assessment:'],
        bullets: [
          'All previous prescriptions and a list of current medicines',
          'Previous MRI or CT scans (films and reports), EEG and blood test reports',
          'A short timeline of your symptoms — when they started and how they have changed',
          'For seizures or episodes, a family member who saw them, or a phone video if one was taken safely',
          'For headaches, a headache diary if you have kept one',
        ],
      },
      {
        heading: 'What happens during the consultation',
        paragraphs: [
          'The neurologist will take a detailed history and perform a neurological examination — checking strength, reflexes, sensation, coordination, walking, eye movements and memory as needed. This examination is painless.',
          'Depending on your symptoms, tests such as an MRI or CT scan, an EEG (to record brain waves), nerve conduction studies, or blood tests may be advised. The doctor will then explain the likely diagnosis and treatment plan and arrange follow-up.',
        ],
      },
      {
        heading: 'Common neurology tests explained',
        paragraphs: ['Not everyone needs tests, but these are the ones most often advised:'],
        bullets: [
          'MRI scan — detailed pictures of the brain or spine, used for stroke, epilepsy, multiple sclerosis and unexplained symptoms. It uses magnets, not radiation.',
          'CT scan — a quick scan, especially useful in emergencies such as suspected stroke or head injury.',
          "EEG — painless recording of the brain's electrical activity through small sensors on the scalp, used mainly for seizures.",
          'Nerve conduction study — measures how well nerves carry signals, used for numbness, tingling and weakness in the limbs.',
          'Blood tests — check for causes such as diabetes, thyroid problems, vitamin B12 deficiency or infection.',
        ],
      },
      {
        heading: 'After the first visit',
        paragraphs: [
          'Many neurological conditions are long-term, so follow-up matters. Take medicines exactly as prescribed, keep a simple diary of symptoms, and bring new reports to each visit. Contact the clinic sooner if symptoms worsen or new symptoms appear.',
        ],
      },
      {
        heading: 'Consulting Dr. Manasi Das in Cuttack',
        paragraphs: [
          'Dr. Manasi Das, MD (Medicine), DM (Neurology), is an Assistant Professor of Neurology at IMS & SUM Hospital, Bhubaneswar, and consults at Sai Shree Polyclinic, Kathagola Rd, near Shreema Hospital, Mangalabag, Cuttack. The clinic is open Monday to Saturday, 9 AM to 7 PM.',
          'To book, call 9692579904 or 7008512773, or send a WhatsApp message. You can also share reports in advance so that the consultation can focus on your questions.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need a referral to see a neurologist?',
        a: 'No referral is required to book a consultation at Sai Shree Polyclinic, although a note from your family doctor and your previous reports are helpful.',
      },
      {
        q: 'What is the difference between a neurologist and a neurosurgeon?',
        a: 'A neurologist diagnoses and treats nervous-system conditions with medicines and other non-surgical treatments. A neurosurgeon performs operations on the brain and spine. Your neurologist will refer you if surgery may help.',
      },
    ],
    relatedServices: ['brain-nerve-science', 'stroke', 'epilepsy'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  'stroke-treatment-cuttack-odisha': {
    updated: BLOG_UPDATED,
    intro:
      'When someone has a stroke, the first hour is often called the "golden hour" because fast action gives the best chance of limiting brain damage. Knowing what to do — and what not to do — before reaching hospital can make a real difference. This guide walks families in Cuttack and across Odisha through those critical first steps, and what happens next.',
    sections: [
      {
        heading: 'Step 1: Recognise the stroke',
        paragraphs: [
          'Use FAST: Face drooping, Arm weakness, Speech difficulty — Time to call. Also watch for sudden loss of balance, sudden vision loss, or a sudden severe headache. If any of these appear suddenly, assume it is a stroke until proven otherwise.',
        ],
      },
      {
        heading: 'Step 2: Call 108 and note the time',
        paragraphs: [
          'Call 108 for an ambulance immediately. Write down the time the symptoms began, or the last time the person was seen normal (for example, before going to sleep). This single piece of information decides which treatments the hospital team can offer.',
        ],
      },
      {
        heading: 'Step 3: Go to a hospital that can scan the brain urgently',
        paragraphs: [
          'The patient needs a CT or MRI scan as soon as possible to find out whether the stroke is caused by a clot or by bleeding. Go directly to a hospital emergency department with 24-hour scanning facilities rather than to a clinic or pharmacy. If possible, call ahead so the team can prepare.',
        ],
      },
      {
        heading: 'What not to do',
        bullets: [
          'Do not wait to see if the symptoms settle on their own',
          'Do not give aspirin, other tablets, food or water — swallowing may be unsafe and some strokes are bleeds',
          'Do not let the person drive themselves',
          'Do not lose time on home remedies or massage',
        ],
        paragraphs: [],
      },
      {
        heading: 'What happens at the hospital',
        paragraphs: [
          'If the scan shows a clot and the patient arrives within about 4.5 hours of symptom onset, doctors may give clot-dissolving medicine (thrombolysis). For a large blocked artery, a procedure to remove the clot (thrombectomy) may be possible in selected patients, sometimes even later. If the stroke is due to bleeding, treatment focuses on controlling blood pressure and other measures, and a neurosurgeon may be involved.',
        ],
      },
      {
        heading: 'Recovery and rehabilitation',
        paragraphs: [
          'Recovery often continues for months after a stroke. Physiotherapy, speech therapy and occupational therapy help people regain movement, speech and independence in daily activities. Starting rehabilitation early and continuing it at home makes a meaningful difference.',
        ],
      },
      {
        heading: 'Preventing a second stroke',
        paragraphs: [
          'After a stroke, the most important goal is to prevent another one. A neurologist will look for the cause and usually recommends medicines to prevent clots, along with control of blood pressure, diabetes and cholesterol. Stopping tobacco, limiting alcohol, staying active and attending regular follow-up all lower the risk.',
          'Dr. Manasi Das sees patients for stroke follow-up, rehabilitation planning and secondary prevention at Sai Shree Polyclinic, Cuttack (Monday to Saturday, 9 AM to 7 PM). For an acute stroke, always go to a hospital emergency department first.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the time limit for clot-busting treatment after a stroke?',
        a: 'Clot-dissolving medicine is generally given within about 4.5 hours of symptom onset in eligible patients, and clot removal may be possible later in selected cases. The earlier treatment starts, the better, so go to hospital immediately.',
      },
      {
        q: 'Can a clinic treat an acute stroke?',
        a: 'No. An acute stroke needs a hospital with emergency brain scanning. Call 108 and go directly to an emergency department. A neurology clinic is the right place for follow-up and prevention after discharge.',
      },
      {
        q: 'How long does recovery from a stroke take?',
        a: 'It varies. Many people improve most in the first three to six months, but recovery can continue for longer with regular rehabilitation.',
      },
    ],
    relatedServices: ['stroke'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  'epilepsy-doctor-odisha': {
    updated: BLOG_UPDATED,
    intro:
      'Being diagnosed with epilepsy can feel overwhelming, but with the right treatment most people lead full, active lives. This guide covers how epilepsy is diagnosed, how to get the best from treatment, and practical advice on safety, work, driving and pregnancy for patients and families in Odisha.',
    sections: [
      {
        heading: 'Getting the diagnosis right',
        paragraphs: [
          'Not every blackout or jerking episode is epilepsy — fainting, low blood sugar and other conditions can look similar. A neurologist bases the diagnosis mainly on a detailed description of the episodes, ideally from someone who saw them. A phone video, recorded safely, can be very helpful.',
          'An EEG records the electrical activity of the brain, and an MRI scan looks for any structural cause. A normal EEG does not rule out epilepsy, so the history remains the most important part of the assessment.',
        ],
      },
      {
        heading: 'Taking medicines correctly',
        paragraphs: ['Anti-seizure medicines work best when taken regularly. To get the most from treatment:'],
        bullets: [
          'Take doses at the same times every day; use a pill box or phone reminder',
          'Never stop or reduce medicine suddenly — this can cause severe seizures',
          'Do not switch brands or start other medicines without checking with your doctor',
          'Report side effects such as drowsiness, rash or mood changes rather than stopping treatment',
          'Keep a seizure diary and bring it to every follow-up visit',
        ],
      },
      {
        heading: 'Common seizure triggers',
        paragraphs: ['Many people find that seizures are more likely with:'],
        bullets: [
          'Missed doses of medicine',
          'Lack of sleep',
          'Alcohol',
          'Fever and illness',
          'Stress',
          'Flashing lights (in a small number of people with photosensitive epilepsy)',
        ],
      },
      {
        heading: 'Staying safe at home and outside',
        paragraphs: [
          'Until seizures are well controlled, take sensible precautions: prefer showers to baths and never swim alone, avoid heights such as rooftops and ladders, cook on back burners and use a microwave where possible, and tell family, friends or colleagues what to do if a seizure happens.',
        ],
      },
      {
        heading: 'Driving, work and studies',
        paragraphs: [
          'Indian driving-licence rules restrict driving for people whose seizures are not controlled. Ask your neurologist when it is safe for you to drive, and do not drive until you have been advised that you can.',
          'Most people with epilepsy can study and work normally. Jobs involving heights, heavy machinery or driving may need to be avoided until seizures are controlled. Let your school or employer know what to do in case of a seizure.',
        ],
      },
      {
        heading: 'Epilepsy and pregnancy',
        paragraphs: [
          'Women with epilepsy can have healthy pregnancies, but planning is important. Some anti-seizure medicines, especially sodium valproate, carry risks for the unborn baby. Talk to your neurologist before trying to conceive — your medicine may need to be changed, and folic acid is usually recommended. Do not stop your medicine on your own if you find you are pregnant; contact your doctor promptly.',
        ],
      },
      {
        heading: 'Follow-up and specialist care',
        paragraphs: [
          'Regular reviews allow your neurologist to adjust treatment and check for side effects. If seizures continue despite two suitable medicines, further specialist evaluation is recommended. Dr. Manasi Das sees patients with epilepsy at Sai Shree Polyclinic, Cuttack, Monday to Saturday, 9 AM to 7 PM.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can people with epilepsy marry and have children?',
        a: 'Yes. Most people with epilepsy marry and have healthy children. Women should plan pregnancy with their neurologist so that medicines can be reviewed beforehand.',
      },
      {
        q: 'Will I need to take epilepsy medicine for life?',
        a: 'Not always. Some people can stop medicine after being seizure-free for a long period, but this must be done gradually and only on a neurologist\'s advice.',
      },
      {
        q: 'Is a normal EEG proof that I do not have epilepsy?',
        a: 'No. Many people with epilepsy have a normal EEG between seizures. The diagnosis depends mainly on a careful description of the episodes.',
      },
    ],
    relatedServices: ['epilepsy'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  'migraine-headache-specialist-bhubaneswar': {
    updated: BLOG_UPDATED,
    intro:
      'Occasional headaches are common and usually harmless. But when headaches become frequent, disabling, or start to change, it is time to see a specialist. This guide explains chronic migraine, the warning signs that need attention, and the treatments a neurologist can offer to patients in Bhubaneswar and Cuttack.',
    sections: [
      {
        heading: 'What is chronic migraine?',
        paragraphs: [
          'Doctors use the term chronic migraine when a person has headache on 15 or more days a month for more than three months, with migraine features on at least 8 of those days. It often develops gradually from occasional (episodic) migraine, and frequent use of painkillers can contribute to the change.',
        ],
      },
      {
        heading: 'Signs it is time to see a specialist',
        bullets: [
          'You have headaches on several days every week',
          'Headaches make you miss work, college or family activities',
          'Painkillers no longer help, or you need them on more than about 10 days a month',
          'Your usual headache pattern has changed',
          'You have aura symptoms (visual changes, tingling) that are new or prolonged',
        ],
        paragraphs: [],
      },
      {
        heading: 'Red flags: when a headache is an emergency',
        paragraphs: ['Seek urgent medical care — do not wait for an appointment — if a headache:'],
        bullets: [
          'Comes on suddenly and severely, reaching its peak within a minute',
          'Comes with fever, neck stiffness, confusion or a rash',
          'Comes with weakness, numbness, difficulty speaking or loss of vision',
          'Starts after a head injury',
          'Is new and persistent after the age of 50, or worsens steadily over days',
        ],
      },
      {
        heading: 'What a neurologist will do',
        paragraphs: [
          'A neurologist will take a detailed history of your headaches, examine you, and review any headache diary and medicines you have used. Most people with migraine do not need a scan, but one may be advised if there are unusual features or red flags.',
          'Together you will agree a plan that covers how to treat attacks, how to prevent them, and how to avoid medication overuse.',
        ],
      },
      {
        heading: 'Treatment options for chronic migraine',
        bullets: [
          'Lifestyle measures: regular sleep, regular meals, enough water, exercise and stress management',
          'Stopping overused painkillers, with support to manage the transition',
          'Daily preventive medicines, chosen according to your other health conditions',
          'For chronic migraine that has not responded to other treatments, options such as botulinum toxin injections or newer CGRP-targeting medicines may be considered',
          'Treatment of related problems such as poor sleep, anxiety or low mood',
        ],
        paragraphs: [],
      },
      {
        heading: 'Living well between attacks',
        paragraphs: [
          'Preventive treatment works best alongside steady daily habits. Most preventive medicines take several weeks to show their full effect, so give them time and keep recording your headache days to see whether they are helping.',
        ],
        bullets: [
          'Go to bed and wake up at the same time every day, including weekends',
          'Eat regular meals and carry a snack when travelling',
          'Drink water through the day, especially in hot weather',
          'Build in regular physical activity such as brisk walking or yoga',
          'Limit screen glare and take breaks during long computer work',
          'Keep caffeine intake steady rather than in large, irregular amounts',
        ],
      },
      {
        heading: 'Seeing Dr. Manasi Das',
        paragraphs: [
          'Dr. Manasi Das is an Assistant Professor of Neurology at IMS & SUM Hospital, Bhubaneswar, and also sees patients at Sai Shree Polyclinic, Cuttack (Monday to Saturday, 9 AM to 7 PM). To book a consultation for headaches, call 9692579904 or 7008512773. Bring a headache diary and a list of every medicine you have tried.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can chronic migraine go back to occasional migraine?',
        a: 'Yes. With the right preventive treatment, lifestyle changes and stopping painkiller overuse, many people return to having fewer headache days.',
      },
      {
        q: 'Do I need an MRI for my headaches?',
        a: 'Most people with typical migraine do not need a scan. Your neurologist will advise imaging if there are unusual features, red-flag symptoms or abnormal findings on examination.',
      },
      {
        q: 'How long do migraine preventive medicines take to work?',
        a: 'Usually several weeks. Your neurologist will typically review the effect after about two to three months, using your headache diary to judge whether the number of headache days has fallen.',
      },
    ],
    relatedServices: ['headache-migraine'],
  },
}

/** Approximate reading time from the article body (≈200 words per minute). */
export function readingTime(article: BlogArticle) {
  const text = [
    article.intro,
    ...article.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
    ...article.faqs.flatMap((f) => [f.q, f.a]),
  ].join(' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return { words, minutes: Math.max(1, Math.round(words / 200)) }
}
