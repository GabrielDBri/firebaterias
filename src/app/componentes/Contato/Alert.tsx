import { useState } from 'react';

interface AlertProps {
  show: boolean;
  onClose: () => void;
}

const Alert = ({ show, onClose }: AlertProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="flex items-center gap-6 p-6 rounded-lg">
        <div className="bg-transparent">
          <span className="text-orange-600 text-9xl">⚠️</span>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-lg w-full border border-gray-300 flex flex-col">
          <span className="text-xl font-semibold">Preencher todos os dados corretamente!!</span>
          <button
            className="bg-black text-white py-2 px-6 mt-4 rounded-lg w-full hover:bg-gray-300 transition-all duration-200 ease-in-out"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;