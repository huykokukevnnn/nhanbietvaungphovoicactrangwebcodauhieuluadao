import React from 'react';

const SystemAlert = ({ title, message, type, onClose, show }) => {
  if (!show) return null;

  const getStyles = () => {
    switch(type) {
      case 'success': return 'bg-green-100 border-green-500 text-green-900';
      case 'error': return 'bg-red-100 border-red-500 text-red-900';
      case 'warning': return 'bg-yellow-100 border-yellow-500 text-yellow-900';
      default: return 'bg-blue-100 border-blue-500 text-blue-900';
    }
  };

  const getIcon = () => {
    switch(type) {
      case 'success': 
        return <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;
      case 'error':
        return <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>;
      default:
        return <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
    }
  };

  return (
    <div className="absolute inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-md p-6 border-l-4 rounded-lg shadow-2xl transform transition-all scale-100 ${getStyles()}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-base font-medium opacity-90">{message}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-black/10 hover:bg-black/20 rounded font-semibold transition-colors"
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemAlert;
