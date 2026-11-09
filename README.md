# Gaddiel Nursery & Preparatory School website

A simple website for Gaddiel Nursery & Preparatory School (GNAPS), 143 Fort Street, Freetown.
It is made of plain files. There is nothing to install and no "build" step.

---

## 1. Where things are

| What you want to change | File to open |
|---|---|
| Phone, email, WhatsApp, hours, pupil numbers, links, reviews, staff, donation list | `assets/js/site-data.js` |
| **News, events and the announcement banner (easiest)** | the website editor at `/admin/` (section 18) |
| Term dates, holidays and events | `assets/data/calendar.json` |
| Announcement banner | `assets/data/announcement.json` |
| Fee payment details | `assets/js/site-data.js` → `payments` |
| News stories | `assets/data/news.json` |
| Photos | `assets/img/` |
| Teachers and support staff | `assets/js/site-data.js` → `teachers`, `supportStaff` |
| Printable admission form and fees list | `assets/docs/` |
| Video | `assets/video/` |
| Krio page | `krio.html` |
| Words on a page | the page's `.html` file (for example `about.html`) |
| Colours and fonts | `assets/css/style.css` |

Open files with a plain text editor such as **Visual Studio Code** or **Notepad**. Do not use Word.

> **Golden rule:** change only the words between quotes `"like this"`, and keep the commas and brackets exactly as they are. If the page goes blank after a change, you have probably deleted a comma or a quote mark. Undo (Ctrl+Z) and try again.

---

## 2. Things still to fill in (placeholders)

Search the project for the word `PLACEHOLDER` to find every one. They are:

| Placeholder | Where | What to put |
|---|---|---|
| Phone number | `site-data.js` → `phone` | e.g. `"+232 76 123 456"` |
| WhatsApp number | `site-data.js` → `whatsapp` | digits only with country code, e.g. `"23276123456"` |
| Email | `site-data.js` → `email` | e.g. `"info@gaddielschool.org"` |
| Facebook page URL | `site-data.js` → `links.facebook` | the full `https://www.facebook.com/...` link |
| Google reviews URL | `site-data.js` → `links.googleReviews` | the "Ask for reviews" link from your Google Business Profile |
| GoFundMe URL | `site-data.js` → `links.gofundme` | the full `https://www.gofundme.com/f/...` link |
| GoFundMe goal | `site-data.js` → `gofundmeGoal` | e.g. `"$10,000"` |
| What donations pay for | `site-data.js` → `donationNeeds` | the school's real needs (remove the `[PLACEHOLDER]` text) |
| Formspree form ID | `site-data.js` → `formspreeId` | see section 8 |
| Parent reviews | `site-data.js` → `reviews` | 2–3 short real quotes, **with the parents' permission** |
| Website address | `site-data.js` → `siteUrl`, plus every `.html` file, `sitemap.xml` and `robots.txt` | the real address once the site is live (see section 9) |
| Admission requirements | `admissions.html` (yellow box) | ages, documents to bring, fees, when forms are available |
| Director’s welcome letter | `site-data.js` → `directorWelcome` | a **draft** written from the approved wording. The Director should read and edit it, then change `draft: true` to `draft: false` to remove the yellow DRAFT note |
| Teachers’ names, classes, introductions and photos | `site-data.js` → `teachers` and `supportStaff` | the six teachers, the helper and the maintenance worker (see section 11) |
| Fees list | `assets/docs/gaddiel-fees.pdf` | replace with the real fees (see section 12) |
| Documents to bring | `assets/docs/gaddiel-admission-form.pdf`, section 3 | replace the PDF with the school’s own version once the list is confirmed |
| Krio page | `krio.html` | a **draft**. Ask a fluent Krio speaker to check it, then remove the yellow DRAFT box |
| WhatsApp Channel link | `site-data.js` → `links.whatsappChannel` | the invite link of the school’s WhatsApp Channel (section 22) |
| Payment details | `site-data.js` → `payments` | the school’s **own** Orange Money and Afrimoney numbers, account names and bank details (section 21) |
| FAQ answers for ages and fees | `admissions.html` → "Questions parents often ask" | search for `[PLACEHOLDER]` in the FAQ section |
| Phone and email for Google | `index.html` and `contact.html`, in the block that starts `<script type="application/ld+json">` | same phone and email as above |
| Term dates and event dates | `assets/data/calendar.json` | the school's real dates (see section 4) |
| Staff photo for Ms. Rachael Cole | `assets/img/placeholder-staff.svg` | see section 6 |
| Uniform photos | `assets/img/placeholder-uniform-girls.svg`, `placeholder-uniform-boys.svg` | photos of the uniform |
| Carol Service and Nursery Graduation photos | `assets/img/placeholder-carol-service.svg`, `placeholder-graduation.svg` | photos from those events |
| Map position | `index.html` and `contact.html` → `"latitude"` / `"longitude"` | currently approximate for Fort Street. In Google Maps, press and hold on the school, then copy the two numbers |

Until the phone, WhatsApp and other links are added, buttons that use them show a "Coming soon" message.

---

## 3. Update pupil numbers (every new school year)

Open `assets/js/site-data.js`:

1. Change `pupils: 98` to the new number.
2. Change `years: 5` and `teachers: 6` if needed.
3. In `enrolment`, copy the last line, paste it underneath and change it, e.g.
   `{ year: "2027/2028", pupils: 120 },`
4. Change `currentYear`.

The counters on the Home page, the bar chart on the About page and the numbers on the Support page update by themselves.

Some sentences on the About and Support pages also mention the year-by-year numbers in words (for example "now 98 pupils in this academic year, 2026/2027"). Update those sentences in `about.html` and `support.html` too.

---

## 4. Add or change calendar events

Open `assets/data/calendar.json`. Each event looks like this:

```json
{ "title": "Carol Service", "start": "2026-12-11", "time": "10:00", "endTime": "12:00", "type": "event", "description": "Our end-of-term Carol Service.", "tbc": false },
```

- `start` (and optional `end`): dates written as **year-month-day**, e.g. `2027-03-13`.
- `time` / `endTime`: optional, 24-hour clock (`"14:30"`). Leave them out for all-day events.
- `type`: `"term"` (term dates), `"event"` (school events) or `"holiday"`.
- `tbc`: `true` shows "Date to be confirmed"; `false` when the date is final.
- `location`: optional. If left out, the school address is used.

Copy an existing line to add a new event. **Every line except the last must end with a comma.**
Events show automatically on the Calendar page, and the next three show on the Home page. Each event gets its own "Add to my calendar" button.

> The dates there now are **examples**: the school's real dates were not yet known. The 5th anniversary and the public holidays (Christmas, New Year, Armed Forces Day, Easter, Independence Day) are real. Eid dates depend on the moon and are marked "to be confirmed".

To check your file is still correct, paste it into <https://jsonlint.com> and press "Validate".

---

## 5. Add a news story

Open `assets/data/news.json` and copy one story block `{ ... },`. Paste it **at the top** of the list and change:

- `id`: a short name with no spaces, e.g. `"carol-service-2026"`
- `date`: e.g. `"2026-12-11"`
- `title`, `summary` (one or two sentences), and `body` (extra paragraphs, each in quotes, separated by commas)
- `image` (optional): e.g. `"assets/img/thanksgiving-parade-sm.jpg"` and `imageAlt`: a short description of the photo

Newest stories always appear first.

---

## 6. Swap or add photos

Photos must be small so the site is fast on mobile data. Every photo has two copies:

- `name.jpg`: about 960 pixels wide (shown large)
- `name-sm.jpg`: about 480 pixels wide (shown small)

**To replace a photo:** make your new photo the same two sizes (the free website <https://squoosh.app> can resize and compress; aim for under 120 KB for the large copy and under 40 KB for the small one), then save it over the old files with **exactly the same names**.

**To replace a placeholder** (the dashed yellow boxes): save your photo in `assets/img/` (e.g. `rachael-cole.jpg`), then:
- for Ms. Rachael Cole, change `photo:` in `site-data.js` → `staff`
- for other placeholders, open the `.html` file, search for the placeholder name (e.g. `placeholder-graduation.svg`) and replace it with your file name. Also update the `alt="..."` text so it describes the new photo.

**To add a photo to the gallery** (`school-life.html`): copy one `<button ...>...</button>` line inside the gallery and change both file names and the `alt` text.

Always get parents' permission before publishing photos of children.

---

## 7. Change words on a page

Open the page's `.html` file and find the sentence (Ctrl+F). Change only the words between the tags, for example:

```html
<p>Change only these words.</p>
```

Leave everything inside `< >` alone. The menu and footer are the same on every page and are built from `assets/js/main.js` and `site-data.js`.

---

## 8. Make the forms work (Formspree, free)

1. Go to <https://formspree.io> and sign up with the school's email address.
2. Create a **New form** and name it "Gaddiel website".
3. Formspree shows an address like `https://formspree.io/f/xyzabcd`. Copy only the last part (`xyzabcd`).
4. In `assets/js/site-data.js`, set `formspreeId: "xyzabcd",`
5. Publish the site, send a test message from the Contact page, and confirm the email in Formspree the first time.

The Contact form, the Admissions enquiry form, the **Apply online** form and the Home page “Stay in touch” sign-up, the “Tell us you’ve paid” form (Paying fees page) and the “Other ways to help” form (Support page) will then all send messages to the school's email. Each form checks the fields before sending, shows a thank-you message, and has a hidden "honeypot" field that catches spam robots.

---

## 9. Publish the site free on Vercel

The website lives in a GitHub repository, and Vercel publishes it from there. Every time a change is saved to GitHub, Vercel updates the live site by itself within about a minute.

Only the website files are kept on GitHub. The original photos, videos and the Word document in the top folder are left out on purpose (see `.gitignore`).

**First time:**

1. Go to <https://vercel.com/signup> and choose **Continue with GitHub**, using the school's GitHub account.
2. Click **Add New… → Project**, find the `gaddiel-school` repository and click **Import**.
3. Leave every setting as it is (Framework Preset: **Other**, no build command) and click **Deploy**.
4. After a few seconds you get a web address like `https://www.gaddielschool.com`.
5. If your address is different from `https://www.gaddielschool.com`, use your editor's "Replace in files" (Ctrl+Shift+H in VS Code) to replace it everywhere, then save the change to GitHub (see below).

**To update the site later:**

- **Easiest:** open the file on github.com, click the pencil icon, make your change and click **Commit changes**. Vercel updates the site automatically.
- **From VS Code:** open the **Source Control** panel, type a short note (e.g. "Add Carol Service date"), click **Commit**, then **Sync Changes**.

Optional: a custom address such as `gaddielschool.org` can be bought and connected in Vercel under **Project → Settings → Domains**.

**After publishing:**
- Add the website address to the school's Facebook page and Google Business Profile.
- In Google Search Console (<https://search.google.com/search-console>), add the site and submit `sitemap.xml`.
- Test how a shared link looks on Facebook with <https://developers.facebook.com/tools/debug/>.

---

## 10. Preview on your own computer

The calendar and news load from data files, so they do not work if you just double-click `index.html`. Instead:

- **VS Code:** install the "Live Server" extension, right-click `index.html` and choose **Open with Live Server**; or
- **Python:** open a terminal in this folder and run `python -m http.server 8000`, then visit <http://localhost:8000>.

---

## Notes on the photos

Photos were renamed, resized and compressed into `assets/img/`. Location data was removed. Please check these captions with the school:

- The **church photos** are shown in the "5th anniversary album" on the School Life page, captioned "Giving thanks together".
- The **outdoor slide and playground photos** are captioned as **Family Day**.

To change a caption, edit the `alt="..."` text in `school-life.html`.

---

## 11. Our staff page (`teachers.html`)

The page shows three groups, all from `assets/js/site-data.js`:

- **Leadership**: the `staff` list (Proprietress, Director, Ms. Rachael Cole)
- **Teachers**: the `teachers` list
- **Support staff**: the `supportStaff` list

For each person, change `name`, `role` (e.g. `"Nursery 2 teacher"`), `intro` (one or two sentences) and `photo`. Save a portrait photo (about 480 pixels wide, under 60 KB) in `assets/img/`, e.g. `teacher-mary.jpg`, and write `photo: "assets/img/teacher-mary.jpg"`. Ask each person for permission first.

---

## 12. Downloads (PDF files)

The Admissions page links to two printable files in `assets/docs/`:

- `gaddiel-admission-form.pdf`: a blank admission form to print and fill in
- `gaddiel-fees.pdf`: a **template** for fees and uniform prices, with [PLACEHOLDER] in every price

To replace one: make your own version in Word (or Google Docs), choose **File → Save as → PDF**, and save it over the old file with **exactly the same name**. Keep each PDF under about 500 KB so parents can download it on mobile data.

The school calendar does not need a PDF: on the Calendar page, the **Print or save as PDF** button always prints the latest dates.

---

## 13. Video

The School Life page has one short video, `assets/video/musical-chairs.mp4` (12 seconds, about 0.8 MB). It only downloads when someone presses play, so it doesn’t use visitors’ data otherwise.

To add another video, keep it **short (under 30 seconds) and small (under 2 MB)**. Phone videos are usually much bigger, so compress them first, for example with the free app HandBrake (preset “Very Fast 480p30”). Put it in `assets/video/`, then copy the `<video>…</video>` block in `school-life.html` and change both file names. The `poster` is a still picture shown before the video plays.

---

## 14. Apply online

`apply.html` is the full online admission form. It asks for the child’s details, the parent’s details and an emergency contact, and it needs a tick to confirm. Applications arrive by email through Formspree (section 8), with the subject “New admission application”.

---

## 15. Krio page

`krio.html` gives the welcome, why families choose Gaddiel, how to enrol, the uniform and the hours in Krio. It is linked from the Home page (“Rid am na Krio”), the phone menu and the footer. The wording is a **first draft**. Please ask a fluent Krio speaker to check it, then delete the yellow box that starts `[DRAFT]`.

---

## 16. Offline mode

Pages that a visitor has opened are saved on their phone, so the site still opens with no mobile data. If someone opens a page they have never visited while offline, a friendly “You are offline” page appears. This is done by `sw.js`. You don’t need to touch it, and changes you publish still show straight away.

Only if you **rename or delete a page or script**: open `sw.js`, update the list near the top, and change `gnaps-v1` to `gnaps-v2`.

---

## 17. Visitor statistics

The site is ready for **Vercel Web Analytics** (free, no cookies, no pop-up needed). To switch it on:

1. Open the project on <https://vercel.com>.
2. Click the **Analytics** tab, then **Enable**.
3. Visits start appearing within a few minutes. You can see the number of visitors, the most popular pages, and which countries and devices people use.

---

## 18. Website editor for staff (no code)

Staff can add news, add or change calendar events, and switch the announcement banner on or off by filling in simple forms. Open:

**https://www.gaddielschool.com/admin/** (use your real web address followed by `/admin/`)

**One-time setup (about 5 minutes)**

1. The staff member needs a GitHub account that can edit the `gaddiel-school` repository. Use the school’s account, or add theirs under the repository’s **Settings → Collaborators**.
2. Signed in to GitHub, go to <https://github.com/settings/personal-access-tokens/new>.
3. Give it a name (e.g. "Gaddiel website editor") and set an expiry date (e.g. 1 year).
4. Under **Repository access**, choose **Only select repositories**, then **gaddiel-school**.
5. Under **Permissions → Repository permissions**, set **Contents** to **Read and write**.
6. Click **Generate token** and copy it. It starts with `github_pat_`. **Keep it secret**, like a password.
7. Open `/admin/`, click **Sign In Using Access Token**, and paste the token.

**Using it**

- **Website content → News stories:** click **Add Story**, fill in the date, title and summary, and add a photo if you like. Click **Save**.
- **Website content → Calendar events:** add or change term dates, holidays and events.
- **Website content → Announcement banner:** tick **Show the banner**, write a short message, and choose Blue or Gold (urgent). Untick it when it is no longer needed.

Each **Save** updates GitHub, and Vercel puts the change live within about a minute. Photos uploaded in the editor are automatically made smaller.

The other facts (phone numbers, pupil numbers, staff, payment details) are still edited in `assets/js/site-data.js`.

---

## 19. Announcement banner

A dark-blue bar at the very top of every page, used for news like "Admissions are open" (switched on now) or "School closed on Friday". Choose **Gold** for urgent messages. Visitors can close it with ×, and it stays closed until the message changes. Change it in the website editor (section 18) or in `assets/data/announcement.json`. Set `"show": false` to hide it.

---

## 20. Install as an app

Parents can add the website to their phone’s home screen, where it opens with the Gaddiel logo like an app and works offline (section 16).

- **Android (Chrome):** an **Install the Gaddiel app** button appears in the footer. Or use the Chrome menu ⋮ → **Add to Home screen**.
- **iPhone (Safari):** tap the Share button → **Add to Home Screen**.

The app’s name and colours are in `manifest.webmanifest`. The icons are `assets/img/icon-192.png`, `icon-512.png` and `icon-maskable-512.png`.

---

## 21. Paying fees page (`fees.html`)

This page explains how to pay by Orange Money, Afrimoney, bank transfer or at the office. It has a safety warning against fake numbers and a **Tell us you’ve paid** form. Fill in the real details in `site-data.js` → `payments`. **Only list numbers and accounts that belong to the school.**

The website does not take payments itself. Parents pay through their own mobile money or bank, then tell the school using the form.

---

## 22. WhatsApp Channel

Create a WhatsApp Channel for the school (in WhatsApp: **Updates → + → Create channel**). Then copy its invite link and paste it into `site-data.js` → `links.whatsappChannel`. A **Join our WhatsApp Channel** button then works on the Home page and in the footer.

---

## 23. Gallery filters

On the School Life page, the buttons above the photo gallery (**All, Classroom, Thanksgiving, Family Day, Playground**) show one kind of photo at a time. Each photo’s kind is set by `data-cat="…"` on its `<button>` in `school-life.html`. Use `classroom`, `thanksgiving`, `family` or `play`.

---

## 24. Text size

Every page has **A / A+ / A++** buttons, in the footer and in the phone menu, to make the text bigger. The choice is remembered on that phone.


---

## 25. Online application form and page animations

**Application form (`apply.html`)** has five numbered parts: the child, parent or guardian 1, an optional second parent or guardian, the child's background, and anything else. Some parts only open after an answer:

- **Home address → Different address** opens an address box.
- **Add a second parent or guardian? → Yes** opens the second parent's details.

Closed parts are not checked and not sent. The class choices (Nursery 1–3, Class 1–6) are the `<label class="choice">` lines in `apply.html`. Change them there if the school's class names are different. The form does not take photo uploads (the free Formspree plan does not allow them), so it asks parents to bring two passport photos and the birth certificate to the office.

**Animations:** on every page, headings, text, cards and form sections slide up gently and fade in as you scroll to them. Photos and buttons fade in, and the top of each page plays as soon as it opens. Each item animates only once. Phones set to "reduce motion" see no animation. Nothing needs to be added to new pages; it is automatic (`motion()` in `assets/js/main.js`).
