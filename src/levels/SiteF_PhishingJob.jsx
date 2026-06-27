import React from 'react';

const SiteF_PhishingJob = ({ onHoverLink }) => {
  return (
    <div className="min-h-full bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-green-500 rounded text-white font-black text-xl flex items-center justify-center">V24</div>
             <span className="font-black text-2xl tracking-tighter text-gray-800">ViệcLàm<span className="text-green-500">24h</span></span>
             <span className="ml-2 text-xs text-gray-400 border border-gray-300 rounded px-1 hidden md:inline-block">Dành cho Sinh Viên</span>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-600 font-semibold hover:text-green-500">Đăng nhập</button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold">Đăng ký ứng tuyển</button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Col - Job Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Tuyển CTV Học Sinh / Sinh Viên Dịch Thuật, Đánh Máy Tại Nhà</h1>
            
            {/* Red Flag 3: Unrealistic compensation */}
            
              <div className="flex flex-wrap gap-4 mb-6 cursor-pointer group">
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2 group-hover:ring-2 group-hover:ring-red-500">
                  <span className="text-xl">💰</span>
                  Thu nhập: 500.000đ - 1.000.000đ / Ngày
                </div>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <span className="text-xl">⏰</span>
                  Part-time tự do
                </div>
              </div>
            

            <div className="prose prose-sm max-w-none text-gray-600 space-y-4 border-t border-gray-100 pt-6">
              <h3 className="text-gray-800 font-bold">📌 Mô tả công việc:</h3>
              <ul className="list-disc pl-5">
                <li>Nhận file ảnh/PDF văn bản từ công ty.</li>
                <li>Đánh máy lại thành file Word hoặc dịch thuật cơ bản (có công cụ hỗ trợ).</li>
                <li>Làm việc 100% online tại nhà, không gò bó thời gian.</li>
              </ul>

              <h3 className="text-gray-800 font-bold">📌 Yêu cầu:</h3>
              <ul className="list-disc pl-5">
                <li>Có laptop hoặc điện thoại thông minh.</li>
                <li>Không yêu cầu kinh nghiệm, được hướng dẫn từ A-Z.</li>
                <li>Dành riêng cho học sinh cấp 3 và sinh viên.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Col - Scam Form */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-xl border-t-4 border-green-500 overflow-hidden sticky top-24">
            
            {/* Red Flag 5: Strict dynamic pop-up message (urgency) */}
            
              <div className="bg-red-50 text-red-600 text-xs font-bold p-3 text-center border-b border-red-100 cursor-pointer animate-pulse">
                ⚠️ Tài khoản của bạn sẽ bị hủy hồ sơ ứng tuyển nếu không hoàn tất liên kết tài khoản trong vòng 60 giây!
              </div>
            

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-1">Hồ sơ ứng tuyển</h2>
              <p className="text-xs text-gray-500 mb-6">Vui lòng điền thông tin để nhận lương tự động hàng ngày qua hệ thống.</p>

              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Họ và tên</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-green-500 focus:outline-none" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Số điện thoại</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-green-500 focus:outline-none" placeholder="09xxxxxxx" />
                </div>
                
                <hr className="my-4" />
                
                <p className="text-xs font-bold text-blue-600 mb-2">THÔNG TIN NHẬN LƯƠNG TỰ ĐỘNG</p>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Ngân hàng</label>
                  <select className="w-full border border-gray-300 rounded p-2 text-sm focus:border-green-500 focus:outline-none">
                    <option>Chọn ngân hàng...</option>
                    <option>Vietcombank</option>
                    <option>Techcombank</option>
                    <option>MB Bank</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Số tài khoản</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-green-500 focus:outline-none" />
                </div>

                {/* Red Flag 1: Requesting confidential items */}
                
                  <div className="cursor-pointer group relative">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Mật khẩu iBanking / OTP <span className="text-red-500">*</span>
                    </label>
                    <input type="password" placeholder="Nhập để liên kết tự động" className="w-full border border-gray-300 rounded p-2 text-sm group-hover:border-red-500 group-hover:ring-1 group-hover:ring-red-500 focus:outline-none transition-all" />
                    
                    {/* Red Flag 4: Visual security inconsistency (No SSL badge for secure field) */}
                    <div className="absolute right-2 top-7 text-gray-400 group-hover:text-red-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                  </div>
                

                <button 
                    type="submit" 
                    onMouseEnter={() => onHoverLink('http://api-thuthap-thongtin-khachhang.net/submit-form')}
                    onMouseLeave={() => onHoverLink('')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                  KÍCH HOẠT NHẬN LƯƠNG
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SiteF_PhishingJob;
