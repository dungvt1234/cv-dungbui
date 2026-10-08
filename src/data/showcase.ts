// Khung prompt nguyên văn + nội dung thật của Bùi Tuấn Dũng

export const HLS_URL =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const hero = {
  eyebrow: "COLLECTION '26",
  name: "Bùi Tuấn Dũng",
  rolePrefix: "Nhận trọn phần",
  roleSuffix: ".",
  roles: ["Website & Webapp", "AI Automation", "Giải pháp số"],
  description:
    "Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.",
  summaryVi:
    "Tôi kết hợp kinh nghiệm kinh doanh thực tế với phát triển website, webapp và ứng dụng AI để giải quyết bài toán vận hành. Sẵn sàng cộng tác dự án freelance và cơ hội Web / AI Automation phù hợp.",
  email: "buituandung1405@gmail.com",
  phone: "0974 984 301",
  phoneHref: "tel:+84974984301",
  location: "Việt Nam",
  status: "Open to freelance projects & technology opportunities",
  cvFile: "/Bui-Tuan-Dung-CV.pdf",
};

export type Work = {
  title: string;
  en: string;
  category: string;
  image: string;
  link: string;
  span: string;
};

export const works: Work[] = [
  {
    title: "Mầm non Bình Minh",
    en: "Jamstack Website & Headless CMS",
    category: "Web · CMS · SEO/GEO",
    image: "/assets/projects/p10-kindergarten.jpg",
    link: "https://binhminhkindergarten.site",
    span: "md:col-span-7",
  },
  {
    title: "Hi Medical Skincare",
    en: "Luxury Spa Website & Content Hub",
    category: "Next.js · Luxury UI",
    image: "/assets/projects/p-himedical.jpg",
    link: "https://www.himedicalskin.com/journal",
    span: "md:col-span-5",
  },
  {
    title: "Verdant Estates",
    en: "BĐS cao cấp cinematic",
    category: "Next.js · Cinematic",
    image: "/assets/projects/p12-cinematic-estate.jpg",
    link: "https://cinematic-estate.vercel.app",
    span: "md:col-span-5",
  },
  {
    title: "Mộc Không",
    en: "Nội thất gỗ tự nhiên",
    category: "Web · Storytelling",
    image: "/assets/projects/p11-moc-khong.jpg",
    link: "/work",
    span: "md:col-span-7",
  },
];

export type JournalEntry = {
  title: string;
  image: string;
  readTime: string;
  date: string;
  link: string;
};

export const journal: JournalEntry[] = [
  {
    title: "Webapp POS cho quán F&B bằng AI",
    image: "/assets/projects/p7-lalamoon-pos.jpg",
    readTime: "4 phút đọc",
    date: "2025",
    link: "/work",
  },
  {
    title: "Video content TikTok/Reels bằng AI",
    image: "/assets/projects/p8-content-creator.jpg",
    readTime: "3 phút đọc",
    date: "2025",
    link: "/work",
  },
  {
    title: "Ảnh sản phẩm studio bằng AI",
    image: "/assets/projects/p2-ai-image.jpg",
    readTime: "3 phút đọc",
    date: "2025",
    link: "/work",
  },
  {
    title: "Webapp quản lý sản xuất Node.js",
    image: "/assets/projects/p9-manufacturing.png",
    readTime: "5 phút đọc",
    date: "2024",
    link: "/work",
  },
];

export const explorations = [
  { image: "/assets/projects/p1-ai-video.jpg", title: "AI Video" },
  { image: "/assets/projects/p3-banner.jpg", title: "Banner" },
  { image: "/assets/projects/p4-marketing.jpg", title: "Marketing" },
  { image: "/assets/projects/p5-web.jpg", title: "Fairy Luxury" },
  { image: "/assets/projects/p6-soyzi-web.jpg", title: "Soyzi" },
  { image: "/assets/projects/p14-medical-news.jpg", title: "Medical News" },
];

export const stats = [
  { value: "Web", label: "Website & ứng dụng" },
  { value: "AI", label: "Automation & tích hợp" },
  { value: "Sales", label: "Kinh nghiệm kinh doanh" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/dungvt1234" },
  { label: "Facebook", href: "https://www.facebook.com/share/1HWnsgxDx7/?mibextid=wwXIfr" },
  { label: "Email", href: "mailto:buituandung1405@gmail.com" },
];
