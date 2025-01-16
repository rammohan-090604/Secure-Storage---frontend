function About() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Securing Your Digital Assets
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are dedicated to providing the most secure and efficient file encryption solutions for individuals and businesses alike.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Military-grade Encryption</h3>
              <p className="mt-2 text-base text-gray-500">
                We use advanced encryption algorithms to ensure your files remain secure and private.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Secure File Handling</h3>
              <p className="mt-2 text-base text-gray-500">
                Your files are processed securely and never stored on our servers without encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;