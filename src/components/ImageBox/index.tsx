import { motion } from 'framer-motion';
import { useContext } from 'react';

import useThumbnail from '$hooks/useThumbnail';

import { CanvasContext } from '$contexts/CanvasProvider';

import { ANIMATE_FADE_UP_ITEM } from '$constants/animation';

export default function ImageBox() {
  const { canvasRef } = useContext(CanvasContext);
  useThumbnail();

  return (
    <motion.div className="image-box" variants={ANIMATE_FADE_UP_ITEM}>
      <canvas id="thumbnail" ref={canvasRef} width={1024} height={500} />
    </motion.div>
  );
}
