// ===== Experience timeline data =====
// type: 'work' | 'education' | 'military' | 'course'

export const experience = [
  {
    id: 'business-investor',
    type: 'work',
    period: '2024 – Nay',
    title: 'Nhà đầu tư / Kinh doanh & Phân phối',
    subtitle: 'Phân phối vật liệu xây dựng & sơn',
    summary:
      'Đầu tư vào doanh nghiệp phân phối vật liệu xây dựng và sơn, làm việc cùng đội ngũ 3–5 người với doanh thu đỉnh khoảng 500 triệu VND/tháng.',
    points: [
      'Đầu tư vào doanh nghiệp và trực tiếp phụ trách kinh doanh, phân phối vật liệu xây dựng.',
      'Phân phối các thương hiệu sơn gồm Jotun, Dulux, Kansai và các sản phẩm liên quan.',
      'Doanh thu đỉnh khoảng 500 triệu VND/tháng.',
      'Làm việc với đội ngũ 3–5 nhân viên.',
      'Giám sát khoảng 6 công trình xây dựng/tháng.',
      'Tư vấn khách hàng về sản phẩm và giải pháp.',
      'Tìm kiếm, phát triển và chăm sóc khách hàng.',
      'Đàm phán giá và chốt đơn hàng.',
      'Xử lý đơn hàng, tồn kho và công việc hậu mãi.',
      'Phối hợp với đội thi công và theo dõi tiến độ công trình.',
      'Giám sát công trường và xử lý các vấn đề phát sinh.',
    ],
  },
  {
    id: 'real-estate',
    type: 'work',
    period: 'Giữa 2022 – 2024',
    title: 'Kinh doanh Bất động sản',
    subtitle: 'Condotel & Căn hộ thương mại',
    summary: 'Tư vấn và bán bất động sản ở phân khúc condotel và căn hộ thương mại.',
    points: [
      'Tư vấn và bán bất động sản ở phân khúc condotel và căn hộ thương mại.',
      'Tìm kiếm và phát triển khách hàng tiềm năng.',
      'Tư vấn sản phẩm và giải đáp nhu cầu của khách hàng.',
      'Đồng hành cùng khách hàng trong toàn bộ quy trình bán hàng.',
      'Đàm phán và xử lý các băn khoăn, phản đối của khách hàng.',
      'Xây dựng và duy trì mối quan hệ với khách hàng.',
    ],
  },
  {
    id: 'warehouse',
    type: 'work',
    period: '1 năm',
    title: 'Quản lý kho',
    subtitle: 'Nông sản, hàng khô & nước giải khát',
    summary: 'Quản lý vận hành kho cho các mặt hàng nông sản, hàng khô và nước giải khát.',
    points: [
      'Quản lý vận hành kho.',
      'Xử lý nhập và xuất hàng.',
      'Kiểm soát tồn kho.',
      'Sắp xếp hàng hóa theo từng nhóm sản phẩm.',
      'Phối hợp với nhân viên và các bộ phận liên quan.',
      'Đảm bảo quản lý hàng hóa chính xác và có hệ thống.',
    ],
  },
  {
    id: 'military',
    type: 'military',
    period: '2020 – 2022',
    title: 'Nghĩa vụ quân sự',
    subtitle: '',
    summary: 'Hoàn thành nghĩa vụ quân sự.',
    points: [],
  },
  {
    id: 'fpt',
    type: 'course',
    period: '6 tháng',
    title: 'Khóa học lập trình FPT',
    subtitle: 'Nền tảng phát triển Web',
    summary: 'Hoàn thành khóa học lập trình tại FPT với kiến thức nền tảng về phát triển Web.',
    points: [],
  },
  {
    id: 'education',
    type: 'education',
    period: '2015 – 2019',
    title: 'Học viện Công nghệ Bưu chính Viễn thông',
    subtitle: 'Quản trị kinh doanh – Kế toán',
    summary: 'Cử nhân Quản trị kinh doanh, chuyên ngành Kế toán.',
    points: [],
  },
]

// Timeline mốc tổng hợp (hiển thị dọc theo thời gian)
export const timeline = [
  { period: '2024 – Nay', label: 'Phân phối vật liệu xây dựng', type: 'work' },
  { period: 'Giữa 2022 – 2024', label: 'Kinh doanh Bất động sản', type: 'work' },
  { period: '2022', label: 'Khóa học lập trình FPT', type: 'course' },
  { period: '2020 – 2022', label: 'Nghĩa vụ quân sự', type: 'military' },
  { period: '2015 – 2019', label: 'Học vấn', type: 'education' },
]
