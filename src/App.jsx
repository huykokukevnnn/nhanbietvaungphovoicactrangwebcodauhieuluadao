import React, { useState, useEffect } from 'react';
import BrowserFrame from './components/BrowserFrame';
import SystemAlert from './components/SystemAlert';
import ReportModal from './components/ReportModal';
import { AppContext } from './AppContext';

import SiteA_MOET from './levels/SiteA_MOET';
import SiteB_Garena from './levels/SiteB_Garena';
import SiteC_TuoiTre from './levels/SiteC_TuoiTre';
import SiteD_PhishingDocs from './levels/SiteD_PhishingDocs';
import SiteE_PhishingSkin from './levels/SiteE_PhishingSkin';
import SiteF_PhishingJob from './levels/SiteF_PhishingJob';

const ALL_LEVELS = [
  { id: 'A', component: SiteA_MOET, isReal: true, url: 'https://moet.gov.vn', name: 'Bộ Giáo dục và Đào tạo', isSecure: true },
  { id: 'B', component: SiteB_Garena, isReal: true, url: 'https://sukien.lienquan.garena.vn', name: 'Sự kiện Liên Quân', isSecure: true },
  { id: 'C', component: SiteC_TuoiTre, isReal: true, url: 'https://tuoitre.vn', name: 'Tuổi Trẻ Online', isSecure: true },
  { id: 'D', component: SiteD_PhishingDocs, isReal: false, url: 'http://thuvientailieu-lop11.net', name: 'Thư viện tài liệu', isSecure: false },
  { id: 'E', component: SiteE_PhishingSkin, isReal: false, url: 'http://sukien-lienquan-garena.com.vn-nhanqua.top', name: 'Sự kiện Liên Quân', isSecure: false },
  { id: 'F', component: SiteF_PhishingJob, isReal: false, url: 'http://tuyen-dung-genz-vieclam24h.org', name: 'Việc Làm 24h', isSecure: false }
];

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const [sequence, setSequence] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Game states
  const [stampedFlags, setStampedFlags] = useState([]);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [isReported, setIsReported] = useState(false);
  
  // Score tracking
  const [scoreLog, setScoreLog] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  
  // Modals
  const [alertConfig, setAlertConfig] = useState({ show: false, title: '', message: '', type: 'info', onNext: null });
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    setSequence(shuffleArray(ALL_LEVELS));
  }, []);

  const currentLevel = sequence[currentIndex];

  const addDeduction = (points, reason) => {
    setScoreLog(prev => [...prev, { points, reason, levelName: currentLevel.name }]);
  };

  const handleStamp = (flagId, isCorrect) => {
    if (!stampedFlags.includes(flagId)) {
      setStampedFlags([...stampedFlags, flagId]);
    }
  };

  const handleUnstamp = (flagId) => {
    setStampedFlags(stampedFlags.filter(id => id !== flagId));
  };

  const handleTrap = () => {
    // Sập bẫy lừa đảo (Tương tác nút tải file/đăng nhập khi chưa khoanh vùng)
    addDeduction(-25, "Tương tác nguy hiểm: Sập bẫy lừa đảo");
    showAlert(
      'Cảnh báo!',
      'Bạn đã sập bẫy của các đối tượng lừa đảo.',
      'error',
      nextLevel
    );
  };

  const handleReportClick = () => {
    if (stampedFlags.length === 0) {
      showAlert('Cảnh báo', 'Bạn chưa đưa ra bằng chứng khả nghi', 'warning');
    } else {
      setShowReportModal(true);
    }
  };

  const handleReportSubmit = () => {
    setShowReportModal(false);
    setIsReported(true);
    showAlert(
      'Thành công',
      'Đã báo cáo thành công! Lưu ý: Trên trang này có thể vẫn còn một số điểm nghi vấn khác (những điểm chưa được khoanh đỏ). Hãy chú ý hơn ở các lần sau nhé!',
      'success'
    );
  };

  const handleConfirm = () => {
    if (!currentLevel) return;

    if (currentLevel.isReal) {
      // Đối với trang web thật
      if (stampedFlags.length > 0 || isReported) {
        addDeduction(-20, "Báo cáo sai trang web thật");
        showAlert(
          'Đánh giá chưa chính xác',
          'Đây là trang web thật, bạn đã quá đa nghi rồi',
          'error',
          nextLevel
        );
      } else {
        showAlert(
          'Tuyệt vời!',
          'Bạn đã tin tưởng đúng trang web',
          'success',
          nextLevel
        );
      }
    } else {
      // Đối với trang web giả mạo
      if (stampedFlags.length === 0) {
        // Bỏ sót hoàn toàn trang lừa đảo
        addDeduction(-30, "Không nhận diện được trang web lừa đảo");
        showAlert(
          'Đánh giá chưa chính xác',
          'Đây là một trang web lừa đảo bạn đã không hoàn thành việc chọn lọc',
          'error',
          nextLevel
        );
      } else {
        // Tính điểm thiếu sót (Tối đa 5 cờ)
        const missed = Math.max(0, 5 - stampedFlags.length);
        if (missed > 0) {
          addDeduction(-3 * missed, `Bỏ sót ${missed} điểm khả nghi`);
        }

        if (isReported) {
          showAlert(
            'Xuất sắc!',
            'Chúc mừng bạn đã lựa chọn đúng',
            'success',
            nextLevel
          );
        } else {
          // Đã đánh dấu nhưng chưa báo cáo
          addDeduction(-10, "Phát hiện điểm khả nghi nhưng quên gửi Báo Cáo");
          showAlert(
            'Chú ý!',
            'Bạn đã quên báo cáo trang web có hành vi lừa đảo',
            'warning',
            nextLevel
          );
        }
      }
    }
  };

  const nextLevel = () => {
    if (currentIndex + 1 < sequence.length) {
      setCurrentIndex(currentIndex + 1);
      // Reset state for new level
      setStampedFlags([]);
      setIsSelectMode(false);
      setIsReported(false);
    } else {
      // Game Over
      setIsGameOver(true);
    }
  };

  const restartGame = () => {
    setSequence(shuffleArray(ALL_LEVELS));
    setCurrentIndex(0);
    setStampedFlags([]);
    setIsSelectMode(false);
    setIsReported(false);
    setScoreLog([]);
    setIsGameOver(false);
  };

  const showAlert = (title, message, type, callback) => {
    setAlertConfig({
      show: true,
      title,
      message,
      type,
      onNext: () => {
        setAlertConfig(prev => ({ ...prev, show: false }));
        if (callback) callback();
      }
    });
  };

  if (sequence.length === 0) return <div className="h-screen flex items-center justify-center bg-gray-100 text-gray-800">Đang tải...</div>;

  // Render Game Over Summary Screen
  if (isGameOver) {
    const finalScore = Math.max(0, 100 + scoreLog.reduce((acc, log) => acc + log.points, 0));
    
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 py-12 font-sans">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden animate-in zoom-in-95 duration-500 border border-gray-200">
          
          {/* Header */}
          <div className={`p-8 text-center text-white ${finalScore >= 80 ? 'bg-green-600' : finalScore >= 50 ? 'bg-yellow-500' : 'bg-red-600'}`}>
            <h1 className="text-3xl md:text-4xl font-black mb-2 uppercase">BÁO CÁO KẾT QUẢ</h1>
            <p className="text-lg opacity-90">Kỹ năng nhận diện trang web lừa đảo</p>
            
            <div className="mt-8 relative inline-block">
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto shadow-inner text-5xl font-black">
                <span className={finalScore >= 80 ? 'text-green-600' : finalScore >= 50 ? 'text-yellow-500' : 'text-red-600'}>
                  {finalScore}
                </span>
              </div>
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                ĐIỂM SỐ
              </span>
            </div>
            
            <h2 className="mt-8 text-xl font-bold">
              {finalScore >= 80 ? '🎉 Rất xuất sắc! Bạn là chuyên gia bảo mật.' : 
               finalScore >= 50 ? '👍 Khá tốt! Nhưng vẫn cần cẩn thận hơn trên không gian mạng.' : 
               '⚠️ Nguy hiểm! Bạn rất dễ bị lừa đảo trên Internet.'}
            </h2>
          </div>

          {/* Details */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              Chi tiết các lỗi bị trừ điểm:
            </h3>
            
            {scoreLog.length === 0 ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center font-medium">
                Hoàn hảo! Bạn không mắc phải bất kỳ sai sót nào trong toàn bộ bài tập.
              </div>
            ) : (
              <div className="space-y-4">
                {scoreLog.map((log, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-red-100 bg-red-50/50">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center flex-shrink-0 text-lg">
                      {log.points}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{log.reason}</h4>
                      <p className="text-sm text-gray-500 mt-1">Tại: {log.levelName}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10 flex justify-center">
              <button 
                onClick={restartGame}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                CHƠI LẠI TỪ ĐẦU
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const LevelComponent = currentLevel.component;

  return (
    <AppContext.Provider value={{ isSelectMode, setIsSelectMode, handleTrap }}>
      <SystemAlert 
        show={alertConfig.show} 
        title={alertConfig.title} 
        message={alertConfig.message} 
        type={alertConfig.type} 
        onClose={alertConfig.onNext} 
      />
      <ReportModal 
        show={showReportModal} 
        onClose={() => setShowReportModal(false)} 
        onSubmit={handleReportSubmit} 
      />
      <BrowserFrame 
        key={currentLevel.id}
        url={currentLevel.url}
        isSecure={currentLevel.isSecure}
        siteName={currentLevel.name}
        onConfirm={handleConfirm}
        onStamp={handleStamp}
        onUnstamp={handleUnstamp}
        onReport={handleReportClick}
      >
        <LevelComponent onStamp={handleStamp} onUnstamp={handleUnstamp} />
      </BrowserFrame>
    </AppContext.Provider>
  );
}

export default App;
