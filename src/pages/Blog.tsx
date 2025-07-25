import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Search } from 'lucide-react';
import { mockPosts, categories } from '../data/mockData';
import BlogGrid from '../components/BlogGrid';
import SearchView from '../components/SearchView';
import LayoutSelector from '../components/LayoutSelector';
import { LayoutType, BlogType } from '../types/blog';

const Blog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [layout, setLayout] = useState<LayoutType>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const blogType = searchParams.get('type') as BlogType;
  
  // Filter posts based on blog type or category
  const filteredPosts = mockPosts.filter(post => {
    if (blogType) {
      switch (blogType) {
        case 'recipe':
          return post.category.slug === 'recipes';
        case 'code':
          return post.category.slug === 'technology';
        case 'portfolio':
          return post.category.slug === 'design';
        case 'affiliate':
          return post.category.slug === 'reviews';
        case 'service':
          return post.category.slug === 'home-services';
        case 'parenting':
          return post.category.slug === 'parenting';
        default:
          return true;
      }
    }
    
    if (selectedCategory) {
      return post.category.id === selectedCategory;
    }
    
    return true;
  });

  const getPageTitle = () => {
    if (blogType) {
      switch (blogType) {
        case 'recipe':
          return 'Recipe Blog';
        case 'code':
          return 'Tech & Code Blog';
        case 'portfolio':
          return 'Design Portfolio';
        case 'affiliate':
          return 'Product Reviews';
        case 'service':
          return 'Home Services Guide';
        case 'parenting':
          return 'Parenting & Family';
        default:
          return 'All Posts';
      }
    }
    return 'All Posts';
  };

  const getPageDescription = () => {
    if (blogType) {
      switch (blogType) {
        case 'recipe':
          return 'Delicious recipes and cooking tips from our expert chefs';
        case 'code':
          return 'Programming tutorials, tech insights, and code examples';
        case 'portfolio':
          return 'Creative design projects and portfolio showcases';
        case 'affiliate':
          return 'Honest product reviews and recommendations';
        case 'service':
          return 'Professional home service guides and contractor recommendations';
        case 'parenting':
          return 'Parenting tips, family activities, and child development insights';
        default:
          return 'Discover amazing content across all categories';
      }
    }
    return 'Discover amazing content across all categories';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4 sm:pt-0">
      {/* Header */}
      <div className="bg-white border-b-2 sm:border-b-4 border-gray-900 mt-2 sm:mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
              {getPageTitle()}
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              {getPageDescription()}
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Layout Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-bold text-gray-700 uppercase tracking-wider">Filter by:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-5 py-3 border-3 border-gray-900 rounded-xl focus:ring-0 focus:border-gray-900 outline-none font-bold text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-lg text-gray-600 font-bold">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </span>
            <LayoutSelector currentLayout={layout} onLayoutChange={setLayout} />
          </div>
        </div>

        {/* Blog Type Tabs */}
        {!blogType && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {[
                { type: 'recipe', label: 'Recipe Blog', color: 'bg-orange-400 hover:bg-orange-500' },
                { type: 'code', label: 'Tech Blog', color: 'bg-blue-400 hover:bg-blue-500' },
                { type: 'portfolio', label: 'Portfolio', color: 'bg-purple-400 hover:bg-purple-500' },
                { type: 'affiliate', label: 'Reviews', color: 'bg-green-400 hover:bg-green-500' },
                { type: 'service', label: 'Home Services', color: 'bg-yellow-400 hover:bg-yellow-500' },
                { type: 'parenting', label: 'Parenting', color: 'bg-pink-400 hover:bg-pink-500' },
              ].map(({ type, label, color }) => (
                <a
                  key={type}
                  href={`/blog?type=${type}`}
                  className={`px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-wider transition-all duration-300 border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-gray-900 ${color}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        {layout === 'search' ? (
          <SearchView posts={filteredPosts} />
        ) : (
          <BlogGrid posts={filteredPosts} layout={layout} />
        )}

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-200 rounded-3xl border-4 border-gray-900 flex items-center justify-center mx-auto mb-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">No articles found</h3>
            <p className="text-gray-600 mb-8 font-medium">
              Try adjusting your filters or browse all categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('');
                window.history.pushState({}, '', '/blog');
              }}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-black border-4 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;