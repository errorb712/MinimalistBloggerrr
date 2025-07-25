import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Folder, User, Calendar } from 'lucide-react';
import { sitemapData } from '../data/mockData';
import { format } from 'date-fns';

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ModernBlog Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete navigation guide to all pages and content on our blogging platform
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Pages */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Folder className="w-6 h-6 mr-2 text-blue-600" />
              Main Pages
            </h2>
            <div className="space-y-3">
              {sitemapData.main.map((page) => (
                <Link
                  key={page.url}
                  to={page.url}
                  className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                      {page.name}
                    </h3>
                    <p className="text-sm text-gray-500">{page.url}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Folder className="w-6 h-6 mr-2 text-green-600" />
              Categories
            </h2>
            <div className="space-y-4">
              {sitemapData.categories.map((category) => (
                <div key={category.url} className="border-l-4 border-green-200 pl-4">
                  <Link
                    to={category.url}
                    className="block p-2 rounded-lg hover:bg-green-50 transition-colors group"
                  >
                    <h3 className="font-medium text-gray-900 group-hover:text-green-600 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">{category.url}</p>
                  </Link>
                  
                  {category.posts.length > 0 && (
                    <div className="mt-2 ml-4 space-y-1">
                      {category.posts.slice(0, 3).map((post) => (
                        <Link
                          key={post.url}
                          to={post.url}
                          className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
                        >
                          • {post.name}
                        </Link>
                      ))}
                      {category.posts.length > 3 && (
                        <p className="text-sm text-gray-500">
                          + {category.posts.length - 3} more articles
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-purple-600" />
              Recent Posts
            </h2>
            <div className="space-y-3">
              {sitemapData.posts.slice(0, 8).map((post) => (
                <Link
                  key={post.url}
                  to={post.url}
                  className="flex items-start p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                >
                  <FileText className="w-5 h-5 text-gray-400 group-hover:text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-purple-600 line-clamp-1">
                      {post.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-sm text-gray-500">{post.url}</p>
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        {format(post.lastModified, 'MMM dd, yyyy')}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/blog"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                View all posts
                <FileText className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Authors */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="w-6 h-6 mr-2 text-orange-600" />
              Authors
            </h2>
            <div className="space-y-3">
              {sitemapData.authors.map((author) => (
                <Link
                  key={author.url}
                  to={author.url}
                  className="flex items-center p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                >
                  <User className="w-5 h-5 text-gray-400 group-hover:text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-orange-600">
                      {author.name}
                    </h3>
                    <p className="text-sm text-gray-500">{author.url}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">SEO Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">XML Sitemap</h3>
              <p className="text-gray-600 text-sm mb-3">
                Our XML sitemap is automatically generated and updated whenever new content is published.
              </p>
              <Link
                to="/sitemap.xml"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                View XML Sitemap
                <FileText className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">RSS Feed</h3>
              <p className="text-gray-600 text-sm mb-3">
                Subscribe to our RSS feed to get the latest articles delivered to your feed reader.
              </p>
              <Link
                to="/rss.xml"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Subscribe to RSS
                <FileText className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            This sitemap was last updated on {format(new Date(), 'MMMM dd, yyyy')} and contains {sitemapData.posts.length} articles across {sitemapData.categories.length} categories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;