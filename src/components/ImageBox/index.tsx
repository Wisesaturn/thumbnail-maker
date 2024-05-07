import { motion } from 'framer-motion';

import { ANIMATE_FADE_UP_ITEM } from '$constants/animation';

export default function ImageBox() {
  return (
    <motion.div className="image-box" variants={ANIMATE_FADE_UP_ITEM}>
      ImageBox
    </motion.div>
  );
}
