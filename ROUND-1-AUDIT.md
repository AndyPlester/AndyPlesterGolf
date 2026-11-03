# Round 1 — Website audit, positioning and foundations

Audit date: 3 November 2026. This is a findings report only; no redesign or live integration has been made.

## Executive summary

The site now gives online coaching suitable priority and has a polished visual base, clear calls to action, a dedicated page for *The Up & Down Game*, and a separate short-game system page. The strongest conversion path is the free Skillest assessment followed by the $89/month Performance Coaching plan.

The first corrections should be factual and structural rather than a full redesign: update 22+ years to 23 years everywhere, add Andy's UK/Ireland/New Zealand coaching background, use the full Ullesthorpe Court Hotel & Golf Club name consistently, retire the paused Club sign-up page, and standardise the navigation, footer and brand wording. The live Skillest profile must remain the source of truth for plans, prices, terms and reviews.

Live Skillest statistics should not be added as automatically updating figures until Skillest confirms an official API, widget or permitted data feed. GitHub Pages cannot safely store an API key or run a private scheduled task. Until an authorised source exists, the safest presentation is a link labelled “See current reviews and coaching activity on Skillest”, optionally accompanied by figures explicitly dated “Verified on [date]”.

## 1. Brand positioning and audience

Use this position consistently:

> Andy Plester — PGA Professional | Short Game Specialist | Complete Golf Coach

Supporting fact block:

> Andy Plester is a PGA Professional with 23 years of coaching experience across the UK, Ireland and New Zealand. Based at Ullesthorpe Court Hotel & Golf Club in Leicestershire, he coaches golfers of all abilities locally and online worldwide. His coaching covers the full swing, short game and wedge play, putting, course management, confidence and performance.

This resolves the current tension between the older “short game system” identity and the broader coaching offer. The short game should remain the specialist point of difference, supported by *The Up & Down Game*, while “complete golf coaching” explains the service being sold.

Target audiences should be stated plainly: beginners, improving club golfers and competitive players; in-person students in Leicestershire; and online students worldwide.

## 2. Homepage messaging and layout

### What works

- “Play Better Golf. Anywhere.” is concise and gives online coaching immediate priority.
- The opening copy says personalised PGA coaching and does not limit Andy to short-game coaching.
- The free assessment is repeated as the main next step.
- Coaching plans, Andy's story, the book, short-game system and in-person coaching are all accessible.
- The main hero image has fixed dimensions and the lower images use lazy loading, reducing layout movement.

### Improvements

1. Put a compact proof band immediately after the hero: 23 years, PGA Professional, international coaching experience, Skillest proof link and book author. The current trust strip still says “22+ Years”.
2. Add a short “Who this is for” statement covering beginners through competitive golfers.
3. Add the proposed Skillest proof area only under the evidence rules in section 10; never present snapshot figures as live.
4. Keep online coaching first, with in-person coaching as a clear secondary route.
5. Check every package against Skillest before publication. The current site shows $49, $89/month and $199/month with specific inclusions; these can become inaccurate independently of the website.

## 3. Navigation and page structure

The page set is sensible: Home, Online Coaching, About Andy, Short Game/System, Book, In Person and Privacy. Internal links to the book and coaching routes are generally good.

The navigation and footer are inconsistent. The homepage says “Online Coaching / About Andy / Short Game / Book / In Person”, while inner pages use “Home / The System / Book / Coaching / In Person”. Several inner-page footers still use the short-game strapline as the main brand. Standardise every page on one order and one identity:

1. Online Coaching
2. About Andy
3. Short Game
4. Book
5. In-Person Coaching
6. Free Assessment button

`up-and-down-club.html` is a paused offer but remains a functioning waiting-list page that sends personal details to a third-party form service. It is excluded from the sitemap and main navigation, but is still reachable directly. Recommended treatment: replace it with a simple paused notice and links to online coaching, the book and the short-game system, or redirect it later once the preferred destination is agreed. Do not continue collecting Club sign-ups while the offer is paused.

## 4. Mobile responsiveness and usability

The CSS is mobile-first, collapses major grids appropriately, supports a mobile menu, declares image dimensions, and respects reduced-motion preferences. Buttons wrap and the four coaching cards stack on narrow screens.

Items to test on real phones before the next release:

- Header and menu at 320px, 375px and 430px widths.
- Two side-by-side hero buttons at very narrow widths; a single-column layout may be easier to tap and read.
- Length of the coaching-plan scroll before visitors reach proof and FAQs.
- Keyboard focus trapping/return in the open mobile menu; Escape works, but focus is not currently contained within the menu.
- Mail links for in-person coaching. A direct booking route will work more reliably for visitors without a configured mail app.

## 5. SEO and AI-search foundations

### Good foundations

- Every main indexed page has one H1, a canonical URL and a meta description.
- Titles are generally within the requested length and focus on online coaching, short game or the book.
- Open Graph information is present on the indexed pages.
- Person, LocalBusiness/ProfessionalService, Service/Offer, Book, Course and FAQ structured data are already used where relevant.
- `sitemap.xml`, `robots.txt` and `llms.txt` exist and the paused Club page is absent from the sitemap.

### Corrections and opportunities

- About has an overlong, short-game-led title and a generic H1 (“My story”). Target “Andy Plester | PGA Golf Coach in Leicestershire”.
- Privacy still uses “The Up & Down System” in its title and opening identity; use Andy Plester Golf consistently.
- Change every 22/22+ experience reference in visible copy, metadata, structured data, `llms.txt` and the Project 50 plan to 23 years.
- Add UK, Ireland and New Zealand and the complete coaching disciplines to About, homepage facts, structured data and `llms.txt`.
- Use one venue name consistently: Ullesthorpe Court Hotel & Golf Club, Leicestershire, England.
- Add short, visible FAQs to the homepage and coaching page, not only machine-readable FAQ data.
- Future SEO growth should use useful problem-led pages, for example wedge distance control, chipping contact, putting confidence and course management. Each should answer the question directly, show Andy's expertise and lead naturally to the free assessment.
- The homepage social image URL points to `/coaching-hero.jpeg` and is valid in the current layout; keep social-image paths checked whenever images move.

## 6. Performance

The HTML, CSS and JavaScript are modest in size and GitHub Pages is appropriate for a fast static site. No heavy framework is used. The largest visible risk is imagery:

- `coaching-hero.jpeg`: about 463 KB and loaded immediately.
- `book-cover.jpg`: about 165 KB.
- `andy-portrait.jpeg`: about 99 KB.

Convert the hero to responsive WebP/AVIF variants and aim for roughly 100–150 KB on a typical phone. Use `srcset`/`sizes`, retain explicit width and height, and keep `fetchpriority="high"` only on the true above-the-fold hero. Keep all below-fold images lazy loaded. The external Google font adds connection time but already uses `display=swap`.

Measure the live homepage with PageSpeed Insights before and after image work; local file inspection cannot supply real Core Web Vitals.

## 7. Calls to action and internal links

The free assessment is consistently prominent and paid plans link directly to Skillest. “Skillest is the source of truth” is a useful safeguard.

Recommended conversion hierarchy:

1. Primary: Get Your Free Golf Assessment.
2. Paid: Performance Coaching, presented as the main route to an active subscription.
3. Secondary: Personal Golf Review and Elite Performance Coaching.
4. Other: In-person coaching, the short-game system and the book.

Verify that `#evaluation` and each package/plan fragment still lands on the intended Skillest item. Fragment links and offer IDs can change. Replace the in-person email-only route with a confirmed booking link when Andrew chooses one, retaining email as a fallback.

## 8. Offers and outdated content

Current displayed offers are Personal Golf Review ($49), Performance Coaching ($89/month, three-month minimum) and Elite Performance Coaching ($199/month), plus a free assessment. These match the recent desk notes, but the Skillest profile must be checked before they are treated as current.

Known corrections:

- Replace all 22/22+ claims with 23 years.
- Pause or retire `up-and-down-club.html`; it currently advertises a waiting list and benefits for a paused Club.
- No “Skool” reference appears in the current public page copy.
- The wording “practice” is used correctly; no “practise” occurrence was found.
- Remove or revise unsupported facts unless Andrew confirms them. “TaylorMade Ambassador” appears repeatedly but was not included in this Round 1 brief.
- Update internal project notes that still assign decisions or approvals to another person; customer-data, CRM and tracking choices belong to Andrew.

## 9. Trust, photography and branding

Strong existing signals are PGA Professional, coaching experience, the Skillest profile, international online availability, the book, social channels and the Leicestershire venue. The supplied Skillest screenshot adds verified snapshot figures: 176 reviews, 671 lessons, 37 followers and a $49 starting price.

Photography is relevant and has useful alternative text, but the hero JPEG is oversized. `object-fit: cover` prevents obvious stretching in the main frames. Check the crop on small screens and replace WhatsApp-derived or visibly compressed images when a better original is available. The root also contains unused WhatsApp images and duplicate PGA badge files; they do not slow visitors unless loaded, but should be rationalised in a later housekeeping round.

Use “Andy Plester Golf” as the master brand and the AP logo consistently. Treat “The Up & Down System” as the named short-game method and *The Up & Down Game* as the book, not as competing site-wide brands.

## 10. Skillest live social-proof investigation

### Current evidence

- Profile: `https://skillest.com/coach/andyplester`
- Verified screenshot snapshot supplied for this round: 176 reviews, 671 lessons, 37 followers, starting price $49.
- The current repository contains no Skillest API client, widget or live statistics integration.
- No official API endpoint, API documentation, authorised widget or embed code has been supplied with the site materials.
- An external check could not be completed in this workspace, so this report does **not** claim that Skillest has no API or widget. Permission to scrape has not been confirmed, so scraping is ruled out.

### Required investigation order and decision

1. **Official API:** ask Skillest support whether coaches have an official read-only profile/statistics API, what fields it exposes, its authentication method, rate limits, caching rules and display/attribution requirements.
2. **Official widget:** ask for an embeddable coach profile or reviews widget. This is preferable if Skillest maintains it and permits its use, although its external script/frame would need to be allowed by the site's security policy before loading.
3. **Permitted public feed:** only consider a public JSON/feed endpoint if Skillest documents or explicitly authorises this use. Do not infer permission because data appears publicly in a browser.
4. **Fallback:** link to “See current reviews and coaching activity on Skillest”. If numbers are displayed, label them “Verified on 3 November 2026” and do not call them live. A dated snapshot is honest but still needs periodic review; the link-only version cannot become stale.

### Secure implementation if Skillest authorises access

A static browser script is not suitable for a credentialled API because it would expose the credential. Use a small server-side scheduled function or approved automation that:

- requests only the public counts;
- stores no customer information;
- refreshes every 12–24 hours;
- validates that values are non-negative numbers and rejects unexpected responses;
- caches the last successful response;
- serves a tiny same-site JSON file to the homepage;
- times out quickly and keeps showing the last verified value, with its update date, if Skillest is unavailable;
- never replaces a good value with zero after an error.

This requires hosting beyond plain GitHub Pages or an authorised workflow that writes a generated JSON file. It should only be designed after Skillest confirms the permitted method.

### Homepage presentation

Place a compact proof strip after the hero and before “How online coaching works”. Preferred live version:

> 176 Skillest Reviews  ·  671 Coaching Lessons  ·  View Andy on Skillest

Accessible labels should be used instead of relying on emoji alone. On failure, hide the numeric items and keep the profile link. Do not show followers unless there is a clear business reason; reviews and lessons are stronger buying signals.

## 11. Recommended next three implementation tasks

1. Correct and standardise the facts and brand: 23 years, international background, complete-coach positioning, venue name, About SEO, navigation and footers.
2. Retire the paused Club sign-up experience and remove conflicting/outdated identity and customer-data collection.
3. Contact Skillest for an official API/widget decision; meanwhile add a premium non-numeric link to current Skillest proof near the top of the homepage. Add dated figures only if Andrew wants a manually reviewed snapshot.

These are deliberately contained changes. Image optimisation, visible FAQs, new search pages and any server-side statistics service can follow in later rounds.
