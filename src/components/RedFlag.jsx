import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';

const RedFlag = ({ children, onStamp, onUnstamp, id, isReal = false }) => {
  const [stamped, setStamped] = useState(false);
  const context = useContext(AppContext);
  
  // Provide safe defaults if context isn't wrapped yet
  const isSelectMode = context?.isSelectMode || false;
  const handleTrap = context?.handleTrap || (() => {});

  const handleClick = (e) => {
    if (isSelectMode) {
      // Trong chế độ khoanh vùng, chặn các sự kiện mặc định (click link)
      e.preventDefault();
      e.stopPropagation();
      if (!stamped) {
        setStamped(true);
        if (onStamp) onStamp(id, !isReal);
      } else {
        // Bỏ đánh dấu nếu ấn lại
        setStamped(false);
        if (onUnstamp) onUnstamp(id);
      }
    } else {
      // Trong chế độ tương tác bình thường
      if (!isReal && !stamped) {
        // Nếu là bẫy của trang giả mạo, gọi hàm sập bẫy
        e.preventDefault();
        e.stopPropagation();
        handleTrap();
      }
      // Nếu là trang thật hoặc điểm đó đã bị khoanh vùng thì cứ để tương tác bình thường
    }
  };

  return (
    <div 
      className={`relative inline-block ${!stamped && isSelectMode ? 'cursor-crosshair hover:ring-2 hover:ring-red-500/50' : ''} transition-all`}
      onClickCapture={handleClick}
    >
      {children}
      {stamped && (
        <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none overflow-visible">
          {/* Vòng tròn Highlight đỏ */}
          <div className="w-[110%] h-[110%] min-w-[2rem] min-h-[2rem] rounded-xl border-4 border-red-500 bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-in zoom-in duration-300">
          </div>
        </div>
      )}
    </div>
  );
};

export default RedFlag;
