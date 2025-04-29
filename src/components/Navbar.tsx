
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="art-container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-art-purple">
            ArtSpark
          </Link>
          
          <div className="hidden md:flex ml-10 space-x-8">
            <Link to="/" className="text-gray-700 hover:text-art-purple transition-colors">
              Home
            </Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-art-purple transition-colors">
              Marketplace
            </Link>
            <Link to="/inspiration" className="text-gray-700 hover:text-art-purple transition-colors">
              Inspiration
            </Link>
            <Link to="/artists" className="text-gray-700 hover:text-art-purple transition-colors">
              Artists
            </Link>
            <Link to="/sell" className="text-gray-700 hover:text-art-purple transition-colors">
              Sell Your Art
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search art..."
              className="pl-8 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-art-purple focus:border-transparent"
            />
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          </div>

          <Link to="/login">
            <Button variant="outline" className="border-art-purple text-art-purple hover:bg-art-purple hover:text-white">
              Sign In
            </Button>
          </Link>
          
          <Link to="/login?signup=true">
            <Button className="bg-art-purple text-white hover:bg-art-purple-dark">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t">
          <div className="art-container space-y-1">
            <Link to="/" className="block py-2 text-gray-700 hover:text-art-purple">
              Home
            </Link>
            <Link to="/marketplace" className="block py-2 text-gray-700 hover:text-art-purple">
              Marketplace
            </Link>
            <Link to="/inspiration" className="block py-2 text-gray-700 hover:text-art-purple">
              Inspiration
            </Link>
            <Link to="/artists" className="block py-2 text-gray-700 hover:text-art-purple">
              Artists
            </Link>
            <Link to="/sell" className="block py-2 text-gray-700 hover:text-art-purple">
              Sell Your Art
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search art..."
                  className="w-full pl-8 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-art-purple focus:border-transparent"
                />
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              </div>
              <Link to="/login">
                <Button variant="outline" className="w-full border-art-purple text-art-purple hover:bg-art-purple hover:text-white">
                  Sign In
                </Button>
              </Link>
              <Link to="/login?signup=true">
                <Button className="w-full bg-art-purple text-white hover:bg-art-purple-dark">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
