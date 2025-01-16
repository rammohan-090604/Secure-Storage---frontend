import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and left-side links */}
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">SecureFile</Link>

            {/* Desktop Navigation links */}
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#process" className="text-gray-600 hover:text-gray-900">Process</a>
              <Link
              to="/product"
              className="text-gray-600 hover:text-gray-900"
            >
              Product
            </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex space-x-4">
            {/* Product Button on Mobile */}
            <Link
              to="/product"
              className="inline-block py-2 px-4 bg-indigo-600 text-white font-medium rounded-md text-sm hover:bg-indigo-700 transition duration-300"
            >
              Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
