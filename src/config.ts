/**
 * Site-wide settings.
 *
 * This is the one non-Markdown file worth editing. Change the values between
 * the quotes. Longer prose (about text, experience, education) lives as
 * Markdown files in the `src/content/` folder.
 */
export const site = {
  // Shown large at the top of the page and in the browser tab.
  name: 'Tushara Chada',

  // Full legal name — used for the page footer and SEO metadata.
  fullName: 'Venkatasai Poorna Tushara Chada',

  // A short line under the name, e.g. your title or focus.
  role: 'Supply Chain & Business Analyst',

  // One or two sentences. Shown right below the role.
  tagline:
    'Three-plus years turning procurement and logistics data into faster cycles, cleaner spend, and decisions leadership can act on.',

  // Portrait shown in the header. File lives in the `public/` folder.
  // Leave '' to hide the photo.
  photo: '/tushara.jpeg',

  // Where you're based. Shown in the header. Leave '' to hide.
  location: 'Boston, MA',

  // Your contact email. Leave as '' to hide the email link.
  email: 'vsptusharachada@gmail.com',

  // Optional link to a resume/CV PDF placed in the `public/` folder.
  // e.g. put resume.pdf in public/ and set this to '/resume.pdf'. Leave '' to hide.
  resumeUrl: '',

  // Social / external links. Delete any you don't want, or add your own.
  links: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/venkatasai-poorna-tushara-chada-620669200/',
    },
  ],
};

/**
 * Skills, grouped by area. Edit the lists below or add a new group.
 */
export const skillGroups = [
  {
    group: 'Supply Chain & Operations',
    items: [
      'End-to-End Supply Chain Management',
      'Demand Forecasting',
      'Inventory Optimization',
      'Procure-to-Pay (P2P)',
      'Three-Way Match Reconciliation',
      'Supplier Performance Management',
      'Vendor Onboarding',
      'Order Management',
      'Logistics Coordination',
      'OTD & Fill Rate Monitoring',
      'S&OP Support',
      'Cycle Time Reduction',
      'Process Improvement',
      'Gap Analysis',
      'Lean Six Sigma Awareness',
    ],
  },
  {
    group: 'Analytics & Reporting',
    items: [
      'KPI Dashboard Development',
      'Spend Analysis',
      'Variance Analysis',
      'Demand & Supply Planning',
      'Financial Modeling',
      'Forecasting & Budgeting',
      'Root Cause Analysis',
      'Cost Reduction Analysis',
    ],
  },
  {
    group: 'Data & Tools',
    items: [
      'SQL (Advanced)',
      'Python (Pandas, NumPy)',
      'ETL (Fivetran, dbt, Snowflake)',
      'Advanced Excel (Macros, VBA, Pivot Tables, Lookups)',
      'Power BI',
      'Tableau',
      'Apache Superset',
    ],
  },
  {
    group: 'ERP & Systems',
    items: [
      'Workday',
      'Jaggaer',
      'SAP (familiar)',
      'Oracle (familiar)',
      'Banner',
      'SharePoint',
      'Power Automate',
      'ServiceNow',
      'Microsoft Dynamics (familiar)',
    ],
  },
  {
    group: 'Project Management',
    items: [
      'Agile/Scrum',
      'JIRA',
      'Confluence',
      'Requirements Gathering',
      'Cross-Functional Stakeholder Management',
      'UAT Coordination',
      'Process Mapping',
      'Workflow Documentation',
    ],
  },
];

/**
 * Certifications and training. Edit or add lines as needed.
 */
export const certifications = [
  'Microsoft Office Specialist (MOS) — Excel Expert (in progress)',
  'Tableau Desktop Specialist',
  'Power BI Expert (DataCamp)',
  'SQL Expert (DataCamp + LeetCode SQL50)',
];

export const training = [
  'Supply Chain & Logistics Finance Fundamentals (Coursera)',
  'Power BI Data Analyst Associate (Microsoft Learn)',
  'Lean Six Sigma Awareness',
  'Agile/Scrum Methodology',
];
