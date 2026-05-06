# Roof Protector — GitHub Deployment Protocol

## Branch Structure

```
main        → production (auto-deploys to Vercel production)
staging     → pre-production (preview deployments, James reviews here)
dev         → active iteration (Lovable/AI devs work here, NOT auto-deploy)
```

## Vercel Configuration

- **Production:** `main` branch → `https://roof-protector.vercel.app`
- **Preview:** `dev` and `staging` → separate preview URLs per deploy
- `dev` branch does NOT auto-deploy to production — only to a preview URL

## The Rule

**No unapproved code touches production (main branch). Ever.**

Every change goes through the approval workflow below before it lands on `main`.

---

## Change Request Workflow

### Step 1 — Request
Anyone requesting a change (Lovable, AI dev, James, me, contractor):
- Opens a GitHub Issue on `quikjimmy/roof-protector` with label `change-request`
- Issue describes: what, why, urgency

### Step 2 — Triage (Me)
I review the issue and decide:
- **Approve** → assign to `dev` branch, notify caller
- **Reject** → close with reason
- **Defer** → archive for later

### Step 3 — Implementation
Change is built on `dev` branch. 
- Lovable/AI dev gets repo access (read/write on `dev`)
- Changes pushed to `dev` only — never directly to `staging` or `main`
- Each change = its own commit with a clear message

### Step 4 — Review
When implementer says "done", I review:
- Visual check (screenshot or live preview URL)
- Code review (no breaking changes, clean code)
- Spec check (does it match what was requested?)

### Step 5 — Promote
If approved:
- `dev` → merge to `staging` (PR, reviewed by me, James can preview)
- `staging` → merge to `main` (James signs off → deployment)

---

## Manual Deployment (if Vercel auto-deploy fails)

```bash
cd /root/roof-protector

# Pull latest
git checkout dev && git pull

# Deploy dev to preview
vercel --token=...  # deploy preview only

# After approval — merge to staging
git checkout staging
git merge dev
git push

# After James approval — merge to main
git checkout main
git merge staging
git push
vercel --prod --token=...
```

---

## Who Can Push Where

| Branch | Lovable | AI Devs | Me (Sam) | James |
|--------|---------|---------|----------|-------|
| `dev`  | ✅       | ✅       | ✅        | ✅     |
| `staging` | ❌ (PR only) | ❌ (PR only) | ✅ (PR or direct) | ✅ (PR or direct) |
| `main` | ❌       | ❌       | ✅ (PR only) | ✅ (PR or direct) |

---

## Emergency Fixes

If something breaks in production:
1. James or I push directly to `main` (bypass branches)
2. Open a post-mortem issue after the fact
3. Sync the fix back to `dev`

---

## Communication

- All change requests → GitHub Issues
- I approve/reject with comment on the issue
- James gets a weekly summary of what's in `dev` → what wants promotion to `staging`

---

## Current State (2026-05-06)

- Repo: github.com/quikjimmy/roof-protector
- Branches: main, dev, staging — all clean
- Vercel: linked to this repo (check vercel.com/james-tootills-projects/roof-protector)
- No deployments yet — waiting for Lovable to build Phase 1