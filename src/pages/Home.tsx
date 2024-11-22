import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Star, Moon, Sun, Users, ArrowRight, Quote } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]));

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Get personalized predictions using advanced artificial intelligence"
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Cosmic Alignment",
      description: "Understand how planetary positions influence your path"
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Daily Guidance",
      description: "Receive daily insights to make better decisions"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150",
      quote: "ASTROKARMA ne meri business decisions mein bohot help ki hai. Ab main apne future ko lekar confident feel karti hoon!"
    },
    {
      name: "Rajesh Patel",
      role: "Tech Professional",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150",
      quote: "Roz subah ASTROKARMA check karna mera daily routine ban gaya hai. Isse meri productivity aur decision making better hui hai."
    },
    {
      name: "Meera Kapoor",
      role: "Life Coach",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150",
      quote: "Mere clients ko guidance dene mein ASTROKARMA ka bohot support milta hai. It's truly a game-changer!"
    },
    {
      name: "Arjun Mehta",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&h=150",
      quote: "AI aur astrology ka combination ekdum zabardast hai! Daily predictions se meri creativity ko naya direction milta hai."
    }
  ];

  return (
    <div className="relative min-h-screen" ref={containerRef}>
      <ParticleBackground />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent opacity-50"
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="mb-8 relative"
          whileHover={{ scale: 1.1 }}
        >
          <Star className="w-20 h-20 text-purple-400 mx-auto animate-float" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-purple-400 rounded-full filter blur-xl opacity-50"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text"
        >
          Discover Your Cosmic Path
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
        >
          Connect with our AI-powered astrological insights and unlock the mysteries of your destiny
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/prediction')}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20"
          />
          <Sparkles className="w-5 h-5 mr-2" />
          Start Your Prediction
        </motion.button>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <motion.div style={{ y }} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Unlock Your Potential
            </h2>
            <p className="text-gray-300">Discover what makes ASTROKARMA unique</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform perspective-1000"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/30 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-pink-900/20 to-purple-900/20"
        />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hamare Users Ki Kahani
            </h2>
            <p className="text-gray-300">Join thousands of satisfied seekers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black/40 backdrop-blur-lg rounded-xl p-6 relative group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-400"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 rounded-3xl -z-10"
          />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Start your cosmic journey today and discover what the stars have in store for you
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/prediction')}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Get Your Reading Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;