# Priya Fabrication — Website (v1)

Multipage website + Admin panel. Bilkul WTP jaisa pattern.

## Pages
- `index.html` — Home (animated conveyor hero — products chalte hue)
- `products.html` — Saare products, category filter ke saath
- `about.html` — Company / About
- `contact.html` — Enquiry form (email par jayegi) + map
- `admin/admin.html` — Admin panel (password protected)

## Admin Panel
Open karo: `admin/admin.html`
- Default password: **priya2026** (Settings tab me change kar sakte ho)
- **Products** tab — naya product add karo (name, category, icon emoji, price, image URL, description). Add karte hi site par live.
- **Quotation** tab — auto number `PF/2026/001`, CGST+SGST / IGST toggle, Print/PDF, WhatsApp, Email.
- **Proforma Invoice** tab — auto number `PI/2026/001`, bank details ke saath.
- **Settings** tab — Company GSTIN, Bank details, UPI, aur admin password.

## Image kaise lagayein (WTP jaisa)
Google Drive link kaam NAHI karega. **ImgBB** par photo upload karo → "Direct link" (.jpg par khatam ho) copy karo → product ke Image URL me paste karo.

## Hosting (GitHub Pages — WTP jaisa)
1. Naya GitHub repo banao (jaise `priyafabrication`).
2. Ye saari files upload karo (folder structure same rakho).
3. Settings → Pages → branch `main` → Save. Site live ho jayegi.
4. Custom domain `priyafabrication.com` bad me jod sakte ho.

## ⚠️ Zaroori note (v1 limitation)
Abhi admin ka data **usi browser** me save hota hai (localStorage). Matlab jis PC/phone se product add karoge, wahi dikhega.
**WTP jaisa "sabke liye live" karne ke liye Step-2 me Google Sheet + Apps Script jodenge** (jaise WTPESTORE me hai) — tab kahin se bhi add karoge to poori duniya ko dikhega, aur quotation email bhi automatic jayegi. Uske liye ek naya Google Sheet banana padega — bata dena, main set up kara dunga.

## ISO
Brochure wala ISO 9001 / IAF logo **hata diya gaya hai** (abhi certificate nahi hai). Baad me mil jaye to add kar denge.
