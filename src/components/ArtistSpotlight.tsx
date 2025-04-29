
import { Link } from 'react-router-dom';
import { artists } from '../data/mockData';
import { Button } from './ui/button';

const ArtistSpotlight = () => {
  // Get first 3 artists for spotlight
  const featuredArtists = artists.slice(0, 3);
  
  return (
    <div className="py-20 bg-gray-50">
      <div className="art-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Artist Spotlight</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented creators behind the exceptional artwork on ArtSpark.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArtists.map((artist) => (
            <Link to={`/artist/${artist.id}`} key={artist.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={artist.avatar} 
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-art-purple transition-colors">{artist.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{artist.location}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{artist.bio}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{artist.followers.toLocaleString()} followers</span>
                    <span className="text-art-purple font-medium group-hover:underline">View Profile</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/artists">
            <Button className="bg-art-purple hover:bg-art-purple-dark">
              Discover More Artists
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistSpotlight;
