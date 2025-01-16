// import { useState } from 'react';
// import { motion } from 'framer-motion';

// function Product() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileSelect = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async (event) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       alert('Please select a file first!');
//       return;
//     }

//     setIsUploading(true);
    
//     // Simulate the upload process
//     try {
//       const formData = new FormData();
//       formData.append('file', selectedFile);
      
//       // Simulate API call with a delay
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       alert('File uploaded successfully!');
//       setSelectedFile(null);
//     } catch (error) {
//       alert('Error uploading file');
//       console.error('Upload error:', error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   // Create a URL for the selected image to display a preview
//   const imagePreview = selectedFile && selectedFile.type.startsWith('image/')
//     ? URL.createObjectURL(selectedFile)
//     : null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-indigo-800 pt-24 pb-12 flex flex-col justify-center items-center text-white">
//       {/* Animated Heading */}
//       <motion.h2
//         className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Upload Your Files Securely
//       </motion.h2>

//       <form onSubmit={handleUpload} className="w-full max-w-xl space-y-6">
//         {/* File Upload Section */}
//         <motion.div
//           className="bg-indigo-50 p-6 border-2 border-dashed border-indigo-200 rounded-lg text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <input
//             type="file"
//             onChange={handleFileSelect}
//             className="hidden"
//             id="file-upload"
//           />
//           <label
//             htmlFor="file-upload"
//             className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-all duration-300"
//           >
//             Choose File
//           </label>
//           {selectedFile && (
//             <motion.div
//               className="mt-4"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <p className="text-sm text-gray-600">
//                 Selected: {selectedFile.name}
//               </p>
//               {/* Display image preview if it's an image file */}
//               {imagePreview && (
//                 <motion.img
//                   src={imagePreview}
//                   alt="File Preview"
//                   className="mt-4 max-w-[150px] h-auto mx-auto border-2 border-indigo-300 rounded-md"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 />
//               )}
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Submit Button with Hover Effect */}
//         <motion.button
//           type="submit"
//           disabled={!selectedFile || isUploading}
//           className={`w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${
//             !selectedFile || isUploading
//               ? 'bg-indigo-400 cursor-not-allowed'
//               : 'bg-indigo-600 hover:bg-indigo-700'
//           } transition-all duration-300`}
//           whileHover={{ scale: 1.05 }}
//         >
//           {isUploading ? 'Uploading...' : 'Upload File'}
//         </motion.button>
//       </form>
//     </div>
//   );
// }

// export default Product;


import { useState } from 'react';
import { motion } from 'framer-motion';

function Product() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [process, setProcess] = useState('encryption'); // Default process is "encryption"

  // Dynamic background colors for encryption and decryption
  const backgroundColors = {
    encryption: 'bg-gradient-to-br from-blue-800 to-black', // Blue to Black
    decryption: 'bg-gradient-to-br from-black to-blue-800', // Black to Blue
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDeselectFile = () => {
    setSelectedFile(null); // Deselect the file
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    setIsUploading(true);
    
    // Simulate the upload process (Encryption or Decryption)
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(`${process.charAt(0).toUpperCase() + process.slice(1)} completed successfully!`);
      setSelectedFile(null);
    } catch (error) {
      alert('Error uploading file');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  // Create a URL for the selected image to display a preview
  const imagePreview = selectedFile && selectedFile.type.startsWith('image/')
    ? URL.createObjectURL(selectedFile)
    : null;

  return (
    <motion.div
      className={`min-h-screen pt-24 pb-12 flex flex-col justify-center items-center text-white transition-all duration-1000 ease-in-out ${backgroundColors[process]}`}
      key={process} // Key to trigger a re-render and transition on process change
    >
      {/* Process Selection */}
      <motion.div
        className="flex justify-center space-x-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          onClick={() => setProcess('encryption')}
          className={`px-6 py-3 rounded-lg ${process === 'encryption' ? 'bg-indigo-600' : 'bg-indigo-300'} text-lg font-medium text-white`}
          whileTap={{ scale: 0.95 }} // Add a subtle tap effect
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Encryption
        </motion.button>
        <motion.button
          onClick={() => setProcess('decryption')}
          className={`px-6 py-3 rounded-lg ${process === 'decryption' ? 'bg-indigo-600' : 'bg-indigo-300'} text-lg font-medium text-white`}
          whileTap={{ scale: 0.95 }} // Add a subtle tap effect
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Decryption
        </motion.button>
      </motion.div>

      {/* Heading based on process */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-indigo-300 mb-8 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {process === 'encryption' ? 'Upload Your File to Encrypt' : 'Upload Your File to Decrypt'}
      </motion.h2>

      <motion.form
        onSubmit={handleUpload}
        className="w-full max-w-xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* File Upload Section */}
        <motion.div
          className="bg-indigo-50 p-6 border-2 border-dashed border-indigo-200 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input
            type="file"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-all duration-300"
          >
            Choose File
          </label>
          {selectedFile && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-gray-600">
                Selected: {selectedFile.name}
              </p>
              {/* Display image preview if it's an image file */}
              {imagePreview && (
                <motion.img
                  src={imagePreview}
                  alt="File Preview"
                  className="mt-4 max-w-[150px] h-auto mx-auto border-2 border-indigo-300 rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              {/* Deselect Button */}
              <motion.button
                type="button"
                onClick={handleDeselectFile}
                className="mt-4 px-6 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 rounded-lg"
                whileTap={{ scale: 0.95 }} // Subtle effect for deselect button
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Deselect File
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Submit Button with Hover Effect */}
        <motion.button
          type="submit"
          disabled={!selectedFile || isUploading}
          className={`w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${
            !selectedFile || isUploading
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          } transition-all duration-300`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {isUploading ? 'Processing...' : `Process File (${process})`}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Product;
