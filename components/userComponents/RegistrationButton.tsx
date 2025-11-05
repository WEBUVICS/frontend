"use client";

import { useState } from 'react';

interface RegistrationButtonProps {
  className?: string;
}

export const RegistrationButton: React.FC<RegistrationButtonProps> = ({ className = '' }) => {
  const [showPopup, setShowPopup] = useState(false);
  
  // ubah isRegistrationOpen ke true ketika pendaftaran di uvics sudah dibuka
  const isRegistrationOpen = false;
  
  // uncomment code dibawah ini ketika pendaftaran sudah dibuka dan ganti url linknya dengan link form yang benar
  // const registrationUrl = "https://forms.google.com/your-form-url";
  
  const handleClick = () => {
    if (!isRegistrationOpen) {
      setShowPopup(true);
      // Auto hide popupnya setelah 5 detik
      setTimeout(() => setShowPopup(false), 5000);
    } else {
      // When registration is open, uncomment this and comment out the setShowPopup logic above, 
      // window.open(registrationUrl, '_blank');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg cursor-pointer
        transition-all duration-300 transform hover:scale-105 shadow-md ${className}`}
      >
        Daftar Sekarang
      </button>

      {/* Popup notification */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
              onClick={() => setShowPopup(false)} />
          <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl transform transition-all">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
                <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                Pendaftaran Belum Dibuka
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Maaf, saat ini UVICS belum membuka pendaftaran. Nantikan info selanjutnya melalui media sosial kami di Instagram{' '}
                  <a href="https://www.instagram.com/uvics_id/" 
                     className="text-blue-600 hover:text-blue-800 font-medium"
                     target="_blank" 
                     rel="noopener noreferrer">
                    @uvics.id
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm "
                  onClick={() => setShowPopup(false)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};