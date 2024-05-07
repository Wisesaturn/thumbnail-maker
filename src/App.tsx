import { motion } from 'framer-motion';

import '$styles/global.css';
import '$styles/component.css';
import ImageBox from '$components/ImageBox';
import TextBox from '$components/TextBox';

import { ANIMATE_FADE_UP_CONTAINER, ANIMATE_FADE_UP_ITEM } from '$constants/animation';

function App() {
  return (
    <motion.main initial="hidden" animate="show" variants={ANIMATE_FADE_UP_CONTAINER}>
      <motion.h1 className="title" variants={ANIMATE_FADE_UP_ITEM}>
        🔥 썸네일 메이커 <span>by. 재한</span>
      </motion.h1>
      <ImageBox />
      <TextBox />
    </motion.main>
  );
}

export default App;
