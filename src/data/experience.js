// ===== Experience timeline data =====
// type: 'work' | 'education' | 'military' | 'course'

export const experience = [
  {
    id: 'business-investor',
    type: 'work',
    period: '2024 – Present',
    title: 'Investor / Sales & Distribution',
    subtitle: 'Building Materials & Paint Distribution',
    summary:
      'Invested in a building material and paint distribution business, working with a 3–5 person team with peak monthly revenue of ~500M VND.',
    points: [
      'Invested in the business and directly handled sales and distribution of building materials.',
      'Distributed paint brands including Jotun, Dulux, Kansai and related products.',
      'Peak revenue of approximately 500 million VND/month.',
      'Worked with a team of 3–5 staff.',
      'Supervised approximately 6 construction projects/month.',
      'Consulted customers on products and solutions.',
      'Sourced, developed and cared for customers.',
      'Negotiated pricing and closed orders.',
      'Handled orders, inventory and after-sales operations.',
      'Coordinated with construction teams and tracked project progress.',
      'Supervised construction sites and resolved arising issues.',
    ],
  },
  {
    id: 'real-estate',
    type: 'work',
    period: 'Mid-2022 – 2024',
    title: 'Real Estate Sales',
    subtitle: 'Condotel & Commercial Apartments',
    summary:
      'Sold and consulted on real estate in the condotel and commercial apartment segment.',
    points: [
      'Consulted and sold real estate in the condotel and commercial apartment segment.',
      'Sourced and developed potential customers.',
      'Consulted on products and addressed customer needs.',
      'Followed customers through the entire sales process.',
      'Negotiated and handled customer concerns and objections.',
      'Built and maintained relationships with customers.',
    ],
  },
  {
    id: 'warehouse',
    type: 'work',
    period: '1 year',
    title: 'Warehouse Management',
    subtitle: 'Agricultural Products, Dry Goods & Beverages',
    summary: 'Managed warehouse operations for agricultural products, dry goods and beverages.',
    points: [
      'Managed warehouse operations.',
      'Handled goods receiving and issuing.',
      'Controlled inventory.',
      'Organized goods by product category.',
      'Coordinated with staff and related departments.',
      'Ensured accurate and systematic goods management.',
    ],
  },
  {
    id: 'military',
    type: 'military',
    period: '2020 – 2022',
    title: 'Military Service',
    subtitle: '',
    summary: 'Completed national military service.',
    points: [],
  },
  {
    id: 'fpt',
    type: 'course',
    period: '6 months',
    title: 'FPT Programming Course',
    subtitle: 'Web Development Foundation',
    summary: 'Completed a programming course at FPT with foundational Web Development knowledge.',
    points: [],
  },
  {
    id: 'education',
    type: 'education',
    period: '2015 – 2019',
    title: 'Posts and Telecommunications Institute of Technology',
    subtitle: 'Business Administration – Accounting',
    summary: 'Bachelor program in Business Administration, major in Accounting.',
    points: [],
  },
]

// Timeline mốc tổng hợp (hiển thị dọc theo thời gian)
export const timeline = [
  { period: '2024 – Present', label: 'Building Materials Distribution', type: 'work' },
  { period: 'Mid-2022 – 2024', label: 'Real Estate Sales', type: 'work' },
  { period: '2022', label: 'FPT Programming Course', type: 'course' },
  { period: '2020 – 2022', label: 'Military Service', type: 'military' },
  { period: '2015 – 2019', label: 'Education', type: 'education' },
]
