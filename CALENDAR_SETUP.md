# Performance Call — Booking & calendar setup

The landing page is **call.html**. It does not change the main site.

## One goal

Get visitors to **book a 15-minute Performance Call**. Email is captured in the booking form.

## Booking system (Cal.com or Calendly)

The page has a placeholder for an embedded calendar. Use **Cal.com** (free, Google Calendar sync) or **Calendly**:

1. **Cal.com** (recommended): [cal.com](https://cal.com)  
   - Sign up → connect **Google Calendar**  
   - Create event type: **15-minute Performance Call**  
   - Set **availability** (UK time):
     - Monday: 11:30–12:30  
     - Tuesday: 12:30–13:30 and 20:00–21:00  
     - Wednesday: 12:30–13:30  
   - Buffer between meetings: 0. Slots will be 15 min (11:30, 11:45, 12:00, 12:15, etc.).  
   - Form fields: **First name**, **Last name**, **Email**, optional **What are you struggling with?**  
   - In **Embed** → copy the **inline embed** URL.  
   - In **call.html**, find the iframe in the booking section and set `src="YOUR_CAL_COM_EMBED_URL"`.

2. **Calendly**: Same idea — connect Google Calendar, create a 15 min event type, set availability to match the windows above, add the same form fields, then use **Embed** → Inline and paste the iframe `src` into **call.html**.

## What you get automatically (with Cal.com / Calendly + Google)

- Only **available** times show (they read from your Google Calendar).  
- Once a slot is booked, it’s blocked in Google Calendar (no double booking).  
- **You** get an email notification (set in Cal.com/Calendly to your address).  
- **Client** gets confirmation email + calendar invite (.ics / Google invite).  

Set your notification email in Cal.com/Calendly (e.g. andrewplesterpga@gmail.com).

## Optional: email list

To store leads (e.g. “Performance Call Lead”) in **MailerLite** or **ConvertKit**, connect the integration in Cal.com or Calendly to your account and tag bookings accordingly.

## Linking from the main site

When you’re ready, point the main site’s “Free performance call” button/link to this page, for example:

- `call.html` (same site)  
- Or `https://andyplestergolf.com/call.html` if you use that structure.

The main page (index.html) has not been changed.
