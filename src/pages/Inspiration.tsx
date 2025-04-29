
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { artStyles, artworks } from '../data/mockData';

const Inspiration = () => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const filteredArtworks = selectedStyle 
    ? artworks.filter(artwork => artwork.style === selectedStyle)
    : artworks;

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
          <div className="art-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Inspired</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore different art styles and find inspiration for your next creative project.
            </p>
          </div>
        </div>
        
        <div className="art-container py-12">
          {/* Art Style Navigation */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              <button
                onClick={() => setSelectedStyle(null)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedStyle === null
                    ? 'bg-art-purple text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Styles
              </button>
              {artStyles.map(style => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                    selectedStyle === style
                      ? 'bg-art-purple text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
          
          {/* Style Description (when a style is selected) */}
          {selectedStyle && (
            <div className="mb-10 p-6 bg-white rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-3">{selectedStyle}</h2>
              <p className="text-gray-600">
                {getStyleDescription(selectedStyle)}
              </p>
            </div>
          )}
          
          {/* Art Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map(artwork => (
              <div key={artwork.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold">{artwork.title}</h3>
                    <p className="text-sm">{artwork.artistName}</p>
                    <span className="text-xs mt-1 bg-white/20 self-start px-2 py-1 rounded-full">
                      {artwork.style}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Art Style Tips Section */}
        <div className="bg-gray-50 py-16">
          <div className="art-container">
            <h2 className="text-3xl font-bold mb-10 text-center">Art Style Tips & Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Finding Your Style</h3>
                <p className="text-gray-600 mb-4">
                  Developing your artistic style is a journey of exploration and self-discovery. 
                  Experiment with different mediums, techniques, and subjects to find what resonates with you.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Study artists whose work you admire</li>
                  <li>Practice regularly and keep a sketchbook</li>
                  <li>Don't be afraid to combine different influences</li>
                  <li>Let your style evolve naturally over time</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Color Theory Basics</h3>
                <p className="text-gray-600 mb-4">
                  Understanding color theory can dramatically improve your artwork. 
                  Learn how colors interact and evoke different emotions.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Primary colors: Red, Yellow, Blue</li>
                  <li>Complementary colors create vibrant contrasts</li>
                  <li>Analogous colors create harmony and unity</li>
                  <li>Warm colors advance, cool colors recede</li>
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

// Helper function to get descriptions for art styles
const getStyleDescription = (style: string): string => {
  const descriptions: {[key: string]: string} = {
    "Abstract": "Abstract art uses shapes, colors, forms and gestural marks to achieve its effect, rather than attempting to accurately depict visual reality.",
    "Contemporary": "Contemporary art is the art of today, produced in the second half of the 20th century or the 21st century. It often explores personal, social, and cultural identity.",
    "Cubism": "Cubism is an early-20th-century art movement which brought European painting and sculpture historically forward toward 20th century Modern art.",
    "Expressionism": "Expressionism is a modernist movement originating in Northern Europe that emphasized the representation of emotional experience over physical reality.",
    "Impressionism": "Impressionism captures the sensory effect of a scene rather than exact details, often using small, visible brush strokes and an emphasis on light.",
    "Minimalism": "Minimalism is characterized by extreme simplicity of form and a literal, objective approach. It uses simple design elements without ornamentation or decoration.",
    "Pop Art": "Pop Art is an art movement that emerged in the 1950s that challenges fine art traditions by including imagery from popular culture such as advertising and news.",
    "Realism": "Realism in the arts is the attempt to represent subject matter truthfully, without artificiality and avoiding artistic conventions or implausible elements.",
    "Street Art": "Street art is visual art created in public locations, usually unsanctioned artwork executed outside of the context of traditional art venues.",
    "Surrealism": "Surrealism is a cultural movement that began in the early 1920s, best known for visual artworks and writings that feature elements of surprise and unexpected juxtapositions."
  };
  
  return descriptions[style] || "Explore the unique characteristics and techniques of this fascinating art style.";
};

export default Inspiration;
