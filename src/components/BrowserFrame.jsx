import React from 'react';

const BrowserFrame = ({ url, isSecure, siteName, children, hoveredLink }) => {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col font-sans overflow-hidden relative">
      {/* Browser Top Bar - Light Theme */}
      <div className="bg-[#dee1e6] border-b border-gray-300 pt-2 flex flex-col flex-shrink-0 z-20">
        
        {/* Mock Tabs & Action Buttons */}
        <div className="flex items-end justify-between px-4">
          <div className="flex items-end gap-2">
            <div className="bg-white rounded-t-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm flex items-center gap-2 max-w-[250px] min-w-[150px] truncate border-t border-x border-gray-200">
              <div className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></div>
              <span className="truncate">{siteName}</span>
            </div>
          </div>
        </div>
        
        {/* Navigation and URL Bar */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 border-b border-gray-200 shadow-sm z-10">
          <div className="flex gap-1 text-gray-600">
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-default">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors opacity-50 cursor-not-allowed">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-default">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </button>
          </div>
          
          <div className="flex-1 bg-[#f1f3f4] rounded-full flex items-center px-4 py-1.5">
            <div className="flex items-center w-full px-2 py-0.5">
              {isSecure ? (
                <div className="flex items-center text-gray-600 mr-2" title="Connection is secure">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                </div>
              ) : (
                <div className="flex items-center text-red-600 mr-2 gap-1" title="Not secure">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span className="text-sm font-semibold mr-1">Không an toàn</span>
                </div>
              )}
              <div className="flex-1 truncate text-sm text-gray-800 font-sans tracking-tight">
                {url}
              </div>
            </div>
          </div>
          
          {/* Menu button placeholder */}
          <div className="text-gray-600 p-1.5 cursor-default">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
          </div>
        </div>
      </div>

      {/* Viewport content */}
      <div className="flex-1 bg-white overflow-y-auto relative browser-viewport">
        {children}
      </div>

      {/* Simulated Browser Status Bar (Link Hover) */}
      {hoveredLink && (
        <div className="absolute bottom-0 left-0 bg-gray-200 border-t border-r border-gray-300 px-3 py-1 text-xs text-gray-600 rounded-tr-lg z-50 truncate max-w-lg shadow-sm">
          {hoveredLink}
        </div>
      )}
    </div>
  );
};

export default BrowserFrame;
