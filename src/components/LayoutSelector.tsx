import React from 'react';
import { Grid, List, Search } from 'lucide-react';
import { LayoutType } from '../types/blog';

interface LayoutSelectorProps {
  currentLayout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({ currentLayout, onLayoutChange }) => {
  const layouts = [
    { type: 'grid' as LayoutType, icon: Grid, label: 'Grid View' },
    { type: 'list' as LayoutType, icon: List, label: 'List View' },
    { type: 'search' as LayoutType, icon: Search, label: 'Search View' }
  ];

  return (
    <div className="flex items-center space-x-1 bg-white border-3 border-gray-900 rounded-2xl p-1.5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
      {layouts.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onLayoutChange(type)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
            currentLayout === type
              ? 'bg-gray-900 text-white border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'
              : 'text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)]'
          }`}
          title={label}
        >
          <Icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{label.split(' ')[0]}</span>
        </button>
      ))}
    </div>
  );
};

export default LayoutSelector;