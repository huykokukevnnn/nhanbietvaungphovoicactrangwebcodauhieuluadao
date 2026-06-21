import React from 'react';

const BrowserFrame = ({ url, isSecure, children, onConfirm, siteName }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
      {/* Tablet landscape optimized container */}
      <div className="w-full max-w-6xl aspect-[16/10] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col relative ring-1 ring-gray-800">
        
        {/* Browser Top Bar */}
        <div className="bg-gray-200 border-b border-gray-300 px-4 py-2 flex flex-col gap-2">
          {/* Mock Tabs */}
          <div className="flex items-end gap-2 px-2 pt-2 -mb-2">
            <div className="bg-white rounded-t-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm flex items-center gap-2 max-w-[200px] truncate">
              {/* Favicon placeholder */}
              <div className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></div>
              <span className="truncate">{siteName}</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-300 rounded cursor-pointer transition-colors">
              +
            </div>
          </div>
          
          {/* Navigation and URL Bar */}
          <div className="flex items-center gap-3 bg-gray-200 pt-2 pb-1 z-10 relative">
            <div className="flex gap-1 text-gray-600">
              <button className="p-1.5 hover:bg-gray-300 rounded transition-colors" title="Back">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="p-1.5 hover:bg-gray-300 rounded transition-colors" title="Forward">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
              <button className="p-1.5 hover:bg-gray-300 rounded transition-colors" title="Reload">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </button>
            </div>
            
            <div className="flex-1 bg-white border border-gray-300 rounded-full flex items-center px-4 py-1.5 shadow-inner">
              {isSecure ? (
                <div className="flex items-center text-green-600 mr-2" title="Connection is secure">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                </div>
              ) : (
                <div className="flex items-center text-gray-500 mr-2 gap-1" title="Not secure">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span className="text-xs font-semibold text-red-500 mr-1">Không an toàn</span>
                </div>
              )}
              <div className="flex-1 truncate text-sm text-gray-800 font-mono tracking-tight">
                {url}
              </div>
            </div>
            
            <button 
              onClick={onConfirm}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow transition-all hover:scale-105"
            >
              Xác nhận kiểm tra
            </button>
          </div>
        </div>

        {/* Viewport content */}
        <div className="flex-1 bg-white overflow-y-auto relative browser-viewport">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BrowserFrame;
