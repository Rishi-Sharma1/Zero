import React from 'react';
import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;
const Fliplink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-8xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const LandingPage = ({ onFetchFeedback }) => {
  return (
    <>
      <motion.div
        className="text-center" 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-4xl font-bold mb-6">
          <Fliplink href="#">Welcome</Fliplink>
          <Fliplink>to</Fliplink>
          <Fliplink>Feedback</Fliplink>
          <Fliplink>Analysis</Fliplink>
        </h1>
        <p className="mb-8 text-xl">Analyze citizen feedback on public services.</p>
      </motion.div>
    </>
  );
};

export default LandingPage;
