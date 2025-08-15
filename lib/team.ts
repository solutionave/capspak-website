export interface TeamMember {
  id: string;
  name: string;
  role: string;
  unit?: string;
  bio?: string;
  headshot?: string;
  email?: string;
  linkedin?: string;
}

export interface GovernanceBody {
  id: string;
  title: string;
  description?: string;
  members: TeamMember[];
}

export const leadership: TeamMember[] = [
  { id: 'tm-exec-dir', name: 'Dr. Ayesha Khan', role: 'Executive Director', bio: 'Leads overall strategy & external engagement.', headshot: '/vercel.svg' },
  { id: 'tm-policy-head', name: 'Imran Siddiqui', role: 'Head of Policy Research', bio: 'Oversees cross-domain policy analysis & publications.', headshot: '/globe.svg' },
];

export const researchFellows: TeamMember[] = [
  { id: 'tm-fellow-aero', name: 'Sara Malik', role: 'Fellow – Aerospace & Space', unit: 'Aerospace Futures', headshot: '/window.svg' },
  { id: 'tm-fellow-stability', name: 'Omar Qureshi', role: 'Fellow – Strategic Stability', unit: 'Strategic Stability', headshot: '/next.svg' },
  { id: 'tm-fellow-ind', name: 'Hiba Raza', role: 'Fellow – Industrial Base', unit: 'Industrial Base', headshot: '/file.svg' },
];

export const advisoryBoard: TeamMember[] = [
  { id: 'tm-adv-1', name: 'Lt. Gen. (R) Farooq Ahmed', role: 'Advisory Board Member', bio: 'Strategic affairs & defence modernisation.' },
  { id: 'tm-adv-2', name: 'Prof. Nadia Rehman', role: 'Advisory Board Member', bio: 'Technology governance & ethics.' },
];

export const governanceBodies: GovernanceBody[] = [
  { id: 'gb-board', title: 'Advisory Board', description: 'Provides strategic guidance, integrity oversight & horizon scanning on emerging risks.', members: advisoryBoard },
  { id: 'gb-exec', title: 'Executive Leadership', description: 'Accountable for implementation, partnerships and resource stewardship.', members: leadership },
];

export function getAllTeam(): TeamMember[] { return [...leadership, ...researchFellows, ...advisoryBoard]; }
