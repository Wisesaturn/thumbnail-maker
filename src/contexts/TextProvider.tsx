import React, { createContext, useCallback, useState } from 'react';

export const TextContext = createContext({
  title: '',
  setTitle: (_v: string) => {},
});

export default function TextProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState('타이틀입니다');

  const handleTitle = useCallback((inputTitle: string) => {
    setTitle(inputTitle);
  }, []);

  return (
    <TextContext.Provider value={{ title, setTitle: handleTitle }}>{children}</TextContext.Provider>
  );
}
