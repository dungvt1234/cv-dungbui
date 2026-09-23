// ===== Portfolio projects data =====
// category: 'AI VIDEO' | 'AI IMAGE' | 'BANNER' | 'MARKETING' | 'WEB'

export const portfolioCategories = ['ALL', 'WEB', 'AI VIDEO', 'AI IMAGE', 'BANNER', 'MARKETING']

export const projects = [
  {
    id: 'p-dawn',
    featured: true,
    title: 'Hệ thống Website & Headless CMS — Mầm non Bình Minh (DAWN)',
    category: 'WEB',
    image: '/assets/projects/p10-kindergarten.jpg',
    description:
      'Hệ thống website trường mầm non xây dựng theo kiến trúc Jamstack hiện đại với 15+ trang chuyên sâu (Montessori, STEAM, Dinh dưỡng, Học phí, Tuyển sinh, FAQ). Tích hợp Decap CMS qua Cloudflare Workers OAuth giúp nhà trường tự đăng/sửa bài viết mà chi phí máy chủ 0đ/tháng. Tối ưu toàn diện SEO On-page, cấu trúc dữ liệu Schema.org và chuẩn GEO (Generative Engine Optimization với llms.txt) đón đầu các công cụ tìm kiếm AI.',
    tools: ['Jamstack', 'Decap CMS', 'Cloudflare Workers', 'Tailwind CSS', 'SEO & GEO (llms.txt)'],
    link: 'https://binhminhkindergarten.site',
    github: 'https://github.com/dungvt1234/dawn-v6-demo',
    highlights: [
      'Kiến trúc Serverless Jamstack + Decap CMS: Nhà trường tự quản trị tin tức, chi phí duy trì hosting/server 0đ.',
      'Cloudflare Workers OAuth: Xây dựng cổng xác thực riêng bảo mật cho ban quản trị qua GitHub OAuth.',
      'Tiên phong chuẩn GEO (Generative Engine Optimization): Tích hợp llms.txt và Schema.org Preschool cho AI search engines (ChatGPT, Perplexity, Gemini).',
      'Hiệu năng tối đa: Preload LCP hero, tối ưu font WOFF2, 100% ảnh chuẩn WebP, tải tức thì.',
      'Quy chuẩn xuất bản 38-CHECK: Bộ tiêu chí kiểm duyệt nội dung khắt khe, không bịa fact, chuẩn cấu trúc SEO.'
    ],
  },
  {
    id: 'p-himedical',
    featured: true,
    title: 'Website Luxury Spa & Content Hub — Hi Medical Skincare',
    category: 'WEB',
    image: '/assets/projects/p-himedical.jpg',
    description:
      'Website thương hiệu cao cấp và Content Hub cho thẩm mỹ viện & spa chuẩn y khoa Hi Medical. Xây dựng trên nền tảng Next.js App Router với phong cách thiết kế Luxury Beauty (Cormorant Garamond + Manrope, tone tím lavender & ánh kim gold). Tích hợp trung tâm tin tức chuẩn SEO, chuyển đổi hiển thị Grid/List, marquee text động, chatbot tư vấn và tối ưu chuyển đổi đặt lịch hẹn.',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Schema.org SEO', 'Luxury UI/UX'],
    link: 'https://www.himedicalskin.com/journal',
    highlights: [
      'Kiến trúc Next.js App Router với React Server Components: Tốc độ tải trang siêu nhanh, tối ưu hóa công cụ tìm kiếm.',
      'Thiết kế phong cách Luxury Beauty: Tông tím lavender & ánh kim gold, typography Cormorant Garamond quý phái.',
      'Content Hub & SEO y khoa: Hệ thống bài viết chuyên sâu, thanh lọc danh mục, bộ chuyển đổi chế độ xem Grid / List linh hoạt.',
      'Tối ưu chuyển đổi (CRO): Trợ lý ảo tư vấn nổi với bong bóng gợi ý, thanh marquee tin tức động và nút CTA đặt lịch hẹn cố định.',
      'Dữ liệu có cấu trúc Schema.org: Khai báo HealthAndBeautyBusiness hoàn chỉnh hỗ trợ Local SEO Google Maps.'
    ],
  },
  {
    id: 'p1',
    title: 'Video quảng cáo sản phẩm bằng AI',
    category: 'AI VIDEO',
    image: '/assets/projects/p1-ai-video.jpg',
    description:
      'Video quảng cáo sản phẩm dạng ngắn được tạo bằng AI. Kịch bản, lồng tiếng và hình ảnh đều sản xuất bằng công cụ AI để quảng bá sản phẩm nhanh chóng, tiết kiệm chi phí.',
    tools: ['Công cụ tạo Video AI', 'Lồng tiếng AI', 'Kịch bản AI'],
    link: '#',
  },
  {
    id: 'p2',
    title: 'Creative sản phẩm bằng AI',
    category: 'AI IMAGE',
    image: '/assets/projects/p2-ai-image.jpg',
    description:
      'Ảnh sản phẩm được tạo và chỉnh sửa bằng AI — creative chất lượng studio cho thương mại điện tử, mạng xã hội và quảng cáo mà không cần buổi chụp hình thực tế.',
    tools: ['Công cụ tạo Ảnh AI', 'Chỉnh sửa bằng AI'],
    link: '#',
  },
  {
    id: 'p3',
    title: 'Banner mạng xã hội',
    category: 'BANNER',
    image: '/assets/projects/p3-banner.jpg',
    description:
      'Banner quảng cáo thiết kế cho thương hiệu — bố cục sạch sẽ, hệ thống thị giác mạnh, sẵn sàng cho các chiến dịch mạng xã hội.',
    tools: ['Thiết kế bằng AI', 'Bố cục Banner'],
    link: '#',
  },
  {
    id: 'p4',
    title: 'Chiến dịch Marketing',
    category: 'MARKETING',
    image: '/assets/projects/p4-marketing.jpg',
    description:
      'Ý tưởng và kế hoạch chiến dịch Marketing được xây dựng bằng AI — định hướng nội dung, nhắm đúng đối tượng và concept sáng tạo cho chiến dịch ra mắt sản phẩm.',
    tools: ['AI Marketing', 'Lập kế hoạch nội dung'],
    link: '#',
  },
  {
    id: 'p5',
    title: 'Phát triển Web cá nhân',
    category: 'WEB',
    image: '/assets/projects/p5-web.jpg',
    description:
      'Website / landing page xây dựng cho thương hiệu — responsive, nhanh, thiết kế hiện đại. Ví dụ trực tiếp: landing page thương mại điện tử Fairy Luxury.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://fairy-luxury-website.vercel.app',
  },
  {
    id: 'p6',
    title: 'Website thương hiệu Soyzi',
    category: 'WEB',
    image: '/assets/projects/p6-soyzi-web.jpg',
    description:
      'Website thương hiệu cho Soyzi — sữa chua tự nhiên cao cấp. Thiết kế hiện đại, responsive, truyền tải hình ảnh sản phẩm tươi sạch và thông tin thương hiệu rõ ràng.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://soyzi-website.vercel.app',
  },
  {
    id: 'p7',
    title: 'Webapp bán hàng (POS) bằng AI',
    category: 'WEB',
    image: '/assets/projects/p7-lalamoon-pos.jpg',
    video: '/assets/projects/p7-lalamoon-pos.mp4',
    description:
      'Video demo webapp quản lý bán hàng (POS) được tạo bằng AI — chọn món, tính tiền, quản lý đơn hàng và nhân viên. Giao diện trực quan, thao tác nhanh, phù hợp cho quán F&B.',
    tools: ['AI', 'Webapp', 'POS'],
    link: '#',
  },
  {
    id: 'p8',
    title: 'Video Content Creator',
    category: 'AI VIDEO',
    image: '/assets/projects/p8-content-creator.jpg',
    video: '/assets/projects/p8-content-creator.mp4',
    description:
      'Video content ngắn theo xu hướng cho thương hiệu — ý tưởng kịch bản, hình ảnh và âm thanh được xử lý bằng AI, sẵn sàng đăng TikTok / Reels / Shorts để tăng tương tác và nhận diện thương hiệu.',
    tools: ['AI Video', 'Kịch bản AI', 'Âm thanh AI'],
    link: '#',
  },
  {
    id: 'p9',
    title: 'Webapp quản lý sản xuất',
    category: 'WEB',
    image: '/assets/projects/p9-manufacturing.png',
    description:
      'Webapp quản lý cho doanh nghiệp sản xuất nhỏ: quản lý kho, công nợ, thu chi, sản xuất, in hóa đơn, dashboard thời gian thực và đăng nhập bảo mật. Xây bằng Node.js + SQLite.',
    tools: ['Node.js', 'Express', 'SQLite'],
    link: '#',
  {
    id: 'p11',
    title: 'Website Verdant Estates (Bất động sản cao cấp)',
    category: 'WEB',
    image: '/assets/projects/p12-cinematic-estate.jpg',
    description:
      'Website demo bất động sản / biệt thự cao cấp cho khách — Verdant Estates. Giới thiệu bộ sưu tập bất động sản kiến trúc, triết lý thiết kế, dịch vụ tư vấn, testimonial và đặt lịch tham quan. Giao diện điện ảnh (cinematic), hiệu ứng mở phim intro, parallax, chuyển cảnh tinh tế, hoàn toàn responsive.',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://cinematic-estate.vercel.app',
  },
  {
    id: 'p13',
    title: 'Website Nội thất Mộc Không',
    category: 'WEB',
    image: '/assets/projects/p11-moc-khong.jpg',
    description:
      'Website demo nội thất cho khách — thương hiệu Mộc Không với gỗ tự nhiên và không gian sống như một tác phẩm. Bộ sưu tập, câu chuyện thương hiệu, ý tưởng thiết kế, dịch vụ tư vấn và đặt lịch. Giao diện hiện đại, sang trọng, hiệu ứng parallax và hoạt ảnh tinh tế, hoàn toàn responsive.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
]
