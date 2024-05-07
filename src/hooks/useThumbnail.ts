import { useContext, useEffect } from 'react';

import { TextContext } from '$contexts/TextProvider';
import { CanvasContext } from '$contexts/CanvasProvider';
import { ColorContext } from '$contexts/ColorProvider';

export default function useThumbnail() {
  const { title } = useContext(TextContext);
  const { backgroundColor } = useContext(ColorContext);
  const { canvasRef } = useContext(CanvasContext);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext('2d');

      if (context) {
        // 캔버스 지우기
        context.clearRect(0, 0, canvas.width, canvas.height);

        // 배경색 설정
        if (backgroundColor) {
          context.fillStyle = backgroundColor;
          context.fillRect(0, 0, canvas.width, canvas.height); // 캔버스 전체에 색상 채우기
        }

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
        context.fillStyle = 'black'; // 텍스트 색상
        context.fillText(title, x, y);
      }
    }
  }, [backgroundColor, canvasRef, title]);
}
