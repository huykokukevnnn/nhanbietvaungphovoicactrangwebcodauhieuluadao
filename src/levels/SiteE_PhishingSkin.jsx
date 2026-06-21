import React, { useState, useEffect } from 'react';
import RedFlag from '../components/RedFlag';

const SiteE_PhishingSkin = ({ onStamp }) => {
  const [showFBModal, setShowFBModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(165); // 02:45

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-full bg-gray-950 text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/30 to-black pointer-events-none z-0"></div>

      {/* Red Flag 4: Fake text feed animation crawling on top */}
      <RedFlag id="flag-fake-logs" isReal={false} onStamp={onStamp}>
        <div className="absolute top-0 left-0 w-full h-8 bg-black/80 z-20 overflow-hidden flex items-center border-b border-gray-800 cursor-pointer">
          <div className="whitespace-nowrap animate-[marquee_15s_linear_infinite] text-xs text-green-400 font-mono tracking-wider">
            [SYS] User_9981 vừa nhận Rương Trang Phục SS --- [SYS] Nam_Pro_2k6 vừa quay trúng Raz Siêu Việt --- [SYS] HoaHao_123 nhận 5000 Quân Huy --- [SYS] Anh_Duy_Tung vừa nhận Ngộ Không Nhóc Tì --- [SYS]
          </div>
        </div>
      </RedFlag>
      
      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center pt-16">
        <div className="w-full max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] mb-4">
            NHẬN SKIN SS MIỄN PHÍ DÀNH CHO TÂN THỦ
          </h1>

          {/* Red Flag 2: Aggressive psychological pressure element (Countdown clock) */}
          <RedFlag id="flag-pressure-clock" isReal={false} onStamp={onStamp}>
            <div className="inline-block bg-red-600/20 border-2 border-red-500 px-6 py-2 rounded-full mb-8 cursor-pointer hover:bg-red-600/40 transition-colors">
              <span className="text-red-400 font-bold uppercase mr-2">Sự kiện kết thúc sau:</span>
              <span className="text-2xl font-black text-white tracking-widest">{formatTime(timeLeft)}</span>
            </div>
          </RedFlag>
          
          {/* Wheel/Spin area placeholder */}
          <div className="relative w-64 h-64 mx-auto mb-8 animate-[spin_10s_linear_infinite] opacity-80">
            <div className="absolute inset-0 rounded-full border-[12px] border-yellow-500 border-dashed"></div>
            <div className="absolute inset-2 rounded-full border-4 border-red-500"></div>
          </div>

          <button 
            onClick={() => setShowFBModal(true)}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-black uppercase text-xl rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.6)] transform hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            QUAY THƯỞNG / ĐĂNG NHẬP FACEBOOK
          </button>
        </div>

        {/* Red Flag 5: Fake static comment widget below the fold */}
        <div className="w-full max-w-4xl mx-auto mt-16 px-4 pb-12">
          <RedFlag id="flag-static-comments" isReal={false} onStamp={onStamp}>
            <div className="bg-white rounded-lg p-4 cursor-pointer hover:ring-2 hover:ring-red-500">
              {/* This mimics the exact look of an FB comment widget but is entirely static HTML trying to look like a plugin */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
                <span className="font-bold text-gray-800 text-sm">1,204 bình luận</span>
                <span className="text-gray-500 text-sm">Sắp xếp theo: Phù hợp nhất ▼</span>
              </div>
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded text-blue-600 flex items-center justify-center text-xs">A</div>
                <div className="bg-gray-100 p-2 rounded-2xl flex-1 text-sm text-gray-800">
                  <span className="font-bold text-blue-600 block mb-1">Tuấn Anh Nguyễn</span>
                  Ad ơi em vừa quay trúng Raz Siêu Việt thật luôn, thẻ cào 200k em nạp nãy xứng đáng quá!!
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <div className="w-8 h-8 bg-pink-100 rounded text-pink-600 flex items-center justify-center text-xs">M</div>
                <div className="bg-gray-100 p-2 rounded-2xl flex-1 text-sm text-gray-800">
                  <span className="font-bold text-blue-600 block mb-1">Mai Linh Trang</span>
                  Web uy tín nha mng, mình nhập nick xong là quà về hộp thư ingame luôn á &lt;3
                </div>
              </div>
              <div className="text-xs text-gray-400 pl-12 mt-1">Thích · Phản hồi · 12 phút trước</div>
            </div>
          </RedFlag>
        </div>
      </main>

      {/* FB Login Overlay */}
      {showFBModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-sm bg-[#f0f2f5] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Red Flag 3: Mini address bar displaying local IP */}
            <RedFlag id="flag-fake-fb-url" isReal={false} onStamp={onStamp}>
              <div className="bg-white border-b border-gray-300 p-2 flex items-center gap-2 cursor-pointer">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400" onClick={(e) => {e.stopPropagation(); setShowFBModal(false)}}></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-600 font-mono flex items-center">
                  <svg className="w-3 h-3 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  192.168.1.5/login.php
                </div>
              </div>
            </RedFlag>

            <div className="p-6 bg-white flex flex-col items-center">
              <svg className="w-16 h-16 text-[#1877f2] mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <h2 className="text-lg font-normal text-gray-800 mb-6">Đăng nhập bằng Facebook</h2>
              
              <input type="text" placeholder="Email hoặc số điện thoại" className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none" />
              <input type="password" placeholder="Mật khẩu" className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none" />
              
              <button className="w-full py-3 bg-[#1877f2] text-white font-bold rounded-md text-xl mb-4 hover:bg-[#166fe5]">
                Đăng nhập
              </button>
              <div className="text-blue-600 text-sm hover:underline cursor-pointer mb-6">Quên mật khẩu?</div>
              
              <div className="w-full border-t border-gray-300 relative my-4">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-sm">hoặc</span>
              </div>
              
              <button className="mt-4 px-4 py-2 bg-[#42b72a] text-white font-bold rounded-md hover:bg-[#36a420]">
                Tạo tài khoản mới
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteE_PhishingSkin;
