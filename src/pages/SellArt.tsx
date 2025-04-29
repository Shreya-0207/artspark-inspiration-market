
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';
import { artStyles } from '../data/mockData';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SellArt = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [artworkData, setArtworkData] = useState({
    title: '',
    price: '',
    medium: '',
    dimensions: '',
    year: new Date().getFullYear().toString(),
    description: '',
    style: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArtworkData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleStyleChange = (value: string) => {
    setArtworkData(prev => ({ ...prev, style: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Artwork Listed",
        description: "Your artwork has been successfully submitted for review.",
      });
      navigate('/marketplace');
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-12">
          <div className="art-container text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sell Your Artwork</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share your creative vision with the world and connect with art enthusiasts looking for unique pieces.
            </p>
          </div>
        </div>
        
        <div className="art-container py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Artwork Title *
                </label>
                <Input
                  id="title"
                  name="title"
                  value={artworkData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Sunset Dreams"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price ($) *
                  </label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="1"
                    value={artworkData.price}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 250"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="style" className="block text-sm font-medium text-gray-700">
                    Art Style *
                  </label>
                  <Select value={artworkData.style} onValueChange={handleStyleChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select art style" />
                    </SelectTrigger>
                    <SelectContent>
                      {artStyles.map(style => (
                        <SelectItem key={style} value={style}>{style}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="medium" className="block text-sm font-medium text-gray-700">
                    Medium *
                  </label>
                  <Input
                    id="medium"
                    name="medium"
                    value={artworkData.medium}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Oil on Canvas"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
                    Dimensions *
                  </label>
                  <Input
                    id="dimensions"
                    name="dimensions"
                    value={artworkData.dimensions}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 24 x 36 inches"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                  Year Created *
                </label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={artworkData.year}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={artworkData.description}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your artwork..."
                  rows={5}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Upload Image *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="image"
                    className="hidden"
                    accept="image/*"
                    required
                  />
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                          <line x1="16" x2="22" y1="5" y2="5"></line>
                          <line x1="19" x2="19" y1="2" y2="8"></line>
                          <circle cx="9" cy="9" r="2"></circle>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-art-purple hover:bg-art-purple-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : "Submit Artwork"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SellArt;
