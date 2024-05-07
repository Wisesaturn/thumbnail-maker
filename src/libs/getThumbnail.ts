interface Props {
  canvas: HTMLCanvasElement;
}

export default function getThumbnail({ canvas }: Props) {
  // 캔버스를 WebP로 추출
  const dataURL = canvas.toDataURL('image/webp');
  return dataURL;
}
