import React from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Sun, Sparkles, Heart } from 'lucide-react';

function About() {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-purple-400" />,
      title: 'AI-Powered Insights',
      description: 'Aapke life ke secrets ko samajhne ke liye advanced AI technology ka istemal',
    },
    {
      icon: <Moon className="w-6 h-6 text-purple-400" />,
      title: 'Cosmic Alignment',
      description: 'Stars aur planets ki position se aapki life ki direction ko samjhein',
    },
    {
      icon: <Sun className="w-6 h-6 text-purple-400" />,
      title: 'Daily Guidance',
      description: 'Har din ki nayi predictions jo aapko right decisions lene mein help karein',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: 'Personal Growth',
      description: 'Apni spiritual aur personal growth journey ko next level pe le jayein',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-4rem)] pt-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          animate={floatingAnimation}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Star className="w-16 h-16 text-purple-400" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            ASTROKARMA ke baare mein
          </h1>
          <p className="text-gray-300 text-lg">
            Ancient wisdom aur modern technology ka perfect combination
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <motion.div 
                className="mb-4"
                animate={floatingAnimation}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-black/30 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20"
        >
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hamara Mission
            </h2>
            <motion.div
              animate={{ rotate: [0, 14, -14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-3"
            >
              <Heart className="w-6 h-6 text-pink-400" />
            </motion.div>
          </div>
          <p className="text-gray-300 mb-4 text-lg">
            Hum aapko aapki life ki journey mein guide karne ke liye AI technology aur ancient astrology ko combine karte hain. Hamara goal hai ki aap apni destiny ko better understand kar sakein aur life mein sahi decisions le sakein.
          </p>
          <p className="text-gray-300 text-lg">
            Modern technology ki madad se, hum astrology ko sabke liye accessible banate hain, taki aap confidence ke saath apni life ki har challenge ka samna kar sakein.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;