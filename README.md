# Undangan Fanny dan Angga

Template undangan online ini dibuat menggunakan **Next.js** dan di-deploy di **Vercel** dengan **PostgreSQL** sebagai database.

## Fitur

- Desain responsif untuk tampilan desktop dan mobile
- Halaman undangan dengan informasi acara
- RSVP tamu dengan integrasi ke database PostgreSQL
- Animasi interaktif untuk pengalaman pengguna yang lebih baik
- Hosting gratis dan cepat di Vercel

## Teknologi yang Digunakan

- **Framework:** Next.js
- **Database:** PostgreSQL
- **Hosting:** Vercel
- **Styling:** Tailwind CSS

## Cara Menjalankan Secara Lokal

1. Clone repository:
   ```sh
   git clone https://github.com/SukunDev/undangan-fanny-angga.git
   cd undangan-fanny-angga
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Buat file **.env** dan tambahkan konfigurasi database PostgreSQL:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/undangan_db
   ```
4. Jalankan server lokal:
   ```sh
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`

## Deployment ke Vercel

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Login ke Vercel:
   ```sh
   vercel login
   ```
3. Deploy aplikasi:
   ```sh
   vercel
   ```

## Kontribusi

Jika ingin berkontribusi, silakan fork repo ini dan ajukan pull request.

## Lisensi

Proyek ini menggunakan lisensi MIT.

---

Dibuat dengan ❤️ oleh SukunDev untuk Fanny & Angga.
