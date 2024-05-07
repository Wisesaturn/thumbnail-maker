import React, { createContext, useCallback, useState } from 'react';

export const CanvasContext = createContext({
  imageData: '',
  setImageData: (_d: string) => {},
});

export default function CanvasProvider({ children }: { children: React.ReactNode }) {
  const [imageData, setImageData] = useState('');

  const handleImageData = useCallback((inputImageData: string) => {
    setImageData(inputImageData);
  }, []);

  return (
    <CanvasContext.Provider value={{ imageData, setImageData: handleImageData }}>
      {children}
    </CanvasContext.Provider>
  );
}
