import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import FeedbackSummary from './components/FeedbackSummary';
import FeedbackDashboard from './components/TransportFeedback';



const App = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleFetchFeedback = () => {
    setShowFeedback(true);
  };

  return (
    <>
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      
      {!showFeedback ? (
        <LandingPage onFetchFeedback={handleFetchFeedback} />
      ) : (
        <FeedbackSummary />
      )}

<Router>
      <Routes>
        <Route path="/" element={<FeedbackSummary />} />
        <Route path="/transport" element={<FeedbackDashboard />} />
        <Route path="/cleanliness" element={<FeedbackDashboard />} />
      </Routes>
    </Router>
    </motion.div>
    </>
  );
};

export default App;
