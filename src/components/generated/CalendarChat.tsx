import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon, Orbit, OrbhitaApp } from './OrbhitaCore';
import './CalendarChat.css';
const DAY_NAMES = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
type Event = {
  day: number;
  start: string;
  end: string;
  title: string;
  detail: string;
  type: 'google' | 'manual' | 'session';
  route: string;
};
const EVENTS: Event[] = [{
  day: 12,
  start: '07:10',
  end: '08:50',
  title: 'Technopreneurship',
  detail: 'Kuliah · FIKLAB-201',
  type: 'google',
  route: 'external-event'
}, {
  day: 12,
  start: '15:30',
  end: '18:00',
  title: 'Jaringan Komputer',
  detail: 'Kuliah · FIKLAB-401',
  type: 'google',
  route: 'external-event'
}, {
  day: 13,
  start: '09:40',
  end: '11:20',
  title: 'Supply Chain Management',
  detail: 'Kuliah · FIKLAB-203',
  type: 'google',
  route: 'external-event'
}, {
  day: 13,
  start: '13:00',
  end: '14:40',
  title: 'Etika Profesi TI',
  detail: 'Kuliah · Online',
  type: 'google',
  route: 'external-event'
}, {
  day: 14,
  start: '07:10',
  end: '09:40',
  title: 'Audit Sistem Informasi',
  detail: 'Kuliah · FIK-302',
  type: 'google',
  route: 'external-event'
}, {
  day: 14,
  start: '13:00',
  end: '14:40',
  title: 'Pemrograman Web',
  detail: 'Kuliah · FIKLAB-201',
  type: 'google',
  route: 'external-event'
}, {
  day: 14,
  start: '14:40',
  end: '15:30',
  title: 'Praktikum Web',
  detail: 'Praktikum · FIKLAB-201',
  type: 'google',
  route: 'external-event'
}, {
  day: 14,
  start: '17:00',
  end: '18:00',
  title: 'Rapat proyek',
  detail: 'Kegiatan yang ditambahkan sendiri',
  type: 'manual',
  route: 'activity'
}, {
  day: 14,
  start: '19:30',
  end: '19:55',
  title: 'Baca instruksi audit',
  detail: 'Sesi 1 · langkah 01',
  type: 'session',
  route: 'task'
}, {
  day: 14,
  start: '20:00',
  end: '20:20',
  title: 'Petakan temuan',
  detail: 'Sesi 2 · langkah 01',
  type: 'session',
  route: 'task'
}, {
  day: 15,
  start: '07:10',
  end: '09:40',
  title: 'Sistem Informasi Manajemen',
  detail: 'Kuliah · FIKLAB-203',
  type: 'google',
  route: 'external-event'
}, {
  day: 15,
  start: '09:40',
  end: '11:20',
  title: 'Sistem Operasi',
  detail: 'Kuliah',
  type: 'google',
  route: 'external-event'
}, {
  day: 15,
  start: '19:30',
  end: '20:40',
  title: 'Susun analisis & bukti',
  detail: '3 sesi · langkah 02 · jeda 5 menit',
  type: 'session',
  route: 'task'
}, {
  day: 15,
  start: '20:45',
  end: '21:35',
  title: 'Rapikan laporan',
  detail: '2 sesi · langkah 03 · jeda 5 menit',
  type: 'session',
  route: 'task'
}];
const TYPE: any = {
  google: 'Google · hanya baca',
  manual: 'Kegiatan manual',
  session: 'Sesi ORBHITA'
};
const minute = (s: string) => Number(s.slice(0, 2)) * 60 + Number(s.slice(3));
export function CalendarChat() {
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [month, setMonth] = useState(9);
  const [year, setYear] = useState(2026);
  const [day, setDay] = useState(14);
  const [view, setView] = useState('month');
  const [zoom, setZoom] = useState(100);
  const [chats, setChats] = useState<{
    text: string;
    attachment: string | null;
  }[]>([]);
  const chatEnd = useRef<HTMLDivElement>(null);
  const changeZoom = (value: number) => setZoom(Math.max(75, Math.min(150, value)));
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [drawer, setDrawer] = useState<string | null>(null);
  const [detail, setDetail] = useState<Event | null>(null);
  const [recording, setRecording] = useState(false);
  const [notice, setNotice] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [sent, setSent] = useState('');
  const file = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowReview(false);
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('wheel', handleScroll, true);
    window.addEventListener('touchmove', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('wheel', handleScroll, true);
      window.removeEventListener('touchmove', handleScroll, true);
    };
  }, []);
  const demo = year === 2026 && month === 9;
  const events = demo ? EVENTS.filter(e => e.day === day) : [];
  const selected = new Date(year, month, day);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const weekStart = Math.max(1, day - (selected.getDay() + 6) % 7);
  const move = (d: number) => {
    let m = month + d,
      y = year;
    if (m > 11) {
      m = 0;
      y++;
    }
    if (m < 0) {
      m = 11;
      y--;
    }
    setMonth(m);
    setYear(y);
    setDay(1);
    setNotice('');
  };
  const open = (r: string) => {
    if (r === 'login') {
      setIsLoggedOut(true);
    } else {
      setDrawer(r);
    }
    setSidebar(false);
    setMenu(false);
    setShowReview(false);
  };
  const submit = () => {
    if (!message.trim() && !attachment) {
      setNotice('Tulis instruksi atau tambahkan PDF/gambar terlebih dahulu.');
      return;
    }
    setSent(message.trim() || (attachment ? 'Tinjau lampiran ' + attachment : ''));
    setChats(previous => [...previous, {
      text: message.trim() || 'Tinjau lampiran ini.',
      attachment
    }]);
    setMessage('');
    setAttachment(null);
    setMenu(false);
    setNotice('Draf dan jadwal hanya disimpan setelah konfirmasi.');
    setTimeout(() => chatEnd.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    }), 80);
  };
  const upload = (f: File | undefined) => {
    if (!f) return;
    if (!['application/pdf', 'image/png', 'image/jpeg'].includes(f.type)) {
      setNotice('Pilih PDF, JPG, atau PNG.');
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setNotice('Ukuran maksimal 10 MB.');
      return;
    }
    setAttachment(f.name);
    setMenu(false);
    setNotice('Lampiran dipilih.');
  };
  const sendVoice = () => {
    setRecording(false);
    setMessage('Buat laporan audit sistem informasi, sertakan tiga temuan dan referensi. Deadline Jumat 16 Oktober pukul 23.59.');
    setNotice('Transkrip ditambahkan.');
  };
  
  if (isLoggedOut) {
    return (
      <div className="orb-landing" style={{ position: 'fixed', zIndex: 9999 }}>
        <div className="orb-landing-logo">
          <Orbit /><span>RBHITA</span>
        </div>
        <div className="orb-landing-bottom" style={{ maxWidth: 400, margin: '0 auto', width: '100%' }}>
          <button onClick={() => setIsLoggedOut(false)} style={{ cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            Continue with Google
          </button>
          <p>By continuing, you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    );
  }

  return <div className="oc-root">
 <aside className={'oc-sidebar ' + (sidebar ? 'is-open' : '')}><div className="oc-sidebar-head"><div className="oc-brand"><Orbit />ORBHITA</div><button onClick={() => setSidebar(false)} aria-label="Tutup jadwal" className="oc-mobile-close">×</button></div><div className="oc-side-title"><Icon name="calendar" /><span>Jadwalmu</span><button onClick={() => open('activity')} aria-label="Tambah kegiatan"><Icon name="plus" size={18} /></button></div><div className="oc-day-choice"><button onClick={() => {
          if (day > 1) setDay(day - 1);
        }} aria-label="Hari sebelumnya">‹</button><div><strong>{DAY_NAMES[selected.getDay()]}, {day} {MONTHS[month].slice(0, 3)}</strong><span>{events.length ? events.length + ' kegiatan · Asia/Jakarta' : 'Belum ada kegiatan'}</span></div><button onClick={() => {
          if (day < totalDays) setDay(day + 1);
        }} aria-label="Hari berikutnya">›</button></div><div className="oc-schedule">{events.length ? events.map((e, i) => <button key={i} className={'oc-schedule-event ' + e.type} onClick={() => setDetail(e)}><div className="oc-schedule-time"><strong>{e.start}</strong><span>{e.end}</span></div><div className="oc-schedule-copy"><i /><span>{TYPE[e.type]}</span><h3>{e.title}</h3><p>{e.detail}</p></div></button>) : <div className="oc-empty"><Icon name="calendar" size={28} /><h3>Ruang untuk kegiatanmu.</h3><p>Tambah kegiatan manual atau hubungkan kalender pilihanmu.</p><button onClick={() => open('activity')}>Tambah kegiatan</button></div>}</div><div className="oc-side-bottom"><button onClick={() => open('calendar')}><Icon name="cloud" size={17} /><span>Google Calendar<small>Data contoh · belum terhubung</small></span><Icon name="chevron" size={15} /></button><button onClick={() => open('profile')}><span className="oc-avatar">A</span><span>Mahasiswa<small>Profil & preferensi</small></span><Icon name="settings" size={17} /></button></div></aside>
 <main className="oc-main"><header className="oc-topbar"><div><button className="oc-mobile-toggle" onClick={() => setSidebar(true)} aria-label="Buka rincian jadwal"><Icon name="calendar" /></button><span>Ruang belajarmu</span><Icon name="chevron" size={13} /><strong>Kalender & asisten</strong></div><div><button onClick={() => setShowReview(!showReview)} className="oc-review" aria-label="Buka menu">•••</button></div></header>
 <AnimatePresence>{showReview && <motion.div className="oc-review-menu" initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}><strong>Menu Utama</strong>{[['home', 'Dashboard Profil'], ['compose', 'Buat Tugas Baru'], ['settings', 'Pengaturan & Profil'], ['reminders', 'Pengingat & Notifikasi'], ['login', 'Keluar']].map(([id, label], i) => <motion.button key={id} onClick={() => open(id)} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}>{label}<Icon name="chevron" size={14} /></motion.button>)}</motion.div>}</AnimatePresence>
 <section className="oc-calendar-zone"><div className="oc-calendar-heading"><div><div className="oc-eyebrow">ATUR WAKTU, MULAI SATU LANGKAH</div><h1>{MONTHS[month]} <span>{year}</span></h1></div><div className="oc-calendar-tools"><button className="oc-today" onClick={() => {
              setYear(2026);
              setMonth(9);
              setDay(14);
            }}>Hari ini</button><div className="oc-switch">{[['month', 'Bulan'], ['week', 'Minggu']].map(([id, label]) => <button key={id} className={view === id ? 'active' : ''} onClick={() => setView(id)} style={{ position: 'relative' }}>{view === id && <motion.div layoutId="oc-switch-bg" style={{ position: 'absolute', inset: 0, background: 'white', borderRadius: '6px', boxShadow: '0 1px 5px #1b3c5310', zIndex: 0 }} transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />}<span style={{ position: 'relative', zIndex: 1 }}>{label}</span></button>)}</div><div className="oc-month-arrows"><button onClick={() => move(-1)} aria-label="Bulan sebelumnya">‹</button><button onClick={() => move(1)} aria-label="Bulan berikutnya">›</button></div></div></div><div className="oc-legend"><button onClick={() => open('activity')}><Icon name="plus" size={14} />Tambah kegiatan</button></div>
 <div className="oc-calendar-scroll" onScroll={() => setShowReview(false)} style={{
          '--calendar-zoom': zoom / 100
        } as React.CSSProperties}>{view === 'month' ? <div className="oc-month-grid"><div className="oc-weekdays">{['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map(d => <span key={d}>{d}</span>)}</div><div className="oc-month-cells" style={{
              gridTemplateRows: `repeat(${Math.ceil((totalDays + offset) / 7)}, minmax(0,1fr))`
            }}>{Array.from({
                length: Math.ceil((totalDays + offset) / 7) * 7
              }, (_, i) => {
                const n = i - offset + 1;
                const valid = n > 0 && n <= totalDays;
                const daily = demo ? EVENTS.filter(e => e.day === n) : [];
                return <div key={i} className={'oc-date-cell ' + (!valid ? 'muted ' : '') + (valid && n === day ? 'selected' : '')}><button disabled={!valid} className="oc-date-number" onClick={() => valid && setDay(n)} aria-label={valid ? `${n} ${MONTHS[month]}` : 'Di luar bulan'}>{valid ? n : ''}</button><div className="oc-cell-events">{daily.slice(0, 1).map((e, j) => <button key={j} className={e.type} onClick={() => {
                      setDay(n);
                      setDetail(e);
                    }}><b>{e.start}</b><span>{e.title}</span><i className="oc-event-dot" /></button>)}{daily.length > 1 && <button className="oc-more" onClick={() => {
                      setDay(n);
                      setSidebar(true);
                    }}>+{daily.length - 1}</button>}</div></div>;
              })}</div></div> : <div className="oc-week-grid"><div className="oc-week-header"><span>WIB</span>{Array.from({
                length: 7
              }, (_, i) => weekStart + i).map(n => <button key={n} className={n === day ? 'active' : ''} onClick={() => n <= totalDays && setDay(n)}>{n <= totalDays ? DAY_NAMES[new Date(year, month, n).getDay()].slice(0, 3) : ''}<strong>{n <= totalDays ? n : ''}</strong></button>)}</div><div className="oc-time-grid"><div className="oc-time-labels">{Array.from({
                  length: 16
                }, (_, i) => <span key={i}>{String(i + 7).padStart(2, '0')}:00</span>)}</div>{Array.from({
                length: 7
              }, (_, i) => weekStart + i).map(n => <div className={'oc-time-column ' + (n === day ? 'selected' : '')} key={n}>{Array.from({
                  length: 16
                }, (_, i) => <div key={i} className="oc-hour-line" />)}{demo && EVENTS.filter(e => e.day === n).map((e, j) => <button key={j} className={'oc-time-event ' + e.type} style={{
                  top: (minute(e.start) - 420) / 60 * 42,
                  height: Math.max(24, (minute(e.end) - minute(e.start)) / 60 * 42)
                }} onClick={() => {
                  setDay(n);
                  setDetail(e);
                }}><b>{e.start}</b><span>{e.title}</span></button>)}</div>)}</div></div>}</div><p className="oc-zoom-caption">{zoom > 100 ? 'Geser kalender ke samping untuk melihat tanggal lainnya.' : 'Pilih tanggal untuk melihat rincian jam kegiatan.'}</p><button className="oc-mobile-agenda" onClick={() => setSidebar(true)}><span className="oc-agenda-day">{day}<small>{MONTHS[month].slice(0, 3)}</small></span><span><strong>{DAY_NAMES[selected.getDay()]}, {day} {MONTHS[month]}</strong><small>{events.length ? events.length + ' kegiatan · mulai ' + events[0].start + ' WIB' : 'Belum ada kegiatan'}</small></span><Icon name="chevron" size={18} /></button></section>
 <footer className="oc-chat-zone"><div className="oc-conversation" aria-live="polite">{chats.map((chat, index) => <React.Fragment key={index}><div className="oc-user-bubble"><p>{chat.text}</p>{chat.attachment && <small><Icon name="file" size={14} />{chat.attachment}</small>}</div><div className="oc-ai-bubble"><Orbit /><div><strong>ORBHITA</strong><p>Gua bantu ubah instruksi jadi langkah yang bisa ditinjau. Hasilnya telah disiapkan; isi pesan dan lampiran belum dianalisis otomatis.</p><button onClick={() => {
                  setSent(chat.text);
                  open('draft');
                }}>Tinjau draf<Icon name="chevron" size={15} /></button><small>Konfirmasi tugas dulu, lalu tinjau dan konfirmasi jadwal.</small></div></div></React.Fragment>)}<div ref={chatEnd} /></div><div className="oc-chat-top"><div className="oc-assistant-icon"><Orbit /></div><p><strong>Mau mulai dari tugas yang mana?</strong><span>Ketik instruksi, kirim PDF, atau ceritakan lewat suara.</span></p><button onClick={() => {
            setMessage('Bantu susun langkah untuk laporan audit sistem informasi.');
            setNotice('Instruksi ditambahkan; tekan kirim untuk meninjau draf.');
          }}>Susun langkah<Icon name="spark" size={14} /></button></div>
 <div className="oc-composer">{attachment && <div className="oc-attachment"><Icon name="file" size={16} /><span>{attachment}</span><button onClick={() => setAttachment(null)} aria-label="Hapus lampiran">×</button></div>}{recording ? <div className="oc-recording"><i />Rekaman contoh · mikrofon tidak diakses<button onClick={sendVoice}>Selesai & lihat transkrip</button><button onClick={() => setRecording(false)} aria-label="Batalkan rekaman">×</button></div> : <textarea aria-label="Pesan untuk ORBHITA" placeholder="Tanyakan tugasmu atau tambahkan jadwal..." value={message} maxLength={10000} onChange={e => setMessage(e.target.value)} onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }} />}
 <div className="oc-composer-toolbar"><div className="oc-plus-wrap"><button className="oc-icon-button" aria-label="Tambahkan PDF atau gambar" onClick={() => setMenu(!menu)}><Icon name="plus" size={22} /></button>{menu && <div className="oc-attach-menu"><button onClick={() => file.current?.click()}><Icon name="file" size={17} />Pilih PDF / gambar</button><button onClick={() => {
                  setAttachment('instruksi-audit.pdf · contoh');
                  setMenu(false);
                }}><Icon name="spark" size={17} />Gunakan PDF</button><small>PDF ≤20 halaman/10 MB · JPG/PNG<br /></small></div>}</div><span className="oc-composer-hint">ORBHITA <span>· tugas & kegiatan</span></span><div className="oc-composer-right"><button className={'oc-icon-button ' + (recording ? 'recording' : '')} aria-label="Input suara contoh" onClick={() => setRecording(!recording)}><Icon name="mic" size={20} /></button><button className="oc-send" aria-label="Kirim pesan" onClick={submit}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5 M5 12l7-7 7 7" /></svg></button></div></div></div>
 <input ref={file} type="file" accept="application/pdf,image/png,image/jpeg" hidden onChange={e => upload(e.target.files?.[0])} /></footer></main>
  {detail && <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'white', overflow: 'auto', padding: '24px' }}><section className="oc-event-detail" style={{ border: 'none', borderRadius: 0, maxWidth: '100%', margin: '0 auto', boxShadow: 'none', padding: 0 }} role="dialog" aria-modal="true" aria-label="Detail kegiatan" onClick={e => e.stopPropagation()}><header style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 20 }}><span className={'oc-event-type ' + detail.type} style={{ margin: 0 }}>{TYPE[detail.type]}</span><button className="oc-dialog-close" onClick={() => setDetail(null)} aria-label="Tutup detail kegiatan" style={{ position: 'static' }}>×</button></header><h2>{detail.title}</h2><p>{detail.day} {MONTHS[month]} {year} · {detail.start}–{detail.end}</p><p>{detail.detail}</p><div className="oc-event-note">{detail.type === 'google' ? 'Acara dari luar ORBHITA hanya dibaca. Kelola perubahan di Google Calendar.' : 'Data contoh. Perubahan dan jadwal baru tetap perlu ditinjau serta dikonfirmasi.'}</div>{detail.type !== 'google' && <button className="oc-primary" onClick={() => {
          setDetail(null);
          open(detail.route);
        }}>{detail.type === 'session' ? 'Lihat langkah & progres' : 'Tinjau kegiatan'}<Icon name="chevron" size={17} /></button>}</section></div>}
  {drawer && <div className="oc-drawer-wrapper" style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#f8f6f3', display: 'flex', flexDirection: 'column' }}><div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>{sent && drawer === 'processing' && <div className="oc-sent-message" style={{ margin: '24px 24px 0', flexShrink: 0 }}>{sent}<small>{attachment ? 'Lampiran: ' + attachment : 'Pesan contoh · belum menjadi tugas tersimpan'}</small></div>}<div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}><OrbhitaApp key={drawer} start={drawer} compact={true} initialMessage={message || sent} onClose={() => setDrawer(null)} /></div></div></div>}
  </div>;
}
