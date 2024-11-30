import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function Prediction() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-4rem)] pt-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Cosmic Reading
          </h1>
          <p className="text-gray-300">
            Connect with our AI to receive personalized astrological insights
          </p>
        </div>

        <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-lg">
          <button
            onClick={() => setIsWidgetLoaded(!isWidgetLoaded)}
            className="w-full mb-6 flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            <span>{isWidgetLoaded ? 'Reset Widget' : 'Start Reading'}</span>
          </button>

          {isWidgetLoaded && (
            <div className="flex justify-center">
          <iframe
  id="audio_iframe"
  src="https://widget.synthflow.ai/widget/v2/1732954676758x302747995081800160/1732954676651x748826923745399900"
  allow="microphone"
  width="400"
  height="600"
  style={{ background: 'transparent', border: 'none' }}
/>


            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Prediction;
