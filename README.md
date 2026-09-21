# V7.7 Editorial ELANGKREATOR — Admin Full Control

Versi ini mempertahankan backend/admin V7.7 dan menambahkan homepage editorial premium yang terinspirasi referensi visual yang dikirim pengguna.

## Yang dipertahankan
- PostgreSQL + schema/migration V7.7
- Admin login JWT/cookie
- Dashboard `/admin.html`
- Kontrol produk & harga
- Order dan statistik
- Ebook
- Button Manager
- Helmet + rate limit
- API health

## Yang ditambahkan
- `public/index.html` — homepage baru
- `public/elang.css` — desain editorial responsive
- `public/elang.js` — interaksi, WhatsApp, share, favorit, pencarian, dynamic products
- API publik read-only `/api/store/products` dan `/api/store/buttons`

## Instalasi
1. Siapkan PostgreSQL dan schema V7.5/V7.6.
2. Jalankan `sql/v7.7-migration.sql`.
3. Salin `.env.example` menjadi `.env`.
4. Ganti `ADMIN_EMAIL`, `ADMIN_PASSWORD`, dan `JWT_SECRET`.
5. `npm install`
6. `npm start`
7. Buka `/` untuk homepage.
8. Buka `/admin.html` untuk dashboard.

## Sebelum produksi
- Ganti nomor WhatsApp `6280000000000` di `public/elang.js`.
- Gunakan password admin kuat.
- Gunakan HTTPS.
- Isi `DATABASE_URL` dengan database produksi.
- Pastikan kolom `products.image_url` memang tersedia pada schema produk Anda; bila belum, frontend tetap memakai gambar fallback.
- Hubungkan tombol checkout/payment ke endpoint pembayaran resmi yang sudah digunakan V7.
