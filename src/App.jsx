import React, { useState, useEffect } from 'react';
import BrowserFrame from './components/BrowserFrame';
import SystemAlert from './components/SystemAlert';
import SiteA_MOET from './levels/SiteA_MOET';
import SiteB_Garena from './levels/SiteB_Garena';
import SiteC_TuoiTre from './levels/SiteC_TuoiTre';
import SiteD_PhishingDocs from './levels/SiteD_PhishingDocs';
import SiteE_PhishingSkin from './levels/SiteE_PhishingSkin';
import SiteF_PhishingJob from './levels/SiteF_PhishingJob';

// List of levels
const ALL_LEVELS = [
  { id: 'A', component: SiteA_MOET, isReal: true, url: 'https://moet.gov.vn', name: 'Bộ Giáo dục và Đào tạo', isSecure: true },
  { id: 'B', component: SiteB_Garena, isReal: true, url: 'https://sukien.lienquan.garena.vn', name: 'Sự kiện Liên Quân', isSecure: true },
  { id: 'C', component: SiteC_TuoiTre, isReal: true, url: 'https://tuoitre.vn', name: 'Tuổi Trẻ Online', isSecure: true },
  { id: 'D', component: SiteD_PhishingDocs, isReal: false, url: 'http://thuvientailieu-lop11.net', name: 'Thư viện tài liệu', isSecure: false },
  { id: 'E', component: SiteE_PhishingSkin, isReal: false, url: 'http://sukien-lienquan-garena.com.vn-nhanqua.top', name: 'Sự kiện Liên Quân', isSecure: false },
  { id: 'F', component: SiteF_PhishingJob, isReal: false, url: 'http://tuyen-dung-genz-vieclam24h.org', name: 'Việc Làm 24h', isSecure: false }
];

function App() {
  const [sequence, setSequence] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stampedFlags, setStampedFlags] = useState([]);
  
  const [alertConfig, setAlertConfig] = useState({ show: false, title: '', message: '', type: 'info', onNext: null });

  // Initialize random sequence
  useEffect(() => {
    const shuffled = [...ALL_LEVELS].sort(() => Math.random() - 0.5);
    setSequence(shuffled);
  }, []);

  const currentLevel = sequence[currentIndex];

  const handleStamp = (flagId, isCorrect) => {
    if (!stampedFlags.includes(flagId)) {
      setStampedFlags([...stampedFlags, flagId]);
    }
  };

  const handleConfirm = () => {
    if (!currentLevel) return;

    if (currentLevel.isReal) {
      if (stampedFlags.length > 0) {
        // Failed real site
        showAlert(
          'Đánh giá chưa chính xác!',
          'Bạn đã đánh dấu sai điểm nghi vấn bảo mật hoặc trang web này hoàn toàn an toàn!',
          'error',
          () => {
            setStampedFlags([]);
          }
        );
      } else {
        // Passed real site
        showAlert(
          'Tuyệt vời!',
          'Chính xác! Đây là trang web hợp lệ và an toàn.',
          'success',
          nextLevel
        );
      }
    } else {
      // Fake site needs 4/5 flags
      // In this simple implementation, any 4 flags stamped on a fake site is considered passing.
      if (stampedFlags.length >= 4) {
        // Passed fake site
        showAlert(
          'Xuất sắc!',
          `Bạn đã tìm ra ${stampedFlags.length}/5 dấu hiệu lừa đảo. Rất tinh mắt!`,
          'success',
          nextLevel
        );
      } else {
        // Failed fake site
        showAlert(
          'Chưa đủ dấu hiệu!',
          `Đây là trang web lừa đảo. Bạn mới tìm được ${stampedFlags.length}/5 dấu hiệu. Hãy tìm thêm ít nhất 4 dấu hiệu để vượt qua!`,
          'warning',
          () => {} // close alert and keep trying
        );
      }
    }
  };

  const nextLevel = () => {
    if (currentIndex + 1 < sequence.length) {
      setCurrentIndex(currentIndex + 1);
      setStampedFlags([]);
    } else {
      // Game Over
      showAlert(
        'Hoàn thành bài tập!',
        'Chúc mừng bạn đã hoàn thành xuất sắc bài mô phỏng kỹ năng nhận diện trang web lừa đảo.',
        'success',
        () => {
          // Restart
          const shuffled = [...ALL_LEVELS].sort(() => Math.random() - 0.5);
          setSequence(shuffled);
          setCurrentIndex(0);
          setStampedFlags([]);
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

  if (sequence.length === 0) return <div className="h-screen flex items-center justify-center bg-gray-900 text-white">Đang tải...</div>;

  const LevelComponent = currentLevel.component;

  return (
    <>
      <SystemAlert 
        show={alertConfig.show} 
        title={alertConfig.title} 
        message={alertConfig.message} 
        type={alertConfig.type} 
        onClose={alertConfig.onNext} 
      />
      <BrowserFrame 
        url={currentLevel.url}
        isSecure={currentLevel.isSecure}
        siteName={currentLevel.name}
        onConfirm={handleConfirm}
      >
        <LevelComponent onStamp={handleStamp} />
      </BrowserFrame>
    </>
  );
}

export default App;
