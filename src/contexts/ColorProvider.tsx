import React, { createContext, useCallback, useState } from 'react';

export const ColorContext = createContext({
  backgroundColor: '',
  setBackgroundColor: (_v: string) => {},
});

export default function ColorProvider({ children }: { children: React.ReactNode }) {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleBackgroundColor = useCallback((inputBackgroundColor: string) => {
    setBackgroundColor(inputBackgroundColor);
  }, []);

  return (
    <ColorContext.Provider value={{ backgroundColor, setBackgroundColor: handleBackgroundColor }}>
      {children}
    </ColorContext.Provider>
  );
}
