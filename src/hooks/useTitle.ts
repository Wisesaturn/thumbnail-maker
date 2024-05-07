import { useContext, useEffect } from 'react';

import { TextContext } from '$contexts/TextProvider';
import { CanvasContext } from '$contexts/CanvasProvider';

interface Props {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export default function useTitle({ canvasRef }: Props) {
  const { title } = useContext(TextContext);
  const { setImageData } = useContext(CanvasContext);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext('2d');

      if (context) {
        // 캔버스 지우기
        context.clearRect(0, 0, canvas.width, canvas.height);

        // 글자 설정
        const fontSize = 24;
        const font = `${fontSize}px Arial`;
        context.font = font;

        // 글자 중앙 정렬
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        const x = canvas.width / 2;
        const y = canvas.height / 2;

        // 텍스트 그리기
        context.fillText(title, x, y);

        // 캔버스를 WebP로 추출
        const dataURL = canvas.toDataURL('image/webp');
        setImageData(dataURL);
      }
    }
  }, [canvasRef, setImageData, title]);
}
