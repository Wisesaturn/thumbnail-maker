import React, { createContext, useCallback, useState } from 'react';

import FONTS from '$constants/font';

export const TextContext = createContext({
  title: '타이틀입니다',
  setTitle: (_v: string) => {},
  font: 'Pretendard Variable',
  setFont: (_v: string) => {},
});

export default function TextProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState('타이틀입니다');
  const [font, setFont] = useState(FONTS[0]);

  const handleTitle = useCallback((inputTitle: string) => {
    setTitle(inputTitle);
  }, []);

  const handleFont = useCallback((inputFont: string) => {
    setFont(inputFont);
  }, []);

  return (
    <TextContext.Provider
      value={{
        title,
        setTitle: handleTitle,
        font,
        setFont: handleFont,
      }}
    >
      {children}
    </TextContext.Provider>
  );
}
