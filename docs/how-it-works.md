# How this website actually works

> Written for someone who is not a developer. If you are an AI assistant, this is
> the context for why the site is set up the way it is.

## The short version

The website is **a folder of files**. When you change a file and save it, the live
website changes a minute or two later. That is the whole system.

## The four separate things

Most website confusion comes from not realising these are four different companies
doing four different jobs.

| What | Who | What it does |
|---|---|---|
| **The domain name** | Melbourne IT | Owns the name `sabreconstructions.com.au` |
| **The DNS** | iSonic | The signpost saying which website that name opens |
| **The website** | GitHub Pages | Holds and serves the actual pages. Free |
| **The email** | Microsoft 365 | Runs the `@sabreconstructions.com.au` email |

**They are independent.** Changing the website does not affect the email.
Changing the email does not affect the website. This trips people up constantly.

⚠️ **The one connection worth knowing:** the DNS signpost controls both where the
website is *and* where the email goes. They are separate entries in the same list.
So if anyone is editing DNS, the rule is: **change only the website entries, never
touch anything to do with mail.** Getting that wrong stops email arriving even
though Microsoft is working perfectly.

## What changed from the old site

The old website ran on **Joomla** — website software installed on a rented server
at iSonic. That meant a hosting bill, software that needed updating, and an admin
login that could be broken into.

This site has none of that. No software to update, no server to rent, no admin
login, no plugins to be hacked through. It is free to host.

**What stayed exactly the same:** the domain name, the email, and the Google
Business listing with its reviews.

## Publishing a change

1. Change a file
2. Save it to the repository
3. Wait a minute or two

That is it. There is no "publish" button, because there is nothing to publish to.

## If something goes wrong

Every change is recorded and **every change can be undone.** Nothing is ever truly
lost. If the site looks broken, the answer is almost always to go back to the
previous version rather than to fix forwards in a panic.

## Enquiries

The contact form does not email directly — a plain folder of files cannot send
email. It posts to a small form service, which emails the enquiry to
`admin@sabreconstructions.com.au`.

That service keeps a copy of every submission, so if an email ever goes missing
the enquiry is still recoverable. **That is the whole reason it was chosen over
cheaper options that only forward and keep nothing.**
