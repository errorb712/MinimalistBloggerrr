import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight, Star } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  showAuthor?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  post, 
  variant = 'default', 
  showAuthor = true 
}) => {
  const isRecipe = post.category.slug === 'recipes';
  const isReview = post.category.slug === 'reviews';

  if (variant === 'featured') {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-white border-4 border-gray-900 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 group">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute top-6 left-6">
            <span
              className="px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider text-white border-2 border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
              style={{ backgroundColor: post.category.color }}
            >
              {post.category.name}
            </span>
          </div>
          {isReview && (
            <div className="absolute top-6 right-6 flex items-center space-x-1 bg-white rounded-full px-3 py-2 border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-bold">4.8</span>
            </div>
          )}
        </div>
        
        <div className="p-8">
          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{format(post.publishedAt, 'MMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{post.readTime} min read</span>
            </div>
          </div>
          
          <Link to={`/post/${post.slug}`} className="group">
            <h2 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
              {post.title}
            </h2>
          </Link>
          
          <p className="text-gray-600 mb-6 line-clamp-2 text-lg leading-relaxed">
            {post.excerpt}
          </p>
          
          {showAuthor && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-900"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{post.author.name}</p>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">Author</p>
                </div>
              </div>
              
              <Link
                to={`/post/${post.slug}`}
                className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-black border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex space-x-4 p-6 bg-white rounded-2xl border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
        <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 border-gray-900">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 text-xs text-gray-600 mb-2">
            <span
              className="px-3 py-1 rounded-full text-white font-bold uppercase tracking-wider border border-gray-900"
              style={{ backgroundColor: post.category.color }}
            >
              {post.category.name}
            </span>
            <span className="font-medium">{format(post.publishedAt, 'MMM dd')}</span>
          </div>
          <Link to={`/post/${post.slug}`} className="group">
            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
              {post.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 line-clamp-1">
            {post.excerpt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 overflow-hidden group">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-2 rounded-full text-sm font-black uppercase tracking-wider text-white border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
            style={{ backgroundColor: post.category.color }}
          >
            {post.category.name}
          </span>
        </div>
        {isRecipe && (
          <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-2 border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-sm font-bold text-gray-900">30 min</span>
          </div>
        )}
        {isReview && (
          <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white rounded-full px-3 py-2 border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-bold">4.8</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">{format(post.publishedAt, 'MMM dd')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{post.readTime}m</span>
          </div>
        </div>
        
        <Link to={`/post/${post.slug}`} className="group">
          <h3 className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3 leading-tight">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          {showAuthor && (
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-900"
              />
              <span className="text-sm font-bold text-gray-900">{post.author.name}</span>
            </div>
          )}
          
          <Link
            to={`/post/${post.slug}`}
            className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-xl font-black text-sm border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300 group"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;