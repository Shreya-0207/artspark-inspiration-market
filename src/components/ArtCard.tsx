
import { Link } from 'react-router-dom';
import { Artwork } from '../data/mockData';

interface ArtCardProps {
  artwork: Artwork;
}

const ArtCard = ({ artwork }: ArtCardProps) => {
  return (
    <Link to={`/artwork/${artwork.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all art-card-hover">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={artwork.image} 
            alt={artwork.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full shadow-sm text-xs font-medium text-gray-700">
            {artwork.style}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1 group-hover:text-art-purple transition-colors">{artwork.title}</h3>
          <p className="text-sm text-gray-500 mb-3">by {artwork.artistName}</p>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">${artwork.price.toLocaleString()}</span>
            <span className="text-xs text-gray-500">{artwork.medium}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtCard;
