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
  
  // Modals
  const [alertConfig, setAlertConfig] = useState({ show: false, title: '', message: '', type: 'info', onNext: null });
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    setSequence(shuffleArray(ALL_LEVELS));
  }, []);

  const currentLevel = sequence[currentIndex];

  const handleStamp = (flagId, isCorrect) => {
    if (!stampedFlags.includes(flagId)) {
      setStampedFlags([...stampedFlags, flagId]);
    }
  };

  const handleUnstamp = (flagId) => {
    setStampedFlags(stampedFlags.filter(id => id !== flagId));
  };

  const handleTrap = () => {
    // Kích hoạt khi click vào phần tử bẫy mà chưa bật chế độ khoanh vùng
    showAlert(
      'Cảnh báo!',
      'Bạn đã sập bẫy của các đối tượng lừa đảo.',
      'error',
      () => {
        // Tùy chọn: Chuyển qua trang tiếp theo luôn hoặc bắt chơi lại
        nextLevel();
      }
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
    // Hiện ra các điểm nghi vấn còn sót
    showAlert(
      'Thành công',
      'Đã báo cáo thành công! Lưu ý: Trên trang này có thể vẫn còn một số điểm nghi vấn khác (những điểm chưa được khoanh đỏ). Hãy chú ý hơn ở các lần sau nhé!',
      'success'
    );
  };

  const handleConfirm = () => {
    if (!currentLevel) return;

    if (currentLevel.isReal) {
      if (stampedFlags.length > 0 || isReported) {
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
      // Trang Fake
      if (stampedFlags.length === 0) {
        // Chưa đánh dấu điểm khả nghi và ấn Đã hoàn thành kiểm tra
        showAlert(
          'Đánh giá chưa chính xác',
          'Đây là một trang web lừa đảo bạn đã không hoàn thành việc chọn lọc',
          'error',
          nextLevel
        );
      } else if (stampedFlags.length > 0 && isReported) {
        showAlert(
          'Xuất sắc!',
          'Chúc mừng bạn đã lựa chọn đúng',
          'success',
          nextLevel
        );
      } else if (stampedFlags.length > 0 && !isReported) {
        showAlert(
          'Chú ý!',
          'Bạn đã quên báo cáo trang web có hành vi lừa đảo',
          'warning',
          nextLevel
        );
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
      showAlert(
        'Hoàn thành bài tập!',
        'Chúc mừng bạn đã hoàn thành xuất sắc bài mô phỏng kỹ năng nhận diện trang web lừa đảo.',
        'success',
        () => {
          // Restart
          setSequence(shuffleArray(ALL_LEVELS));
          setCurrentIndex(0);
          setStampedFlags([]);
          setIsSelectMode(false);
          setIsReported(false);
        }
      );
    }
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
