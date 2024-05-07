import React, { createContext, useCallback, useRef, useState } from 'react';

export const CanvasContext = createContext({
  imageData: '',
  setImageData: (_d: string) => {},
  canvasRef: { current: null } as React.RefObject<HTMLCanvasElement>,
});

export default function CanvasProvider({ children }: { children: React.ReactNode }) {
  const [imageData, setImageData] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageData = useCallback((inputImageData: string) => {
    setImageData(inputImageData);
  }, []);

  return (
    <CanvasContext.Provider value={{ imageData, setImageData: handleImageData, canvasRef }}>
      {children}
    </CanvasContext.Provider>
  );
}
