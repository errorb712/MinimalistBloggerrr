import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Users, BookOpen } from 'lucide-react';
import { mockPosts } from '../data/mockData';
import BlogCard from '../components/BlogCard';
import LayoutSelector from '../components/LayoutSelector';
import BlogGrid from '../components/BlogGrid';
import SearchView from '../components/SearchView';
import { LayoutType } from '../types/blog';

const Home: React.FC = () => {
  const [layout, setLayout] = useState<LayoutType>('grid');

  const featuredPost = mockPosts[0];
  const recentPosts = mockPosts.slice(1, 4);
  const allPosts = mockPosts;

  return (
    <div className="min-h-screen bg-gray-50 pt-4 sm:pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 py-12 sm:py-24 overflow-hidden mt-2 sm:mt-4">
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-2xl rotate-12 hidden lg:block border-2 border-white/20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full hidden lg:block border-2 border-white/20"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-xl -rotate-12 hidden lg:block border-2 border-white/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm font-black uppercase tracking-wider mb-8 border-2 border-white/30 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]">
            <Sparkles className="w-4 h-4" />
            <span>Welcome to ModernBlog</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Beautiful Stories,
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Beautifully Told
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-purple-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover amazing recipes, cutting-edge technology insights, stunning design portfolios, 
            and honest product reviews - all in one modern, minimalist platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-3 bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-black text-lg border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300 group"
            >
              <span>Explore All Posts</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/categories"
              className="inline-flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-black text-lg border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              <span>Browse Categories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-8 bg-white rounded-3xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-3xl border-2 border-gray-900 flex items-center justify-center mx-auto mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-3">{mockPosts.length}+</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider">Quality Articles</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-3xl border-2 border-gray-900 flex items-center justify-center mx-auto mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-3">10K+</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider">Monthly Readers</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-3xl border-2 border-gray-900 flex items-center justify-center mx-auto mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-3">95%</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider">Reader Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">Featured Article</h2>
            <p className="text-xl text-gray-600 font-medium">
              Don't miss our editor's pick for this week
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <BlogCard post={featuredPost} variant="featured" />
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">Latest Articles</h2>
              <p className="text-xl text-gray-600 font-medium">
                Fresh content from our expert contributors
              </p>
            </div>
            <LayoutSelector currentLayout={layout} onLayoutChange={setLayout} />
          </div>

          {layout === 'search' ? (
            <SearchView posts={allPosts} />
          ) : (
            <BlogGrid posts={allPosts} layout={layout} />
          )}

          <div className="text-center mt-16">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-3 bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 group"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Never Miss a Story
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-medium">
            Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-4 border-gray-700 focus:ring-0 focus:border-yellow-400 outline-none text-lg font-medium shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-black border-4 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6 font-medium">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;