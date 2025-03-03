'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <button
        onClick={toggleMenu}
        className="w-full flex justify-between items-center bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
        Products {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-2 bg-gray-700 text-white rounded-lg p-2">
          {/* Gold Category */}
          <div>
            <button
              onClick={() => toggleCategory('gold')}
              className="w-full flex justify-between px-4 py-2"
            >
              Gold {activeCategory === 'gold' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {activeCategory === 'gold' && (
              <ul className="pl-6 text-sm space-y-1">
                <li className="py-1">Necklaces</li>
                <li className="py-1">Rings</li>
                <li className="py-1">Bracelets</li>
              </ul>
            )}
          </div>
          
          {/* Silver Category */}
          <div className="mt-2">
            <button
              onClick={() => toggleCategory('silver')}
              className="w-full flex justify-between px-4 py-2"
            >
              Silver {activeCategory === 'silver' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {activeCategory === 'silver' && (
              <ul className="pl-6 text-sm space-y-1">
                <li className="py-1">Earrings</li>
                <li className="py-1">Chains</li>
                <li className="py-1">Pendants</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
