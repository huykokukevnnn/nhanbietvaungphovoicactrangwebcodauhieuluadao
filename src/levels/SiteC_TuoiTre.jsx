import React from 'react';
import RedFlag from '../components/RedFlag';

const SiteC_TuoiTre = ({ onStamp }) => {
  return (
    <div className="min-h-full bg-white font-serif text-gray-800 flex flex-col">
      {/* Top Header */}
      <div className="border-b border-gray-200 py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-xs text-gray-500 font-sans">
          <span>Chủ nhật, 21 tháng 6, 2026 | Hà Nội: 32°C</span>
          <div className="flex gap-4">
            <span className="hover:text-red-600 cursor-pointer">Mới nhất</span>
            <span className="hover:text-red-600 cursor-pointer">Tin nóng</span>
            <span className="hover:text-red-600 cursor-pointer">Podcast</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b-2 border-red-600 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-4xl font-black text-red-600 tracking-tighter">
            TUỔI TRẺ <span className="text-gray-300 text-2xl font-light">|</span> ONLINE
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <input type="text" placeholder="Tìm kiếm..." className="border border-gray-300 rounded-full px-4 py-1.5 text-sm w-64 focus:outline-none focus:border-red-500" />
              <svg className="w-4 h-4 text-gray-400 absolute right-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <ul className="flex items-center gap-6 overflow-x-auto text-sm font-bold text-gray-700 py-3 font-sans">
              <li className="text-red-600 cursor-pointer whitespace-nowrap">Thời sự</li>
              <li className="hover:text-red-600 cursor-pointer whitespace-nowrap">Thế giới</li>
              <li className="hover:text-red-600 cursor-pointer whitespace-nowrap">Pháp luật</li>
              <li className="hover:text-red-600 cursor-pointer whitespace-nowrap">Kinh doanh</li>
              <li className="hover:text-red-600 cursor-pointer whitespace-nowrap">Công nghệ</li>
              <li className="hover:text-red-600 cursor-pointer whitespace-nowrap">Giáo dục</li>
              <li className="hover:text-red-600 cursor-pointer whitespace-nowrap">Sức khỏe</li>
              <li className="hover:text-red-600 cursor-pointer whitespace-nowrap">Thể thao</li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Featured News */}
        <div className="md:col-span-3">
          <RedFlag id="tuoitre-main" isReal={true} onStamp={onStamp}>
            <div className="cursor-pointer group">
              <div className="aspect-video bg-gray-200 mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h1 className="text-3xl font-bold mb-3 group-hover:text-red-600 transition-colors leading-tight">Phát triển AI tại Việt Nam: Cơ hội và thách thức trong thập kỷ mới</h1>
              <p className="text-gray-600 text-lg line-clamp-3">
                Trong bối cảnh công nghệ thay đổi từng ngày, Việt Nam đang đứng trước ngã rẽ quan trọng để quyết định vị thế của mình trên bản đồ AI toàn cầu. Các chuyên gia nhận định...
              </p>
            </div>
          </RedFlag>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
            <RedFlag id="tuoitre-sub1" isReal={true} onStamp={onStamp}>
              <div className="cursor-pointer group">
                <div className="aspect-video bg-gray-200 mb-3 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h2 className="text-xl font-bold group-hover:text-red-600 transition-colors">Bộ Giáo dục công bố phương án thi THPT 2026</h2>
                <p className="text-gray-600 text-sm mt-2">Sẽ có nhiều thay đổi tích cực nhằm giảm tải áp lực cho học sinh.</p>
              </div>
            </RedFlag>

            <RedFlag id="tuoitre-sub2" isReal={true} onStamp={onStamp}>
              <div className="cursor-pointer group">
                <div className="aspect-video bg-gray-200 mb-3 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&w=600&q=80" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h2 className="text-xl font-bold group-hover:text-red-600 transition-colors">Tăng trưởng kinh tế quý 2 đạt mức kỷ lục</h2>
                <p className="text-gray-600 text-sm mt-2">Sự phục hồi mạnh mẽ của ngành du lịch và dịch vụ đã đóng góp lớn.</p>
              </div>
            </RedFlag>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="border-l border-gray-200 pl-8 space-y-8 hidden md:block">
          <div>
            <h3 className="font-bold text-red-600 uppercase mb-4 border-b pb-2">Đọc nhiều</h3>
            <ul className="space-y-4 font-sans text-sm">
              <RedFlag id="tuoitre-side1" isReal={true} onStamp={onStamp}>
                <li className="flex gap-3 cursor-pointer group">
                  <span className="text-gray-300 font-bold text-2xl group-hover:text-red-500">1</span>
                  <span className="group-hover:text-red-600 font-semibold">Khởi nghiệp sinh viên: Những dự án triệu đô từ giảng đường</span>
                </li>
              </RedFlag>
              <RedFlag id="tuoitre-side2" isReal={true} onStamp={onStamp}>
                <li className="flex gap-3 cursor-pointer group">
                  <span className="text-gray-300 font-bold text-2xl group-hover:text-red-500">2</span>
                  <span className="group-hover:text-red-600 font-semibold">Cảnh báo thủ đoạn lừa đảo trực tuyến mới</span>
                </li>
              </RedFlag>
              <RedFlag id="tuoitre-side3" isReal={true} onStamp={onStamp}>
                <li className="flex gap-3 cursor-pointer group">
                  <span className="text-gray-300 font-bold text-2xl group-hover:text-red-500">3</span>
                  <span className="group-hover:text-red-600 font-semibold">Lịch cắt điện luân phiên tuần tới tại Hà Nội</span>
                </li>
              </RedFlag>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 text-center text-sm text-gray-500">
            <span className="block mb-2 text-xs uppercase">Quảng cáo</span>
            <div className="w-full aspect-[3/4] bg-gray-300 flex items-center justify-center">
               QC Area
            </div>
          </div>
        </aside>

      </main>

      <footer className="bg-gray-100 py-8 text-sm mt-auto border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-gray-600 font-sans text-center md:text-left">
          <p className="font-bold mb-2">BÁO ĐIỆN TỬ TUỔI TRẺ</p>
          <p>Giấy phép số: 01/GP-BTTTT cấp ngày 01/01/2026</p>
          <p>© Bản quyền thuộc Báo Tuổi Trẻ. Mọi hình thức sao chép đều phải được sự đồng ý bằng văn bản.</p>
        </div>
      </footer>
    </div>
  );
};

export default SiteC_TuoiTre;
