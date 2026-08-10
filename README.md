# ViralClip AI V2

## Menjalankan di PC/Android (Node.js/Termux)
1. Ekstrak ZIP.
2. Masuk ke folder.
3. Jalankan:
   npm install
   npm start
4. Buka browser ke:
   http://localhost:3000

## Penting
V2 ini adalah starter URL + backend. Endpoint `/api/analyze` memvalidasi URL dan membuat job.
Untuk benar-benar menghasilkan MP4, tambahkan pipeline media yang legal/berizin:
- sumber video yang kamu miliki/berhak gunakan
- speech-to-text
- deteksi highlight
- FFmpeg untuk cutting/reframe
- subtitle
- queue worker

Jangan gunakan downloader untuk mengambil konten YouTube yang tidak kamu miliki haknya.
