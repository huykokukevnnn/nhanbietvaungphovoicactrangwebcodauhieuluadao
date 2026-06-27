import React from 'react';

const SiteH_HocmaiReal = ({ onHoverLink }) => {
  return (
    <div className="min-h-full bg-gray-50 font-sans text-gray-800">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black text-blue-700 italic tracking-tighter">
              HOCMAI<span className="text-orange-500">.VN</span>
            </div>
            <div className="hidden md:flex relative w-80">
              <input 
                type="text" 
                placeholder="Tìm kiếm khóa học, giáo viên..." 
                className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="w-4 h-4 absolute right-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-sm font-semibold hover:text-blue-600 transition-colors">Kích hoạt khóa học</a>
            <button 
              onMouseEnter={() => onHoverLink('https://hocmai.vn/login')}
              onMouseLeave={() => onHoverLink('')}
              className="text-sm font-semibold border border-blue-600 text-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-50 transition-colors"
            >
              Đăng nhập
            </button>
            <button 
              onMouseEnter={() => onHoverLink('https://hocmai.vn/register')}
              onMouseLeave={() => onHoverLink('')}
              className="text-sm font-bold bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition-colors shadow-sm"
            >
              Đăng ký
            </button>
          </div>
        </div>
        {/* Navigation */}
        <div className="bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 flex gap-6 text-sm font-semibold uppercase">
            <a href="#" className="py-3 border-b-2 border-white">Trang chủ</a>
            <a href="#" className="py-3 border-b-2 border-transparent hover:border-white transition-colors">Khóa học Lớp 12</a>
            <a href="#" className="py-3 border-b-2 border-transparent hover:border-white transition-colors">Khóa học Lớp 11</a>
            <a href="#" className="py-3 border-b-2 border-transparent hover:border-white transition-colors">Luyện thi ĐGNL</a>
            <a href="#" className="py-3 border-b-2 border-transparent hover:border-white transition-colors">Thư viện đề thi</a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-blue-50 py-10 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 font-bold text-sm rounded-full">HOT: ÔN THI TỐT NGHIỆP THPT 2026</div>
            <h1 className="text-4xl font-black text-gray-900 leading-tight">Giải pháp PEN 2026<br/>Luyện thi toàn diện</h1>
            <p className="text-gray-600 text-lg">Hệ thống ôn luyện toàn diện bám sát cấu trúc đề thi của Bộ GD&ĐT. Tự tin chinh phục điểm 9, 10 với đội ngũ giáo viên hàng đầu Việt Nam.</p>
            <div className="flex gap-4 pt-2">
              <button 
                onMouseEnter={() => onHoverLink('https://hocmai.vn/khoa-hoc-truc-tuyen/pen')}
                onMouseLeave={() => onHoverLink('')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                Học thử ngay
              </button>
              <button className="bg-white border border-blue-200 text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors">Tư vấn miễn phí</button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Students studying" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-600 pl-4">Khóa học nổi bật</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { 
              id: 1, 
              subject: "Môn Toán - Lớp 12", 
              title: "PEN-C: Ôn luyện toàn diện môn Toán 12 (Thầy Nguyễn Văn Hùng)", 
              img: "/math_course_cover.png" 
            },
            { 
              id: 2, 
              subject: "Ngữ Văn - Lớp 12", 
              title: "PEN-C: Bứt phá điểm 9+ Ngữ Văn THPT (Cô Trần Thị Thu Hà)", 
              img: "/literature_course_cover.png" 
            },
            { 
              id: 3, 
              subject: "Tiếng Anh - Lớp 12", 
              title: "PEN-M: Luyện giải đề Tiếng Anh chuyên sâu (Thầy Phạm Hoàng Nam)", 
              img: "/english_course_cover.png" 
            },
            { 
              id: 4, 
              subject: "Sinh Học - Lớp 12", 
              title: "PEN-I: Hệ thống kiến thức Sinh học cốt lõi (Cô Vũ Thanh Trúc)", 
              img: "/biology_course_cover.png" 
            }
          ].map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 overflow-hidden relative">
                <img src={course.img} alt={course.subject} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-30%</div>
              </div>
              <div className="p-4">
                <div className="text-xs text-blue-600 font-bold mb-1">{course.subject}</div>
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                  <span className="text-xs text-gray-500">(1,245 đánh giá)</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="font-bold text-lg text-red-600">999.000đ</span>
                  <span className="text-xs text-gray-400 line-through pb-1">1.500.000đ</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteH_HocmaiReal;
