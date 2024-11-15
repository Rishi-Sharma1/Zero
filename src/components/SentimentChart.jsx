import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';

const SentimentChart = ({ data }) => {
  const sentimentChartData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        label: 'Sentiment Analysis',
        data: data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-xl font-semibold">Sentiment Analysis</h3>
      <Line data={sentimentChartData} />
    </motion.div>
  );
};

export default SentimentChart;
