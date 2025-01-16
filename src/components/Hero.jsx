import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div id="hero" className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 overflow-hidden pt-24 min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl"
              >
                <span className="block xl:inline">Secure your files with</span>{' '}
                <span className="block text-indigo-400 xl:inline">advanced encryption</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Protect your sensitive data with our state-of-the-art encryption technology. Upload, encrypt, and securely share your files with confidence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <Link
                    to="/product"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}

export default Hero;