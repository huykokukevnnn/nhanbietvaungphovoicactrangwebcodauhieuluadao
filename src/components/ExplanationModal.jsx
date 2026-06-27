import React from 'react';

const ExplanationModal = ({ show, isCorrect, reason, onNext, explanationImage }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center pointer-events-none">
      {/* Background Dim (optional, if we want to focus on the modal) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={onNext}></div>

      {/* Modal Content */}
      <div className="bg-white w-full max-w-4xl rounded-t-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-full duration-500 pointer-events-auto relative z-10 flex flex-col max-h-[85vh]">
        
        {/* Header Bar indicating Correct/Incorrect */}
        <div className={`px-8 py-6 flex items-center gap-4 ${isCorrect ? 'bg-green-100 border-b border-green-200' : 'bg-red-100 border-b border-red-200'}`}>
          <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {isCorrect ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
            )}
          </div>
          <div>
            <h2 className={`text-3xl font-black ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Chính xác!' : 'Rất tiếc, bạn đã nhầm!'}
            </h2>
            <p className={`text-lg font-medium mt-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              Đây là nội dung giải thích chi tiết dành cho bạn:
            </p>
          </div>
        </div>
        
        {/* Scrollable Explanation Body */}
        <div className="px-8 py-8 overflow-y-auto flex-1 text-gray-800 bg-gray-50 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 text-lg leading-relaxed space-y-4">
            {/* The reason string can contain HTML or just string. We will safely dangerouslySetInnerHTML if we want bold tags, but for now simple text or split by newline. */}
            <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: reason }}></div>
          </div>

          {explanationImage && (
            <div className="flex-1">
              <div className="bg-white p-2 rounded-xl shadow-md border border-gray-200">
                <img src={explanationImage} alt="Explanation Graphic" className="w-full h-auto rounded-lg object-contain max-h-[300px]" />
                <p className="text-center text-sm text-gray-500 mt-2 italic">Hãy ghi nhớ những điểm nhỏ bé nhưng quan trọng này nhé!</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white px-8 py-5 border-t border-gray-200 flex justify-end">
          <button 
            onClick={onNext}
            className={`px-8 py-3 font-bold rounded-xl shadow-lg transition-transform hover:scale-105 text-white flex items-center gap-2 ${isCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            Tiếp tục
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ExplanationModal;
