
import { Link } from 'react-router-dom';
import { artists } from '../data/mockData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArtistCard from '../components/ArtistCard';

const Artists = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-12">
          <div className="art-container text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Artists</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with talented artists from around the world and explore their unique creations.
            </p>
          </div>
        </div>

        <div className="art-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Artists;
