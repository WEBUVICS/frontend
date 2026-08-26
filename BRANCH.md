# Panduan Branch dan Pull Request

Gunakan branch terpisah untuk setiap fitur atau perbaikan. Hindari menggabungkan perubahan yang tidak berkaitan dalam satu pull request.

## 1. Sinkronkan `main`

```bash
git switch main
git pull --ff-only origin main
```

## 2. Buat branch kerja

Gunakan format `<jenis>/<deskripsi-singkat>` dengan jenis berikut:

- `feature/` untuk fitur baru.
- `fix/` untuk perbaikan bug.
- `docs/` untuk dokumentasi.
- `refactor/` untuk perubahan struktur tanpa mengubah perilaku.
- `chore/` untuk tooling, dependency, atau konfigurasi.

Contoh:

```bash
git switch -c docs/perbarui-panduan-proyek
```

## 3. Verifikasi perubahan

```bash
npm run lint
npm run typecheck
npm run build
```

Jika backend diubah, jalankan juga pemeriksaan API, autentikasi, atau database yang relevan.

## 4. Commit

Gunakan format `<jenis>(<scope opsional>): <ringkasan>`.

```bash
git commit -m "docs: perjelas panduan kontribusi"
git commit -m "fix(media): perbaiki penyimpanan gambar event"
```

Untuk perubahan non-trivial, tambahkan body yang menjelaskan:

- apa yang berubah;
- alasan perubahan;
- pemeriksaan yang sudah dijalankan.

Contoh:

```bash
git commit -m "docs: perbarui panduan proyek" -m "Sinkronkan README dan /docs dengan source code aktual. Verifikasi: lint, typecheck, dan build."
```

## 5. Push dan buat pull request

Setiap task yang selesai dan sudah diverifikasi wajib di-commit lalu di-push ke upstream branch aktif. Jangan menunggu beberapa task berbeda untuk digabungkan dalam satu commit.

```bash
git push -u origin docs/perbarui-panduan-proyek
```

Pull request menuju `main` perlu menyertakan:

- ringkasan perubahan;
- cara memverifikasi;
- screenshot untuk perubahan UI;
- catatan environment atau migration bila ada.

Jangan gunakan force-push. Push langsung ke `main` hanya dilakukan jika memang disepakati oleh maintainer proyek.
