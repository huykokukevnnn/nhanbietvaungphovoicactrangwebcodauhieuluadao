import React from 'react';

const SiteJ_HocStemMienPhi = ({ onHoverLink }) => {
  return (
    <div className="w-full bg-white font-sans text-gray-800 overflow-x-hidden relative">
      
      {/* Messenger floating icon */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">
        <span className="text-xs font-bold text-gray-800">Chat với KDI</span>
        <div className="w-14 h-14 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.915 1.498 5.485 3.822 7.106v3.743c0 .356.398.563.693.364l3.411-2.285c.66.183 1.353.282 2.074.282 5.523 0 10-4.145 10-9.26S17.523 2 12 2zm1.085 12.333l-2.47-2.637-4.82 2.637 5.29-5.617 2.472 2.636 4.819-2.636-5.291 5.617z"/>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row relative min-h-[600px] w-full max-w-[1400px] mx-auto">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-2xl font-bold text-[#145699] flex items-center gap-2">
              <span className="text-orange-500 font-black text-3xl">S</span> KDI
              <span className="text-xs font-normal">education</span>
            </div>
            <div className="text-2xl font-bold text-orange-500 flex items-center gap-1">
              KDC <span className="text-xs font-normal">EDUCATION</span>
            </div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-4">TẶNG 10.000 TÀI KHOẢN<br/>THAM GIA KHÓA HỌC</h2>
          
          <h1 className="text-4xl md:text-5xl font-black text-[#145699] mb-4 leading-tight">
            ỨNG DỤNG<br/>KỸ NĂNG SỐ VÀ<br/>TRÍ TUỆ NHÂN TẠO
          </h1>
          
          <p className="text-orange-500 font-bold mb-6 text-lg">dành cho học sinh Tiểu học và THCS</p>
          
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Nhằm giúp các em học sinh trang bị những kỹ năng số cơ bản và cách ứng dụng trí tuệ nhân tạo trong học tập và cuộc sống. KDI Education dành tặng 10.000 tài khoản học trực tuyến hoàn toàn miễn phí dành cho học sinh phổ thông trên toàn quốc.
          </p>
        </div>

        {/* Right Content - Form and Background Image */}
        <div className="w-full md:w-1/2 relative min-h-[600px]">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80" alt="Students in classroom" className="w-full h-full object-cover" />
          </div>
          
          {/* Blue Form Overlay */}
          <div className="relative z-10 w-[90%] max-w-[400px] bg-[#1a73e8] p-8 mx-auto mt-10 md:mt-20 md:-ml-10 shadow-2xl">
            <h3 className="text-white text-center font-bold text-lg mb-6 leading-tight">Đăng ký tham gia bằng cách<br/>điền thông tin tại đây</h3>
            
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Họ và tên Học sinh" className="w-full p-2.5 text-sm rounded bg-white outline-none" />
              <input type="text" placeholder="Ngày sinh" className="w-full p-2.5 text-sm rounded bg-white outline-none" />
              <input type="text" placeholder="Trường" className="w-full p-2.5 text-sm rounded bg-white outline-none" />
              <div className="flex gap-2">
                <select className="w-1/3 p-2.5 text-sm rounded bg-white outline-none text-gray-500"><option>Tỉnh/Thành</option></select>
                <select className="w-1/3 p-2.5 text-sm rounded bg-white outline-none text-gray-500"><option>Quận/Huyện</option></select>
                <select className="w-1/3 p-2.5 text-sm rounded bg-white outline-none text-gray-500"><option>Phường/Xã</option></select>
              </div>
              <input type="text" placeholder="Họ và tên Phụ huynh" className="w-full p-2.5 text-sm rounded bg-white outline-none" />
              <input type="text" placeholder="Số điện thoại" className="w-full p-2.5 text-sm rounded bg-white outline-none" />
              <input type="email" placeholder="Email" className="w-full p-2.5 text-sm rounded bg-white outline-none" />
              
              <button className="w-full mt-4 bg-[#ff6b2b] text-white font-bold py-3 text-sm rounded transition-colors hover:bg-orange-600">ĐĂNG KÝ NGAY</button>
            </form>
            
            <p className="text-white text-xs text-center mt-4 opacity-90">
              Email thông báo tài khoản học tập sẽ được gửi<br/>trong vòng 72 giờ sau khi đăng ký
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Thông tin chi tiết */}
      <div className="bg-[#0b3c8e] py-16 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Thông tin chi tiết về<br/>chương trình</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Box 1 - White */}
            <div className="bg-white p-8">
              <h3 className="text-[#1a73e8] font-bold text-xl mb-4">Đối tượng tham gia</h3>
              <p className="text-gray-700 text-sm mb-4">Học sinh các trường TH - THCS trên toàn quốc, được chia thành 2 nhóm như sau:</p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>- Nhóm 1: Học sinh lớp 3-&gt;5</li>
                <li>- Nhóm 2: Học sinh lớp 6-&gt;9</li>
              </ul>
            </div>
            
            {/* Box 2 - Dark */}
            <div className="bg-[#1b4e9e] p-8 border border-[#2b65bd]">
              <h3 className="text-white font-bold text-xl mb-4">Điều kiện tham gia</h3>
              <p className="text-gray-200 text-sm mb-4">Chương trình được tổ chức hoàn toàn miễn phí. Khóa học kéo dài 8 tuần với 8 bài học bổ ích.</p>
              <p className="text-gray-200 text-sm">Học sinh chỉ cần đăng ký để KDI Education tạo tài khoản elearning trước khi tham gia.</p>
            </div>
            
            {/* Box 3 - Dark */}
            <div className="bg-[#1b4e9e] p-8 border border-[#2b65bd]">
              <h3 className="text-white font-bold text-xl mb-4">Hình thức tham gia</h3>
              <ul className="text-gray-200 text-sm space-y-2">
                <li>Học trực tuyến với video bài giảng trên hệ thống E-learning;</li>
                <li>Thực hành với các tình huống thực tế;</li>
                <li>Tham gia nhóm cộng đồng để trao đổi ý tưởng và giải đáp thắc mắc.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Quy trình */}
      <div className="bg-white py-16 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0b3c8e]">Quy trình <span className="text-[#ff6b2b]">tham gia khóa học</span></h2>
          <p className="text-gray-600 mt-4 text-sm">Học sinh thực hiện theo 4 bước dưới đây để tham gia khóa học hiệu quả.</p>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-4">
          {/* Step 1 */}
          <div className="flex-1 flex flex-col">
            <div className="bg-[#0b3c8e] text-white p-6 text-center flex-1 min-h-[160px]">
              <h3 className="font-bold mb-4 text-base">Đăng ký tham gia</h3>
              <p className="text-xs opacity-90">Học sinh đăng ký tham gia thông qua form đăng ký tại website<br/>www.hocstemmienphi.com</p>
            </div>
            <div className="relative flex justify-center -mt-6 mb-2">
              <div className="w-12 h-12 bg-[#1a73e8] rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              </div>
            </div>
            <div className="bg-[#1a73e8] text-white font-bold text-center py-3">Bước 1</div>
          </div>
          
          {/* Step 2 */}
          <div className="flex-1 flex flex-col">
            <div className="bg-[#0b3c8e] text-white p-6 text-center flex-1 min-h-[160px]">
              <h3 className="font-bold mb-4 text-base">Nhận tài khoản</h3>
              <p className="text-xs opacity-90">Học sinh cần đăng ký địa chỉ email chính xác vì KDI Education sẽ gửi thông tin tài khoản E-learning & hướng dẫn học tập qua email đã đăng ký.</p>
            </div>
            <div className="relative flex justify-center -mt-6 mb-2">
              <div className="w-12 h-12 bg-[#1a73e8] rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </div>
            </div>
            <div className="bg-[#1a73e8] text-white font-bold text-center py-3">Bước 2</div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 flex flex-col">
            <div className="bg-[#0b3c8e] text-white p-6 text-center flex-1 min-h-[160px]">
              <h3 className="font-bold mb-4 text-base">Học & thực hành</h3>
              <p className="text-xs opacity-90">Học sinh đăng nhập tài khoản và học tối thiểu 1 buổi/tuần thông qua các video tương tác.<br/>Học sinh làm bài tập thực hành sau khi học.</p>
            </div>
            <div className="relative flex justify-center -mt-6 mb-2">
              <div className="w-12 h-12 bg-[#1a73e8] rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>
              </div>
            </div>
            <div className="bg-[#1a73e8] text-white font-bold text-center py-3">Bước 3</div>
          </div>

          {/* Step 4 */}
          <div className="flex-1 flex flex-col">
            <div className="bg-[#0b3c8e] text-white p-6 text-center flex-1 min-h-[160px]">
              <h3 className="font-bold mb-4 text-base">Giải đáp thắc mắc</h3>
              <p className="text-xs opacity-90">Học sinh tham gia vào các nhóm cộng đồng trên Facebook/Zalo do đội ngũ chuyên môn KDI quản lý để trao đổi ý tưởng và giải đáp thắc mắc.</p>
            </div>
            <div className="relative flex justify-center -mt-6 mb-2">
              <div className="w-12 h-12 bg-[#1a73e8] rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
            </div>
            <div className="bg-[#1a73e8] text-white font-bold text-center py-3">Bước 4</div>
          </div>
        </div>
      </div>

      {/* Section 4: Nội dung */}
      <div className="bg-[#f8f9fc] py-16 w-full border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0b3c8e] mb-1">Nội dung khóa học</h2>
          <h2 className="text-3xl font-bold text-[#ff6b2b]">hoàn toàn miễn phí</h2>
          <p className="text-gray-600 mt-6 text-sm max-w-xl mx-auto">
            Dưới đây là một số nhóm nội dung chính mà các bé sẽ học trong chương trình. Nội dung chi tiết từng bài sẽ được thể hiện trên hệ thống Elearning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-4">
          <div className="flex border border-gray-200 bg-white">
            <div className="w-1/3 bg-[#337ab7] text-white p-6 flex items-center justify-center text-center font-bold">
              ỨNG DỤNG<br/>KỸ NĂNG SỐ
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-center text-sm text-gray-700 space-y-2">
              <p>Tìm hiểu về dấu chân kỹ thuật số và phương pháp bảo mật thông tin cá nhân.</p>
              <p>Nhận diện các rủi ro, phòng tránh lừa đảo trực tuyến và bắt nạt trên môi trường mạng.</p>
            </div>
          </div>
          
          <div className="flex border border-gray-200 bg-white">
            <div className="w-1/3 bg-[#0b3c8e] text-white p-6 flex items-center justify-center text-center font-bold">
              ỨNG DỤNG<br/>TRÍ TUỆ NHÂN TẠO
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-center text-sm text-gray-700 space-y-2">
              <p>Hiểu biết cơ bản về Trí tuệ nhân tạo và hình thành thói quen sử dụng phù hợp.</p>
              <p>Các tình huống ứng dụng của Trí tuệ nhân tạo trong học tập và cuộc sống.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Collage & Text */}
      <div className="bg-white py-16 w-full relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          
          {/* Collage Images */}
          <div className="w-full md:w-2/3 relative h-[400px]">
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-[45%] h-[150px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Digital Citizens" />
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center p-4">
                <span className="text-xl font-bold text-gray-800">We are <span className="text-orange-500">Digital Citizens!</span></span>
              </div>
            </div>
            
            {/* Top Right */}
            <div className="absolute top-0 right-0 w-[50%] h-[200px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Kids learning" />
            </div>
            
            {/* Bottom Left */}
            <div className="absolute bottom-0 left-[10%] w-[45%] h-[200px] overflow-hidden z-10 border-4 border-white">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Classroom" />
            </div>
            
            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-[40%] h-[180px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Teacher and student" />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-1/3 text-center md:text-left z-20 bg-white/80 p-4">
            <h2 className="text-3xl font-bold text-[#0b3c8e] mb-2 leading-tight">
              Nội dung học<br/>tập <span className="text-[#ff6b2b]">thú vị và<br/>trực quan</span>
            </h2>
            <p className="text-gray-600 mt-4 text-sm">
              Mỗi bài học do KDI Education thiết kế đều bao gồm những hoạt động tương tác và thực hành gắn liền với các tình huống thực tế.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full relative mt-20">
        {/* Wave shape top */}
        <div className="absolute -top-[100px] left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[100px] text-[#0b3c8e] fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
        
        <div className="bg-[#0b3c8e] text-white pt-8 pb-12 w-full">
          <div className="max-w-6xl mx-auto px-4 lg:px-24">
            <h4 className="font-bold mb-6">KDI EDUCATION - Học điều hay từ bàn tay Khởi tạo!</h4>
            
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                <span>Địa chỉ: 39-41-43 Trần Quý Kiên, P. Bình Trưng, TP. Hồ Chí Minh</span>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <span>Điện thoại: (028) 7300 8898</span>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <span>Email: lienhe@kdi.edu.vn</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteJ_HocStemMienPhi;
