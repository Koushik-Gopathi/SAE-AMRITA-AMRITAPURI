// All site content, taken from the old Wix site (saeamrita.wixsite.com).
// Images are still hosted on Wix; `wix(id, w, h)` asks Wix for a cropped size.

export const wix = (id, w, h) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_avif,quality_auto/${id}`

export const about = {
  saeindia:
    'SAEINDIA is an affiliate society of SAE (Society for Automotive Engineers) International, registered as an Indian non-profit engineering and scientific society dedicated to the advancement of the mobility community in India. As an individual-member-driven society of mobility practitioners, SAEINDIA comprises members from the mobility community, including engineers, industry executives, government officials, academics and students. Principal emphasis is placed on transport industries such as automotive, aerospace and commercial vehicles.',
  club:
    'SAE Amrita, a student chapter of SAEINDIA, was inaugurated on August 8, 2009 by Sri Ommen Mathew, General Manager, Production, Ford India. The club started under the leadership of Ramakrishna Kamath. The Department of Mechanical Engineering has been, and always will be, the backbone of the club. Almost all the projects under this club have been fully funded by Amrita University.',
  stats: [
    { value: 2009, label: 'Founded' },
    { value: 200, suffix: '+', label: 'Members' },
    { value: 11, label: 'Vehicles built' },
    { value: 1, prefix: '#', label: 'Efficycle 2012' },
  ],
}

// Competition series. `projects` below refers to these by key.
export const series = {
  supra: {
    name: 'SAE SUPRA',
    blurb: 'Formula-style student race car built and raced against teams from across India.',
  },
  efficycle: {
    name: 'SAENIS Efficycle',
    blurb:
      'An intercollegiate design competition where teams design and fabricate an energy-efficient hybrid human-powered, three-wheeled electric vehicle. The vehicle must be aerodynamic, highly engineered, safe and ergonomically designed, and commercially viable as a product through its looks, performance, reliability and ease of operation.',
  },
  baja: {
    name: 'SAE BAJA',
    blurb:
      'Baja SAE is an intercollegiate design competition run by the Society of Automotive Engineers. Teams design, build and race small off-road vehicles, similar in appearance to dune buggies, that can withstand the harshest elements of rough terrain.',
  },
  other: {
    name: 'Other builds',
    blurb: 'Nitro racing and eco-kart challenges.',
  },
}

export const projects = [
  {
    series: 'supra',
    name: 'Bheem',
    date: 'July 2011',
    image: 'fde18f_0f8d2581bf0b442da8cad5484bddd776.jpg',
    highlights: ['Special appreciation for innovating can impact attenuators', 'Secured 30th overall position'],
  },
  {
    series: 'supra',
    name: 'Garud',
    date: 'July 2012',
    image: 'fde18f_6ccb7f3bc80a4168a61ca37fee62c0c6.jpg',
    highlights: ['Secured 23rd overall position', 'Adjudged the Best Suspension Design'],
  },
  {
    series: 'efficycle',
    name: 'Avatar',
    date: 'September 2012',
    image: 'fde18f_f2e4e66e439148a1862fd261dccb9cb7.jpg',
    highlights: ['National Champions of Efficycle 2012', 'Best Acceleration Award', 'University Award of Excellence'],
    story:
      'The 10-member Team Agraganya, led by Sidhu Suresh with faculty in charge Dr. Vinod Kumar Gopal, took 1st position with the trike Avatar. The work was published as an international paper, "Design of Efficycle Hybrid Tricycle with inbuilt KERS" (8th International Conference on Engineering and Technology Research, Dubai, April 2014, ISBN 978-1-922069-49-8).',
  },
  {
    series: 'baja',
    name: 'Haya',
    date: 'February 2013',
    image: 'fde18f_7f35dfe26226437a90277b596cba1de1.jpg',
    highlights: ['40th of 276 teams', 'One of only two teams from Kerala in the finale'],
    story:
      'The first BAJA SAEINDIA, held at the NATRIP facility in Indore. The 25-member team was headed by HDVG Raju, with faculty in charge Mr. Joshua David Freeman and Kanagaraj Perumal. Fully funded by Amritanandamayi Math.',
  },
  {
    series: 'other',
    name: 'Dragster',
    date: 'February 2013',
    image: 'fde18f_03b230f8383540b0816b6471d68f6e03.jpg',
    highlights: ['Certificate of Finalist', 'Certificate of Merit'],
    story:
      'A 5-member team headed by Abin Simon raced in RACE PULSE, the national ICRC nitro car racing competition at IIT Kharagpur’s tech fest Kshitij.',
  },
  {
    series: 'efficycle',
    name: 'Thrishool',
    date: 'September 2013',
    image: 'fde18f_d0c1cf6223a84cd487caadd96623846e.jpg',
    highlights: ['7th position at UIET Punjab'],
    story:
      'Team Agraganya Reloaded, led by Abin Simon, named their trike after Lord Siva’s weapon. Vipin V and Kanagaraj Perumal played pivotal roles. The budget of around ₹1.5 lakh was funded by the university.',
  },
  {
    series: 'other',
    name: 'Snipe',
    date: 'February 2014',
    image: 'fde18f_cef06ea86df3465b8ca7281e4d34eb24.jpg',
    highlights: ['18th overall, National ECOkart Championship', 'Top 5 shortlist for Best Innovation'],
  },
  {
    series: 'baja',
    name: 'Airavat',
    date: 'February 2014',
    image: 'fde18f_a446030c061d4dff8b2c95ee1c9e2dbe.jpg',
    highlights: ['38th of 367 teams', 'The only team from Kerala in the finale'],
    story:
      'The second BAJA SAEINDIA at NATRIP, Indore. The 25-member team was headed by Nikhil Unnikrishnan, with faculty in charge Mr. Joshua David Freeman and Kanagaraj Perumal. Fully funded by Amritanandamayi Math.',
  },
  {
    series: 'efficycle',
    name: 'Agneya',
    date: 'September 2014',
    image: 'fde18f_ced8e0f45e8e41f78716ff749e564444.jpg',
    highlights: [],
  },
  {
    series: 'baja',
    name: 'Nandi',
    date: 'February 2015',
    image: 'fde18f_91f94a8de22a41c9812edcd48ac245a7.jpg',
    highlights: [],
  },
  {
    series: 'supra',
    name: 'Supra 2015',
    date: 'July 2015',
    image: 'fde18f_e769bceae52b47ccbe5bca0f0a0bf2c3.jpg',
    highlights: [],
  },
]

export const ventures = [
  {
    title: 'COLT',
    date: 'March 2010',
    text: 'A Club Officers Leadership Training programme for office bearers of collegiate clubs from various institutions, hosted at Amritapuri.',
  },
  {
    title: 'Autofactory',
    date: 'February 2012',
    text: 'A workshop on commercial car design and fabrication with the METAWING group during Vidyut 2012. The highlight was dismantling a commercial car.',
  },
  {
    title: 'Bike Kings',
    date: 'March 2013',
    text: 'A bike design and fabrication workshop with MBS Group and Vardenchi Motorbikes during Vidyut 2013, featuring bike dismantling and a chopper exhibition.',
  },
  {
    title: '3D Modelling Workshop 1.0',
    date: 'October 2013',
    text: 'SolidWorks fundamentals for new students: parametric parts and assemblies, detailed drawings and advanced modelling techniques.',
  },
  {
    title: 'Autofactory Reloaded',
    date: 'February 2014',
    text: 'A two-day workshop with MBS Group on automotive systems and IC engine design and tuning, aimed at F1 design and development, during Vidyut 2014.',
  },
  {
    title: 'Yantrika — A Week of Engineering',
    date: 'March 2015',
    text: 'A week celebrating engineers’ contributions to society, with friendly competitions and social events to spark interest in engineering careers.',
  },
  {
    title: '3D Modelling Workshop 2.0',
    date: 'March 2015',
    text: 'The second edition of the SolidWorks workshop for new students of the university.',
  },
]

export const triumphs = [
  {
    title: 'Prototype Modelling',
    image: 'fde18f_ce3f24f093f9461290998723688ca4ce.jpg',
    team: 'Adithye Suresh, Ananthapadmanabhan, Arun Babu, Krishnamohan Cheruvally',
    text: 'Challenged to model a car that could move in all four directions.',
  },
  {
    title: 'Auto Quiz',
    image: 'fde18f_0b9a3954b1044dcfb17d553c8a620fb2.jpg',
    team: 'Chandrasekhar T, Jithesh Pai U, Rajath Sadanad',
    text: 'Quizzed on the many aspects and terminology of the automotive industry.',
  },
  {
    title: 'Aeromodelling',
    image: 'fde18f_37555328a87442c9896d86de5acd8d89.jpg',
    team: 'Rahul K, Sayooj AP',
    text: 'Designed and built a remote-controlled aero glider from foam boards.',
  },
]
export const triumphsEvent = '9th National Convention of SAEINDIA · Kalasalingam University · January 2015'

export const faculty = [
  {
    name: 'Dr. Balakrishnan Shankar',
    role: 'Associate Dean, Amrita Vishwa Vidyapeetham',
    image: 'fde18f_41124e23c02e4c66b17d4b47bbe3a2a9.jpg',
    bio: 'Professor and Chairperson of the Department of Mechanical Engineering, Amritapuri. Research interest in materials science; Ph.D. from the University of Texas at Austin.',
  },
  {
    name: 'Dr. Sankaran K',
    role: 'Principal, Amrita School of Engineering',
    image: 'fde18f_23a03ba8459048bb8e115d6bcbb7cbbd.jpg',
    bio: 'Principal of the School of Engineering, Amritapuri Campus.',
  },
  {
    name: 'Rajesh R',
    role: 'Vice Chairperson, Dept. of Mechanical Engineering',
    image: 'fde18f_fdc37327fa0e4d7194c49b96a1a28954.jpg',
    bio: 'Assistant Professor and Vice Chairperson of the Department of Mechanical Engineering, Amritapuri.',
  },
]

export const students = [
  { name: 'Madhav KS', role: 'Chairman', image: 'fde18f_ede5bff19d1747afb0690df6ae2186b6.jpg' },
  { name: 'Adithye Suresh', role: 'Vice Chairman', image: 'fde18f_fb56c9f751c54a5f8139d49fb51dc648.jpg' },
  { name: 'Harikrishnan G Pai', role: 'Secretary', image: 'fde18f_81e9afd28ebe4331a25afd1140db9767.jpg' },
  { name: 'Sai Dinesh', role: 'Treasurer', image: 'fde18f_5f8e025bf2434b10b655c8c805f1b153.jpg' },
  {
    name: 'Chandrasekar T',
    role: 'Student Executive Council, SAE Southern Section',
    image: 'fde18f_e52b3ecc8a5b4dcaa471a206183ed991.jpg',
  },
]

export const contact = {
  address: ['Amrita Vishwa Vidyapeetham', 'Amritapuri Campus', 'Clappana P.O., Kollam 690525', 'Kerala, India'],
  email: 'sae@am.amrita.edu',
  university: 'https://www.amrita.edu/campus/amritapuri',
  facebook: 'https://www.facebook.com/SAE.Amrita',
}
