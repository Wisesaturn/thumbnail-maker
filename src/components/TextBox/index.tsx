import React from 'react';
import { motion } from 'framer-motion';

import { ANIMATE_FADE_UP_ITEM } from '$constants/animation';

export default function TextBox() {
  return (
    <motion.div className="text-box" variants={ANIMATE_FADE_UP_ITEM}>
      TextBox
    </motion.div>
  );
}
