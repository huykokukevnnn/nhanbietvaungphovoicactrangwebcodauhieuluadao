import React from 'react';

const SiteJ_HocStemMienPhi = ({ onHoverLink }) => {
  return (
    <div className="min-h-full bg-white font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 text-white font-black rounded-lg flex items-center justify-center text-xl shadow-lg">
              KDI
            </div>
            <div>
              <div className="font-black text-xl text-blue-900 tracking-tight">Học STEM Miễn Phí</div>
              <div className="text-xs text-blue-600 font-semibold uppercase tracking-widest">KDI Education</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-600">
            <a href="#" className="text-blue-600">Trang chủ</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Về chúng tôi</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Chương trình học</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Tin tức</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Liên hệ</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-blue-600 font-bold hover:underline">Đăng nhập</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/30 transition-all transform hover:scale-105">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-50 py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold text-sm rounded-full mb-6">Dành cho học sinh từ Lớp 1 đến Lớp 12</div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Khám phá thế giới <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">STEM cực chất</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Khơi dậy niềm đam mê khoa học, công nghệ, kỹ thuật và toán học thông qua các dự án thực tế thú vị. Học hoàn toàn miễn phí cùng KDI Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                Bắt đầu học ngay
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold px-8 py-4 rounded-full shadow-sm transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Students learning robotics" className="rounded-2xl shadow-2xl relative z-10" />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">✓</div>
              <div>
                <div className="font-black text-gray-900">100.000+</div>
                <div className="text-xs text-gray-500 font-semibold uppercase">Học viên tham gia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-24 bg-white max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Các lộ trình học nổi bật</h2>
          <p className="text-gray-600">Được thiết kế chuẩn quốc tế, phù hợp với từng độ tuổi và năng lực của học sinh.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Lập trình Scratch", age: "Tiểu học (Lớp 1-5)", desc: "Làm quen với tư duy máy tính thông qua việc kéo thả các khối lệnh màu sắc để tạo ra game và hoạt hình.", color: "bg-orange-500" },
            { title: "Lắp ráp Robotics", age: "THCS (Lớp 6-9)", desc: "Khám phá nguyên lý hoạt động của robot, học cách lắp ráp và lập trình để robot thực hiện nhiệm vụ.", color: "bg-blue-500" },
            { title: "Thiết kế 3D & Python", age: "THPT (Lớp 10-12)", desc: "Làm chủ ngôn ngữ lập trình Python và sử dụng các phần mềm thiết kế 3D chuyên nghiệp.", color: "bg-purple-500" }
          ].map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group">
              <div className={`w-16 h-16 ${course.color} rounded-2xl mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform`}></div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{course.age}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{course.title}</h3>
              <p className="text-gray-600 mb-8">{course.desc}</p>
              <div className="text-blue-600 font-bold group-hover:underline flex items-center gap-2">
                Xem chi tiết
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-3xl font-black mb-4">KDI Education</div>
          <p className="text-gray-400 max-w-md mx-auto mb-8">Sứ mệnh của chúng tôi là mang giáo dục STEM chất lượng cao đến với mọi học sinh trên toàn quốc.</p>
          <div className="flex justify-center gap-8 text-sm font-semibold text-gray-500">
            <span className="hover:text-white cursor-pointer">Chính sách bảo mật</span>
            <span className="hover:text-white cursor-pointer">Điều khoản sử dụng</span>
            <span className="hover:text-white cursor-pointer">Liên hệ</span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-600 text-sm">
            © 2026 KDI Education. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteJ_HocStemMienPhi;
