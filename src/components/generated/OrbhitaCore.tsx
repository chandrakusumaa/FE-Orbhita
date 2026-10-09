import React, { useState, useRef } from 'react';
import './OrbhitaCore.css';
const MODEL: any = {
  "product": "ORBHITA",
  "pageName": "ORBHITA — Referensi PRD & SRS",
  "font": "Arial",
  "width": 390,
  "height": 844,
  "colors": {
    "ink": "#1B3C53",
    "primary": "#234C6A",
    "muted": "#456882",
    "sand": "#D2C1B6",
    "bg": "#F7F5F2",
    "surface": "#FFFFFF",
    "line": "#DDE3E7",
    "soft": "#E9F0F4",
    "warning": "#785125",
    "warningBg": "#F6EBDD",
    "success": "#326452"
  },
  "screens": [{
    "id": "login",
    "title": "Ruang untuk maju.",
    "subtitle": "Pahami tugasmu. Temukan langkah pertama. Rencanakan waktu dengan lebih tenang.",
    "blocks": [{
      "type": "hero"
    }, {
      "type": "card",
      "title": "Dari instruksi ke tindakan",
      "body": "Kamu tetap memilih dan mengonfirmasi setiap tugas serta rencana.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "text",
      "body": "Masuk dengan akun Google untuk menyimpan tugas pribadimu. Izin kalender diminta secara terpisah."
    }],
    "actions": [{
      "label": "Lanjutkan dengan Google",
      "target": "onboarding",
      "style": "primary",
      "effect": null
    }],
    "back": null,
    "nav": null,
    "fr": "FR01",
    "group": "01 · Masuk & preferensi"
  }, {
    "id": "onboarding",
    "title": "Atur ritmemu",
    "subtitle": "Pengaturan ini membatasi waktu yang bisa digunakan untuk belajar.",
    "blocks": [{
      "type": "field",
      "label": "Zona waktu",
      "value": "Asia/Jakarta",
      "key": "timezone",
      "kind": "text"
    }, {
      "type": "field",
      "label": "Jam belajar mulai",
      "value": "19:30",
      "key": "studyStart",
      "kind": "time"
    }, {
      "type": "field",
      "label": "Jam belajar berakhir",
      "value": "22:00",
      "key": "studyEnd",
      "kind": "time"
    }, {
      "type": "field",
      "label": "Kapasitas harian (menit)",
      "value": "120",
      "key": "daily",
      "kind": "number"
    }, {
      "type": "field",
      "label": "Durasi sesi / jeda (menit)",
      "value": "25 / 5",
      "key": "session",
      "kind": "text"
    }, {
      "type": "notice",
      "title": "Bisa diubah nanti",
      "body": "Jam kosong di kalender tidak otomatis dianggap sebagai waktu belajar.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Simpan preferensi",
      "target": "integrations",
      "style": "primary",
      "effect": null
    }],
    "back": "settings",
    "nav": null,
    "fr": "FR02",
    "group": "01 · Masuk & preferensi"
  }, {
    "id": "integrations",
    "title": "Hubungkan seperlunya",
    "subtitle": "Kamu bisa lanjut dengan kegiatan manual.",
    "blocks": [{
      "type": "card",
      "title": "Google Calendar",
      "body": "Baca satu kalender pilihanmu. ORBHITA hanya dapat mengubah acara yang dibuat melalui ORBHITA.",
      "tag": "BELUM TERHUBUNG",
      "target": "calendar",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "WhatsApp",
      "body": "Pengingat opsional ke nomor yang kamu verifikasi. Persetujuan terpisah.",
      "tag": "BELUM AKTIF",
      "target": "reminders",
      "tone": "normal"
    }, {
      "type": "text",
      "body": "Menolak integrasi tidak menghalangi pencatatan tugas manual."
    }],
    "actions": [{
      "label": "Lanjut ke beranda",
      "target": "home-empty",
      "style": "primary",
      "effect": null
    }],
    "back": "onboarding",
    "nav": null,
    "fr": "FR11,25,30",
    "group": "01 · Masuk & preferensi"
  }, {
    "id": "home-empty",
    "title": "Hari ini",
    "subtitle": "Rabu, 14 Oktober · Mulai dari satu langkah kecil.",
    "blocks": [{
      "type": "hero"
    }, {
      "type": "card",
      "title": "Tugas pertamamu, lebih jelas",
      "body": "Tempel instruksi, kirim gambar/PDF, atau rekam penjelasan. Kamu meninjau hasilnya sebelum disimpan.",
      "tag": "BELUM ADA TUGAS",
      "target": "compose",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Kegiatan tetap bisa dicatat",
      "body": "Tambahkan kelas, rapat, atau kegiatan pribadi.",
      "tag": "MANUAL",
      "target": "activity",
      "tone": "normal"
    }],
    "actions": [{
      "label": "Tambah tugas pertama",
      "target": "compose",
      "style": "primary",
      "effect": null
    }],
    "back": null,
    "nav": "home",
    "fr": "FR03–08",
    "group": "02 · Beranda"
  }, {
    "id": "home",
    "title": "Hari ini",
    "subtitle": "Rabu, 14 Oktober · Satu langkah pada satu waktu.",
    "blocks": [{
      "type": "notice",
      "title": "Rencana aktif · Kalender tertunda",
      "body": "Tugas sudah tersimpan. Ekspor ke Google Calendar masih dalam antrean.",
      "tone": "info"
    }, {
      "type": "card",
      "title": "Mulai dari membaca instruksi",
      "body": "Laporan audit sistem informasi\n19.30–19.55 · sesi 1 dari 7",
      "tag": "SESI BERIKUTNYA",
      "target": "task",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "150 menit tersisa",
      "body": "3 langkah belum selesai · target Kamis, 15 Okt 22.00\nDeadline Jumat, 16 Okt 23.59",
      "tag": "TERALOKASI",
      "target": "task",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Jadwal berubah?",
      "body": "Tinjau dampaknya sebelum mengganti rencana.",
      "tag": "PILIHANMU",
      "target": "postpone",
      "tone": "normal"
    }],
    "actions": [{
      "label": "Tambah tugas",
      "target": "compose",
      "style": "primary",
      "effect": null
    }],
    "back": null,
    "nav": "home",
    "fr": "FR15–24",
    "group": "02 · Beranda"
  }, {
    "id": "compose",
    "title": "Ceritakan tugasmu",
    "subtitle": "Teks, gambar, PDF, atau rekaman langsung.",
    "blocks": [{
      "type": "field",
      "label": "Instruksi / pesan",
      "value": "Buat laporan audit sistem informasi. Sertakan 3 temuan, bukti, rekomendasi, dan referensi. Deadline 16 Oktober 2026 pukul 23.59.",
      "key": "message",
      "kind": "textarea"
    }, {
      "type": "card",
      "title": "Tambahkan sumber",
      "body": "Gambar/screenshot atau PDF · maksimal sesuai batas input.",
      "tag": "LAMPIRAN",
      "target": "attachments",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Rekam penjelasan",
      "body": "Bahasa Indonesia / Inggris · maksimal 2 menit.",
      "tag": "SUARA",
      "target": "recording",
      "tone": "normal"
    }, {
      "type": "text",
      "body": "Bantuan yang kamu perlukan"
    }, {
      "type": "check",
      "label": "Pahami tuntutan tugas",
      "selected": true,
      "key": "requirements"
    }, {
      "type": "check",
      "label": "Susun langkah & estimasi",
      "selected": true,
      "key": "steps"
    }, {
      "type": "check",
      "label": "Usulkan jadwal",
      "selected": true,
      "key": "schedule"
    }, {
      "type": "check",
      "label": "Siapkan reminder",
      "selected": false,
      "key": "reminder"
    }, {
      "type": "text",
      "body": "Pilihan bantuan belum mengonfirmasi tugas atau jadwal."
    }],
    "actions": [{
      "label": "Proses instruksi",
      "target": "processing",
      "style": "primary",
      "effect": "process"
    }],
    "back": "home-empty",
    "nav": null,
    "fr": "FR03–09",
    "group": "03 · Input multimodal"
  }, {
    "id": "attachments",
    "title": "Tinjau lampiran",
    "subtitle": "Periksa sumber sebelum diproses.",
    "blocks": [{
      "type": "card",
      "title": "instruksi-audit.pdf",
      "body": "2 halaman · 420 KB · PDF contoh",
      "tag": "PDF",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "screenshot-kelas.png",
      "body": "1 gambar · 180 KB · contoh",
      "tag": "GAMBAR",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Batas unggahan",
      "body": "Maksimal 5 gambar / 10 MB total, atau 1 PDF / 20 halaman / 10 MB. PDF terenkripsi tidak dapat diproses.",
      "tone": "info"
    }, {
      "type": "text",
      "body": "Media mentah dihapus setelah pemrosesan selesai. Teks hasil ekstraksi tetap dapat ditinjau dan dihapus."
    }],
    "actions": [{
      "label": "Gunakan lampiran",
      "target": "compose",
      "style": "primary",
      "effect": null
    }, {
      "label": "Hapus lampiran",
      "target": "compose",
      "style": "secondary",
      "effect": null
    }],
    "back": "compose",
    "nav": null,
    "fr": "FR03,05,10",
    "group": "03 · Input multimodal"
  }, {
    "id": "recording",
    "title": "Rekam penjelasan",
    "subtitle": "Keadaan rekaman langsung.",
    "blocks": [{
      "type": "wave"
    }, {
      "type": "card",
      "title": "00:18 / 02:00",
      "body": "Perekaman dapat dihentikan atau dibatalkan. Transkrip perlu diperiksa sebelum diproses.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Suara tetap milikmu",
      "body": "Rekaman ditranskripsi, lalu teksnya diproses. Media mentah dibersihkan setelah proses terminal.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Hentikan & lihat transkrip",
      "target": "transcript",
      "style": "primary",
      "effect": null
    }, {
      "label": "Batalkan rekaman",
      "target": "compose",
      "style": "secondary",
      "effect": null
    }],
    "back": "compose",
    "nav": null,
    "fr": "FR04–05",
    "group": "03 · Input multimodal"
  }, {
    "id": "transcript",
    "title": "Periksa transkrip",
    "subtitle": "Koreksi nama, angka, dan tanggal yang kurang tepat.",
    "blocks": [{
      "type": "field",
      "label": "Hasil transkripsi",
      "value": "Laporan audit sistem informasi, tiga temuan, bukti dan rekomendasi. Deadline Jumat 16 Oktober pukul 23.59.",
      "key": "transcript",
      "kind": "textarea"
    }, {
      "type": "notice",
      "title": "Teks bisa dikoreksi",
      "body": "Hasil layanan transkripsi berjalan.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Gunakan teks ini",
      "target": "compose",
      "style": "primary",
      "effect": null
    }, {
      "label": "Rekam ulang",
      "target": "recording",
      "style": "secondary",
      "effect": null
    }],
    "back": "recording",
    "nav": null,
    "fr": "FR04,10",
    "group": "03 · Input multimodal"
  }, {
    "id": "processing",
    "title": "Sedang memahami",
    "subtitle": "Inputmu tetap tersedia jika proses gagal.",
    "blocks": [{
      "type": "progress"
    }, {
      "type": "card",
      "title": "1  Validasi sumber",
      "body": "Format dan batas ukuran",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "2  Ekstrak tuntutan",
      "body": "Nama tugas, sumber, deadline, dan langkah",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "3  Siapkan draf",
      "body": "Draf belum menjadi tugas tersimpan",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "text",
      "body": "Pilih hasil untuk meninjau alurnya."
    }],
    "actions": [{
      "label": "Lihat draf",
      "target": "draft",
      "style": "primary",
      "effect": null
    }, {
      "label": "Coba tanggal ambigu",
      "target": "clarify",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Gagalkan koneksi",
      "target": "error",
      "style": "ghost",
      "effect": null
    }, {
      "label": "Batalkan proses",
      "target": "compose",
      "style": "ghost",
      "effect": null
    }],
    "back": "compose",
    "nav": null,
    "fr": "FR05–09",
    "group": "03 · Input multimodal"
  }, {
    "id": "clarify",
    "title": "Pastikan deadline",
    "subtitle": "Ada tanggal yang belum cukup jelas.",
    "blocks": [{
      "type": "notice",
      "title": "Sumber mengatakan “besok”",
      "body": "Tanggal tidak boleh ditebak. Jelaskan tanggal dan waktunya.",
      "tone": "info"
    }, {
      "type": "field",
      "label": "Deadline resmi",
      "value": "2026-10-16T23:59",
      "key": "deadline",
      "kind": "datetime-local"
    }, {
      "type": "text",
      "body": "Zona waktu: Asia/Jakarta. Tanggal dari screenshot bukan otomatis deadline."
    }],
    "actions": [{
      "label": "Gunakan tanggal ini",
      "target": "draft",
      "style": "primary",
      "effect": null
    }],
    "back": "compose",
    "nav": null,
    "fr": "FR06,09",
    "group": "04 · Draf & konfirmasi"
  }, {
    "id": "draft",
    "title": "Tinjau tugas",
    "subtitle": "Konfirmasi pertama · belum tersimpan.",
    "blocks": [{
      "type": "card",
      "title": "Laporan audit sistem informasi",
      "body": "3 temuan + bukti + rekomendasi + referensi",
      "tag": "DRAF TUGAS",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Tuntutan wajib bersumber",
      "body": "“Sertakan 3 temuan, bukti, rekomendasi, dan referensi.”\nSumber: instruksi-audit.pdf, halaman 1",
      "tag": "LIHAT SUMBER",
      "target": "source",
      "tone": "normal"
    }, {
      "type": "field",
      "label": "Deadline resmi",
      "value": "2026-10-16T23:59",
      "key": "deadline",
      "kind": "datetime-local"
    }, {
      "type": "field",
      "label": "Target pribadi",
      "value": "2026-10-15T22:00",
      "key": "target",
      "kind": "datetime-local"
    }, {
      "type": "heading",
      "title": "Estimasi Waktu"
    }, {
      "type": "card",
      "title": "01  Baca instruksi & petakan temuan",
      "body": "45 menit · Estimasi awal, dapat dikoreksi",
      "tag": "BELUM MULAI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "02  Susun analisis & bukti",
      "body": "60 menit · Bergantung pada langkah 01",
      "tag": "BELUM MULAI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "03  Rapikan laporan & referensi",
      "body": "45 menit · Bergantung pada langkah 02",
      "tag": "BELUM MULAI",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Konfirmasi & simpan tugas",
      "target": "task-saved",
      "style": "primary",
      "effect": "confirmTask"
    }, {
      "label": "Koreksi draf",
      "target": "draft-edit",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Batal / simpan draf",
      "target": "exit-draft",
      "style": "ghost",
      "effect": null
    }],
    "back": "exit-draft",
    "nav": null,
    "fr": "FR06–10,15",
    "group": "04 · Draf & konfirmasi"
  }, {
    "id": "draft-edit",
    "title": "Koreksi draf",
    "subtitle": "Perubahan harus ditinjau lagi sebelum konfirmasi.",
    "blocks": [{
      "type": "field",
      "label": "Nama tugas",
      "value": "Laporan audit sistem informasi",
      "key": "taskTitle",
      "kind": "text"
    }, {
      "type": "field",
      "label": "Langkah 1 (menit)",
      "value": "45",
      "key": "m1",
      "kind": "number"
    }, {
      "type": "field",
      "label": "Langkah 2 (menit)",
      "value": "60",
      "key": "m2",
      "kind": "number"
    }, {
      "type": "field",
      "label": "Langkah 3 (menit)",
      "value": "45",
      "key": "m3",
      "kind": "number"
    }, {
      "type": "notice",
      "title": "Tanggal harus masuk akal",
      "body": "Target setelah deadline diperingatkan. Deadline resmi tetap berasal dari instruksi.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Tinjau draf yang diperbarui",
      "target": "draft",
      "style": "primary",
      "effect": "validateDraft"
    }],
    "back": "exit-draft",
    "nav": null,
    "fr": "FR08–09,15",
    "group": "04 · Draf & konfirmasi"
  }, {
    "id": "source",
    "title": "Instruksi & bukti",
    "subtitle": "Konteks yang disimpan sebagai teks.",
    "blocks": [{
      "type": "card",
      "title": "instruksi-audit.pdf · halaman 1",
      "body": "Buat laporan audit sistem informasi. Sertakan 3 temuan, bukti, rekomendasi, dan referensi. Deadline 16 Oktober 2026 pukul 23.59.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "field",
      "label": "Teks hasil ekstraksi",
      "value": "Buat laporan audit sistem informasi. Sertakan 3 temuan, bukti, rekomendasi, dan referensi.",
      "key": "sourceText",
      "kind": "textarea"
    }, {
      "type": "text",
      "body": "File media mentah tidak disimpan permanen."
    }],
    "actions": [{
      "label": "Simpan koreksi teks",
      "target": "draft",
      "style": "primary",
      "effect": null
    }],
    "back": "draft",
    "nav": null,
    "fr": "FR06,10,31",
    "group": "04 · Draf & konfirmasi"
  }, {
    "id": "exit-draft",
    "title": "Draf belum disimpan",
    "subtitle": "Kembali tidak berarti mengonfirmasi tugas.",
    "blocks": [{
      "type": "card",
      "title": "Simpan untuk nanti?",
      "body": "Pertahankan input dan koreksi, atau buang draf ini.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Simpan draf & keluar",
      "target": "home-empty",
      "style": "primary",
      "effect": null
    }, {
      "label": "Kembali meninjau",
      "target": "draft",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Buang draf",
      "target": "home-empty",
      "style": "ghost",
      "effect": null
    }],
    "back": null,
    "nav": null,
    "fr": "FR08",
    "group": "04 · Draf & konfirmasi"
  }, {
    "id": "task-saved",
    "title": "Tugas tersimpan",
    "subtitle": "Jadwal belum aktif.",
    "blocks": [{
      "type": "success"
    }, {
      "type": "card",
      "title": "Laporan audit sistem informasi",
      "body": "3 langkah · 150 menit perkiraan\nDeadline 16 Okt 23.59",
      "tag": "BELUM TERJADWAL",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Tinjau usulan jadwal",
      "target": "plan",
      "style": "primary",
      "effect": null
    }, {
      "label": "Lihat detail tugas",
      "target": "task",
      "style": "secondary",
      "effect": null
    }],
    "back": null,
    "nav": null,
    "fr": "FR08,16–18",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "plan",
    "title": "Tinjau rencana",
    "subtitle": "Konfirmasi kedua · belum aktif.",
    "blocks": [{
      "type": "card",
      "title": "150 menit dialokasikan",
      "body": "45 menit Rabu + 105 menit Kamis\nKapasitas maksimum 120 menit/hari",
      "tag": "7 SESI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Rabu, 14 Oktober",
      "body": "19.30–19.55 + 20.00–20.20\nLangkah 01 · jeda 5 menit",
      "tag": "45 MENIT",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Kamis, 15 Oktober",
      "body": "19.30–20.40 · langkah 02 (3 sesi)\n20.45–21.35 · langkah 03 (2 sesi)",
      "tag": "105 MENIT",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Tiga waktu, tiga fungsi",
      "body": "Deadline: Jumat 16 Okt 23.59\nTarget: Kamis 15 Okt 22.00\nSesi: alokasi pengerjaan pada agenda",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Tidak ada bentrok",
      "body": "Hasil perhitungan belum menjamin tugas selesai. Estimasi dapat berubah.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Konfirmasi jadwal",
      "target": "plan-active",
      "style": "primary",
      "effect": "confirmPlan"
    }, {
      "label": "Coba kapasitas tidak cukup",
      "target": "plan-risk",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Batal, tugas tetap tersimpan",
      "target": "task",
      "style": "ghost",
      "effect": null
    }],
    "back": "task",
    "nav": null,
    "fr": "FR15–18",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "plan-risk",
    "title": "Waktu belum cukup",
    "subtitle": "Deadline resmi tetap sama.",
    "blocks": [{
      "type": "notice",
      "title": "60 menit belum teralokasi",
      "body": "Sisa pekerjaan 150 menit; slot valid hanya 90 menit. Deadline berisiko.",
      "tone": "warning"
    }, {
      "type": "card",
      "title": "Lihat pilihanmu",
      "body": "Perluas jam belajar secara sadar, perbaiki estimasi, atau ubah prioritas. Kegiatan terkunci tidak digeser otomatis.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "field",
      "label": "Kapasitas harian (menit)",
      "value": "120",
      "key": "daily",
      "kind": "number"
    }],
    "actions": [{
      "label": "Periksa ulang rencana",
      "target": "plan",
      "style": "primary",
      "effect": null
    }, {
      "label": "Simpan tugas tanpa jadwal",
      "target": "task",
      "style": "secondary",
      "effect": null
    }],
    "back": "plan",
    "nav": null,
    "fr": "FR17,23",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "plan-stale",
    "title": "Rencana perlu ditinjau ulang",
    "subtitle": "Ada perubahan sejak pratinjau.",
    "blocks": [{
      "type": "notice",
      "title": "Sesi bentrok dengan rapat baru",
      "body": "Usulan versi lama belum dapat dikonfirmasi. Rencana yang aktif tetap dipertahankan.",
      "tone": "warning"
    }, {
      "type": "card",
      "title": "Rapat baru",
      "body": "Kamis 15 Okt · 19.30–20.30\nSumber: Google Calendar",
      "tag": "",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Hitung & tinjau ulang",
      "target": "calendar-replan",
      "style": "primary",
      "effect": null
    }, {
      "label": "Pertahankan rencana aktif",
      "target": "home",
      "style": "secondary",
      "effect": null
    }],
    "back": "plan",
    "nav": null,
    "fr": "FR18,24",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "plan-active",
    "title": "Rencana sudah aktif",
    "subtitle": "Status tiap integrasi ditampilkan terpisah.",
    "blocks": [{
      "type": "success"
    }, {
      "type": "card",
      "title": "Tugas tersimpan · rencana v1 aktif",
      "body": "7 sesi belajar · 150 menit",
      "tag": "ORBHITA",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Google Calendar",
      "body": "Menunggu sinkronisasi. Belum berarti acara sudah masuk kalender.",
      "tag": "TERTUNDA",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Pengingat aplikasi",
      "body": "Dijadwalkan setelah izin perangkat tersedia.",
      "tag": "SIAP DIATUR",
      "target": "reminders",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "WhatsApp",
      "body": "Belum aktif sampai nomor terverifikasi dan kamu menyetujui pengiriman.",
      "tag": "BELUM AKTIF",
      "target": "reminders",
      "tone": "normal"
    }],
    "actions": [{
      "label": "Buka agenda",
      "target": "agenda",
      "style": "primary",
      "effect": null
    }, {
      "label": "Ke beranda",
      "target": "home",
      "style": "secondary",
      "effect": null
    }],
    "back": null,
    "nav": null,
    "fr": "FR18,25–29",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "agenda",
    "title": "Agenda",
    "subtitle": "Rabu, 14 Oktober · Tampilan hari.",
    "blocks": [{
      "type": "card",
      "title": "Google Calendar",
      "body": "Terakhir sinkron 10.00 · data contoh",
      "tag": "PERBARUI",
      "target": "calendar",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "07.10–09.40 · Audit SI",
      "body": "Kelas kuliah · acara luar ORBHITA",
      "tag": "GOOGLE · HANYA BACA",
      "target": "external-event",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "13.00–14.40 · Pemrograman Web",
      "body": "Kelas kuliah · acara luar ORBHITA",
      "tag": "GOOGLE · HANYA BACA",
      "target": "external-event",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "17.00–18.00 · Rapat proyek",
      "body": "Kegiatan yang ditambahkan sendiri",
      "tag": "MANUAL",
      "target": "activity",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "19.30–19.55 · Baca instruksi",
      "body": "Sesi 1 / langkah 01 · laporan audit",
      "tag": "ORBHITA · SESI",
      "target": "task",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "20.00–20.20 · Petakan temuan",
      "body": "Sesi 2 / langkah 01 · laporan audit",
      "tag": "ORBHITA · SESI",
      "target": "task",
      "tone": "normal"
    }],
    "actions": [{
      "label": "Tambah kegiatan",
      "target": "activity",
      "style": "primary",
      "effect": null
    }, {
      "label": "Tinjau perubahan kalender",
      "target": "plan-stale",
      "style": "secondary",
      "effect": null
    }],
    "back": null,
    "nav": "agenda",
    "fr": "FR11–18",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "external-event",
    "title": "Detail acara Google",
    "subtitle": "Konteks kegiatan untuk perencanaan.",
    "blocks": [{
      "type": "card",
      "title": "Audit Sistem Informasi",
      "body": "Rabu 14 Okt · 07.10–09.40\nSumber: Google Calendar",
      "tag": "HANYA BACA",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Kelola melalui Google Calendar",
      "body": "ORBHITA menggunakan waktu ini sebagai kegiatan terkunci. Edit/hapus acara luar tidak tersedia di ORBHITA.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Kembali ke agenda",
      "target": "agenda",
      "style": "primary",
      "effect": null
    }],
    "back": "agenda",
    "nav": null,
    "fr": "FR12,14",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "activity",
    "title": "Tambah kegiatan",
    "subtitle": "Isi manual; input multimodal juga tersedia.",
    "blocks": [{
      "type": "field",
      "label": "Nama kegiatan",
      "value": "Rapat proyek",
      "key": "activityTitle",
      "kind": "text"
    }, {
      "type": "field",
      "label": "Mulai",
      "value": "2026-10-15T19:30",
      "key": "activityStart",
      "kind": "datetime-local"
    }, {
      "type": "field",
      "label": "Selesai",
      "value": "2026-10-15T20:30",
      "key": "activityEnd",
      "kind": "datetime-local"
    }, {
      "type": "check",
      "label": "Kunci waktu ini untuk kegiatan",
      "selected": true,
      "key": "busy"
    }, {
      "type": "check",
      "label": "Simpan juga ke Google Calendar",
      "selected": false,
      "key": "export"
    }, {
      "type": "notice",
      "title": "Ekspor membutuhkan Calendar terhubung",
      "body": "Kegiatan manual bisa disimpan di ORBHITA saja.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Tinjau kegiatan",
      "target": "activity-review",
      "style": "primary",
      "effect": null
    }, {
      "label": "Gunakan input multimodal",
      "target": "compose",
      "style": "secondary",
      "effect": null
    }],
    "back": "agenda",
    "nav": null,
    "fr": "FR13,31",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "activity-review",
    "title": "Konfirmasi kegiatan",
    "subtitle": "Periksa waktu dan dampaknya.",
    "blocks": [{
      "type": "card",
      "title": "Rapat proyek",
      "body": "Kamis 15 Okt · 19.30–20.30",
      "tag": "MANUAL",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Bertabrakan dengan sesi belajar",
      "body": "Menyimpan kegiatan memicu usulan rencana baru. Jadwal belajar lama tidak langsung diganti.",
      "tone": "warning"
    }, {
      "type": "card",
      "title": "Penyimpanan",
      "body": "ORBHITA saja · ekspor Calendar opsional",
      "tag": "",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Konfirmasi kegiatan",
      "target": "plan-stale",
      "style": "primary",
      "effect": "validateActivity"
    }, {
      "label": "Koreksi kegiatan",
      "target": "activity",
      "style": "secondary",
      "effect": null
    }],
    "back": "activity",
    "nav": null,
    "fr": "FR13,21",
    "group": "05 · Rencana & agenda"
  }, {
    "id": "task",
    "title": "Laporan audit",
    "subtitle": "Detail tugas · status kerja dipisahkan dari jadwal.",
    "blocks": [{
      "type": "card",
      "title": "150 menit tersisa",
      "body": "Belum mulai · jadwal aktif hanya setelah konfirmasi",
      "tag": "ESTIMASI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Deadline resmi",
      "body": "Jumat, 16 Oktober 2026 · 23.59",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Target pribadi",
      "body": "Kamis, 15 Oktober 2026 · 22.00",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "01  Baca instruksi & petakan temuan",
      "body": "45 menit · Estimasi awal, dapat dikoreksi",
      "tag": "BELUM MULAI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "02  Susun analisis & bukti",
      "body": "60 menit · Bergantung pada langkah 01",
      "tag": "BELUM MULAI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "03  Rapikan laporan & referensi",
      "body": "45 menit · Bergantung pada langkah 02",
      "tag": "BELUM MULAI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Lihat instruksi & kutipan",
      "body": "Tinjau tuntutan dari sumber yang disimpan.",
      "tag": "SUMBER",
      "target": "source",
      "tone": "normal"
    }],
    "actions": [{
      "label": "Mulai langkah pertama",
      "target": "progress",
      "style": "primary",
      "effect": null
    }, {
      "label": "Tunda sesi",
      "target": "postpone",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Tinjau jadwal",
      "target": "plan",
      "style": "ghost",
      "effect": null
    }],
    "back": null,
    "nav": "home",
    "fr": "FR15,19–22",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "progress",
    "title": "Langkah pertama",
    "subtitle": "Baca instruksi & petakan temuan.",
    "blocks": [{
      "type": "card",
      "title": "Sedang dikerjakan",
      "body": "Mulai tidak menjalankan timer. Estimasi sisa tidak berkurang otomatis.",
      "tag": "STATUS KERJA",
      "target": null,
      "tone": "normal"
    }, {
      "type": "field",
      "label": "Estimasi sisa langkah ini (menit)",
      "value": "30",
      "key": "remaining",
      "kind": "number"
    }, {
      "type": "card",
      "title": "Tuntutan yang perlu dipahami",
      "body": "3 temuan · bukti · rekomendasi · referensi",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Progres dari tindakanmu",
      "body": "Menandai selesai membuat sisa langkah ini menjadi nol dan memicu usulan perubahan.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Tandai langkah selesai",
      "target": "progress-review",
      "style": "primary",
      "effect": "completeStep"
    }, {
      "label": "Simpan estimasi sisa",
      "target": "estimate-review",
      "style": "secondary",
      "effect": "saveRemaining"
    }],
    "back": "task",
    "nav": null,
    "fr": "FR19–21",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "progress-review",
    "title": "Tinjau dampak progres",
    "subtitle": "Progres tersimpan; perubahan rencana belum aktif.",
    "blocks": [{
      "type": "card",
      "title": "Sisa pekerjaan diperbarui",
      "body": "Langkah 01 selesai: 0 menit\nLangkah 02: 60 menit · langkah 03: 45 menit",
      "tag": "105 MENIT",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Rencana sebelum / usulan",
      "body": "Sebelum: 7 sesi / 150 menit\nUsulan: batalkan sesi langkah 01, pertahankan 5 sesi Kamis / 105 menit.",
      "tag": "PERUBAHAN",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Konfirmasi tetap diperlukan",
      "body": "Reminder sesi yang dibatalkan baru diperbarui setelah rencana disetujui.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Konfirmasi rencana sesuai progres",
      "target": "progress-active",
      "style": "primary",
      "effect": "confirmProgress"
    }, {
      "label": "Tolak perubahan jadwal",
      "target": "task-progress",
      "style": "secondary",
      "effect": null
    }],
    "back": "task-progress",
    "nav": null,
    "fr": "FR19–24",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "task-progress",
    "title": "Laporan audit",
    "subtitle": "Progres langkah pertama telah diperbarui.",
    "blocks": [{
      "type": "card",
      "title": "105 menit tersisa",
      "body": "Langkah 01 selesai; langkah 02 dan 03 belum selesai",
      "tag": "PROGRES",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Deadline / target",
      "body": "16 Okt 23.59 / 15 Okt 22.00",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "01  Baca instruksi & petakan temuan",
      "body": "Sisa 0 menit · selesai",
      "tag": "SELESAI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "02  Susun analisis & bukti",
      "body": "Sisa 60 menit",
      "tag": "BELUM MULAI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "03  Rapikan laporan & referensi",
      "body": "Sisa 45 menit",
      "tag": "BELUM MULAI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Periksa status rencana",
      "body": "Progres tidak otomatis mengonfirmasi usulan jadwal baru.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Tinjau usulan jadwal",
      "target": "progress-review",
      "style": "primary",
      "effect": null
    }],
    "back": null,
    "nav": "home",
    "fr": "FR19–24",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "progress-active",
    "title": "Rencana progres aktif",
    "subtitle": "Perubahan jadwal telah dikonfirmasi.",
    "blocks": [{
      "type": "success"
    }, {
      "type": "card",
      "title": "5 sesi · 105 menit",
      "body": "Sesi langkah 01 dibatalkan. Langkah 02/03 tetap pada Kamis.",
      "tag": "RENCANA BARU",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Integrasi mengikuti versi baru",
      "body": "Calendar tertunda · reminder lama dibatalkan/diperbarui sesuai hasil sinkron.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Lihat detail terbaru",
      "target": "task-progress",
      "style": "primary",
      "effect": null
    }, {
      "label": "Ke beranda",
      "target": "home",
      "style": "secondary",
      "effect": null
    }],
    "back": null,
    "nav": null,
    "fr": "FR19–29",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "postpone",
    "title": "Tunda sesi",
    "subtitle": "Lihat konsekuensinya sebelum memilih.",
    "blocks": [{
      "type": "card",
      "title": "Sesi yang ditunda",
      "body": "Kamis 15 Okt · 20.45–21.10\nRapikan laporan · 25 menit",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "field",
      "label": "Waktu alternatif",
      "value": "2026-10-16T19:30",
      "key": "postponeAt",
      "kind": "datetime-local"
    }, {
      "type": "notice",
      "title": "Belum mengubah jadwal",
      "body": "Alternatif harus lolos pemeriksaan bentrok, jeda, kapasitas, dan deadline.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Tinjau pilihan waktu ini",
      "target": "replan",
      "style": "primary",
      "effect": null
    }, {
      "label": "Cari alternatif otomatis",
      "target": "replan",
      "style": "secondary",
      "effect": null
    }],
    "back": "task",
    "nav": null,
    "fr": "FR22–24",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "replan",
    "title": "Tinjau perubahan",
    "subtitle": "Usulan baru · rencana lama masih aktif.",
    "blocks": [{
      "type": "card",
      "title": "Sebelum",
      "body": "45 menit Rabu + 105 menit Kamis",
      "tag": "RENCANA AKTIF",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Usulan jadwal",
      "body": "45 menit Rabu + 60 menit Kamis + 45 menit Jumat\nLangkah 03: Jumat 19.30–19.55 + 20.00–20.20; sesi berikutnya ikut dipindah karena dependensi. Target Kamis terlewati; deadline Jumat masih aman pada estimasi ini.",
      "tag": "BELUM DISETUJUI",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Target pribadi berisiko",
      "body": "Perubahan dapat memengaruhi tugas lain. Pilihan ini belum mengganti rencana lama.",
      "tone": "warning"
    }, {
      "type": "card",
      "title": "Dampak lintas tugas",
      "body": "Latihan basis data tetap pada slot sebelumnya. Reminder versi lama dibatalkan hanya setelah konfirmasi.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Konfirmasi rencana baru",
      "target": "plan-active",
      "style": "primary",
      "effect": "confirmReplan"
    }, {
      "label": "Tolak, pertahankan yang lama",
      "target": "home",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Periksa kapasitas kurang",
      "target": "plan-risk",
      "style": "ghost",
      "effect": null
    }],
    "back": "task",
    "nav": null,
    "fr": "FR18,21–24",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "calendar",
    "title": "Google Calendar",
    "subtitle": "Izin terpisah dari login akun.",
    "blocks": [{
      "type": "card",
      "title": "Kalender pilihan",
      "body": "Kalender pribadi · milik pengguna, dapat ditulis",
      "tag": "PILIHAN",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Batas akses produk",
      "body": "Acara kuliah/kegiatan luar hanya dibaca. Hanya acara ORBHITA dengan pemetaan yang valid dapat dibuat/diubah/dihapus.",
      "tone": "info"
    }, {
      "type": "text",
      "body": "Sinkron saat agenda dibuka/refresh atau worker aktif. Status tertunda ditampilkan jika server tidak tersedia."
    }],
    "actions": [{
      "label": "Hubungkan kalender",
      "target": "agenda",
      "style": "primary",
      "effect": null
    }, {
      "label": "Tolak izin",
      "target": "permission",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Putuskan integrasi",
      "target": "settings",
      "style": "ghost",
      "effect": null
    }],
    "back": "settings",
    "nav": null,
    "fr": "FR11–14,30",
    "group": "07 · Pengaturan & integrasi"
  }, {
    "id": "profile",
    "title": "Profil Pengguna",
    "subtitle": "Atur informasi pribadi dan preferensi akun.",
    "blocks": [{
      "type": "field",
      "label": "Nama Lengkap",
      "value": "Mahasiswa",
      "key": "userName",
      "kind": "text"
    }, {
      "type": "field",
      "label": "Alamat Email",
      "value": "mahasiswa@universitas.ac.id",
      "key": "userEmail",
      "kind": "text"
    }, {
      "type": "field",
      "label": "Universitas / Instansi",
      "value": "Universitas Orbhita",
      "key": "userInst",
      "kind": "text"
    }, {
      "type": "card",
      "title": "Pengaturan Umum",
      "body": "Atur ritme belajar, notifikasi, dan integrasi kalender",
      "tag": "SISTEM",
      "target": "settings",
      "tone": "normal"
    }],
    "actions": [{
      "label": "Simpan Perubahan",
      "target": "home",
      "style": "primary",
      "effect": null
    }],
    "back": "home",
    "nav": null,
    "fr": "FR02",
    "group": "07 · Pengaturan & integrasi"
  }, {
    "id": "settings",
    "title": "Pengaturan",
    "subtitle": "Preferensi, koneksi, dan kendali atas datamu.",
    "blocks": [{
      "type": "card",
      "title": "Profil Pengguna",
      "body": "Nama, email, dan instansi",
      "tag": "AKUN",
      "target": "profile",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Ritme belajar",
      "body": "Asia/Jakarta · 19.30–22.00\n120 menit/hari · sesi 25, jeda 5",
      "tag": "PREFERENSI",
      "target": "onboarding",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Google Calendar",
      "body": "Satu kalender · sinkron tertunda",
      "tag": "KONEKSI",
      "target": "calendar",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Pengingat",
      "body": "Aplikasi / WhatsApp / keduanya / nonaktif",
      "tag": "KANAL",
      "target": "reminders",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Koneksi & antrean",
      "body": "Data lokal, status sinkron, dan konflik",
      "tag": "PERANGKAT",
      "target": "offline",
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Privasi & hapus akun",
      "body": "Hapus data milikmu dan hentikan pengiriman",
      "tag": "DATA",
      "target": "delete-account",
      "tone": "normal"
    }],
    "actions": [{
      "label": "Keluar dari akun",
      "target": "login",
      "style": "secondary",
      "effect": null
    }],
    "back": null,
    "nav": "settings",
    "fr": "FR25–36",
    "group": "07 · Pengaturan & integrasi"
  }, {
    "id": "reminders",
    "title": "Pengingat pilihanmu",
    "subtitle": "Deadline dan sesi dapat diatur terpisah.",
    "blocks": [{
      "type": "select",
      "label": "Kanal pengingat",
      "key": "channel",
      "options": ["Aplikasi", "WhatsApp", "Keduanya", "Nonaktif"],
      "value": "Aplikasi"
    }, {
      "type": "field",
      "label": "Deadline: menit sebelumnya",
      "value": "1440, 60",
      "key": "deadlineReminder",
      "kind": "text"
    }, {
      "type": "field",
      "label": "Sesi: menit sebelumnya",
      "value": "10",
      "key": "sessionReminder",
      "kind": "number"
    }, {
      "type": "card",
      "title": "Nomor WhatsApp penerima",
      "body": "Belum terverifikasi · pengirim bisnis Mumu",
      "tag": "WA BELUM AKTIF",
      "target": "wa-verify",
      "tone": "normal"
    }, {
      "type": "check",
      "label": "Saya setuju menerima reminder WA",
      "selected": false,
      "key": "consent"
    }, {
      "type": "notice",
      "title": "Izin perangkat tetap dibutuhkan",
      "body": "Kanal aplikasi membutuhkan izin notifikasi. Pilihan WA membutuhkan nomor terverifikasi dan persetujuan.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Simpan preferensi reminder",
      "target": "settings",
      "style": "primary",
      "effect": "validateReminder"
    }, {
      "label": "Verifikasi nomor WA",
      "target": "wa-verify",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Tolak izin notifikasi",
      "target": "permission",
      "style": "ghost",
      "effect": null
    }],
    "back": "settings",
    "nav": null,
    "fr": "FR25–30",
    "group": "07 · Pengaturan & integrasi"
  }, {
    "id": "wa-verify",
    "title": "Verifikasi WhatsApp",
    "subtitle": "Kode hanya dimasukkan pada aplikasi resmi saat implementasi.",
    "blocks": [{
      "type": "field",
      "label": "Nomor Telepon (E.164)",
      "value": "+62…",
      "key": "phone",
      "kind": "text"
    }, {
      "type": "field",
      "label": "Kode OTP",
      "value": "123456",
      "key": "code",
      "kind": "text"
    }, {
      "type": "check",
      "label": "Setuju menerima reminder tugas/sesi",
      "selected": false,
      "key": "consent"
    }, {
      "type": "notice",
      "title": "Verifikasi",
      "body": "Nomor dan kode diverifikasi dengan aman.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Verifikasi berhasil",
      "target": "reminders",
      "style": "primary",
      "effect": "verifyWA"
    }],
    "back": "reminders",
    "nav": null,
    "fr": "FR26–27",
    "group": "07 · Pengaturan & integrasi"
  }, {
    "id": "permission",
    "title": "Izin belum diberikan",
    "subtitle": "Fitur lain tetap dapat digunakan.",
    "blocks": [{
      "type": "notice",
      "title": "Integrasi terkait belum aktif",
      "body": "Calendar/notifikasi memerlukan izin. Catat kegiatan manual atau atur ulang izin saat kamu siap.",
      "tone": "warning"
    }, {
      "type": "card",
      "title": "Tugas tetap bisa dicatat",
      "body": "Penolakan izin tidak membuat proses login menjadi gagal.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Lanjut secara manual",
      "target": "home-empty",
      "style": "primary",
      "effect": null
    }, {
      "label": "Kembali ke pengaturan",
      "target": "settings",
      "style": "secondary",
      "effect": null
    }],
    "back": "settings",
    "nav": null,
    "fr": "FR02,11,28",
    "group": "08 · Keadaan khusus"
  }, {
    "id": "offline",
    "title": "Koneksi terputus",
    "subtitle": "Data lokal tetap tersedia setelah pernah login.",
    "blocks": [{
      "type": "notice",
      "title": "Belum tersinkron",
      "body": "Edit tugas/progres/kegiatan manual masuk antrean. Sistem, media, Calendar, dan WA memerlukan koneksi serta server aktif.",
      "tone": "warning"
    }, {
      "type": "card",
      "title": "2 perubahan menunggu",
      "body": "1 estimasi langkah + 1 kegiatan manual",
      "tag": "ANTREAN",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Reminder lokal bisa memakai rencana lama",
      "body": "Perangkat belum menerima perubahan terbaru. Status ini tidak berarti WA sedang mengirim.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Edit tugas manual",
      "target": "manual",
      "style": "primary",
      "effect": null
    }, {
      "label": "Pulihkan koneksi",
      "target": "sync-conflict",
      "style": "secondary",
      "effect": null
    }],
    "back": "settings",
    "nav": null,
    "fr": "FR31–34",
    "group": "08 · Keadaan khusus"
  }, {
    "id": "manual",
    "title": "Tugas manual",
    "subtitle": "Bisa dicatat secara manual.",
    "blocks": [{
      "type": "field",
      "label": "Judul",
      "value": "Latihan basis data",
      "key": "manualTitle",
      "kind": "text"
    }, {
      "type": "field",
      "label": "Deadline resmi (jika diketahui)",
      "value": "2026-10-16T23:59",
      "key": "manualDeadline",
      "kind": "datetime-local"
    }, {
      "type": "field",
      "label": "Estimasi sisa (menit)",
      "value": "60",
      "key": "manualMinutes",
      "kind": "number"
    }, {
      "type": "notice",
      "title": "Belum tersinkron",
      "body": "Pada mode offline, penyimpanan lokal akan disinkronkan saat online.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Simpan ke antrean lokal",
      "target": "offline",
      "style": "primary",
      "effect": null
    }],
    "back": "offline",
    "nav": null,
    "fr": "FR31–34",
    "group": "08 · Keadaan khusus"
  }, {
    "id": "sync-conflict",
    "title": "Pilih versi tugas",
    "subtitle": "Perubahan di dua perangkat perlu ditinjau.",
    "blocks": [{
      "type": "card",
      "title": "Versi perangkat ini",
      "body": "Sisa langkah 1: 30 menit\nDiedit 14 Okt 20.10 · revisi 3",
      "tag": "LOKAL",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Versi server",
      "body": "Sisa langkah 1: 45 menit\nDiedit 14 Okt 20.12 · revisi 4",
      "tag": "SERVER",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Tidak ditimpa diam-diam",
      "body": "Pilih per tugas. Data kedua versi tetap tersedia sampai keputusan berhasil tersimpan.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Gunakan versi lokal",
      "target": "home",
      "style": "primary",
      "effect": "chooseLocal"
    }, {
      "label": "Gunakan versi server",
      "target": "home",
      "style": "secondary",
      "effect": "chooseServer"
    }],
    "back": "offline",
    "nav": null,
    "fr": "FR32–33",
    "group": "08 · Keadaan khusus"
  }, {
    "id": "error",
    "title": "Proses belum berhasil",
    "subtitle": "Input dan draf tetap tersedia.",
    "blocks": [{
      "type": "notice",
      "title": "Layanan sistem belum dapat diakses",
      "body": "Periksa koneksi/server lalu coba lagi. Tidak ada tugas atau rencana yang dianggap tersimpan.",
      "tone": "warning"
    }],
    "actions": [{
      "label": "Coba lagi",
      "target": "processing",
      "style": "primary",
      "effect": null
    }, {
      "label": "Kembali ke input",
      "target": "compose",
      "style": "secondary",
      "effect": null
    }, {
      "label": "Catat manual",
      "target": "manual",
      "style": "ghost",
      "effect": null
    }],
    "back": "compose",
    "nav": null,
    "fr": "FR05,34",
    "group": "08 · Keadaan khusus"
  }, {
    "id": "commit-unknown",
    "title": "Status simpan belum pasti",
    "subtitle": "Jangan membuat penyimpanan ganda.",
    "blocks": [{
      "type": "notice",
      "title": "Sambungan terputus saat menyimpan",
      "body": "Aplikasi memeriksa hasil operasi sebelumnya. Draf dipertahankan; belum ditampilkan sebagai berhasil.",
      "tone": "warning"
    }],
    "actions": [{
      "label": "Periksa hasil operasi",
      "target": "task-saved",
      "style": "primary",
      "effect": null
    }, {
      "label": "Kembali ke draf",
      "target": "draft",
      "style": "secondary",
      "effect": null
    }],
    "back": "draft",
    "nav": null,
    "fr": "FR08,32",
    "group": "08 · Keadaan khusus"
  }, {
    "id": "delete-account",
    "title": "Hapus akun & datamu",
    "subtitle": "Tindakan ini membutuhkan koneksi dan login ulang.",
    "blocks": [{
      "type": "notice",
      "title": "Periksa dampaknya",
      "body": "Tugas, progres, rencana, teks sumber, preferensi, token integrasi, dan akun ORBHITA dihapus. Reminder baru dihentikan.",
      "tone": "warning"
    }, {
      "type": "check",
      "label": "Hapus juga acara buatan ORBHITA di Calendar",
      "selected": true,
      "key": "cleanup"
    }, {
      "type": "text",
      "body": "Acara kuliah/kegiatan luar ORBHITA tidak dihapus. Pesan WA yang sudah diterima tidak dapat ditarik melalui aplikasi. Retensi penyedia/backup dijelaskan saat implementasi."
    }, {
      "type": "text",
      "body": "Jika izin Calendar sudah dicabut, acara ORBHITA mungkin perlu dihapus manual."
    }],
    "actions": [{
      "label": "Login ulang & konfirmasi penghapusan",
      "target": "deleting",
      "style": "danger",
      "effect": null
    }, {
      "label": "Batal",
      "target": "settings",
      "style": "secondary",
      "effect": null
    }],
    "back": "settings",
    "nav": null,
    "fr": "FR35–36",
    "group": "09 · Privasi & penghapusan"
  }, {
    "id": "deleting",
    "title": "Penghapusan diproses",
    "subtitle": "Akses dan pengiriman baru telah dihentikan.",
    "blocks": [{
      "type": "card",
      "title": "Bersihkan data milik akun",
      "body": "Data aplikasi, media sementara, dan token integrasi",
      "tag": "DALAM PROSES",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Bersihkan acara ORBHITA",
      "body": "Sesuai pilihan dan izin Calendar",
      "tag": "TERTUNDA",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Cleanup perlu selesai",
      "body": "Kegagalan ditampilkan dan dapat dicoba ulang. Tidak mengaktifkan akun atau reminder kembali.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Selesaikan cleanup",
      "target": "deleted",
      "style": "primary",
      "effect": null
    }, {
      "label": "Tunda cleanup",
      "target": "deleting",
      "style": "secondary",
      "effect": null
    }],
    "back": null,
    "nav": null,
    "fr": "FR35–36",
    "group": "09 · Privasi & penghapusan"
  }, {
    "id": "deleted",
    "title": "Akun telah dihapus",
    "subtitle": "Hasil cleanup berhasil.",
    "blocks": [{
      "type": "success"
    }, {
      "type": "card",
      "title": "Data aktif ORBHITA dihapus",
      "body": "Reminder baru dihentikan · token dibersihkan\nAcara luar ORBHITA tetap ada.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }, {
      "type": "text",
      "body": "Ini akhir alur penghapusan akun."
    }],
    "actions": [{
      "label": "Kembali ke awal",
      "target": "login",
      "style": "primary",
      "effect": null
    }],
    "back": null,
    "nav": null,
    "fr": "FR35–36",
    "group": "09 · Privasi & penghapusan"
  }, {
    "id": "calendar-replan",
    "title": "Tinjau dampak rapat",
    "subtitle": "Usulan baru · jadwal lama belum diganti.",
    "blocks": [{
      "type": "card",
      "title": "Perubahan kegiatan",
      "body": "Rapat Kamis 15 Okt 19.30–20.30 bertabrakan dengan langkah 02.",
      "tag": "GOOGLE / MANUAL",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Sebelum / usulan",
      "body": "Sebelum: Rabu 45 + Kamis 105 menit\nUsulan: Rabu 45 + Jumat 105 menit. Langkah 02 dan 03 ikut bergeser agar dependensi tetap benar.",
      "tag": "150 MENIT",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Target Kamis berisiko",
      "body": "Sesi Jumat 19.30–21.35 (jeda termasuk) selesai sebelum deadline Jumat 23.59 . Kapasitas Jumat 105/120 menit.",
      "tone": "warning"
    }],
    "actions": [{
      "label": "Konfirmasi rencana setelah rapat",
      "target": "plan-active",
      "style": "primary",
      "effect": "calendarReplan"
    }, {
      "label": "Tolak perubahan jadwal",
      "target": "home",
      "style": "secondary",
      "effect": null
    }],
    "back": "plan-stale",
    "nav": null,
    "fr": "FR18,21–24",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "estimate-review",
    "title": "Tinjau estimasi sisa",
    "subtitle": "Sisa langkah dikoreksi; usulan jadwal perlu disetujui.",
    "blocks": [{
      "type": "card",
      "title": "Sisa langkah 01: 30 menit",
      "body": "Sebelumnya 45 menit. Langkah 02/03 tetap 60/45 menit.",
      "tag": "TOTAL 135 MENIT",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Sebelum / usulan",
      "body": "Sebelum: Rabu 45 + Kamis 105 menit\nUsulan: Rabu 30 + Kamis 105 menit. Sesi Rabu 19.30–19.55 + 20.00–20.05.",
      "tag": "PERUBAHAN",
      "target": null,
      "tone": "normal"
    }, {
      "type": "notice",
      "title": "Estimasi tetap bisa berubah",
      "body": "Tidak ada timer yang mengurangi durasi secara otomatis.",
      "tone": "info"
    }],
    "actions": [{
      "label": "Konfirmasi jadwal sesuai estimasi",
      "target": "estimate-active",
      "style": "primary",
      "effect": "confirmEstimate"
    }, {
      "label": "Tolak perubahan jadwal",
      "target": "task",
      "style": "secondary",
      "effect": null
    }],
    "back": "task",
    "nav": null,
    "fr": "FR20–24",
    "group": "06 · Progres & perubahan"
  }, {
    "id": "estimate-active",
    "title": "Estimasi & rencana aktif",
    "subtitle": "Perubahan telah dikonfirmasi.",
    "blocks": [{
      "type": "success"
    }, {
      "type": "card",
      "title": "135 menit tersisa",
      "body": "Rabu 30 + Kamis 105 menit\n7 sesi dengan durasi sesuai estimasi baru.",
      "tag": "RENCANA BARU",
      "target": null,
      "tone": "normal"
    }, {
      "type": "card",
      "title": "Status integrasi",
      "body": "Calendar tertunda; reminder versi lama diperbarui sesuai hasil sinkron.",
      "tag": "",
      "target": null,
      "tone": "normal"
    }],
    "actions": [{
      "label": "Ke beranda",
      "target": "home",
      "style": "primary",
      "effect": null
    }],
    "back": null,
    "nav": null,
    "fr": "FR20–29",
    "group": "06 · Progres & perubahan"
  }],
  "sources": {
    "PRD": "https://docs.google.com/document/d/1RYxfjs10n5Ba2jhUiSHxMAWOGdiCwBZIv83sSN2igQg",
    "SRS": "https://docs.google.com/document/d/1COuEZI-eHe2h7uyc7I1FprgQF7N1bJxmaVy5x7fauq4"
  }
};
const SCREENS: any = Object.fromEntries(MODEL.screens.map((s: any) => [s.id, s]));
const DEFAULTS: any = Object.fromEntries(MODEL.screens.flatMap((s: any) => s.blocks.filter((b: any) => b.key).map((b: any) => [b.key, b.type === 'check' ? b.selected : b.value])));
const GROUPS = [...new Set<string>(MODEL.screens.map((s: any) => s.group))];
const ICONS: any = {
  home: 'M3 10l9-7 9 7v10h-6v-7H9v7H3z',
  calendar: 'M4 5h16v16H4z M8 2v6 M16 2v6 M4 10h16',
  plus: 'M12 4v16 M4 12h16',
  settings: 'M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',
  chevron: 'M9 5l7 7-7 7',
  arrow: 'M19 12H5 M11 6l-6 6 6 6',
  file: 'M6 2h8l4 4v16H6z M14 2v5h5 M9 12h6 M9 16h6',
  mic: 'M9 3a3 3 0 0 1 6 0v8a3 3 0 0 1-6 0z M5 9v2a7 7 0 0 0 14 0V9 M12 18v4 M8 22h8',
  check: 'M5 12l4 4L19 6',
  bell: 'M6 16h12l-2-3V9a4 4 0 0 0-8 0v4z M10 20h4',
  clock: 'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18 M12 7v5l4 2',
  spark: 'M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z',
  warning: 'M12 3l10 18H2z M12 9v5 M12 17v1',
  cloud: 'M7 18H5a4 4 0 0 1 0-8 7 7 0 0 1 13-2 5 5 0 0 1 1 10h-2 M12 11v10 M8 17l4 4 4-4'
};
export const Icon = ({
  name,
  size = 20
}: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICONS[name] || ICONS.spark} /></svg>;
export const Orbit = ({
  large = false
}: any) => <img src="/Logo.png" alt="Orbit Logo" className={large ? 'orb-mark orb-large' : 'orb-mark'} style={{ height: large ? '1.5em' : '1.2em', width: 'auto', objectFit: 'contain' }} aria-hidden="true" />;
const fresh = (start: string) => ({
  values: {
    ...DEFAULTS
  },
  taskSaved: start === 'home',
  planActive: start === 'home',
  version: start === 'home' ? 1 : 0,
  wa: false,
  done: false,
  mode: 'initial',
  attachment: false,
  working: false
});
function addMinutes(time: string, n: number) {
  const [h, m] = time.split(':').map(Number);
  const v = h * 60 + m + n;
  return String(Math.floor(v / 60)).padStart(2, '0') + ':' + String(v % 60).padStart(2, '0');
}
function examplePlan(values: any, mode: string, done: boolean) {
  const lengths = [done ? 0 : mode === 'estimate' ? +values.remaining : +values.m1, +values.m2, +values.m3];
  const days: any = [[], [], []];
  const used = [0, 0, 0],
    clock = [values.studyStart || '19:30', values.studyStart || '19:30', values.studyStart || '19:30'];
  let unallocated = 0;
  const daily = Math.max(0, +values.daily || 120);
  const [duration, rest] = String(values.session || '25 / 5').split('/').map(Number);
  const session = Math.max(1, duration || 25),
    gap = Math.max(0, rest || 5);
  lengths.forEach((n, index) => {
    let left = n;
    let d = index === 0 ? 0 : mode === 'calendar' || mode === 'postpone' && index === 2 ? 2 : 1;
    while (left > 0 && d < 3) {
      const end = values.studyEnd || '22:00';
      const available = Number(end.slice(0, 2)) * 60 + Number(end.slice(3)) - (Number(clock[d].slice(0, 2)) * 60 + Number(clock[d].slice(3)));
      const amount = Math.min(left, session, daily - used[d], available);
      if (amount <= 0) {
        d++;
        continue;
      }
      const finish = addMinutes(clock[d], amount);
      days[d].push({
        step: index + 1,
        start: clock[d],
        end: finish,
        minutes: amount
      });
      used[d] += amount;
      left -= amount;
      clock[d] = addMinutes(finish, gap);
    }
    unallocated += Math.max(0, left);
  });
  return {
    days,
    used,
    unallocated,
    total: lengths.reduce((a, b) => a + b, 0)
  };
}
export function OrbhitaApp({
  start = 'home',
  compact = false,
  initialMessage = '',
  onClose
}: any) {
  const [current, setCurrent] = useState(start);
  const [state, setState] = useState<any>(() => ({
    ...fresh(start),
    values: {
      ...fresh(start).values,
      ...(initialMessage ? {
        message: initialMessage
      } : {})
    }
  }));
  const [toast, setToast] = useState('');
  const [search, setSearch] = useState('');
  const [week, setWeek] = useState(false);
  const body = useRef<HTMLDivElement>(null);
  const update = (key: string, value: any) => setState((s: any) => ({
    ...s,
    values: {
      ...s.values,
      [key]: value
    }
  }));
  const go = (id: string) => {
    if (!SCREENS[id]) return;
    setCurrent(id);
    setToast('');
    if (body.current) body.current.scrollTop = 0;
  };
  const tell = (s: string) => setToast(s);
  const validDates = () => {
    const d = Date.parse(state.values.deadline),
      t = Date.parse(state.values.target);
    if (!Number.isFinite(d) || !Number.isFinite(t)) {
      tell('Lengkapi deadline dan target terlebih dahulu.');
      return false;
    }
    if (t > d) {
      tell('Target pribadi harus sebelum atau sama dengan deadline resmi.');
      return false;
    }
    return true;
  };
  const act = (a: any) => {
    let next = {
      ...state,
      values: {
        ...state.values
      }
    };
    if (a.effect === 'process' && !String(state.values.message || '').trim()) {
      tell('Isi instruksi atau pilih lampiran.');
      return;
    }
    if (['confirmTask', 'validateDraft'].includes(a.effect)) {
      if (!validDates()) return;
      if (['m1', 'm2', 'm3'].some(k => !(Number(state.values[k]) > 0))) {
        tell('Estimasi tiap langkah harus lebih dari nol.');
        return;
      }
    }
    if (a.effect === 'confirmTask') next.taskSaved = true;
    if (a.effect === 'confirmPlan') {
      if (!state.taskSaved) {
        tell('Konfirmasi tugas lebih dahulu.');
        return;
      }
      next.planActive = true;
      next.version = 1;
      next.mode = 'initial';
    }
    if (a.effect === 'completeStep') {
      next.done = true;
      next.values.remaining = '0';
    }
    if (a.effect === 'saveRemaining') {
      const r = Number(state.values.remaining);
      if (!Number.isFinite(r) || r < 0) {
        tell('Estimasi sisa harus nol atau lebih.');
        return;
      }
      next.done = r === 0;
    }
    if (['confirmReplan', 'calendarReplan', 'confirmProgress', 'confirmEstimate'].includes(a.effect)) {
      next.planActive = true;
      next.version++;
      next.mode = ({
        confirmReplan: 'postpone',
        calendarReplan: 'calendar',
        confirmProgress: 'progress',
        confirmEstimate: 'estimate'
      } as any)[a.effect];
    }
    if (a.effect === 'validateActivity') {
      if (!(Date.parse(state.values.activityEnd) > Date.parse(state.values.activityStart))) {
        tell('Waktu selesai harus setelah waktu mulai.');
        return;
      }
    }
    if (a.effect === 'verifyWA') {
      if (!state.values.consent) {
        tell('Setujui reminder WA sebelum verifikasi.');
        return;
      }
      next.wa = true;
    }
    if (a.effect === 'validateReminder' && ['WhatsApp', 'Keduanya'].includes(state.values.channel) && (!state.wa || !state.values.consent)) {
      tell('Verifikasi nomor dan berikan persetujuan reminder WA.');
      return;
    }
    if (current === 'attachments' && a.label.includes('Gunakan')) next.attachment = true;
    if (current === 'attachments' && a.label.includes('Hapus')) next.attachment = false;
    if (current === 'transcript') next.values.message = next.values.transcript || next.values.message;
    setState(next);
    go(a.target);
  };
  const s = SCREENS[current];
  const vals = state.values;
  const total = ['m1', 'm2', 'm3'].reduce((n, k) => n + Number(vals[k]), 0);
  const remaining = state.done ? Number(vals.m2) + Number(vals.m3) : state.mode === 'estimate' ? Number(vals.remaining) + Number(vals.m2) + Number(vals.m3) : total;
  const plan = examplePlan(vals, state.mode, state.done);
  const block = (b: any, i: number) => {
    if (b.type === 'hero') return <div key={i} className="orb-hero"><Orbit large /><span>SATU LANGKAH LEBIH JELAS</span></div>;
    if (b.type === 'wave') return <div key={i} className="orb-wave">{[15, 35, 63, 41, 89, 55, 30, 67, 91, 40, 59, 26, 48].map((h, j) => <i key={j} style={{
        height: h
      }} />)}<span>00:18 / 02:00 · contoh</span></div>;
    if (b.type === 'success') return <div key={i} className="orb-success"><Icon name="check" size={44} /></div>;
    if (b.type === 'progress') return <div key={i} className="orb-loading"><i /><span>Memahami instruksi · contoh proses</span></div>;
    if (b.type === 'text') return <p key={i} className="orb-text">{b.body}</p>;
    if (b.type === 'check') return <label key={i} className="orb-check"><input type="checkbox" checked={!!vals[b.key]} onChange={e => update(b.key, e.target.checked)} /><span>{b.label}</span></label>;
    if (b.type === 'select') return <label key={i} className="orb-field"><span>{b.label}</span><select value={vals[b.key]} onChange={e => update(b.key, e.target.value)}>{b.options.map((o: string) => <option key={o}>{o}</option>)}</select></label>;
    if (b.type === 'field') return <label key={i} className="orb-field"><span>{b.label}</span>{b.kind === 'textarea' ? <textarea value={vals[b.key] || ''} maxLength={10000} onChange={e => update(b.key, e.target.value)} /> : <input type={b.kind || 'text'} min={b.kind === 'number' ? 0 : undefined} value={vals[b.key] ?? ''} onChange={e => update(b.key, e.target.value)} />}</label>;
    if (b.type === 'heading') return <div key={i} className="orb-section-title" style={{ marginTop: '6px', marginBottom: '-4px' }}><h3>{b.title}</h3></div>;
    if (b.type === 'notice') return null;
    if (b.type === 'card') {
      let title = b.title,
        description = b.body,
        tag = b.tag;
      if (title === 'Laporan audit sistem informasi') title = vals.taskTitle;
      if (/^0[123]  /.test(title)) {
        const n = Number(title.slice(1, 2));
        description = n === 1 && state.done ? '0 menit · selesai' : vals['m' + n] + ' menit · ' + (n === 1 ? 'Estimasi awal, dapat dikoreksi' : 'Bergantung pada langkah 0' + (n - 1));
        if (n === 1 && state.done) tag = 'SELESAI';
      }
      if (current === 'task' && i === 0) {
        title = remaining + ' menit tersisa';
        description = (state.done ? 'Langkah 01 selesai' : 'Belum mulai') + ' · ' + (state.planActive ? 'rencana v' + state.version + ' aktif' : 'jadwal belum aktif');
      }
      if (current === 'task-saved' && i === 1) description = `3 langkah · ${total} menit perkiraan\nDeadline ${vals.deadline.replace('T', ' · ')}`;
      if (current === 'plan-active' && i === 1) {
        title = 'Tugas tersimpan · rencana v' + state.version + ' aktif';
        description = plan.days.flat().length + ' sesi · ' + plan.total + ' menit';
      }
      if (current === 'activity-review' && i === 0) {
        title = vals.activityTitle;
        description = 'Mulai ' + vals.activityStart.replace('T', ' · ') + '\nSelesai ' + vals.activityEnd.replace('T', ' · ');
      }
      if (current === 'activity-review' && title === 'Penyimpanan') description = vals.export ? 'ORBHITA + usulan ekspor Calendar' : 'ORBHITA saja';
      if (current === 'reminders' && title === 'Nomor WhatsApp penerima') tag = state.wa ? 'TERVERIFIKASI · CONTOH' : 'WA BELUM AKTIF';
      if (current === 'estimate-review' && i === 0) {
        title = 'Sisa langkah 01: ' + vals.remaining + ' menit';
        tag = 'TOTAL ' + (Number(vals.remaining) + Number(vals.m2) + Number(vals.m3)) + ' MENIT';
      }
      if (current === 'estimate-active' && i === 1) {
        title = Number(vals.remaining) + Number(vals.m2) + Number(vals.m3) + ' menit tersisa';
        description = 'Estimasi diperbarui; rencana telah dikonfirmasi.';
      }
      const Content = <><div className="orb-card-top">{tag && <span className="orb-tag">{tag}</span>}{b.target && <Icon name="chevron" size={17} />}</div><h3>{title}</h3><p>{description}</p></>;
      return b.target ? <button key={i} className="orb-card orb-card-link" onClick={() => go(b.target)}>{Content}</button> : <section key={i} className="orb-card">{Content}</section>;
    }
    return null;
  };
  const home = <><div className="orb-greeting"><div><span>RABU, 14 OKTOBER 2026</span><h2>Halo, mahasiswa.</h2></div><div className="orb-avatar" onClick={() => go('profile')} style={{ cursor: 'pointer' }} role="button">A</div></div><div className="orb-next"><div className="orb-next-top"><span><i />{state.planActive ? 'SESI BERIKUTNYA' : 'BELUM TERJADWAL'}</span><Icon name="clock" /></div><h2>{state.done ? 'Susun analisis & bukti' : 'Baca instruksi & petakan temuan'}</h2><p>{vals.taskTitle}</p><div className="orb-next-bottom"><span>{state.planActive ? state.done ? 'Kamis · 19.30' : 'Hari ini · 19.30' : 'Tinjau rencana dahulu'}<small>{state.done ? '25 menit · langkah 02' : '25 menit · langkah 01'}</small></span><button onClick={() => go(state.planActive ? 'progress' : 'plan')}>{state.planActive ? 'Mulai' : 'Tinjau'}<Icon name="chevron" size={16} /></button></div></div><div className="orb-stat-grid"><div><Icon name="file" /><strong>{remaining}<small>menit tersisa</small></strong></div><div><Icon name="calendar" /><strong>{state.planActive ? plan.days.flat().length : 0}<small>sesi direncanakan</small></strong></div></div><div className="orb-section-title"><h3>Tugasmu</h3><span>1 tugas aktif</span></div><button className="orb-task-card" onClick={() => go('task')}><div className="orb-task-icon"><Icon name="file" /></div><div><span className="orb-tag">AUDIT SISTEM INFORMASI</span><h3>{vals.taskTitle}</h3><p>Deadline 16 Okt · 23.59</p><div className="orb-meter"><i style={{
            width: state.done ? '30%' : '8%'
          }} /></div><small>{state.done ? '1 dari 3 langkah selesai' : state.working ? 'Sedang dikerjakan' : 'Belum mulai'}</small></div><Icon name="chevron" size={16} /></button><button className="orb-add" onClick={() => go('compose')}><Icon name="plus" />Tambah tugas baru</button><div className="orb-sync"><Icon name="cloud" size={14} /><span>Calendar belum tersinkron</span><button onClick={() => go('offline')}>Detail</button></div></>;
  const planContent = <><div className="orb-plan-summary"><span>{plan.total}<small>menit perkiraan</small></span><span>{plan.days.flat().length}<small>sesi</small></span></div>{plan.days.map((sessions: any[], day: number) => sessions.length > 0 && <section key={day} className="orb-card"><span className="orb-tag">{['RABU, 14 OKTOBER', 'KAMIS, 15 OKTOBER', 'JUMAT, 16 OKTOBER'][day]} · {plan.used[day]} MENIT</span>{sessions.map((x: any, i: number) => <div key={i} className="orb-session"><span>{x.start}<small>{x.end}</small></span><div><h3>Langkah 0{x.step}</h3><p>{x.minutes} menit · jeda sesuai preferensi</p></div></div>)}</section>)}<section className="orb-card"><span className="orb-tag">TIGA WAKTU, TIGA FUNGSI</span><h3>Deadline resmi</h3><p>{vals.deadline.replace('T', ' · ')}</p><h3>Target pribadi</h3><p>{vals.target.replace('T', ' · ')}</p><p>Sesi adalah waktu pengerjaan; bukan deadline.</p></section></>;
  const groups = GROUPS.map(g => ({
    name: g,
    items: MODEL.screens.filter((x: any) => x.group === g && (!search || [x.title, x.id].join(' ').toLowerCase().includes(search.toLowerCase())))
  })).filter(g => g.items.length);
  return <div className={'orb-root ' + (compact ? 'orb-compact' : '')}>
 {!compact && <aside className="orb-sidebar"><div className="orb-brand"><Orbit />RBHITA</div><div className="orb-side-label">PRODUCT DESIGN / MVP</div><h2>Ruang untuk<br />langkah berikutnya.</h2><p>Referensi aplikasi mobile<br />berdasarkan PRD & SRS.</p><button className="orb-reset" onClick={() => {
        setState(fresh('login'));
        go('login');
      }}><Icon name="arrow" size={16} />Mulai dari login</button><input className="orb-search" placeholder="Cari layar..." value={search} onChange={e => setSearch(e.target.value)} aria-label="Cari layar" /><div className="orb-screen-list">{groups.map(g => <section key={g.name}><h3>{g.name}</h3>{g.items.map((x: any) => <button key={x.id} className={current === x.id ? 'active' : ''} onClick={() => go(x.id)}>{x.title}<Icon name="chevron" size={13} /></button>)}</section>)}</div><div className="orb-side-foot">47 layar · 9 alur kebutuhan<br />Desain baru / acuan tim</div></aside>}
 <main className="orb-preview">{!compact && <div className="orb-preview-label"><span className="orb-live-dot" />ANTARMUKA PENGGUNA<span>MOBILE · LIGHT</span></div>}<div className="orb-phone">
    {current === 'login' ? (
      <div className="orb-landing">
        <div className="orb-status" style={{ color: 'white', position: 'absolute', top: 0, left: 0, right: 0 }}><strong>9:41</strong><span>▰ ▰ ▰</span></div>
        <div className="orb-landing-logo">
          <Orbit /><span>ORBHITA</span>
        </div>
        <div className="orb-landing-bottom">
          <button onClick={() => { setState(fresh('home')); go('home'); }}>
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            Continue with Google
          </button>
          <p>By continuing, you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    ) : (
      <>
        <div className="orb-status"><strong>9:41</strong><span>▰ ▰ ▰</span></div>
        <div className="orb-header">
          {current === 'home' ? <div className="orb-mini-brand" onClick={onClose} style={{ cursor: onClose ? 'pointer' : 'default' }}><Orbit />RBHITA</div> : <>
            <div className="orb-header-top">
              {s.back ? <button onClick={() => go(s.back)} aria-label="Kembali"><Icon name="arrow" /></button> : <span />}
              <span className="orb-mini-brand" onClick={onClose} style={{ cursor: onClose ? 'pointer' : 'default' }}><Orbit />RBHITA</span>
            </div>
            <h1>{s.title}</h1>
            <p>{s.subtitle}</p>
          </>}
        </div>
        <div className="orb-body" ref={body}>
          {current === 'home' ? home : <>
            {current === 'compose' && <div className="orb-chat-intro"><div className="orb-ai-avatar"><Orbit /></div><p>Kirim instruksinya. Kita ubah jadi langkah yang bisa kamu mulai.</p></div>}
            {current === 'agenda' && <><div className="orb-switch"><button className={!week ? 'active' : ''} onClick={() => setWeek(false)}>Hari</button><button className={week ? 'active' : ''} onClick={() => setWeek(true)}>Minggu</button></div>{week && <div className="orb-week">{['Sen 12', 'Sel 13', 'Rab 14', 'Kam 15', 'Jum 16'].map(d => <button key={d} className={d === 'Rab 14' ? 'active' : ''} onClick={() => setWeek(false)}>{d}</button>)}</div>}</>}
            {current === 'compose' && state.attachment && <div className="orb-source-chip"><Icon name="file" size={16} />instruksi-audit.pdf<button onClick={() => setState({ ...state, attachment: false })} aria-label="Hapus lampiran">×</button></div>}
            {current === 'plan' ? planContent : s.blocks.map(block)}
            <div className="orb-actions">{s.actions.map((a: any, i: number) => <button key={i} className={'orb-button ' + a.style} onClick={() => act(a)}>{a.label}{a.style === 'primary' && <Icon name="chevron" size={16} />}</button>)}</div>
          </>}
        </div>
        {s.nav && <nav className="orb-nav" aria-label="Navigasi utama">{[['home', 'Hari ini', 'home'], ['agenda', 'Agenda', 'calendar'], ['compose', 'Tambah', 'plus'], ['settings', 'Atur', 'settings']].map(([id, label, icon]) => <button key={id} className={s.nav === id || current === id ? 'active' : ''} onClick={() => go(id)}><Icon name={icon} /><span>{label}</span></button>)}</nav>}
        {toast && <div className="orb-toast" role="status">{toast}<button onClick={() => setToast('')} aria-label="Tutup pesan">×</button></div>}
      </>
    )}
  </div></main>
 {!compact && <aside className="orb-inspect"><span className="orb-side-label">REVIEW & HANDOFF</span><h2>{s.title}</h2><p>{s.fr}</p><div className="orb-state"><span><i className={state.taskSaved ? 'yes' : ''} />{state.taskSaved ? 'Tugas dikonfirmasi' : 'Tugas belum dikonfirmasi'}</span><span><i className={state.planActive ? 'yes' : ''} />{state.planActive ? 'Rencana v' + state.version + ' aktif' : 'Rencana belum aktif'}</span><span><i className={state.wa ? 'yes' : ''} />{state.wa ? 'WA terverifikasi · contoh' : 'WA belum terverifikasi'}</span></div><h3>Yang perlu dipahami</h3><div className="orb-review-item"><span>01</span><p>Hasil perlu ditinjau. Pilihan bantuan bukan persetujuan simpan.</p></div><div className="orb-review-item"><span>02</span><p>Deadline, target pribadi dan sesi punya fungsi berbeda.</p></div><div className="orb-review-item"><span>03</span><p>Perubahan jadwal ditampilkan sebagai usulan sebelum mengganti rencana.</p></div><div className="orb-inspect-note"><Icon name="spark" /><p>Gunakan sistem sesuai kebutuhan.</p></div><div className="orb-source-links"><a href={MODEL.sources.PRD} target="_blank" rel="noreferrer">Baca PRD ↗</a><a href={MODEL.sources.SRS} target="_blank" rel="noreferrer">Baca SRS ↗</a></div><button className="orb-case-button" onClick={() => go('commit-unknown')}>Uji simpan belum pasti</button></aside>}
 </div>;
}
export function OrbhitaBoard() {
  const [tab, setTab] = useState('screens');
  return <div className="orb-board"><header><div><span className="orb-side-label">ORBHITA / DESIGN REFERENCE</span><h1>Satu tugas. Langkah yang lebih jelas.</h1><p>Desain aplikasi mobile · Flutter Android & iOS · PRD v0.4 / SRS v1.0</p></div><div className="orb-brand"><Orbit />RBHITA</div></header><div className="orb-board-tabs">{[['screens', 'Layar utama'], ['kit', 'Komponen & palet'], ['flows', 'Alur & aturan']].map(([id, label]) => <button key={id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}>{label}</button>)}</div>
 {tab === 'screens' && <><div className="orb-board-caption"><h2>Dari instruksi ke rencana yang disetujui.</h2><p>Setiap ponsel bisa diklik dan discroll untuk menelusuri alur.</p></div><div className="orb-board-phones">{[['home', '01 / Beranda'], ['compose', '02 / Input multimodal'], ['draft', '03 / Tinjau draf'], ['plan', '04 / Tinjau rencana']].map(([id, label]) => <div key={id}><div className="orb-board-phone-label">{label}</div><OrbhitaApp start={id} compact /></div>)}</div></>}
 {tab === 'kit' && <div className="orb-kit"><section><span className="orb-side-label">01 / FOUNDATIONS</span><h2>Tenang, jelas, terarah.</h2><div className="orb-swatches">{['#1B3C53', '#234C6A', '#456882', '#D2C1B6'].map(hex => <div key={hex}><i style={{
              background: hex
            }} /><strong>{hex}</strong></div>)}</div><h3>Tipografi aplikasi</h3><p>Sans-serif · judul 26/32 · isi 14/21 · label 11/16. Times New Roman berlaku pada dokumen.</p><h3>Ritme layout</h3><p>Padding 24 · jarak 8 / 12 / 16 / 24 · radius 12 / 16 · kontrol minimal 48 px.</p></section><section><span className="orb-side-label">02 / COMPONENTS</span><h2>Tindakan yang terbaca.</h2><button className="orb-button primary">Konfirmasi tugas<Icon name="chevron" /></button><button className="orb-button secondary">Koreksi draf</button><button className="orb-button primary" disabled>Memproses...</button><label className="orb-check"><input type="checkbox" defaultChecked /><span>Susun langkah & estimasi</span></label><label className="orb-field"><span>Nama tugas</span><input defaultValue="Laporan audit sistem informasi" /></label><div className="orb-notice orb-warning"><Icon name="warning" /><div><h3>60 menit belum teralokasi</h3><p>Risiko ditampilkan dengan teks, bukan warna saja.</p></div></div><div className="orb-tag-row"><span>GOOGLE · HANYA BACA</span><span>ORBHITA · SESI</span><span>BELUM TERSINKRON</span></div></section></div>}
 {tab === 'flows' && <div className="orb-flows"><section><span className="orb-side-label">01 / ALUR UTAMA</span><h2>Dua keputusan, dua konfirmasi.</h2><div className="orb-flow-nodes">{['Input teks / gambar / PDF / rekaman', 'Draf tugas + sumber + koreksi', 'Konfirmasi tugas', 'Pratinjau sesi + kapasitas + risiko', 'Konfirmasi jadwal', 'Calendar & reminder mengikuti rencana'].map((v, i) => <React.Fragment key={v}><div className={i === 2 || i === 4 ? 'confirm' : ''}><span>0{i + 1}</span>{v}</div>{i < 5 && <b>↓</b>}</React.Fragment>)}</div></section><section><span className="orb-side-label">02 / ADAPTASI & BATAS</span><h2>Rencana boleh berubah. Kendali tetap di pengguna.</h2>{[['Progres / tunda / kalender berubah', 'Usulan baru → bandingkan dampak → terima atau tolak. Deadline tidak digeser otomatis.'], ['Kalender eksternal', 'Acara luar ORBHITA hanya dibaca. Acara milik ORBHITA dapat berubah setelah konfirmasi.'], ['Offline & konflik', 'Tugas/progres manual boleh antre lokal. Konflik dipilih pengguna; AI/media/WA/Calendar perlu backend.'], ['Privasi', 'Penghapusan akun membutuhkan koneksi dan autentikasi ulang; tampilkan hasil cleanup.'], ['Batas sistem', 'Sistem beroperasi normal.']].map(([h, p]) => <div className="orb-rule" key={h}><h3>{h}</h3><p>{p}</p></div>)}</section></div>}
 <footer>ORBHITA · MVP pribadi mahasiswa · tanpa timer fokus / kolaborasi kelompok · seluruh integrasi aktif</footer></div>;
}


