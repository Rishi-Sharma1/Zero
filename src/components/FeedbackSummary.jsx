// FeedbackSummary.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeedbackSummary = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-3/4 bg-white text-black p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4">Feedback Summary</h2>
      <p className="text-lg mb-6">
        Analyze feedback sentiment to improve public services.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div
          className="p-4 bg-blue-100 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
          onClick={() => navigate("/transport")}
        >
          <h3 className="font-semibold text-lg">Transport</h3>
          <p>Feedback about public transport services.</p>
        </div>
        <div
          className="p-4 bg-blue-100 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
          onClick={() => navigate("/cleanliness")}
        >
          <h3 className="font-semibold text-lg">Cleanliness</h3>
          <p>Feedback about cleanliness in the city.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeedbackSummary;
