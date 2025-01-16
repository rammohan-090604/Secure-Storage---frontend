import { motion } from 'framer-motion';

function About() {
  return (
    <div id="about" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase text-xl">About Us</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Securing Your Digital Assets
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            We are dedicated to providing the most secure and efficient file encryption solutions for individuals and businesses alike.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-indigo-900/30 p-8 rounded-xl backdrop-blur-sm border border-indigo-500/20"
            >
              <h3 className="text-xl font-medium leading-6 text-indigo-400">Military-grade Encryption</h3>
              <p className="mt-2 text-lg text-gray-300">
                We use advanced encryption algorithms to ensure your files remain secure and private.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-indigo-900/30 p-8 rounded-xl backdrop-blur-sm border border-indigo-500/20"
            >
              <h3 className="text-xl font-medium leading-6 text-indigo-400">Secure File Handling</h3>
              <p className="mt-2 text-lg text-gray-300">
                Your files are processed securely and never stored on our servers without encryption.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;