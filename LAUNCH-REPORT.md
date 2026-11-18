# Andy Plester Golf — pre-launch report

Checked 18 November 2026. This report separates what is proven by the website files and local page checks from items that require the live website or Andrew's own service accounts.

## Overall decision

**Not ready for paid Google or Meta advertising yet.** The website itself is in good shape for a preview or quiet organic launch, but Meta is currently blocked by the site's security policy and the live Google, Meta, Skillest and MailerLite account checks still need completing. Do not judge advert performance until those points are resolved.

## Fixed during this check

- All free-assessment buttons now send one clearly named `free_assessment_click` event to Google Analytics and one `FreeAssessmentClick` event to Meta, only after cookie consent.
- A website click is no longer recorded as a completed Meta Lead. A completed assessment must be measured separately on Skillest, through a Skillest confirmation page or an approved Skillest integration.
- The free-assessment page address is now consistently written as `free-golf-assessment.html` in its canonical link, social-sharing information, sitemap and `llms.txt`.
- The sitemap dates now show 18 November 2026.
- The About page's opening content no longer depends on a scroll animation, preventing an empty first screen in older or restricted browsers.
- The home-page coaching photo now uses the smaller WebP file, saving about 150 KB without changing the design.

## 1. Full website check

### Working correctly

- All seven pages were checked at mobile, tablet and desktop widths: Home, About, Online Coaching, Book, Free Golf Assessment, Up & Down System and Privacy.
- Local links, page anchors, styles, scripts and image files resolve. There are no duplicate section IDs or missing local images.
- Each page has one main heading. The navigation, mobile menu, cookie choices and footer are consistently present where intended.
- Layout rules cover phone, tablet and desktop widths; the reviewed page tops fit those widths without missing sections.
- Images include alternative text and fixed dimensions, helping accessibility and preventing layout movement. Below-the-fold images are lazy-loaded where useful.
- The site is lightweight static HTML on GitHub Pages. The main remaining image assets are reasonable, and the largest visible home image was reduced during this check.

### Still to verify live

- This workspace could not reach public websites, so the live domain, redirects, external buttons and live loading speed could not be independently requested today.
- Before promotion, open every page on Andrew's phone using mobile data as well as Wi-Fi, then run the home page through PageSpeed Insights.
- The `CNAME` correctly names `andyplestergolf.com`. When GitHub Pages has that custom domain saved, GitHub normally redirects the old project address to it, but the live redirect still needs confirming.

## 2. Google and SEO

### Working correctly

- Google Analytics 4 ID `G-MDRBPBXDRX` is present once on every page and is loaded only after Accept is pressed.
- Every page has a unique title under 60 characters, a description under 155 characters, a canonical address, social-sharing details and valid structured data.
- `robots.txt` allows indexing and points to a valid seven-page sitemap.
- The sitemap contains all seven intended pages. Privacy is indexable too; this is harmless, although it could be removed from search later if preferred.
- The site has clear complete-game coaching wording, FAQs and `llms.txt` for search and AI discovery.

### Account checks required

- GA4 collection cannot be confirmed from code alone. In Andrew's GA4 Realtime report, accept cookies on the live site and confirm one active user, page views and `free_assessment_click`.
- Search Console ownership and sitemap submission are not visible in website files. In Andrew's Search Console domain property, submit `https://andyplestergolf.com/sitemap.xml`, check that it succeeds, and inspect all six public content pages plus the home page.
- Confirm the old GitHub Pages address returns a permanent redirect to the new domain, not a second indexable copy.

## 3. Meta Pixel and advertising

### Working correctly in the website code

- Pixel `1463245512566089` is initialised once from the shared script and sends one PageView after Accept.
- Decline does not load Google or Meta. Changing an accepted choice to Decline reloads the page to stop optional tracking.
- Assessment clicks now have a distinct name and are not confused with completed assessments.

### Blocking issue

- The current site security policy does not allow `connect.facebook.net` or Meta event destinations. Until the permitted sources are updated through the site's security-check process, the browser will block the Pixel even after Accept.
- After that is resolved, use Meta Events Manager's Test Events on the live site: Accept, visit two pages, click one assessment button and confirm two PageViews and one `FreeAssessmentClick`, with no duplicate events.
- Do not optimise adverts for `Lead` until a genuine completed-assessment event is available from Skillest.

## 4. Skillest

### Website state

- All free-assessment buttons use `https://skillest.com/coach/andyplester#evaluation`.
- Paid links consistently use the saved Personal Golf Review, Performance Coaching and Elite Performance Coaching destinations.
- Website prices and terms are internally consistent: $49 one-off, $89 per month with a three-month minimum and $199 per month cancellable at any time. The page correctly says Skillest is the source of truth.

### Checks required before ads

- Sign in to Andrew's Skillest account and compare the live names, prices, lesson counts, minimum terms and link destinations with the website; they were last stated as verified on 3 November 2026, not today.
- Complete one test journey from each free-assessment button through video submission, using a test golfer account if Skillest permits it, then remove the test submission.
- Ask Skillest whether it supports a completion redirect, Meta Pixel, Google tag, webhook or Zapier/Make trigger for completed assessments and paid purchases. Without one of those, the website can measure clicks but not completions or coaching sales reliably.

## 5. MailerLite

- MailerLite is **not connected to the website**: there is no email form or MailerLite script on any page.
- Therefore there is currently no website subscriber journey, list assignment, marketing-consent record or follow-up sequence to test.
- A follow-up sequence is possible, but first Andrew needs to choose the exact offer, subscriber group and emails. Any form should have an unticked marketing-consent box, link to Privacy, record consent, and add only consenting visitors to the chosen MailerLite group.

## 6. Final content and sharing

- The main message is complete golf coaching: full swing, ball striking, driving, irons, short game, putting, course management, practice planning and confidence.
- “Practice” is used throughout; “practise” is not present.
- The Up & Down Club membership promotion is absent. The Up & Down System and book remain supporting content.
- The free golf assessment is the primary call to action across the site.
- Every page has Facebook, Instagram and WhatsApp sharing information with a title, description and image. Use Facebook Sharing Debugger after publication to refresh cached previews; also send the home and free-assessment links to Andrew on WhatsApp and check the crop before advertising.

## Recommended launch order

1. Resolve the Meta security-policy block and pass Meta Test Events without duplicates.
2. Confirm GA4 Realtime and the assessment-click event.
3. Confirm Search Console ownership and submit the sitemap.
4. Recheck every live Skillest offer and complete one test assessment journey.
5. Decide whether to add MailerLite now or launch without email capture.
6. Check live speed and social previews on Andrew's phone.

Once steps 1–4 pass, the site is ready to promote. MailerLite would improve follow-up, but it is not required to begin if Skillest already handles the assessment conversation and consent properly.
