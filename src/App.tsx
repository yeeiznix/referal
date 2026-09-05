import { useState } from 'react';
import {
  Bell,
  Check,
  ChevronRight,
  Clipboard,
  Gift,
  Home,
  Instagram,
  Menu,
  MoreHorizontal,
  Rocket,
  ShieldCheck,
  Share2,
  ShoppingBag,
  UserRound,
  Users,
  Wallet,
  X,
  FileText,
} from 'lucide-react';

type IconComponent = typeof Home;

type Referral = {
  name: string;
  detail: string;
  status: 'Berhasil' | 'Menunggu';
  amount: string;
  avatar: string;
  tone: string;
};

const referrals: Referral[] = [
  { name: 'Dimas Pratama', detail: 'Bergabung  •  2 jam yang lalu', status: 'Berhasil', amount: '+Rp50.000', avatar: 'DP', tone: 'avatar-purple' },
  { name: 'Siti Aisyah', detail: 'Bergabung  •  1 hari yang lalu', status: 'Berhasil', amount: '+Rp50.000', avatar: 'SA', tone: 'avatar-coral' },
  { name: 'Rizky Andika', detail: 'Verifikasi  •  2 hari yang lalu', status: 'Menunggu', amount: '-', avatar: 'RA', tone: 'avatar-blue' },
];

const steps: { icon: IconComponent; number: string; title: string; description: string; tone: string }[] = [
  { icon: Share2, number: '01', title: 'Bagikan Kode', description: 'Bagikan kode referral\nkamu ke teman.', tone: 'step-purple' },
  { icon: UserRound, number: '02', title: 'Teman Mendaftar', description: 'Teman mendaftar\nmenggunakan kode\nreferral kamu.', tone: 'step-blue' },
  { icon: FileText, number: '03', title: 'Selesaikan Syarat', description: 'Teman menyelesaikan\nsyarat yang ditentukan\ndalam program.', tone: 'step-orange' },
  { icon: Gift, number: '04', title: 'Dapatkan Reward', description: 'Reward akan diberikan\nsetelah referral berhasil\ndiverifikasi.', tone: 'step-green' },
];

function App() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('Referral');
  const [showTerms, setShowTerms] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard?.writeText('REF250K');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'Referral Reward', text: 'Gunakan kode referral REF250K dan dapatkan reward!' });
    } else {
      await copyCode();
    }
  };

  return (
    <div className="app-shell">
      <header className="topbar page-width">
        <button className="icon-button" aria-label="Buka menu"><Menu size={28} strokeWidth={2.2} /></button>
        <h1>Referral</h1>
        <button className="icon-button notification" aria-label="Notifikasi"><Bell size={27} strokeWidth={2} /><span /></button>
      </header>

      <main className="page-width content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Program Spesial Untukmu</p>
            <h2>Ajak Teman,<br />Dapatkan Reward<br /><span>hingga</span></h2>
            <div className="reward-amount">Rp250.000</div>
            <p className="hero-description">Undang temanmu dan dapatkan<br className="desktop-only" /> reward untuk setiap referral yang berhasil!</p>
            <button className="primary-button" onClick={share}><Rocket size={20} fill="currentColor" /> Undang Teman Sekarang</button>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="confetti c1">◆</div><div className="confetti c2">◆</div><div className="confetti c3">◆</div><div className="confetti c4">◆</div>
            <div className="character character-left"><div className="hair brown" /><div className="face"><i /><i /><b /></div><div className="hoodie purple" /><div className="arm" /><div className="phone" /></div>
            <div className="character character-right"><div className="hair dark" /><div className="face"><i /><i /><b /></div><div className="hoodie yellow" /><div className="thumb">✦</div></div>
            <div className="coin coin-top">Rp</div><div className="coin coin-bottom">Rp</div>
            <div className="reward-sign"><strong>TOTAL REWARD</strong><b>Rp250.000</b></div>
            <div className="gift-box"><span /></div>
          </div>
        </section>

        <section className="card code-card">
          <div className="code-area"><h3>Kode Referral Kamu</h3><div className="code-row"><div className="code-box">REF250K <Clipboard size={21} /></div><button className="copy-button" onClick={copyCode}>{copied ? <Check size={20} /> : <Clipboard size={20} />} {copied ? 'Tersalin' : 'Salin'}</button></div></div>
          <div className="divider" />
          <div className="share-area"><h3>Bagikan lewat</h3><div className="socials"><button className="social whatsapp" aria-label="Bagikan ke WhatsApp" onClick={share}>◔</button><button className="social instagram" aria-label="Bagikan ke Instagram"><Instagram size={25} /></button><button className="social facebook" aria-label="Bagikan ke Facebook">f</button><button className="social more" aria-label="Pilihan lainnya"><MoreHorizontal size={24} /></button></div></div>
        </section>

        <section className="card progress-card"><div className="section-heading"><h3>Progress Referral</h3><span>3 / 5 referral berhasil <span className="help">?</span></span></div><div className="progress-row"><div className="progress-track"><div className="progress-fill" /></div><b>60%</b></div><div className="metric-row"><Metric icon={Wallet} label="Reward Terkumpul" value="Rp150.000" tone="purple" /><div className="metric-divider" /><Metric icon={Gift} label="Potensi Reward Berikutnya" value="Rp100.000" tone="orange" /></div></section>

        <section className="card how-card"><h3>Cara Mendapatkan Reward</h3><div className="steps">{steps.map(({ icon: StepIcon, number, title, description, tone }) => <div className="step" key={number}><div className={`step-icon ${tone}`}><StepIcon size={27} /></div><span className="step-number">{number}</span><strong>{title}</strong><p>{description}</p></div>)}</div></section>

        <section className="card latest-card"><div className="section-heading latest-heading"><h3>Referral Terbaru</h3><button>Lihat Semua <ChevronRight size={18} /></button></div><div className="referral-list">{referrals.map((referral) => <div className="referral-item" key={referral.name}><div className={`avatar ${referral.tone}`}>{referral.avatar}</div><div className="referral-info"><strong>{referral.name}</strong><span>{referral.detail}</span></div><span className={`status ${referral.status === 'Berhasil' ? 'success' : 'pending'}`}>{referral.status}</span><b className={referral.status === 'Berhasil' ? 'amount-success' : 'amount-pending'}>{referral.amount}</b></div>)}</div></section>

        <button className="terms-card" onClick={() => setShowTerms(true)}><span className="terms-icon"><ShieldCheck size={25} /></span><span><strong>Syarat & Ketentuan</strong><small>Reward diberikan setelah referral memenuhi syarat dan ketentuan yang berlaku.</small></span><ChevronRight size={24} /></button>
      </main>

      <nav className="bottom-nav"><NavItem icon={Home} label="Beranda" active={activeTab === 'Beranda'} onClick={() => setActiveTab('Beranda')} /><NavItem icon={FileText} label="Aktivitas" active={activeTab === 'Aktivitas'} onClick={() => setActiveTab('Aktivitas')} /><NavItem icon={Users} label="Referral" active={activeTab === 'Referral'} onClick={() => setActiveTab('Referral')} featured /><NavItem icon={Gift} label="Reward" active={activeTab === 'Reward'} onClick={() => setActiveTab('Reward')} /><NavItem icon={UserRound} label="Akun" active={activeTab === 'Akun'} onClick={() => setActiveTab('Akun')} /></nav>

      {showTerms && <div className="modal-backdrop" onClick={() => setShowTerms(false)}><div className="terms-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowTerms(false)}><X size={20} /></button><div className="modal-icon"><ShieldCheck size={30} /></div><h2>Syarat & Ketentuan</h2><p>Referral berhasil setelah temanmu mendaftar menggunakan kode REF250K dan menyelesaikan proses verifikasi.</p><p>Reward akan masuk ke saldo setelah semua persyaratan terpenuhi. Maksimal reward yang bisa didapatkan adalah Rp250.000.</p><button className="primary-button modal-button" onClick={() => setShowTerms(false)}>Saya Mengerti</button></div></div>}
    </div>
  );
}

function Metric({ icon: Icon, label, value, tone }: { icon: IconComponent; label: string; value: string; tone: 'purple' | 'orange' }) {
  return <div className="metric"><span className={`metric-icon ${tone}`}><Icon size={28} /></span><div><span>{label}</span><strong className={tone}>{value}</strong></div></div>;
}

function NavItem({ icon: Icon, label, active, featured, onClick }: { icon: IconComponent; label: string; active: boolean; featured?: boolean; onClick: () => void }) {
  return <button className={`nav-item ${active ? 'active' : ''} ${featured ? 'featured' : ''}`} onClick={onClick}><span className="nav-icon"><Icon size={featured ? 24 : 25} /></span><span>{label}</span></button>;
}

export default App;
