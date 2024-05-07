import { motion } from 'framer-motion';
import { useRef } from 'react';

import useTitle from '$hooks/useTitle';

import { ANIMATE_FADE_UP_ITEM } from '$constants/animation';

export default function ImageBox() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useTitle({ canvasRef });

  return (
    <motion.div className="image-box" variants={ANIMATE_FADE_UP_ITEM}>
      <canvas id="thumbnail" ref={canvasRef} width={1024} height={500} />
    </motion.div>
  );
}
