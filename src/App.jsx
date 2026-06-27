import React, { useState, useEffect } from 'react';
import BrowserFrame from './components/BrowserFrame';
import ExplanationModal from './components/ExplanationModal';

import SiteA_MOET from './levels/SiteA_MOET';
import SiteB_Garena from './levels/SiteB_Garena';
import SiteC_TuoiTre from './levels/SiteC_TuoiTre';
import SiteD_PhishingDocs from './levels/SiteD_PhishingDocs';
import SiteE_PhishingSkin from './levels/SiteE_PhishingSkin';
import SiteF_PhishingJob from './levels/SiteF_PhishingJob';

const ALL_LEVELS = [
  { 
    id: 'A', 
    component: SiteA_MOET, 
    isReal: true, 
    url: 'https://moet.gov.vn', 
    name: 'Bộ Giáo dục và Đào tạo', 
    isSecure: true,
    explanation: 'Đây là trang web chính thức của Bộ Giáo dục và Đào tạo. Tên miền chuẩn xác là <b>moet.gov.vn</b>, có chứng chỉ bảo mật an toàn, và tất cả các nút bấm trên trang đều dẫn về đúng hệ thống của Bộ.'
  },
  { 
    id: 'B', 
    component: SiteB_Garena, 
    isReal: false, 
    url: 'https://sukien.lienquan.garena.vn-nhanqua.top', 
    name: 'Sự kiện Liên Quân', 
    isSecure: true,
    explanation: 'Kẻ gian sử dụng thủ đoạn <b>Tên miền phụ (Subdomain Tricking)</b>. Tên miền thực sự của trang web này là <b>vn-nhanqua.top</b>. Chuỗi <i>sukien.lienquan.garena</i> chỉ là tên miền phụ được tạo ra để đánh lừa mắt bạn.'
  },
  { 
    id: 'C', 
    component: SiteC_TuoiTre, 
    isReal: false, 
    url: 'https://tu0itre.vn', 
    name: 'Tuổi Trẻ Online', 
    isSecure: true,
    explanation: 'Đây là thủ đoạn <b>Đăng ký sai chính tả (Typosquatting)</b>. Nhìn kỹ vào thanh địa chỉ, chữ <b>"o"</b> đã bị kẻ gian thay bằng số <b>"0"</b> (tu0itre thay vì tuoitre). Giao diện có thể copy 100%, nhưng tên miền thì không thể trùng lặp.'
  },
  { 
    id: 'D', 
    component: SiteD_PhishingDocs, 
    isReal: false, 
    url: 'https://thuvientailieu.vn', 
    name: 'Thư viện tài liệu', 
    isSecure: true,
    explanation: 'URL nhìn có vẻ an toàn, nhưng thủ đoạn nằm ở nút bấm! Khi bạn <b>rê chuột (hover)</b> vào nút "TẢI NHANH X10", hãy nhìn xuống góc trái trình duyệt, bạn sẽ thấy link tải thực chất trỏ tới một file mã độc <b>.exe</b> độc hại thay vì file PDF.'
  },
  { 
    id: 'E', 
    component: SiteE_PhishingSkin, 
    isReal: false, 
    url: 'https://sukien.lienquan.garena.vn', 
    name: 'Sự kiện Liên Quân', 
    isSecure: true, // It pretends to be secure main site, but the modal inside is fake
    explanation: 'Thanh URL chính là thật, NHƯNG khung đăng nhập Facebook lại là giả mạo! Kẻ xấu sử dụng kỹ thuật <b>Browser-in-Browser (Trình duyệt lồng Trình duyệt)</b>. Khung đăng nhập đó chỉ là một bức tranh tĩnh được vẽ bằng mã code, nó không phải là cửa sổ pop-up thật của trình duyệt.'
  },
  { 
    id: 'F', 
    component: SiteF_PhishingJob, 
    isReal: false, 
    url: 'https://vieclam24h.vn-tuyendung.com', 
    name: 'Việc Làm 24h', 
    isSecure: true,
    explanation: 'Một trang web lừa đảo nhằm đánh cắp thông tin ngân hàng. Thứ nhất, tên miền thực sự là <b>vn-tuyendung.com</b> chứ không phải vieclam24h. Thứ hai, <b>TUYỆT ĐỐI KHÔNG</b> có nhà tuyển dụng uy tín nào lại yêu cầu bạn nhập Mật khẩu iBanking hay mã OTP cả!'
  }
];

function App() {
  const [sequence, setSequence] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredLink, setHoveredLink] = useState('');
  
  // Modal states
  const [modalConfig, setModalConfig] = useState({ show: false, isCorrect: false, reason: '' });
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    // Basic shuffle
    const shuffled = [...ALL_LEVELS].sort(() => Math.random() - 0.5);
    setSequence(shuffled);
  }, []);

  const currentLevel = sequence[currentIndex];

  const handleChoice = (isChoosingReal) => {
    const isCorrect = (isChoosingReal === currentLevel.isReal);
    
    setModalConfig({
      show: true,
      isCorrect,
      reason: currentLevel.explanation
    });
  };

  const nextLevel = () => {
    setModalConfig({ show: false, isCorrect: false, reason: '' });
    setHoveredLink('');
    
    if (currentIndex + 1 < sequence.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const restartGame = () => {
    const shuffled = [...ALL_LEVELS].sort(() => Math.random() - 0.5);
    setSequence(shuffled);
    setCurrentIndex(0);
    setIsGameOver(false);
  };

  if (sequence.length === 0) return <div className="h-screen flex items-center justify-center bg-gray-100 text-gray-800">Đang tải...</div>;

  // Render Game Over Screen
  if (isGameOver) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 py-12 font-sans">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden animate-in zoom-in-95 duration-500 border border-gray-200">
          <div className="p-12 text-center bg-blue-600 text-white">
            <h1 className="text-4xl font-black mb-4 uppercase">Hoàn thành Khóa học!</h1>
            <p className="text-xl opacity-90">Bạn đã nắm được các kỹ năng cơ bản để nhận diện trang web lừa đảo.</p>
          </div>
          <div className="p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Hãy luôn ghi nhớ:</h2>
            <ul className="text-left max-w-lg mx-auto space-y-4 text-lg text-gray-700 mb-10 list-disc pl-6">
              <li>Kiểm tra kỹ <b>Tên miền (Domain)</b> trước khi đăng nhập.</li>
              <li>Cẩn thận với <b>Tên miền phụ (Subdomain)</b> giả mạo thương hiệu.</li>
              <li><b>Rê chuột (Hover)</b> vào các nút/link để xem địa chỉ thật.</li>
              <li>Không bao giờ nhập <b>Mật khẩu/OTP</b> ở những nơi đáng ngờ.</li>
            </ul>
            <button 
              onClick={restartGame}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 text-lg"
            >
              CHƠI LẠI TỪ ĐẦU
            </button>
          </div>
        </div>
      </div>
    );
  }

  const LevelComponent = currentLevel.component;

  return (
    <div className="h-screen w-full flex flex-col bg-gray-100 relative">
      <ExplanationModal 
        show={modalConfig.show} 
        isCorrect={modalConfig.isCorrect} 
        reason={modalConfig.reason} 
        onNext={nextLevel} 
      />
      
      {/* Browser Area */}
      <div className="flex-1 overflow-hidden relative">
        <BrowserFrame 
          key={currentLevel.id}
          url={currentLevel.url}
          isSecure={currentLevel.isSecure}
          siteName={currentLevel.name}
          hoveredLink={hoveredLink}
        >
          <LevelComponent onHoverLink={setHoveredLink} />
        </BrowserFrame>
      </div>

      {/* Floating Decision Buttons */}
      {!modalConfig.show && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/90 backdrop-blur-md px-8 py-5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-200 z-50 animate-in slide-in-from-bottom-10">
          <span className="font-bold text-gray-600 mr-2 text-lg">Trang web này là:</span>
          
          <button 
            onClick={() => handleChoice(true)}
            className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 border-2 border-green-500 hover:bg-green-500 hover:text-white font-bold rounded-full transition-all hover:scale-105 text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            AN TOÀN
          </button>
          
          <button 
            onClick={() => handleChoice(false)}
            className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-700 border-2 border-red-500 hover:bg-red-500 hover:text-white font-bold rounded-full transition-all hover:scale-105 text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            LỪA ĐẢO
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
