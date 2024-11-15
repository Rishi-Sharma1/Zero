import React from 'react';
import { motion } from 'framer-motion';

const FeedbackItem = ({ text, sentiment }) => {
  return (
    <motion.div
      className="p-4 bg-gray-200 rounded-lg hover:bg-blue-100 transition duration-300"
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)' }}
    >
      <p>{text}</p>
      <p className="mt-2 text-sm text-gray-700">Sentiment: <strong>{sentiment}</strong></p>
    </motion.div>
  );
};

export default FeedbackItem;
