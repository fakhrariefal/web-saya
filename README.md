# PT DomestiQ Hub Indonesia — Corporate Website

Official B2B Company Profile website for **PT DomestiQ Hub Indonesia** (General Supplier & Integrated ERP Solutions).

## Cara Deploy Otomatis ke GitHub Pages (Dari File ZIP)

1. **Download & Ekstrak ZIP** project ini ke komputer Anda.
2. **Buat Repository Baru di GitHub** dengan visibilitas **Public** (akun GitHub Free tidak bisa mengaktifkan GitHub Pages pada repository *Private*).
3. **Upload Semua File ke Repository** ke branch `main` atau `master` (pastikan `.github/workflows/deploy.yml` ikut ter-upload).
4. **Atur Izin Workflow (Jika Muncul Error Permission)**:
   - Buka **Settings** → **Actions** → **General** → **Workflow permissions** → pilih **Read and write permissions** → **Save**.
5. **Aktifkan GitHub Pages**:
   - Buka **Settings** → **Pages** → pada **Build and deployment → Source**, pilih **GitHub Actions**.
6. **Jalankan Deploy**:
   - Buka tab **Actions** → klik **Re-run all jobs** atau **Run workflow**.

## Menjalankan Secara Lokal

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build Produksi

```bash
npm run build
```
