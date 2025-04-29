
import { useState } from 'react';
import { Button } from './ui/button';
import { Check, Filter } from 'lucide-react';

interface StyleFilterProps {
  styles: string[];
  selectedStyles: string[];
  onStyleChange: (styles: string[]) => void;
  onViewChange: (view: 'grid' | 'list') => void;
  currentView: 'grid' | 'list';
}

const StyleFilter = ({ 
  styles, 
  selectedStyles, 
  onStyleChange, 
  onViewChange, 
  currentView 
}: StyleFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStyle = (style: string) => {
    if (selectedStyles.includes(style)) {
      onStyleChange(selectedStyles.filter(s => s !== style));
    } else {
      onStyleChange([...selectedStyles, style]);
    }
  };

  const clearFilters = () => {
    onStyleChange([]);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
        <div className="relative mb-4 lg:mb-0">
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2"
          >
            <Filter className="h-4 w-4" />
            <span>Filter by Style {selectedStyles.length > 0 && `(${selectedStyles.length})`}</span>
          </Button>
          
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md border z-10">
              <div className="p-4">
                <div className="mb-3 flex justify-between items-center">
                  <h3 className="font-medium">Art Styles</h3>
                  <Button 
                    variant="link" 
                    className="text-art-purple p-0 h-auto" 
                    onClick={clearFilters}
                  >
                    Clear All
                  </Button>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {styles.map((style) => (
                    <div 
                      key={style}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                      onClick={() => toggleStyle(style)}
                    >
                      <div className={`w-4 h-4 border rounded flex items-center justify-center ${
                        selectedStyles.includes(style) ? 'bg-art-purple border-art-purple' : 'border-gray-300'
                      }`}>
                        {selectedStyles.includes(style) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span>{style}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant={currentView === 'grid' ? 'default' : 'outline'}
            className={`p-2 h-10 w-10 ${currentView === 'grid' ? 'bg-art-purple' : ''}`}
            onClick={() => onViewChange('grid')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
            </svg>
          </Button>
          <Button 
            variant={currentView === 'list' ? 'default' : 'outline'}
            className={`p-2 h-10 w-10 ${currentView === 'list' ? 'bg-art-purple' : ''}`}
            onClick={() => onViewChange('list')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
      
      {selectedStyles.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedStyles.map((style) => (
            <div 
              key={style}
              className="bg-art-purple-light text-art-purple-dark px-3 py-1 rounded-full text-sm flex items-center"
            >
              {style}
              <button 
                onClick={() => toggleStyle(style)}
                className="ml-2 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          ))}
          <button 
            onClick={clearFilters}
            className="text-art-purple text-sm underline"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default StyleFilter;
