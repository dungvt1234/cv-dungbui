// ===== Experience timeline data =====
// type: 'work' | 'education' | 'military' | 'course'

export const experience = [
  {
    id: 'business-investor',
    type: 'work',
    period: '2024 – Nay',
    title: 'Kinh doanh & Phân phối',
    subtitle: 'Vật liệu xây dựng & sơn',
    summary:
      'Đầu tư vào doanh nghiệp phân phối vật liệu xây dựng và sơn, làm việc cùng đội ngũ 3–5 người với doanh thu đỉnh khoảng 500 triệu VND/tháng.',
    points: [
      'Đầu tư vào doanh nghiệp phân phối sơn & vật liệu xây dựng, trực tiếp phụ trách kinh doanh.',
      'Phân phối các thương hiệu lớn: Jotun, Dulux, Kansai.',
      'Doanh thu đỉnh ~500 triệu VND/tháng, quản lý đội 3–5 người.',
      'Tư vấn, đàm phán và chốt đơn hàng với khách hàng.',
      'Tìm kiếm, phát triển và chăm sóc khách hàng.',
    ],
  },
  {
    id: 'real-estate',
    type: 'work',
    period: '2022 – 2024',
    title: 'Nhân viên Kinh doanh Bất động sản',
    subtitle: 'Condotel & Căn hộ thương mại',
    summary: 'Bán bất động sản phân khúc condotel và căn hộ thương mại.',
    points: [
      'Tư vấn và bán condotel, căn hộ thương mại.',
      'Tìm kiếm khách hàng tiềm năng.',
      'Đàm phán và chốt đơn hàng.',
      'Chăm sóc khách hàng sau bán.',
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
  { period: '2022 – 2024', label: 'Kinh doanh Bất động sản', type: 'work' },
  { period: '2022', label: 'Khóa học lập trình FPT', type: 'course' },
  { period: '2020 – 2022', label: 'Nghĩa vụ quân sự', type: 'military' },
  { period: '2015 – 2019', label: 'Học vấn', type: 'education' },
]
