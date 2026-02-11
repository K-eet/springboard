# BACKEND_STRUCTURE.md

## Overview

**This is a static website. There is no backend.**

## Contact Form Handling

The contact form will use one of these client-side solutions:

### Option A: Formspree (Recommended)
```html
<form action="https://formspree.io/f/{form_id}" method="POST">
```
- Free tier: 50 submissions/month
- No backend required
- Sends email to specified address

### Option B: Netlify Forms (If hosting on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```
- Built into Netlify hosting
- Free tier: 100 submissions/month

### Option C: Static mailto link
```html
<a href="mailto:hello@springboard.com">Email us</a>
```
- No form submission
- Opens user's email client
- Zero infrastructure

**Decision:** Client to confirm preferred method. Default to Option A (Formspree).

## Data Stored

None. This is a static site.

## APIs Consumed

None.

## Authentication

None required.
