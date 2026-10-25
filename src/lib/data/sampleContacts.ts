import { Contact } from '@/types/database';

export interface SampleContactEntry {
  first_name: string;
  last_name?: string;
  email: string;
  company: string;
  role: string;
  website?: string;
  location?: string;
}

export type FirmCategory = 'big4' | 'top10' | 'top20' | 'big10' | 'midsize' | 'smallsize';

export interface FirmCategoryInfo {
  id: FirmCategory;
  name: string;
  shortName: string;
  badge: string;
  badgeColor: string;
  icon: string;
  description: string;
  highlightFirms: string;
  contacts: SampleContactEntry[];
  filename: string;
}

// 1. Big 4 Contacts (14 verified HR entries)
const BIG4_CONTACTS: SampleContactEntry[] = [
  { first_name: 'HR', last_name: '', email: 'debotreebagchi@kpmg.com', company: 'KPMG', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'smrithipradeep@kpmg.com', company: 'KPMG', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'kripathakkar@kpmg.com', company: 'KPMG', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'vimpy@kpmg.com', company: 'KPMG', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'divyapriyambada@bsraffiliates.com', company: 'KPMG', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'Shifabano.shaikh@pwc.com', company: 'PwC', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'snehal.ramu.chougale.tpr@pwc.com', company: 'PwC', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'Mihir.Sardal@in.ey.com', company: 'EY', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'dipanshu.singla@in.ey.com', company: 'EY', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'chinmay.karambelkar@in.ey.com', company: 'EY', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'aman.nischal@in.ey.com', company: 'EY', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'rirajput@deloitte.com', company: 'Deloitte', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'kadhikary@deloitte.com', company: 'Deloitte', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'jpradhan@deloitte.com', company: 'Deloitte', role: 'HR' },
];

// 2. Additional Top 10 Contacts (15 entries -> total 29)
const TOP10_ADDITIONAL_CONTACTS: SampleContactEntry[] = [
  { first_name: 'HR', last_name: '', email: 'abhisheksankpal@bdo.in', company: 'BDO', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'Payalanand@bdo.in', company: 'BDO', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'krishagoradia@bdo.in', company: 'BDO', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'SwatiDeshmukh@bdo.in', company: 'BDO', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'monikakonde@bdo.in', company: 'BDO', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'Sova.Bhatt@IN.GT.COM', company: 'Grant Thornton (GT)', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'Heer.Mehta@IN.GT.COM', company: 'Grant Thornton (GT)', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'shilpa.v@in.gt.com', company: 'Grant Thornton (GT)', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'emails@rsmindia.in', company: 'RSM India', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hr4@rsmindia.in', company: 'RSM India', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hr@rsmindia.in', company: 'RSM India', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hrd@sskmin.com', company: 'SS Kothari Mehta & Co.', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'mis@sskmin.com', company: 'SS Kothari Mehta & Co.', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'career.india@protivitiglobal.in', company: 'Protiviti India', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hr@mazars.co.in', company: 'Forvis Mazars India (source labels: Mazars)', role: 'HR' },
];

// 3. Additional Top 20 Contacts (15 entries -> total 44)
const TOP20_ADDITIONAL_CONTACTS: SampleContactEntry[] = [
  { first_name: 'HR', last_name: '', email: 'hr@nangia.com', company: 'Nangia & Co. LLP', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hrd@nangia.com', company: 'Nangia & Co. LLP', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'lodhahrd@gmail.com', company: 'Lodha & Co.', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hrd@lodhagroup.com', company: 'Lodha & Co.', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'recruitment@snbindia.com', company: 'Sahni Natarajan & Bahl (SNB)', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'taxvacancy@llca.net', company: 'Luthra & Luthra LLP', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hr@llca.net', company: 'Luthra & Luthra LLP', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'shaquibwasif@trchadha.com', company: 'TR Chadha & Co. LLP', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'pradhan.dass@dhc.co.in', company: 'Desai Haribhakti & Co.', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hr@cas.ind.in', company: 'Chaturvedi & Shah', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'sharanya.maitra@nexdigm.com', company: 'Nexdigm', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'mumbaihr@sharpandtannan.com', company: 'Sharp & Tannan', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'hr@spchopra.co.in', company: 'SP Chopra & Co.', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'contact@spchopra.com', company: 'SP Chopra & Co.', role: 'HR' },
  { first_name: 'HR', last_name: '', email: 'people@spchopra.com', company: 'SP Chopra & Co.', role: 'HR' },
];

const TOP10_CONTACTS: SampleContactEntry[] = [...BIG4_CONTACTS, ...TOP10_ADDITIONAL_CONTACTS];
const TOP20_CONTACTS: SampleContactEntry[] = [...TOP10_CONTACTS, ...TOP20_ADDITIONAL_CONTACTS];

export const ARTICLES_CSV_CATEGORIES: FirmCategoryInfo[] = [
  {
    id: 'big4',
    name: "Big 4 Accounting Firms (KPMG, PwC, EY, Deloitte)",
    shortName: "Big 4 Firms",
    badge: "14 Verified HRs",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "🏢",
    description: "Verified HR and recruiter contacts across the Big 4 accounting firms for CA Articleship in Statutory Audit & Tax.",
    highlightFirms: "KPMG, PwC, EY, Deloitte",
    filename: "Articlo_Big4.csv",
    contacts: BIG4_CONTACTS,
  },
  {
    id: 'top10',
    name: "Top 10 CA Firms (Big 4 + BDO, GT, RSM, Mazars & more)",
    shortName: "Top 10 Firms",
    badge: "29 Verified HRs",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    icon: "🏆",
    description: "Verified HR and recruiter contacts across Top 10 CA accounting and advisory firms in India.",
    highlightFirms: "Big 4 + BDO, Grant Thornton, RSM, Mazars, Protiviti, SS Kothari",
    filename: "Articlo_Top10.csv",
    contacts: TOP10_CONTACTS,
  },
  {
    id: 'top20',
    name: "Top 20 CA Firms (Full 44-Lead Directory)",
    shortName: "Top 20 Firms",
    badge: "44 Verified HRs",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "⭐",
    description: "Comprehensive preloaded directory of verified HR recruitment contacts across the Top 20 CA firms.",
    highlightFirms: "Top 10 + Nangia, Lodha, SNB, Luthra & Luthra, TR Chadha, DHC, Nexdigm, Sharp & Tannan, SP Chopra",
    filename: "Articlo_Top20_Firms.csv",
    contacts: TOP20_CONTACTS,
  },
];

// Flat list of demonstration contacts for preview
export const RAW_50_SAMPLE_CONTACTS: SampleContactEntry[] = TOP20_CONTACTS;

/**
 * Returns formatted contacts for a specific category template.
 */
export function getCategoryContacts(
  categoryId: FirmCategory = 'big4',
  campaignId: string = 'sample-camp-1',
  userId: string = 'user-1'
): Contact[] {
  const catInfo =
    ARTICLES_CSV_CATEGORIES.find((c) => c.id === categoryId) ||
    (categoryId === 'big10' ? ARTICLES_CSV_CATEGORIES.find((c) => c.id === 'top10') : null) ||
    ARTICLES_CSV_CATEGORIES[0];

  return catInfo.contacts.map((item, idx) => ({
    id: `preload-${catInfo.id}-${idx + 1}`,
    campaign_id: campaignId,
    user_id: userId,
    email: item.email,
    first_name: item.first_name,
    last_name: item.last_name || '',
    company: item.company,
    role: item.role,
    status: 'pending',
    sent_at: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));
}

/**
 * Returns sample contacts matching the Contact interface.
 */
export function getSample50Contacts(campaignId: string = 'sample-camp-1', userId: string = 'user-1'): Contact[] {
  const top20Cat = ARTICLES_CSV_CATEGORIES.find((c) => c.id === 'top20') || ARTICLES_CSV_CATEGORIES[0];
  return top20Cat.contacts.map((item, idx) => ({
    id: `preload-contact-${idx + 1}`,
    campaign_id: campaignId,
    user_id: userId,
    email: item.email,
    first_name: item.first_name,
    last_name: item.last_name || '',
    company: item.company,
    role: item.role,
    status: 'pending',
    sent_at: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));
}

/**
 * Generates CSV string for a specific category template matching the exact format of user-provided CSV files.
 */
export function generateCategoryCSVString(category: FirmCategory): string {
  const catInfo =
    ARTICLES_CSV_CATEGORIES.find((c) => c.id === category) ||
    (category === 'big10' ? ARTICLES_CSV_CATEGORIES.find((c) => c.id === 'top10') : null) ||
    ARTICLES_CSV_CATEGORIES[0];

  const headers = ['EMAIL', 'FIRST NAME', 'COMPANY', 'ROLE'];
  const rows = catInfo.contacts.map((c) => [
    `"${c.email}"`,
    `"${c.first_name}"`,
    `"${c.company}"`,
    `"${c.role}"`,
  ].join(','));
  return [headers.join(','), ...rows].join('\n');
}

/**
 * Downloads the demonstration CSV file for a specific template.
 */
export function downloadCategoryCSV(category: FirmCategory): void {
  if (typeof window === 'undefined') return;
  const catInfo =
    ARTICLES_CSV_CATEGORIES.find((c) => c.id === category) ||
    (category === 'big10' ? ARTICLES_CSV_CATEGORIES.find((c) => c.id === 'top10') : null) ||
    ARTICLES_CSV_CATEGORIES[0];

  const csvContent = generateCategoryCSVString(catInfo.id);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', catInfo.filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Default sample template download (downloads Top 20 firms list).
 */
export function downloadSampleCSVFile(): void {
  downloadCategoryCSV('top20');
}
