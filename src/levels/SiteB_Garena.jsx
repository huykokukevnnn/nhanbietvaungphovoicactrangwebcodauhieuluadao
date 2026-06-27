import React from 'react';

const SiteB_Garena = ({ onHoverLink }) => {
  return (
    <div className="min-h-full bg-gray-950 text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/40 to-transparent pointer-events-none z-0"></div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-gray-800 bg-black/60 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              LIÊN QUÂN
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
              <span className="text-yellow-400 cursor-pointer">Sự kiện</span>
              <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Tin tức</span>
              <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Giải đấu</span>
              <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Cộng đồng</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-bold bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full transition-transform hover:scale-105">
              Đăng nhập
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto mt-12 px-4 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-semibold mb-2">
                SỰ KIỆN MÙA HÈ 2026
              </div>
              <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                CHinh phục <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Đỉnh cao</span>
              </h1>
              <p className="text-gray-300 text-lg mt-4 max-w-md">
                Tham gia chuỗi sự kiện đặc biệt, hoàn thành nhiệm vụ để nhận ngay rương trang phục SS Hữu Hạn hoàn toàn miễn phí.
              </p>
              
              <button className="mt-8 px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-black uppercase text-xl rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] transform hover:scale-105 transition-all">
                Tham gia ngay
              </button>
            
          </div>

          <div className="flex-1 relative">
            
              {/* Fake hero image using an unsplash placeholder stylized like a game character */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" 
                  alt="Hero Character" 
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-800"
                />
              </div>
            
          </div>
        </div>

        {/* Info Cards */}
        <div className="w-full max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
          
            <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Đăng nhập tích luỹ</h3>
              <p className="text-gray-400 text-sm">Đăng nhập 7 ngày liên tiếp để nhận Rương Tướng tự chọn.</p>
            </div>
          
          
          
            <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚔️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Hoàn thành trận đấu</h3>
              <p className="text-gray-400 text-sm">Tham gia chế độ Xếp hạng để tích luỹ Huy hiệu Mùa Hè.</p>
            </div>
          

          
            <div className="bg-gray-900/80 backdrop-blur border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Đổi thưởng cực chất</h3>
              <p className="text-gray-400 text-sm">Dùng Huy hiệu để đổi Skin SS cực hiếm tại Cửa hàng sự kiện.</p>
            </div>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="text-xl font-black text-white">GARENA</div>
            <div className="w-px h-8 bg-gray-800"></div>
            <div>
              <p>© 2026 Garena. Đã đăng ký bản quyền.</p>
              <p>Công ty Cổ phần Giải trí và Thể thao Điện tử Việt Nam</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Điều khoản</span>
            <span className="hover:text-white cursor-pointer">Bảo mật</span>
            <span className="hover:text-white cursor-pointer">Hỗ trợ</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteB_Garena;
