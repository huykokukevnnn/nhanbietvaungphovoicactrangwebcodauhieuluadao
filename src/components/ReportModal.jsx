import React from 'react';

const ReportModal = ({ show, onClose, onSubmit }) => {
  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-yellow-400 px-6 py-4 border-b border-yellow-500 flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <h2 className="text-xl font-bold text-yellow-900">Báo cáo trang web</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-gray-600 mb-4 font-medium">Bạn phát hiện trang web này có hành vi lừa đảo nào?</p>
          
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-800 font-medium">Chiếm đoạt tài khoản (Đánh cắp mật khẩu/OTP)</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-800 font-medium">Chèn mã độc vào tập tin tải xuống (.exe)</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-800 font-medium">Đưa thông tin sai sự thật / Lừa đảo tiền bạc</span>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              <span className="text-gray-800 font-medium">Giả mạo tên miền thương hiệu uy tín</span>
            </label>
          </div>

          <div className="flex justify-end gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="px-5 py-2 text-gray-600 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
            >
              Hủy
            </button>
            <button 
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition-colors"
            >
              Gửi báo cáo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
