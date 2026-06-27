import React from 'react';

const SiteG_FacebookReal = ({ onHoverLink }) => {
  return (
    <div className="min-h-full bg-[#f0f2f5] font-sans flex flex-col items-center justify-center pt-20 pb-40">
      <div className="w-full max-w-[980px] flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left Side: Logo and Text */}
        <div className="mb-10 md:mb-0 md:pr-10 md:w-1/2 text-center md:text-left">
          <img 
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" 
            alt="Facebook" 
            className="h-28 -ml-8 mx-auto md:mx-0 mb-4"
          />
          <h2 className="text-2xl text-gray-800 leading-8 w-[90%] mx-auto md:mx-0">
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </h2>
        </div>

        {/* Right Side: Login Box */}
        <div className="md:w-[400px] w-full flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-xl p-4 w-full flex flex-col items-center border border-gray-100">
            <input 
              type="text" 
              placeholder="Email hoặc số điện thoại" 
              className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-[17px]"
            />
            <input 
              type="password" 
              placeholder="Mật khẩu" 
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-[17px]"
            />
            <button 
              onMouseEnter={() => onHoverLink('https://www.facebook.com/login')}
              onMouseLeave={() => onHoverLink('')}
              className="w-full bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold py-3 px-4 rounded-md text-xl transition-colors"
            >
              Đăng nhập
            </button>
            <div className="mt-4 mb-5 text-center">
              <a 
                href="#" 
                onMouseEnter={() => onHoverLink('https://www.facebook.com/recover/initiate')}
                onMouseLeave={() => onHoverLink('')}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Quên mật khẩu?
              </a>
            </div>
            <div className="w-full border-t border-gray-300 my-2"></div>
            <button 
              onMouseEnter={() => onHoverLink('https://www.facebook.com/r.php')}
              onMouseLeave={() => onHoverLink('')}
              className="mt-4 bg-[#42b72a] hover:bg-[#36a420] text-white font-bold py-3 px-4 rounded-md text-[17px] transition-colors"
            >
              Tạo tài khoản mới
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-700">
            <span className="font-bold hover:underline cursor-pointer">Tạo Trang</span> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteG_FacebookReal;
