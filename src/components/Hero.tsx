
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="art-container py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover and Collect <span className="text-art-purple">Exceptional</span> Artwork
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              ArtSpark connects passionate artists with art enthusiasts. 
              Find unique pieces that speak to you or share your creativity with the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/marketplace">
                <Button className="px-8 py-6 bg-art-purple hover:bg-art-purple-dark text-lg">
                  Explore Art
                </Button>
              </Link>
              <Link to="/login?signup=true&artist=true">
                <Button variant="outline" className="px-8 py-6 border-art-purple text-art-purple hover:bg-art-purple-light text-lg">
                  Sell Your Art
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl transform translate-y-6 artistic-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5" 
                    alt="Minimalist Art" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl artistic-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1574182745640-e1df64303d6e" 
                    alt="Surrealist Art" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl artistic-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9" 
                    alt="Impressionist Art" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl artistic-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1617503752587-97d2103a96ea" 
                    alt="Abstract Art" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-art-purple rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-art-blue rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-art-purple via-art-blue-light to-art-purple-light"></div>
    </div>
  );
};

export default Hero;
