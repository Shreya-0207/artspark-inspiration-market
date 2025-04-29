
import { Link } from 'react-router-dom';
import { Artist } from '../data/mockData';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <Link to={`/artist/${artist.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="h-48 overflow-hidden">
          <img 
            src={artist.avatar} 
            alt={artist.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1 group-hover:text-art-purple transition-colors">{artist.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{artist.location}</p>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">{artist.bio}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{artist.followers.toLocaleString()} followers</span>
            <span className="text-sm text-art-purple font-medium group-hover:underline">View Profile</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
