# Gaddiel Nursery & Preparatory School website

A simple website for Gaddiel Nursery & Preparatory School (GNAPS), 143 Fort Street, Freetown.
It is made of plain files. There is nothing to install and no "build" step.

---

## 1. Where things are

| What you want to change | File to open |
|---|---|
| Phone, email, WhatsApp, hours, pupil numbers, links, reviews, staff, donation list | `assets/js/site-data.js` |
| Term dates, holidays and events | `assets/data/calendar.json` |
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
| Developer WhatsApp | `site-data.js` → `developer.whatsapp` | the developer’s WhatsApp number, digits only (the credit at the bottom of each page shows it once added) |
| Fees list | `assets/docs/gaddiel-fees.pdf` | replace with the real fees (see section 12) |
| Documents to bring | `assets/docs/gaddiel-admission-form.pdf`, section 3 | replace the PDF with the school’s own version once the list is confirmed |
| Krio page | `krio.html` | a **draft**. Ask a fluent Krio speaker to check it, then remove the yellow DRAFT box |
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

The Contact form, the Admissions enquiry form, the **Apply online** form and the Home page “Stay in touch” sign-up will then all send messages to the school's email. Each form checks the fields before sending, shows a thank-you message, and has a hidden "honeypot" field that catches spam robots.

---

## 9. Publish the site free on Vercel

The website lives in a GitHub repository, and Vercel publishes it from there. Every time a change is saved to GitHub, Vercel updates the live site by itself within about a minute.

Only the website files are kept on GitHub. The original photos, videos and the Word document in the top folder are left out on purpose (see `.gitignore`).

**First time:**

1. Go to <https://vercel.com/signup> and choose **Continue with GitHub**, using the school's GitHub account.
2. Click **Add New… → Project**, find the `gaddiel-school` repository and click **Import**.
3. Leave every setting as it is (Framework Preset: **Other**, no build command) and click **Deploy**.
4. After a few seconds you get a web address like `https://gaddiel-school.vercel.app`.
5. If your address is different from `https://gaddiel-school.vercel.app`, use your editor's "Replace in files" (Ctrl+Shift+H in VS Code) to replace it everywhere, then save the change to GitHub (see below).

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

