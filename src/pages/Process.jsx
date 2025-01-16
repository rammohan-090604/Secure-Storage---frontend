function Process() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple and Secure Process
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="text-lg font-medium leading-6 text-gray-900">1. Upload</div>
              <p className="mt-2 text-base text-gray-500">
                Select and upload your file through our secure interface.
              </p>
            </div>

            <div className="relative">
              <div className="text-lg font-medium leading-6 text-gray-900">2. Process</div>
              <p className="mt-2 text-base text-gray-500">
                Your file is encrypted using advanced algorithms.
              </p>
            </div>

            <div className="relative">
              <div className="text-lg font-medium leading-6 text-gray-900">3. Download</div>
              <p className="mt-2 text-base text-gray-500">
                Download your encrypted file or share it securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;