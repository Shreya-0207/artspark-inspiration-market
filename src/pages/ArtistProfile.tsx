
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { useState } from 'react';
import { artists, artworks } from '../data/mockData';
import ArtCard from '../components/ArtCard';

const ArtistProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isFollowing, setIsFollowing] = useState(false);
  
  const artist = artists.find(artist => artist.id === id);
  const artistArtworks = artworks.filter(artwork => artwork.artistId === id);
  
  if (!artist) {
    return (
      <>
        <Navbar />
        <div className="art-container py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Artist Not Found</h2>
          <p className="mb-8">Sorry, we couldn't find the artist you're looking for.</p>
          <Link to="/artists">
            <Button>View All Artists</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    
    toast({
      title: isFollowing ? "Unfollowed Artist" : "Following Artist",
      description: isFollowing 
        ? `You are no longer following ${artist.name}.` 
        : `You are now following ${artist.name}.`,
    });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Artist Header */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
          <div className="art-container">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={artist.avatar} 
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
                <p className="text-gray-600 mb-4">{artist.location}</p>
                <p className="text-gray-700 mb-6 max-w-2xl">{artist.bio}</p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button 
                    className={isFollowing ? "bg-white text-art-purple border border-art-purple" : "bg-art-purple text-white"}
                    onClick={handleFollow}
                  >
                    {isFollowing ? 'Unfollow' : 'Follow'}
                  </Button>
                  <Button variant="outline" className="border-art-purple text-art-purple hover:bg-art-purple-light">
                    Contact Artist
                  </Button>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{artist.followers.toLocaleString()}</span> followers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Artist's Artwork */}
        <div className="art-container py-16">
          <h2 className="text-2xl font-bold mb-8">Artwork by {artist.name}</h2>
          
          {artistArtworks.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">No artwork available</h3>
              <p className="text-gray-500">This artist hasn't added any artwork yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {artistArtworks.map(artwork => (
                <ArtCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          )}
        </div>
        
        {/* Artist Statement */}
        <div className="bg-gray-50 py-16">
          <div className="art-container">
            <h2 className="text-2xl font-bold mb-6">Artist Statement</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-6">
                My work explores the relationship between the universality of myth and life as performance. 
                With influences as diverse as Nietzsche and Roy Lichtenstein, new tensions are created from both 
                explicit and implicit layers.
              </p>
              <p className="text-gray-600 mb-6">
                Ever since I was a teenager I have been fascinated by the ephemeral nature of the mind. 
                What starts out as vision soon becomes corrupted into a hegemony of defeat, leaving only a sense 
                of nihilism and the chance of a new beginning.
              </p>
              <p className="text-gray-600">
                As shifting derivatives become frozen through studious and diverse practice, the viewer is left 
                with a testament to the edges of our condition.
              </p>
            </div>
          </div>
        </div>
        
        {/* Exhibition History */}
        <div className="art-container py-16">
          <h2 className="text-2xl font-bold mb-6">Exhibition History</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-art-purple pl-4 py-2">
              <h3 className="text-lg font-semibold">Solo Exhibition - "Inner Landscapes"</h3>
              <p className="text-gray-600">Modern Art Gallery, New York, 2023</p>
            </div>
            <div className="border-l-4 border-art-purple pl-4 py-2">
              <h3 className="text-lg font-semibold">Group Show - "New Perspectives"</h3>
              <p className="text-gray-600">Contemporary Arts Center, Berlin, 2022</p>
            </div>
            <div className="border-l-4 border-art-purple pl-4 py-2">
              <h3 className="text-lg font-semibold">Art Fair - "Artisan Market"</h3>
              <p className="text-gray-600">International Convention Center, Tokyo, 2022</p>
            </div>
            <div className="border-l-4 border-art-purple pl-4 py-2">
              <h3 className="text-lg font-semibold">Featured Artist - "Emerging Talent"</h3>
              <p className="text-gray-600">City Gallery, San Francisco, 2021</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArtistProfile;
