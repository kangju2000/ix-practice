import { css } from '@emotion/react';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { motion } from 'framer-motion';

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      duration: 2,
      x: 200,
      rotation: 360,
    });
  });

  return (
    <div>
      <GlobalStyle />
      <h1>테스트</h1>
      <div
        ref={ref}
        css={css`
          width: 100px;
          height: 100px;
          background-color: blue;
          border-radius: 8px;
        `}
      ></div>
      <div
        css={css`
          height: 100px;
        `}
      ></div>
      <motion.div
        css={css`
          width: 100px;
          height: 100px;
          background-color: blue;
          border-radius: 8px;
        `}
        animate={{
          x: 200,
          rotate: 360,
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
}

export default App;
