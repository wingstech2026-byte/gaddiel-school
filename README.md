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

Both the Contact form and the Admissions enquiry form will then send messages to the school's email. Each form checks the fields before sending, shows a thank-you message, and has a hidden "honeypot" field that catches spam robots.

---

## 9. Publish the site free on Netlify

**Before you start:** the website is everything in this folder **except** the original photos, videos and the Word document at the top level. Make a new folder (e.g. `Gaddiel website`) and copy these into it:

```
index.html  about.html  programmes.html  school-life.html  admissions.html
calendar.html  support.html  news.html  contact.html  404.html
favicon.ico  apple-touch-icon.png  robots.txt  sitemap.xml  netlify.toml
README.md  assets/   (the whole folder)
```

Then:

1. Go to <https://app.netlify.com/drop> and create a free account.
2. Drag the `Gaddiel website` folder onto the page. After a few seconds you get a web address like `https://random-name.netlify.app`.
3. Under **Site configuration → Change site name**, choose e.g. `gaddiel-school`, so the address becomes `https://gaddiel-school.netlify.app`.
4. If your address is different from `https://gaddiel-school.netlify.app`, use your editor's "Replace in files" (Ctrl+Shift+H in VS Code) to replace it everywhere, then upload again.
5. **To update the site later:** open the site in Netlify → **Deploys**, then drag the folder onto the "Drag and drop" box again.

Optional: a custom address such as `gaddielschool.org` can be bought and connected under **Domain management**.

**After publishing:**
- Add the website address to the school's Facebook page and Google Business Profile.
- In Google Search Console (<https://search.google.com/search-console>), add the site and submit `sitemap.xml`.
- Test how a shared link looks on Facebook with <https://developers.facebook.com/tools/debug/>.

**GitHub Pages instead?** It also works. The only difference is that `404.html` uses `<base href="/">`. If the site lives at `username.github.io/gaddiel/`, change that line to `<base href="/gaddiel/">`.

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
