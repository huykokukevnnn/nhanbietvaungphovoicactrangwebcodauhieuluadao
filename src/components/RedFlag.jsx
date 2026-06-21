import React, { useState } from 'react';

const RedFlag = ({ children, onStamp, id, isReal = false }) => {
  const [stamped, setStamped] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // prevent bubbling if nested
    if (!stamped) {
      setStamped(true);
      if (onStamp) onStamp(id, !isReal);
    }
  };

  return (
    <div 
      className={`relative inline-block ${stamped ? '' : 'cursor-crosshair hover:ring-2 hover:ring-red-500/50'} transition-all`}
      onClick={handleClick}
    >
      {children}
      {stamped && (
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none overflow-visible">
          <div className="text-red-600 font-black text-4xl transform -rotate-12 drop-shadow-md animate-bounce">
            {/* Target marker stamp icon */}
            <svg className="w-16 h-16 opacity-90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedFlag;
