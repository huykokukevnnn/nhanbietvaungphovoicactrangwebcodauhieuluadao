import React, { useState } from 'react';

const SiteE_PhishingSkin = ({ onHoverLink, isExplaining }) => {
  const [showFBModal, setShowFBModal] = useState(false);

  return (
    <div className="min-h-full bg-gray-950 text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]"></div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-black text-xl tracking-tighter text-blue-500">Garena<span className="text-white">LiênQuân</span></span>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Trang chủ</a>
              <a href="#" className="text-white">Sự kiện</a>
              <a href="#" className="hover:text-white transition-colors">Cẩm nang</a>
              <a href="#" className="hover:text-white transition-colors">Giải đấu</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-blue-400 transition-colors">Nạp thẻ</button>
            <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">Tải game</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-12 relative z-0">
        
        <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
          
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-semibold mb-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              SỰ KIỆN MÙA HÈ 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-2xl">
              ĐĂNG NHẬP <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">NHẬN QUÀ</span>
            </h1>
            
            <p className="text-gray-400 text-lg">
              Tham gia ngay chuỗi sự kiện lớn nhất mùa hè. Đăng nhập tài khoản để nhận trang phục độc quyền cấp bậc SS hoàn toàn miễn phí.
            </p>

            <div className="pt-8">
              <button 
                onClick={() => setShowFBModal(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:scale-105 flex items-center justify-center gap-3 mx-auto"
              >
                <span>ĐĂNG NHẬP ĐỂ NHẬN QUÀ</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </button>
              <p className="text-xs text-gray-500 mt-4">Thời gian kết thúc sự kiện: 30/12/2026. Áp dụng cho mọi tài khoản.</p>
            </div>
          </div>
          
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-8 mt-12 relative z-0">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500 space-y-4">
          <p>© 2026 Garena. Bản quyền thuộc về Công ty TNHH Liên Quân Mobile. Thiết kế bởi Garena Vietnam.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gray-300">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-gray-300">Chính sách bảo mật</a>
            <a href="#" className="hover:text-gray-300">Hỗ trợ khách hàng</a>
          </div>
        </div>
      </footer>

      {/* TRICK: Browser-in-Browser FB Login Modal */}
      {showFBModal && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-colors ${isExplaining ? 'bg-black/20' : ''}`}>
          {/* This container mimics a native OS window or browser popup */}
          <div className={`w-full max-w-md bg-[#f0f2f5] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative transition-all duration-500 ${isExplaining ? 'ring-4 ring-red-500 scale-105 shadow-[0_0_40px_rgba(239,68,68,0.5)]' : ''}`}>
            
            {/* Fake Browser Title Bar with Window Controls */}
            <div className="bg-[#dee1e6] border-b border-gray-300 px-3 py-2 flex items-center justify-between cursor-default select-none">
              <div className="flex gap-1.5">
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowFBModal(false); }}
                  className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors shadow-sm"
                  title="Close"
                ></button>
                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
              </div>
            </div>

            {/* Fake Browser Address Bar (The Core Phishing Element) */}
            <div className="bg-white border-b border-gray-200 px-3 py-2 flex items-center gap-2 text-sm text-gray-700 shadow-sm cursor-text">
              <div className="flex items-center text-green-600 gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              </div>
              {/* Fake URL trying to look like Facebook but it's just HTML text */}
              <div className="font-sans flex-1 truncate text-gray-900 tracking-tight select-all">
                <span className="text-gray-400">https://</span>www.facebook.com<span className="text-gray-400">/login.php</span>
              </div>
            </div>

            {/* FB Login Content */}
            <div className="p-8 flex flex-col items-center bg-white">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6 font-bold text-3xl">f</div>
              <h2 className="text-xl text-gray-800 mb-6 font-sans">Đăng nhập bằng Facebook</h2>
              
              <div className="w-full space-y-3">
                <input 
                  type="text" 
                  placeholder="Email hoặc số điện thoại" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <input 
                  type="password" 
                  placeholder="Mật khẩu" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button 
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors mt-2"
                >
                  Đăng nhập
                </button>
              </div>
              
              <div className="mt-4 text-blue-600 hover:underline cursor-pointer text-sm font-medium">Quên mật khẩu?</div>
              
              <div className="w-full border-t border-gray-200 mt-6 pt-6 flex justify-center">
                <button className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md transition-colors">Tạo tài khoản mới</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SiteE_PhishingSkin;
