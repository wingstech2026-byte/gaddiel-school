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
  siteUrl: "https://gaddiel-school.netlify.app", // [PLACEHOLDER] real web address

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
  shareText: "In 2021, Gaddiel Nursery & Preparatory School started with just 3 pupils. Today we have 98! Help us keep growing and give every child in our community a strong start. Please give or share:"
};
