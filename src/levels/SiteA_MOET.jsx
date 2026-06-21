import React from 'react';
import RedFlag from '../components/RedFlag';

const SiteA_MOET = ({ onStamp }) => {
  return (
    <div className="min-h-full bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-red-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-lg">
            <svg className="w-10 h-10 text-red-700" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider">Bộ Giáo dục và Đào tạo</h1>
            <p className="text-sm md:text-base opacity-90">Ministry of Education and Training</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex items-center gap-6 overflow-x-auto text-sm font-semibold text-gray-700 py-3">
            <li className="text-red-700 cursor-pointer whitespace-nowrap">Trang chủ</li>
            <li className="hover:text-red-700 cursor-pointer whitespace-nowrap transition-colors">Giới thiệu</li>
            <li className="hover:text-red-700 cursor-pointer whitespace-nowrap transition-colors">Tin tức - Sự kiện</li>
            <li className="hover:text-red-700 cursor-pointer whitespace-nowrap transition-colors">Văn bản - Điều hành</li>
            <li className="hover:text-red-700 cursor-pointer whitespace-nowrap transition-colors">Thống kê</li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column (News) */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-red-700 border-b-2 border-red-700 pb-2 mb-6">Tin tức nổi bật</h2>
            
            {/* Wrap sections in RedFlag with isReal=true so if they misidentify, it triggers failure */}
            <RedFlag id="moet-news-1" isReal={true} onStamp={onStamp}>
              <div className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                   <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Students" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">Kỳ thi Tốt nghiệp THPT Quốc gia 2026: Sẵn sàng và minh bạch</h3>
                </div>
              </div>
            </RedFlag>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <RedFlag id="moet-news-2" isReal={true} onStamp={onStamp}>
                <div className="flex gap-4 cursor-pointer group">
                  <div className="w-24 h-24 bg-gray-200 rounded shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&q=80" className="object-cover w-full h-full group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-red-700 transition-colors">Đổi mới phương pháp giảng dạy trong kỷ nguyên số</h4>
                    <p className="text-xs text-gray-500 mt-2">12/06/2026</p>
                  </div>
                </div>
              </RedFlag>
              
              <RedFlag id="moet-news-3" isReal={true} onStamp={onStamp}>
                <div className="flex gap-4 cursor-pointer group">
                  <div className="w-24 h-24 bg-gray-200 rounded shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=300&q=80" className="object-cover w-full h-full group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-red-700 transition-colors">Tuyển sinh Đại học 2026: Những lưu ý quan trọng</h4>
                    <p className="text-xs text-gray-500 mt-2">10/06/2026</p>
                  </div>
                </div>
              </RedFlag>
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar) */}
        <aside className="space-y-6">
          <RedFlag id="moet-sidebar-1" isReal={true} onStamp={onStamp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="font-bold text-lg border-b pb-2 mb-4 text-gray-800">Thông báo</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-red-500">▸</span> Cập nhật hệ thống cơ sở dữ liệu ngành</li>
                <li className="flex gap-2"><span className="text-red-500">▸</span> Lịch tiếp công dân tháng 6/2026</li>
                <li className="flex gap-2"><span className="text-red-500">▸</span> Hướng dẫn triển khai nhiệm vụ năm học mới</li>
              </ul>
            </div>
          </RedFlag>

          <RedFlag id="moet-sidebar-2" isReal={true} onStamp={onStamp}>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Hỗ trợ trực tuyến</h3>
              <p className="text-sm text-blue-800 mb-4">Hotline giải đáp thắc mắc về thi và tuyển sinh.</p>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors">
                Liên hệ ngay
              </button>
            </div>
          </RedFlag>
        </aside>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 text-sm mt-auto">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-bold text-white mb-2">CƠ QUAN CHỦ QUẢN: BỘ GIÁO DỤC VÀ ĐÀO TẠO</p>
            <p>Địa chỉ: Số 35 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
            <p>Điện thoại: 0243.8695.144 - Fax: 0243.8694.085</p>
            <p>Email: bogddt@moet.gov.vn</p>
          </div>
          <div className="md:text-right">
            <p className="mb-2">Bản quyền thuộc về Bộ Giáo dục và Đào tạo.</p>
            <p>Ghi rõ nguồn "Cổng Thông tin điện tử Bộ Giáo dục và Đào tạo" hoặc "www.moet.gov.vn" khi phát hành lại thông tin từ Cổng thông tin này.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteA_MOET;
