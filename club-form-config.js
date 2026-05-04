/**
 * Up & Down Club — form wiring
 * ---------------------------------------------------------------------------
 * GOOGLE FORM EMBED (optional)
 * Paste the full iframe src URL from Google Forms: Send → embed HTML.
 * Example: https://docs.google.com/forms/d/e/1FAIpQLSd…/viewform?embedded=true
 * When non-empty, the iframe is shown and the built-in HTML form is hidden.
 * Use this when you want all responses in Sheets + your own automations.
 */
window.UDC_GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScYV8lGfMiRSBicbm0pEEa7jpmqKikyJ5LtynEoUbkK0edWLQ/viewform?embedded=true";

/*
 * Native form fallback: posts via FormSubmit to andrewplesterpga@gmail.com.
 * First submission triggers FormSubmit’s activation email. When you switch to
 * a Google Form iframe or a MailerLite embed, set UDC_GOOGLE_FORM_EMBED_URL above
 * (or replace the native <form> with MailerLite’s snippet) and update the
 * _next URL in up-and-down-club.html if your public domain ever changes.
 */

/**
 * MailerLite (or similar) — build these as an automation sequence in the ESP.
 * Copy into your provider; timing is approximate.
 *
 * --- Email 1 · Welcome (send immediately) ---
 * Subject: Welcome to the Up & Down Club
 * Body: Thank them by name. Short intro from you (voice: direct, no gimmicks).
 * What happens next: occasional emails with short-game ideas, challenges, and
 * tests — nothing spammy. Soft line: you’re here to help them take the short
 * game seriously under pressure.
 *
 * --- Email 2 · Value (day 2) ---
 * Subject: Most golfers get this wrong…
 * Body: One actionable concept (e.g. pick a landing spot, read the lie, or
 * strike quality on chips). Tie to your philosophy: structure beats random
 * reps. Keep it one screen, one drill or checkpoint they can use this week.
 *
 * --- Email 3 · Soft direction (day 4–5) ---
 * Subject: This is where it starts to change
 * Body: Random practice vs structured practice. Mention UDR-style tests,
 * pressure games, and tracking progress. Hint at what’s coming (community,
 * challenges, deeper club) without selling hard. CTA: reply with their biggest
 * short-game question, or stay tuned for the next note.
 */
