import React, { useState } from 'react';

const SiteD_PhishingDocs = ({ onHoverLink }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 4000);
  };

  return (
    <div className="min-h-full bg-blue-50/50 font-sans text-gray-800 relative">
      {/* Background Tab simulation (Red Flag 3: Silent background redirection tab) */}
      
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-gray-200 border border-gray-300 rounded-t-lg -z-10 opacity-50 flex items-center px-4 text-xs font-mono text-gray-500 truncate cursor-pointer hover:opacity-100 transition-opacity">
           Đang tải hướng dẫn... (http://ads.malicious-redirect.net/trigger)
        </div>
      

      {/* Header */}
      <header className="bg-white border-b border-blue-200 shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl">
            DL
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Thư Viện Tài Liệu Lớp 11-12</h1>
            <p className="text-xs text-green-600 font-semibold">✓ Hơn 1.000.000+ tài liệu được chia sẻ</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Download Section */}
        <div className="flex-1 bg-white p-8 rounded-xl border border-gray-200 shadow-lg text-center relative overflow-hidden">
          {/* File Icon */}
          <div className="w-24 h-24 mx-auto bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ĐỀ CƯƠNG ÔN TẬP HỌC KỲ 2 - FULL MÔN</h2>
          <p className="text-gray-500 mb-6">Định dạng: PDF | Dung lượng: 4.5 MB | Lượt tải: 45,912</p>

          {/* Red Flag 5: The "Tải nhanh bằng phần mềm hỗ trợ" action button */}
          
            <button 
              onMouseEnter={() => onHoverLink('http://hacker-server.net/payloads/download-manager.exe')} 
              onMouseLeave={() => onHoverLink('')}
              className="w-full mb-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              TẢI NHANH X10 (DÙNG PHẦN MỀM HỖ TRỢ)
            </button>
          

          {/* Standard Download */}
          <button 
            onClick={handleDownload}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition-colors"
          >
            TẢI FILE PDF (MIỄN PHÍ)
          </button>

          {/* Download Notification Panel - Red Flag 2: System alert showing .exe */}
          {isDownloading && (
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white p-4 animate-in slide-in-from-bottom-10">
              
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    <div className="text-left text-sm">
                      <p className="font-bold text-red-400">Downloading: TaiLieuOnTap_K11_Full.exe</p>
                      <p className="text-gray-400">1.2 MB / 4.5 MB (Còn 2 giây...)</p>
                    </div>
                  </div>
                </div>
              
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="w-full md:w-80 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">Đánh giá từ người dùng</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center text-blue-600 font-bold text-xs">A</div>
                <div>
                  <div className="flex text-yellow-400 text-xs"><span className="text-yellow-400">★★★★★</span></div>
                  <p className="text-sm text-gray-600 mt-1">Tài liệu rất hay, cảm ơn admin!</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center text-green-600 font-bold text-xs">M</div>
                <div>
                  <div className="flex text-yellow-400 text-xs"><span className="text-yellow-400">★★★★★</span></div>
                  <p className="text-sm text-gray-600 mt-1">Chuẩn đề năm nay luôn, đã test.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Red Flag 4: Sponsored by gambling */}
      <footer className="mt-12 py-8 bg-gray-900 text-gray-400 text-sm text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p>© 2026 Thư Viện Tài Liệu - Nơi chia sẻ tri thức miễn phí.</p>
          
            <div className="mt-4 p-2 bg-gray-800 rounded inline-block cursor-pointer hover:bg-gray-700">
              <span className="text-xs">Phần mềm được tài trợ bởi: </span>
              <span className="text-yellow-500 font-bold ml-1">KUBET - NHÀ CÁI CÁ ĐỘ TRỰC TUYẾN SỐ 1</span>
            </div>
          
        </div>
      </footer>
    </div>
  );
};

export default SiteD_PhishingDocs;
