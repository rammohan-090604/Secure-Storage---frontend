import { motion } from 'framer-motion';

function Process() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div id="process" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-center"
        >
          <h2 className="text-xl text-indigo-400 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Encryption & Decryption Process
          </p>
        </motion.div>

        <div className="mt-20">
          {/* Encryption Timeline */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-indigo-400 mb-12">Encryption Process</h3>
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-indigo-500/30"></div>
              
              <div className="space-y-12">
                {[
                  {
                    title: "1. File Upload",
                    description: "We take the file from the user through a secure interface"
                  },
                  {
                    title: "2. Binary Conversion",
                    description: "Convert the file into encrypted binary format using advanced encryption algorithms"
                  },
                  {
                    title: "3. Frame Generation",
                    description: "The encrypted data is divided into secure frames for efficient processing"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative pl-20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-6 -translate-x-1/2 h-4 w-4 rounded-full bg-indigo-500 border-4 border-indigo-900"
                    ></motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-indigo-900/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-indigo-500/20"
                    >
                      <h4 className="text-xl font-semibold text-indigo-400">{step.title}</h4>
                      <p className="mt-2 text-lg text-gray-300">{step.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decryption Timeline */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-green-400 mb-12">Decryption Process</h3>
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-green-500/30"></div>
              
              <div className="space-y-12">
                {[
                  {
                    title: "1. Receive Encrypted File",
                    description: "Securely receive the encrypted file frames"
                  },
                  {
                    title: "2. Frame Assembly",
                    description: "Reassemble the encrypted frames in the correct order"
                  },
                  {
                    title: "3. Decryption",
                    description: "Convert the encrypted binary back to its original file format"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative pl-20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-6 -translate-x-1/2 h-4 w-4 rounded-full bg-green-500 border-4 border-green-900"
                    ></motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-green-900/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-green-500/20"
                    >
                      <h4 className="text-xl font-semibold text-green-400">{step.title}</h4>
                      <p className="mt-2 text-lg text-gray-300">{step.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Process;