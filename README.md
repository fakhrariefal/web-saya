# PT DomestiQ Hub Indonesia — Corporate Website

Official B2B Company Profile website for **PT DomestiQ Hub Indonesia** (General Supplier & Integrated ERP Solutions).

## Cara Deploy Otomatis ke GitHub Pages (Dari File ZIP)

1. **Download & Ekstrak ZIP** project ini ke komputer Anda.
2. **Buat Repository Baru di GitHub**:
   - Gunakan visibilitas **Public** (wajib untuk akun GitHub Free agar fitur GitHub Pages aktif; atau Private jika menggunakan GitHub Pro/Team/Enterprise).
3. **Upload Semua File ke Repository**:
   - Pastikan folder **`.github/workflows/deploy.yml`** ikut ter-upload ke branch `main` atau `master`.
4. **Aktifkan GitHub Pages via GitHub Actions**:
   - Workflow sudah dilengkapi `enablement: true` pada `actions/configure-pages@v5` untuk mengaktifkan Pages otomatis.
   - Jika perlu dicek manual: buka **Settings** → **Pages** → pada **Build and deployment → Source**, pilih **GitHub Actions**.
5. **Deploy Otomatis**:
   - Workflow akan menjalankan `npm install --legacy-peer-deps` → `npm run lint` → `npm run build` → deploy ke GitHub Pages.

## Menjalankan Secara Lokal

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build Produksi

```bash
npm run build
```
