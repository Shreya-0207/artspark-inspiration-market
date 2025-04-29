
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { artworks } from '../data/mockData';

const Artwork = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const artwork = artworks.find(art => art.id === id);
  
  if (!artwork) {
    return (
      <>
        <Navbar />
        <div className="art-container py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Artwork Not Found</h2>
          <p className="mb-8">Sorry, we couldn't find the artwork you're looking for.</p>
          <Link to="/marketplace">
            <Button>Return to Marketplace</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Simulate adding to cart
    setTimeout(() => {
      setIsAddingToCart(false);
      toast({
        title: "Added to Cart",
        description: `${artwork.title} has been added to your cart.`,
      });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="py-12">
        <div className="art-container">
          <div className="mb-8">
            <Link to="/marketplace" className="text-art-purple hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span className="ml-2">Back to Marketplace</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <div className="mb-8">
                <span className="text-sm bg-art-purple-light text-art-purple-dark px-3 py-1 rounded-full">
                  {artwork.style}
                </span>
                <h1 className="text-3xl font-bold mt-3 mb-2">{artwork.title}</h1>
                <p className="text-lg text-gray-700 mb-4">by <Link to={`/artist/${artwork.artistId}`} className="text-art-purple hover:underline">{artwork.artistName}</Link></p>
                <p className="text-2xl font-bold text-art-purple-dark">${artwork.price.toLocaleString()}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Details</h2>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <p className="font-medium">Medium</p>
                    <p>{artwork.medium}</p>
                  </div>
                  <div>
                    <p className="font-medium">Dimensions</p>
                    <p>{artwork.dimensions}</p>
                  </div>
                  <div>
                    <p className="font-medium">Year</p>
                    <p>{artwork.year}</p>
                  </div>
                  <div>
                    <p className="font-medium">Style</p>
                    <p>{artwork.style}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">About this artwork</h2>
                <p className="text-gray-600">{artwork.description}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-art-purple hover:bg-art-purple-dark text-lg py-6"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding to Cart...
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-art-purple text-art-purple hover:bg-art-purple-light text-lg py-6"
                >
                  Contact About This Piece
                </Button>
              </div>
            </div>
          </div>
          
          {/* Shipping and Returns Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Shipping & Returns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Shipping Information</h3>
                <p className="text-gray-600 mb-4">
                  Each artwork is packaged with the utmost care and shipped with professional art shipping services.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-art-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Free shipping on all domestic orders
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-art-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    International shipping available (additional fees apply)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-art-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Expected delivery: 5-7 business days
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Return Policy</h3>
                <p className="text-gray-600 mb-4">
                  We want you to be completely satisfied with your purchase.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-art-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    14-day return window
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-art-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Artwork must be in original condition
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-art-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Return shipping paid by buyer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Artwork;
