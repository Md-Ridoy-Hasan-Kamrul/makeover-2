import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handlePortfolioClick = (category: string) => {
    navigate(`/portfolio/${category}`);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='bg-white shadow-md fixed w-full z-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <Link to='/' className='flex items-center space-x-2'>
            <Palette className='h-8 w-8 text-pink-500' />
            <span className='text-xl font-bold text-gray-800'>
              Bella Beauty
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              to='/'
              className='text-gray-600 hover:text-pink-500 transition duration-300'
            >
              Home
            </Link>
            <div className='relative'>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='text-gray-600 hover:text-pink-500 transition duration-300'
              >
                Portfolio
              </button>
              {isDropdownOpen && (
                <div className='absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-2'>
                  <button
                    onClick={() => handlePortfolioClick('all-work')}
                    className='block w-full text-left px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  >
                    All Work
                  </button>
                  <button
                    onClick={() => handlePortfolioClick('wedding')}
                    className='block w-full text-left px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  >
                    Wedding
                  </button>
                  <button
                    onClick={() => handlePortfolioClick('pre-wedding')}
                    className='block w-full text-left px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  >
                    Pre-Wedding
                  </button>
                  <button
                    onClick={() => handlePortfolioClick('simple-party')}
                    className='block w-full text-left px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  >
                    Simple Party Makeups
                  </button>
                  <button
                    onClick={() => handlePortfolioClick('party')}
                    className='block w-full text-left px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  >
                    Only Party Makeups
                  </button>
                  <button
                    onClick={() => handlePortfolioClick('gorgeous-party')}
                    className='block w-full text-left px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  >
                    Gorgeous Party Makeups
                  </button>
                </div>
              )}
            </div>
            <Link
              to='/certificate'
              className='text-gray-600 hover:text-pink-500 transition duration-300'
            >
              Certificate
            </Link>
            <Link
              to='/contact'
              className='text-gray-600 hover:text-pink-500 transition duration-300'
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden text-gray-600 hover:text-pink-500 transition duration-300'
          >
            {isMobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden py-4 bg-white border-t'>
            <Link
              to='/'
              className='block py-2 text-gray-600 hover:text-pink-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='block w-full text-left py-2 text-gray-600 hover:text-pink-500'
            >
              Portfolio
            </button>
            {isDropdownOpen && (
              <div className='pl-4 py-2 space-y-2 bg-gray-50'>
                <button
                  onClick={() => handlePortfolioClick('all-work')}
                  className='block w-full text-left py-1 text-gray-600 hover:text-pink-500'
                >
                  All Work
                </button>
                <button
                  onClick={() => handlePortfolioClick('wedding')}
                  className='block w-full text-left py-1 text-gray-600 hover:text-pink-500'
                >
                  Wedding
                </button>
                <button
                  onClick={() => handlePortfolioClick('pre-wedding')}
                  className='block w-full text-left py-1 text-gray-600 hover:text-pink-500'
                >
                  Pre-Wedding
                </button>
                <button
                  onClick={() => handlePortfolioClick('simple-party')}
                  className='block w-full text-left py-1 text-gray-600 hover:text-pink-500'
                >
                  Simple Party Makeups
                </button>
                <button
                  onClick={() => handlePortfolioClick('party')}
                  className='block w-full text-left py-1 text-gray-600 hover:text-pink-500'
                >
                  Only Party Makeups
                </button>
                <button
                  onClick={() => handlePortfolioClick('gorgeous-party')}
                  className='block w-full text-left py-1 text-gray-600 hover:text-pink-500'
                >
                  Gorgeous Party Makeups
                </button>
              </div>
            )}
            <Link
              to='/certificate'
              className='block py-2 text-gray-600 hover:text-pink-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Certificate
            </Link>
            <Link
              to='/contact'
              className='block py-2 text-gray-600 hover:text-pink-500'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-b from-pink-50 to-white'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio/:category' element={<Portfolio />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
