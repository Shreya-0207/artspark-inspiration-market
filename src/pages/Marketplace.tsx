
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StyleFilter from '../components/StyleFilter';
import ArtCard from '../components/ArtCard';
import { artworks, artStyles } from '../data/mockData';

const Marketplace = () => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);

  useEffect(() => {
    if (selectedStyles.length === 0) {
      setFilteredArtworks(artworks);
    } else {
      setFilteredArtworks(
        artworks.filter(artwork => selectedStyles.includes(artwork.style))
      );
    }
  }, [selectedStyles]);

  return (
    <>
      <Navbar />
      <main className="py-12">
        <div className="art-container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3">Art Marketplace</h1>
            <p className="text-gray-600 max-w-2xl">
              Discover and purchase unique artwork from talented artists around the world.
              Use the filters to find exactly what you're looking for.
            </p>
          </div>
          
          <StyleFilter 
            styles={artStyles}
            selectedStyles={selectedStyles}
            onStyleChange={setSelectedStyles}
            onViewChange={setViewType}
            currentView={viewType}
          />
          
          {filteredArtworks.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No artworks match your filter</h3>
              <p className="text-gray-500">Try selecting different art styles or clear all filters</p>
            </div>
          ) : (
            <div className={`
              ${viewType === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
              }
            `}>
              {filteredArtworks.map(artwork => (
                <div key={artwork.id}>
                  {viewType === 'grid' ? (
                    <ArtCard artwork={artwork} />
                  ) : (
                    <div className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="w-1/3 h-48">
                        <img 
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-6">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{artwork.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">by {artwork.artistName}</p>
                          </div>
                          <span className="font-semibold text-lg">${artwork.price.toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{artwork.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{artwork.medium}, {artwork.dimensions}</span>
                          <span className="text-sm bg-art-purple-light text-art-purple-dark px-3 py-1 rounded-full">
                            {artwork.style}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Marketplace;
