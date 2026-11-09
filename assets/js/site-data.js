/* =====================================================================
   GADDIEL NURSERY & PREPARATORY SCHOOL - SITE DATA
   ---------------------------------------------------------------------
   This is the ONE file to edit for phone numbers, email, hours, pupil
   numbers, links, reviews, staff and donation needs.

   How to edit safely:
   - Only change the text between the quotes "like this".
   - Keep every comma at the end of a line.
   - Anything marked [PLACEHOLDER] still needs the real details.
   - Dated events (term dates, holidays) are in assets/data/calendar.json
   - News stories are in assets/data/news.json
   ===================================================================== */

window.SITE = {
  name: "Gaddiel Nursery & Preparatory School",
  shortName: "GNAPS",
  motto: "Ep All Pikin Dem Fo Betteh",
  mottoMeaning: "Helping every child do better",

  /* Website address once it is live (no slash at the end) */
  siteUrl: "https://www.gaddielschool.com",

  address: {
    street: "143 Fort Street",
    city: "Freetown",
    country: "Sierra Leone",
    region: "West Africa"
  },

  /* CONTACT DETAILS ------------------------------------------------- */
  /* Write the phone as people should see it, e.g. "+232 76 123 456" */
  phone: "[PLACEHOLDER phone]",
  /* WhatsApp number: digits only with country code, e.g. "23276123456" */
  whatsapp: "[PLACEHOLDER WhatsApp]",
  email: "[PLACEHOLDER email]",

  hours: [
    { days: "Monday to Friday", time: "8:00 AM – 3:00 PM" },
    { days: "Saturday", time: "Closed" },
    { days: "Sunday", time: "Closed" }
  ],

  /* LINKS ----------------------------------------------------------- */
  links: {
    facebook: "[PLACEHOLDER Facebook page URL]",
    googleReviews: "[PLACEHOLDER Google reviews URL]",
    gofundme: "[PLACEHOLDER GoFundMe URL]",
    /* WhatsApp Channel invite link, e.g. https://whatsapp.com/channel/... */
    whatsappChannel: "[PLACEHOLDER WhatsApp Channel link]",
    directions: "https://www.google.com/maps/dir/?api=1&destination=143+Fort+Street,+Freetown,+Sierra+Leone",
    mapEmbed: "https://www.google.com/maps?q=143+Fort+Street,+Freetown,+Sierra+Leone&output=embed"
  },

  /* FORMS: create a free form at formspree.io and paste its ID here,
     e.g. "xyzabcd" (the part after formspree.io/f/) */
  formspreeId: "[PLACEHOLDER Formspree ID]",

  /* NUMBERS --------------------------------------------------------- */
  founded: "13 September 2021",
  currentYear: "2026/2027",
  stats: {
    pupils: 98,     // pupils this academic year
    years: 5,       // years since we opened
    teachers: 6     // number of teachers
  },

  /* Pupils each year (shown as a bar chart on the About page).
     To add a new year, copy the last line and change it. */
  enrolment: [
    { year: "2021 (opening)", pupils: 3 },
    { year: "2022/2023", pupils: 9 },
    { year: "2023/2024", pupils: 25 },
    { year: "2024/2025", pupils: 57 },
    { year: "2025/2026", pupils: 72 },
    { year: "2026/2027", pupils: 98 }
  ],

  /* STAFF (About page). Photo files live in assets/img/ */
  staff: [
    { name: "Mrs. Josephine Olu Taylor", role: "Proprietress", photo: "assets/img/proprietress.jpg" },
    { name: "Ms. Christiana R. M. Cole", role: "Director", photo: "assets/img/director.jpg" },
    { name: "Ms. Rachael Cole", role: "Administrator / Teacher", photo: "assets/img/placeholder-staff.svg" }
  ],

  /* DIRECTOR'S WELCOME (Home page pop-up). Each paragraph is one line in quotes.
     [DRAFT] This letter was drafted from the school's approved wording.
     The Director should read it, change anything, then set draft: false */
  directorWelcome: {
    draft: true,
    name: "Ms. Christiana R. M. Cole",
    role: "Director",
    photo: "assets/img/director.jpg",
    teaser: "When we opened our doors on 13 September 2021 we had just three pupils. Today, by God’s grace, we have 98.",
    greeting: "Dear parents, families and friends,",
    paragraphs: [
      "Welcome to Gaddiel Nursery & Preparatory School. When we opened our doors on 13 September 2021, we had just three pupils, one teacher, a helper and a maintenance worker. Today, by God’s grace, we have 98 pupils and a dedicated team of six teachers, a helper and a maintenance worker.",
      "Our motto, “Ep All Pikin Dem Fo Betteh”, is our promise to you: we are here to help every child, not just a few, grow in knowledge, confidence and good character.",
      "Our small classes mean every child is known by name, taught with patience and encouraged to reach their full potential. We follow each child’s progress and behaviour closely, and we keep parents informed.",
      "We would love to welcome you and your child. Please come and visit us at 143 Fort Street, Monday to Friday, 8:00 AM to 3:00 PM."
    ],
    signoff: "God bless you,"
  },

  /* TEACHERS (Our staff page). Replace each [PLACEHOLDER] with the real
     name, class and a short introduction. Photos go in assets/img/ */
  teachers: [
    { name: "[PLACEHOLDER] Teacher 1 name", role: "[PLACEHOLDER] Class taught", intro: "[PLACEHOLDER] One or two sentences: how long they have taught and what they love about teaching.", photo: "assets/img/placeholder-staff.svg" },
    { name: "[PLACEHOLDER] Teacher 2 name", role: "[PLACEHOLDER] Class taught", intro: "[PLACEHOLDER] One or two sentences about this teacher.", photo: "assets/img/placeholder-staff.svg" },
    { name: "[PLACEHOLDER] Teacher 3 name", role: "[PLACEHOLDER] Class taught", intro: "[PLACEHOLDER] One or two sentences about this teacher.", photo: "assets/img/placeholder-staff.svg" },
    { name: "[PLACEHOLDER] Teacher 4 name", role: "[PLACEHOLDER] Class taught", intro: "[PLACEHOLDER] One or two sentences about this teacher.", photo: "assets/img/placeholder-staff.svg" },
    { name: "[PLACEHOLDER] Teacher 5 name", role: "[PLACEHOLDER] Class taught", intro: "[PLACEHOLDER] One or two sentences about this teacher.", photo: "assets/img/placeholder-staff.svg" },
    { name: "[PLACEHOLDER] Teacher 6 name", role: "[PLACEHOLDER] Class taught", intro: "[PLACEHOLDER] One or two sentences about this teacher.", photo: "assets/img/placeholder-staff.svg" }
  ],
  supportStaff: [
    { name: "[PLACEHOLDER] Name", role: "Helper", intro: "Helps our youngest pupils through the school day.", photo: "assets/img/placeholder-staff.svg" },
    { name: "[PLACEHOLDER] Name", role: "Maintenance worker", intro: "Keeps our school clean, safe and in good repair.", photo: "assets/img/placeholder-staff.svg" }
  ],

  /* PAYING FEES (fees.html). Replace each [PLACEHOLDER] with the real details.
     Only list numbers and accounts that belong to the school. */
  payments: {
    reference: "Write your child’s full name and class as the payment reference.",
    methods: [
      { title: "Orange Money", details: [["Number", "[PLACEHOLDER Orange Money number]"], ["Account name", "[PLACEHOLDER account name]"]] },
      { title: "Afrimoney", details: [["Number", "[PLACEHOLDER Afrimoney number]"], ["Account name", "[PLACEHOLDER account name]"]] },
      { title: "Bank transfer", details: [["Bank", "[PLACEHOLDER bank name]"], ["Account name", "[PLACEHOLDER account name]"], ["Account number", "[PLACEHOLDER account number]"], ["Branch", "[PLACEHOLDER branch]"]] },
      { title: "At the school office", details: [["Where", "143 Fort Street, Freetown"], ["When", "Monday to Friday, 8:00 AM – 3:00 PM"]], note: "Always ask for a receipt." }
    ]
  },

  /* PARENT REVIEWS (Home page) - use real quotes, with permission */
  reviews: [
    { quote: "[PLACEHOLDER] A short quote from a parent, used with their permission.", name: "[PLACEHOLDER] Parent of a Nursery pupil" },
    { quote: "[PLACEHOLDER] A short quote from a parent, used with their permission.", name: "[PLACEHOLDER] Parent of a Class 2 pupil" },
    { quote: "[PLACEHOLDER] A short quote from a parent, used with their permission.", name: "[PLACEHOLDER] Parent of a Class 4 pupil" }
  ],

  /* SUPPORT PAGE: what donations will pay for */
  gofundmeGoal: "[PLACEHOLDER goal amount]",
  donationNeeds: [
    "[PLACEHOLDER] More classroom space",
    "[PLACEHOLDER] Desks and chairs",
    "[PLACEHOLDER] Books and reading materials",
    "[PLACEHOLDER] Teaching aids",
    "[PLACEHOLDER] NPSE preparation",
    "[PLACEHOLDER] Teacher salaries"
  ],

  /* Text used when people share the Support page */
  shareText: "In 2021, Gaddiel Nursery & Preparatory School started with just 3 pupils. Today we have 98! Help us keep growing and give every child in our community a strong start. Please give or share:",

  /* WEBSITE DEVELOPER (credit at the very bottom of every page).
     WhatsApp: digits only with country code, e.g. "23276123456" */
  developer: {
    name: "Marrah",
    email: "wingstech2026@gmail.com",
    whatsapp: "8619382020640",
    photo: "assets/img/developer.jpg"
  }
};
