import React, { useState } from 'react';

const SiteF_Parttime247 = ({ onHoverLink, isExplaining }) => {
  return (
    <div className="min-h-full bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-teal-600 rounded-lg text-white font-black text-xl flex items-center justify-center shadow-md">P24</div>
             <span className="font-black text-2xl tracking-tighter text-gray-800">Parttime<span className="text-teal-600">24/7</span></span>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-600 font-semibold hover:text-teal-600">Đăng nhập</button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-bold shadow-sm transition-colors">Dành cho Nhà Tuyển Dụng</button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        {/* Left Col - Job Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-32 bg-teal-50 flex items-center px-8 relative">
              <div className="absolute -bottom-10 left-8 w-24 h-24 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-2">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&q=80" alt="Company Logo" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            
            <div className="pt-16 pb-8 px-8">
              <h1 className="text-3xl font-black text-gray-900 mb-2 leading-tight">Tuyển CTV Học Sinh / Sinh Viên Dịch Thuật Tại Nhà</h1>
              <p className="text-teal-600 font-semibold mb-6">Công ty TNHH Truyền thông Sáng tạo</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-teal-50 border border-teal-100 text-teal-800 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  500.000đ - 1.000.000đ / Ngày
                </div>
                <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Part-time tự do
                </div>
                <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Làm việc Online (Remote)
                </div>
              </div>

              <div className="space-y-6 text-gray-600 border-t border-gray-100 pt-8">
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-3">📌 Mô tả công việc:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Nhận file ảnh/PDF văn bản từ công ty.</li>
                    <li>Đánh máy lại thành file Word hoặc dịch thuật cơ bản (có công cụ hỗ trợ).</li>
                    <li>Làm việc 100% online tại nhà, không gò bó thời gian. Đăng ký nhận việc linh hoạt.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-3">📌 Yêu cầu ứng viên:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Có laptop hoặc điện thoại thông minh kết nối mạng.</li>
                    <li>Không yêu cầu kinh nghiệm, được đào tạo và hướng dẫn từ A-Z.</li>
                    <li>Dành riêng cho học sinh cấp 3 và sinh viên có nhiều thời gian rảnh.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-3">📌 Quyền lợi:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Trả lương tự động theo ngày vào tài khoản ngân hàng.</li>
                    <li>Hỗ trợ dấu mộc thực tập cho sinh viên nếu có nhu cầu.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col - Scam Form */}
        <div className="md:col-span-1">
          <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24 transition-all ${isExplaining ? 'ring-4 ring-red-500 shadow-[0_0_40px_rgba(239,68,68,0.3)]' : ''}`}>
            
            {/* Urgency message */}
            <div className="bg-red-50 text-red-600 text-sm font-bold p-4 text-center border-b border-red-100 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Hoàn tất liên kết ngân hàng trong 60s để nhận việc!
            </div>

            <div className="p-6">
              <h2 className="text-xl font-black text-gray-900 mb-1">Hồ sơ & Thanh toán</h2>
              <p className="text-sm text-gray-500 mb-6">Liên kết tài khoản để nhận lương tự động trong ngày.</p>

              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Họ và tên</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-teal-500 focus:bg-white focus:outline-none transition-colors" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Số điện thoại / Zalo</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-teal-500 focus:bg-white focus:outline-none transition-colors" placeholder="09xxxxxxx" />
                </div>
                
                <div className="pt-4 pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    <p className="text-sm font-bold text-teal-700">TÀI KHOẢN NHẬN LƯƠNG</p>
                  </div>
                  <div className="w-full h-px bg-teal-100"></div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Ngân hàng</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-teal-500 focus:bg-white focus:outline-none transition-colors">
                    <option>Chọn ngân hàng...</option>
                    <option>Vietcombank</option>
                    <option>Techcombank</option>
                    <option>MB Bank</option>
                    <option>BIDV</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Số tài khoản</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:border-teal-500 focus:bg-white focus:outline-none transition-colors" />
                </div>

                {/* The Trap */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Mật khẩu iBanking / Mã OTP <span className="text-red-500">*</span>
                  </label>
                  <input type="password" placeholder="Bắt buộc để liên kết tự động" className="w-full bg-red-50/50 border border-red-200 rounded-lg p-3 text-sm focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500 transition-all placeholder-red-300" />
                  <svg className="absolute right-3 top-9 w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>

                <div className="pt-2">
                  <button 
                      type="submit" 
                      onMouseEnter={() => onHoverLink('http://api-thuthap-thongtin-khachhang.net/submit-form')}
                      onMouseLeave={() => onHoverLink('')}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-4 rounded-xl shadow-lg hover:shadow-teal-600/30 transition-all flex items-center justify-center gap-2"
                    >
                    ỨNG TUYỂN & LIÊN KẾT LƯƠNG
                  </button>
                  <p className="text-[10px] text-center text-gray-400 mt-3">Cam kết bảo mật thông tin bằng SSL 256-bit ảo</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SiteF_Parttime247;
