import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';
import Sitemap from './components/Sitemap';
import DataManager from './components/DataManager';
import PortfolioGallery from './components/PortfolioGallery';
import SalesLandingBlog from './components/SalesLandingBlog';
import AboutPage from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/data-manager" element={<DataManager />} />
            <Route path="/portfolio" element={<PortfolioGallery />} />
            <Route path="/sales-landing" element={<SalesLandingBlog />} />
            <Route path="/categories" element={<Blog />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const ContactPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
        <h1 className="text-4xl font-black text-gray-900 mb-6">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border-3 border-gray-900 rounded-xl focus:ring-0 focus:border-gray-900 outline-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border-3 border-gray-900 rounded-xl focus:ring-0 focus:border-gray-900 outline-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 border-3 border-gray-900 rounded-xl focus:ring-0 focus:border-gray-900 outline-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 py-4 px-6 rounded-xl font-black border-4 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default App;