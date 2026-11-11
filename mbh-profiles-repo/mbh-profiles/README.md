# MBH Partner Digital Profiles

Static site (HTML, CSS, vanilla JS). One folder per partner, shared design files.

```
/omar/    index.html, partner.jpg, omar-bassiouny.vcf   ->  yourdomain.com/omar
/tamer/   index.html, partner.jpg, tamer-el-hennawy.vcf ->  yourdomain.com/tamer
/shared/  style.css, script.js, logo.png   (used by every partner page)
/index.html   root redirect to matoukbassiouny.com (delete or replace if not wanted)
/vercel.json  serves .vcf files correctly and keeps /omar -> /omar/
```

## Edit a partner
Change that partner's `index.html` (name, title, bio, phone, links) and keep their `.vcf`
(the "Save contact" file) in sync. Commit; Vercel redeploys automatically.

## Add a partner
1. Copy the `tamer` folder, rename it (e.g. `/karim`).
2. Replace `partner.jpg`, rename + edit the `.vcf`.
3. Edit `index.html`: name, title, bio, phone/email/links, and the `.vcf` filename in the Save contact button.
Long surnames: keep `class="page page--long-name"` on the `<div class="page">`; short ones: use `class="page"`.
