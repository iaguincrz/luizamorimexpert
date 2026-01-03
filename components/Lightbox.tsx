
import React from 'react';

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white text-4xl hover:text-gray-400 transition-colors"
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <img 
        src={image} 
        alt="Visualização ampliada" 
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default Lightbox;
