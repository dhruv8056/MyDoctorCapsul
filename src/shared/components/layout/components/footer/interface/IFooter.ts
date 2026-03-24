// ─── Types ────────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: string; // iconify icon string
  href: string;
  ariaLabel: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Discover',
    links: [
      { label: 'Doctor', href: '#' },
      { label: 'Appointment', href: '#' }
    ]
  },
  {
    title: 'Pharmacy',
    links: [
      { label: 'Order', href: '#' },
      { label: 'Track', href: '#' }
    ]
  },
  {
    title: 'Diagnostics',
    links: [
      { label: 'Book Test', href: '#' },
      { label: 'Track', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Policies', href: '#' },
      { label: 'Disclaimer', href: '#' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Mail', href: '#' },
      { label: 'Chat', href: '#' }
    ]
  },
  {
    title: 'Mobile Apps',
    links: [
      { label: 'Android', href: '#' },
      { label: 'iOS', href: '#' }
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: 'mdi:instagram', href: '#', ariaLabel: 'Instagram' },
  { icon: 'mdi:facebook', href: '#', ariaLabel: 'Facebook' },
  { icon: 'mdi:linkedin', href: '#', ariaLabel: 'LinkedIn' },
  { icon: 'mdi:twitter', href: '#', ariaLabel: 'Twitter' }
];
