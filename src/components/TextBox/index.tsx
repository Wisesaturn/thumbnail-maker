import { motion } from 'framer-motion';
import { useContext } from 'react';

import Input from '$components/Input';
import Button from '$components/Button';

import { TextContext } from '$contexts/TextProvider';
import { CanvasContext } from '$contexts/CanvasProvider';

import { ANIMATE_FADE_UP_ITEM } from '$constants/animation';

export default function TextBox() {
  const { title, setTitle } = useContext(TextContext);
  const { imageData } = useContext(CanvasContext);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <motion.div className="text-box" variants={ANIMATE_FADE_UP_ITEM}>
        <Input
          label="타이틀"
          placeholder="타이틀을 입력하세요"
          value={title}
          onChange={handleTitleChange}
        />
      </motion.div>
      <motion.div className="action-box" variants={ANIMATE_FADE_UP_ITEM}>
        {imageData && (
          <a href={imageData} download="image.webp">
            <Button>다운로드</Button>
          </a>
        )}
      </motion.div>
    </>
  );
}
