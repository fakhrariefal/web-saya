# PT DomestiQ Hub Indonesia — Corporate Website

Official B2B Company Profile website for **PT DomestiQ Hub Indonesia** (General Supplier & Integrated ERP Solutions).

## Cara Deploy Otomatis ke GitHub Pages (Dari File ZIP)

1. **Download & Ekstrak ZIP** project ini ke komputer Anda.
2. **Buat Repository Baru di GitHub** (misalnya: `domestiqhub-website`, Public atau Private sesuai paket akun).
3. **Upload Semua File ke Repository**:
   - Pastikan folder tersembunyi **`.github/workflows/deploy.yml`** ikut ter-upload (pada Windows/macOS, aktifkan *Show Hidden Files* saat memilih file di browser, atau gunakan `git push`).
   - Jika upload lewat web GitHub tanpa folder `.github`, Anda bisa membuka tab **Actions** → pilih *set up a workflow yourself* → salin isi file `.github/workflows/deploy.yml`.
4. **Aktifkan GitHub Pages via GitHub Actions**:
   - Buka repository di GitHub → masuk ke **Settings** → **Pages**.
   - Pada bagian **Build and deployment → Source**, ubah dari *Deploy from a branch* menjadi **GitHub Actions**.
5. **Deploy Otomatis**:
   - Setiap kali ada `push` ke branch `main` atau `master`, tab **Actions** akan otomatis menjalankan proses `npm install` → `npm run lint` → `npm run build` → deploy ke GitHub Pages.
   - Anda juga dapat memicu deploy manual dari tab **Actions** → **Deploy PT DomestiQ Hub Indonesia to GitHub Pages** → **Run workflow**.

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

## Build Produksi

```bash
npm run build
```
