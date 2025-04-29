
import { Link } from 'react-router-dom';
import { artworks } from '../data/mockData';
import ArtCard from './ArtCard';
import { Button } from './ui/button';

const FeaturedArt = () => {
  // Get first 6 artworks for featured section
  const featuredArtworks = artworks.slice(0, 6);
  
  return (
    <div className="py-20 bg-white">
      <div className="art-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Artworks</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our handpicked selection of exceptional pieces from talented artists around the world.
            </p>
          </div>
          <Link to="/marketplace" className="mt-6 md:mt-0">
            <Button variant="outline" className="border-art-purple text-art-purple hover:bg-art-purple-light">
              View All Artwork
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork) => (
            <ArtCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArt;
