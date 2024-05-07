import React, { createContext, useCallback, useState } from 'react';

const FONTS = ['Pretendard', 'Arial'];

export const TextContext = createContext({
  title: '타이틀입니다',
  setTitle: (_v: string) => {},
  font: 'Pretendard',
  setFont: (_v: string) => {},
  fonts: FONTS,
});

export default function TextProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState('타이틀입니다');
  const [font, setFont] = useState('Pretendard');

  const handleTitle = useCallback((inputTitle: string) => {
    setTitle(inputTitle);
  }, []);

  const handleFont = useCallback((inputFont: string) => {
    setFont(inputFont);
  }, []);

  return (
    <TextContext.Provider
      value={{ title, setTitle: handleTitle, font, setFont: handleFont, fonts: FONTS }}
    >
      {children}
    </TextContext.Provider>
  );
}
