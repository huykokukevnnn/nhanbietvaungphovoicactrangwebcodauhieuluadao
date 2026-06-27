import React, { useState } from 'react';

const SiteI_TiktokFake = ({ onHoverLink, isExplaining }) => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-full bg-black text-white font-sans overflow-hidden flex flex-col">
      {/* Tiktok Header */}
      <header className="border-b border-gray-800 bg-black sticky top-0 z-10 px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 448 512" fill="currentColor">
            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
          </svg>
          <span className="text-xl font-bold tracking-tight">TikTok</span>
        </div>
        <div className="hidden md:flex relative w-96">
          <input 
            type="text" 
            placeholder="Tìm kiếm" 
            className="w-full bg-gray-900 border border-gray-700 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-gray-500 text-white"
          />
          <div className="absolute right-0 top-0 h-full px-4 border-l border-gray-700 flex items-center justify-center hover:bg-gray-800 rounded-r-full cursor-pointer">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block font-semibold hover:underline">Tải lên</button>
          <button className="bg-[#fe2c55] hover:bg-[#e62a4d] text-white font-bold px-6 py-1.5 rounded text-sm transition-colors">Đăng nhập</button>
        </div>
      </header>

      {/* Main Content (Fake Video Feed) */}
      <main className="flex-1 flex max-w-5xl mx-auto w-full pt-6 relative">
        {/* Sidebar */}
        <aside className="w-60 hidden md:block flex-shrink-0 pr-4 space-y-6">
          <div className="space-y-2 font-bold text-gray-300">
            <div className="flex items-center gap-3 p-2 text-[#fe2c55] cursor-pointer"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>Dành cho bạn</div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-900 rounded cursor-pointer"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>Đang Follow</div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-900 rounded cursor-pointer"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>LIVE</div>
          </div>
          <div className="border-t border-gray-800 pt-4 text-xs text-gray-500 space-y-2">
            <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <button className="w-full border border-[#fe2c55] text-[#fe2c55] font-bold py-2 rounded hover:bg-[#fe2c55]/10 mt-2">Đăng nhập</button>
          </div>
        </aside>

        {/* Video Feed placeholder */}
        <div className="flex-1 flex justify-center pb-20">
          <div className="w-[350px] bg-gray-900 rounded-xl overflow-hidden relative shadow-2xl h-[600px]">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80" alt="Video cover" className="w-full h-full object-cover opacity-50" />
            
            {/* Fake video UI overlay */}
            <div className="absolute bottom-4 left-4 right-16">
              <h3 className="font-bold mb-1">@tiktok_vietnam</h3>
              <p className="text-sm">Sự kiện tặng xu cực khủng năm 2026! Nhấn link để nhận ngay 5000 Xu. #tiktok #xuhuong</p>
            </div>
            
            <div className="absolute bottom-4 right-2 flex flex-col gap-4 items-center">
              <div className="w-10 h-10 bg-white rounded-full p-0.5"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" className="w-full h-full rounded-full" /></div>
              <div className="flex flex-col items-center gap-1"><svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg><span className="text-xs">125K</span></div>
              <div className="flex flex-col items-center gap-1"><svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/></svg><span className="text-xs">4023</span></div>
              <div className="flex flex-col items-center gap-1"><svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/></svg><span className="text-xs">Share</span></div>
            </div>
          </div>
        </div>
      </main>

      {/* Fake Phishing Popup Layer */}
      {showPopup && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all ${isExplaining ? 'bg-transparent' : ''}`}>
          <div className={`bg-[#121212] border border-gray-800 w-full max-w-sm rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 relative ${isExplaining ? 'ring-4 ring-red-500 scale-105 shadow-[0_0_40px_rgba(239,68,68,0.7)]' : ''}`}>
            
            {/* Header */}
            <div className="relative h-24 bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
              <h2 className="text-2xl font-black text-white relative z-10 italic">TIKTOK REWARDS</h2>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowPopup(false); }}
                className="absolute top-2 right-2 text-white hover:bg-white/20 p-1 rounded-full transition-colors z-20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center -mt-14 relative z-10 border-4 border-[#121212] shadow-lg mb-4">
                <span className="text-3xl">🪙</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">Chúc mừng bạn!</h3>
              <p className="text-gray-400 text-sm mb-6">Bạn đã được chọn ngẫu nhiên để nhận <b className="text-yellow-400">5,000 Xu TikTok</b> hoàn toàn miễn phí. Đăng nhập ngay để nhận vào ví.</p>
              
              <div className="w-full space-y-3">
                <input 
                  type="text" 
                  placeholder="TikTok ID, Email hoặc Số điện thoại" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded p-3 text-sm focus:outline-none focus:border-pink-500"
                />
                <input 
                  type="password" 
                  placeholder="Mật khẩu" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded p-3 text-sm focus:outline-none focus:border-pink-500"
                />
                <button 
                  onMouseEnter={() => onHoverLink('http://hacker-api.net/steal/tiktok-credentials')}
                  onMouseLeave={() => onHoverLink('')}
                  className="w-full bg-[#fe2c55] hover:bg-[#e62a4d] text-white font-bold py-3 rounded transition-colors shadow-lg shadow-pink-500/20"
                >
                  XÁC NHẬN NHẬN XU
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 py-3 text-center text-xs text-gray-500 border-t border-gray-800">
              Chương trình được tài trợ bởi TikTok Official.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteI_TiktokFake;
