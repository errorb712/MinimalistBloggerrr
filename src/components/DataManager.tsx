import React, { useState } from 'react';
import { Download, Upload, FileText, Database, AlertCircle, CheckCircle } from 'lucide-react';
import { mockPosts, categories, authors } from '../data/mockData';

const DataManager: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const exportData = async () => {
    setIsExporting(true);
    
    const blogData = {
      posts: mockPosts,
      categories: categories,
      authors: authors,
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const dataStr = JSON.stringify(blogData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `blog-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setTimeout(() => setIsExporting(false), 1000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);
        
        // Validate the imported data structure
        if (importedData.posts && importedData.categories && importedData.authors) {
          // In a real app, you would update your state/database here
          console.log('Data imported successfully:', importedData);
          setImportStatus('success');
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Import error:', error);
        setImportStatus('error');
      } finally {
        setIsImporting(false);
        setTimeout(() => setImportStatus('idle'), 3000);
      }
    };
    
    reader.readAsText(file);
  };

  const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://modernblog.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://modernblog.com/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${mockPosts.map(post => `
  <url>
    <loc>https://modernblog.com/post/${post.slug}</loc>
    <lastmod>${post.updatedAt.toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  ${categories.map(category => `
  <url>
    <loc>https://modernblog.com/category/${category.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Management</h1>
          <p className="text-lg text-gray-600">
            Export and import your blog data, generate sitemaps for SEO optimization
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Export Data */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Download className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Export Data</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Export all your blog posts, categories, and author information as a JSON file for backup or migration.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Export includes:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {mockPosts.length} blog posts</li>
                  <li>• {categories.length} categories</li>
                  <li>• {authors.length} authors</li>
                  <li>• Metadata and SEO information</li>
                </ul>
              </div>
              
              <button
                onClick={exportData}
                disabled={isExporting}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isExporting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Exporting...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Export Blog Data</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Import Data */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Upload className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Import Data</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Import blog data from a previously exported JSON file. This will validate and merge the data with your existing content.
            </p>
            
            <div className="space-y-4">
              {importStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-700 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Data imported successfully!</span>
                </div>
              )}
              
              {importStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-700 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">Import failed. Please check your file format.</span>
                </div>
              )}
              
              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  disabled={isImporting}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                />
                <div className="w-full flex items-center justify-center space-x-2 border-2 border-dashed border-gray-300 py-3 px-4 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
                  {isImporting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                      <span className="text-green-600">Importing...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">Choose JSON file to import</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Make sure your JSON file follows the correct format. 
                  Exported files from this system are guaranteed to work.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Tools */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:col-span-2">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">SEO Tools</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Generate XML sitemaps and RSS feeds to improve your blog's search engine optimization and content distribution.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">XML Sitemap</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Generate an XML sitemap for search engines to better index your content.
                </p>
                <button
                  onClick={generateSitemap}
                  className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Database className="w-4 h-4" />
                  <span>Generate Sitemap</span>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">RSS Feed</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Create an RSS feed for subscribers to get updates about new posts.
                </p>
                <button className="w-full flex items-center justify-center space-x-2 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                  <FileText className="w-4 h-4" />
                  <span>Generate RSS</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Data Statistics */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Blog Statistics</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{mockPosts.length}</div>
              <div className="text-sm text-gray-600">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{categories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{authors.length}</div>
              <div className="text-sm text-gray-600">Authors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {Math.round(mockPosts.reduce((acc, post) => acc + post.readTime, 0) / mockPosts.length)}
              </div>
              <div className="text-sm text-gray-600">Avg Read Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataManager;