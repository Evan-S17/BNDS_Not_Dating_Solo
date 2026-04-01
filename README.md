# Not Dating Solo

A bilingual dating app starter built with **Next.js + Tailwind CSS + Supabase**.

## Features

- Phone OTP sign-in / sign-up
- User profile: avatar, nickname, gender, signature, bio
- Gender preference based matching
- Match success leads to a chatroom
- Chinese / English language toggle
- Soft blue-pink pastel UI

## Gender options

- Male
- Female
- Walmart Shopping Bag
- Attack Helicopter
- Other / Prefer not to say

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase Auth + Database + Realtime

## 1. Create a Supabase project

Enable **Phone Auth** in Supabase Auth settings.

## 2. Create tables

Run:

```sql
-- paste supabase/schema.sql into the Supabase SQL Editor
```

## 3. Add env vars

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 4. Install and run

```bash
npm install
npm run dev
```

## 5. Deploy

Recommended: Vercel.

- Push this repo to GitHub
- Import the repo into Vercel
- Add the same environment variables
- Deploy

## Suggested next improvements

- Use Supabase server-side auth helpers for stronger session control
- Add swipe cards and reject/like mechanics
- Add profile image upload instead of URL input
- Add content moderation and block/report flows
- Add conversation list page
- Add match deduplication logic
- Add rate limiting and audit logging
