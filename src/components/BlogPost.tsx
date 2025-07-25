import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, Tag, Share2, Bookmark, Copy, Check,
  Star, ExternalLink, Github, Play, ChefHat, Timer,
  Users, TrendingUp, ArrowLeft, Shield, AlertTriangle,
  Heart, ThumbsUp, ThumbsDown, DollarSign, ShoppingCart,
  Wrench, Home, Baby, Award, CheckCircle
} from 'lucide-react';
import { mockPosts } from '../data/mockData';
import { format } from 'date-fns';

// ===========================================
// CUSTOMIZATION GUIDE - BLOG POST IMAGES
// ===========================================
// To replace blog post images:
// 1. Update 'featuredImage' in mockData.ts for the main hero image
// 2. For content images, replace URLs in the post content
// 3. For recipe/affiliate/service specific images, update the respective render functions below
// 4. Use high-quality images (minimum 800x600 for featured images)
// 5. Recommended sources: Pexels, Unsplash, or your own uploads
//
// EMBED FORM INTEGRATION:
// - Look for newsletter signup forms in the sidebar
// - Replace email capture with your preferred service
// - Update the subscription handler functions
const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h1>
          <p className="text-gray-600 mb-4">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const renderRecipeContent = () => (
    <div className="space-y-8">
      {/* Recipe Info */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <Timer className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Prep Time</p>
            <p className="font-semibold text-gray-900">15 min</p>
          </div>
          <div className="text-center">
            <ChefHat className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Cook Time</p>
            <p className="font-semibold text-gray-900">30 min</p>
          </div>
          <div className="text-center">
            <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Servings</p>
            <p className="font-semibold text-gray-900">4</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Difficulty</p>
            <p className="font-semibold text-gray-900">Easy</p>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingredients</h2>
        <ul className="space-y-2">
          {['2 cups all-purpose flour', '1 tsp active dry yeast', '1 tsp salt', '1 tbsp olive oil', '3/4 cup warm water'].map((ingredient, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full" />
              <span className="text-gray-700">{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
        <ol className="space-y-4">
          {[
            'Mix flour, yeast, and salt in a large bowl.',
            'Add olive oil and warm water, mix until dough forms.',
            'Knead for 8-10 minutes until smooth and elastic.',
            'Let rise for 1 hour until doubled in size.',
            'Roll out and add your favorite toppings!'
          ].map((step, index) => (
            <li key={index} className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700 pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

  const renderCodeContent = () => (
    <div className="space-y-8">
      {/* Code Example */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <span className="text-sm text-gray-300">React Hook Example</span>
          <button
            onClick={() => copyToClipboard('const [count, setCount] = useState(0);', 'react-hook')}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
          >
            {copiedCode === 'react-hook' ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-sm">Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
          <code>{`const [count, setCount] = useState(0);

const increment = () => {
  setCount(prev => prev + 1);
};

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>
      Increment
    </button>
  </div>
);`}</code>
        </pre>
      </div>

      {/* Demo Link */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Try it yourself</h3>
        <p className="text-gray-600 mb-4">
          See this hook in action with our interactive demo.
        </p>
        <div className="flex space-x-3">
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Play className="w-4 h-4" />
            <span>Live Demo</span>
          </button>
          <button className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Github className="w-4 h-4" />
            <span>View Source</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderServiceContent = () => {
    if (!post.serviceData) return null;

    return (
      <div className="space-y-8">
        {/* Service Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Average Cost</h3>
              <p className="text-gray-700">{post.serviceData.averageCost}</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Time Required</h3>
              <p className="text-gray-700">{post.serviceData.timeRequired}</p>
            </div>
            <div className="text-center">
              <Wrench className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Complexity</h3>
              <p className="text-gray-700">{post.serviceData.difficulty}</p>
            </div>
          </div>
        </div>

        {/* When to Call a Professional */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="w-6 h-6 text-green-600 mr-2" />
            When to Call a Professional
          </h2>
          <ul className="space-y-3">
            {post.serviceData.whenToCallPro.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Red Flags */}
        <div className="bg-red-50 rounded-xl border border-red-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            Red Flags to Avoid
          </h2>
          <ul className="space-y-3">
            {post.serviceData.redFlags.map((flag, index) => (
              <li key={index} className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderAffiliateContent = () => {
    if (!post.affiliateData) return null;

    const { product, verdict, buyingGuide } = post.affiliateData;

    return (
      <div className="space-y-8">
        {/* Product Overview */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-5 h-5 ${star <= product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.rating}/5)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-green-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Buy Now - Best Price</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl border border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <ThumbsUp className="w-5 h-5 text-green-600 mr-2" />
              Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <ThumbsDown className="w-5 h-5 text-red-600 mr-2" />
              Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verdict */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="w-5 h-5 text-blue-600 mr-2" />
            Our Verdict
          </h3>
          <p className="text-gray-700 mb-4">{verdict}</p>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Get Best Deal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Buying Guide */}
        {buyingGuide && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Buying Guide</h3>
            <ul className="space-y-2">
              {buyingGuide.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const renderParentingContent = () => {
    if (!post.parentingData) return null;

    return (
      <div className="space-y-8">
        {/* Parenting Info */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Baby className="w-6 h-6 text-pink-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Age Group</p>
              <p className="font-semibold text-gray-900">{post.parentingData.ageGroup}</p>
            </div>
            <div className="text-center">
              <Clock className="w-6 h-6 text-pink-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Time Required</p>
              <p className="font-semibold text-gray-900">{post.parentingData.timeRequired}</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-6 h-6 text-pink-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Difficulty</p>
              <p className="font-semibold text-gray-900">{post.parentingData.difficulty}</p>
            </div>
            <div className="text-center">
              <Heart className="w-6 h-6 text-pink-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Benefits</p>
              <p className="font-semibold text-gray-900">{post.parentingData.benefits.length}</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Heart className="w-6 h-6 text-pink-600 mr-2" />
            Benefits for Your Child
          </h2>
          <ul className="space-y-3">
            {post.parentingData.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Tips</h2>
          <ul className="space-y-3">
            {post.parentingData.tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety Notes */}
        {post.parentingData.safetyNotes && (
          <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 text-yellow-600 mr-2" />
              Safety Notes
            </h2>
            <ul className="space-y-3">
              {post.parentingData.safetyNotes.map((note, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const getContentByCategory = () => {
    switch (post.category.slug) {
      case 'recipes':
        return renderRecipeContent();
      case 'technology':
        return renderCodeContent();
      case 'home-services':
        return renderServiceContent();
      case 'reviews':
        return renderAffiliateContent();
      case 'parenting':
        return renderParentingContent();
      default:
        return (
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            />
          </div>
        );
    }
  };

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/blog"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="aspect-[21/9] relative overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: post.category.color }}
              >
                {post.category.name}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl">
              {post.excerpt}
            </p>
            
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{format(post.publishedAt, 'MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {getContentByCategory()}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Share & Bookmark */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Share this article</h3>
              <div className="flex space-x-2">
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-lg transition-colors ${
                    isBookmarked 
                      ? 'bg-yellow-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">About the Author</h3>
              <div className="flex items-start space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{post.author.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{post.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Pinterest Save Button for Parenting Content */}
            {post.category.slug === 'parenting' && (
              <div className="bg-red-50 rounded-xl border border-red-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Save to Pinterest</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Save this parenting tip to your Pinterest board for later!
                </p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Pin It</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockPosts
              .filter(p => p.id !== post.id && p.category.id === post.category.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/post/${relatedPost.slug}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{relatedPost.readTime} min read</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;