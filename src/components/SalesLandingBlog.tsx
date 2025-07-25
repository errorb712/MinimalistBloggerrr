import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Star, ArrowRight, Play, Download, Users, 
  TrendingUp, Shield, Clock, Award, Quote, ChevronDown,
  X, Menu, ExternalLink, MessageCircle, Heart, Share2
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  results?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp Inc.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'This solution increased our conversion rate by 64% in just 24 hours. The results were immediate and sustainable.',
    rating: 5,
    results: '64% increase in conversions'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'We went from 50 leads per month to over 200. The ROI has been incredible and the support team is outstanding.',
    rating: 5,
    results: '300% increase in leads'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Growth Manager',
    company: 'ScaleUp Co.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'The implementation was seamless and the results speak for themselves. Our team productivity increased by 40%.',
    rating: 5,
    results: '40% productivity boost'
  }
];

const faqs: FAQ[] = [
  {
    question: 'Is this really free?',
    answer: 'Yes, absolutely! Our free audit includes a comprehensive analysis of your current setup with actionable recommendations. No hidden fees or obligations.'
  },
  {
    question: 'What\'s the catch?',
    answer: 'There\'s no catch. We provide genuine value upfront because we believe in building trust. If you love the results, you might consider our premium services later.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most clients see initial improvements within 24-48 hours of implementing our recommendations. Full results typically manifest within 2-4 weeks.'
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'Within 24 hours, you\'ll receive a detailed audit report via email. Our team will also schedule a brief call to walk through the findings and answer any questions.'
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable and tailored to your specific needs.'
  }
];

const SalesLandingBlog: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // ===========================================
  // CUSTOMIZATION GUIDE - FORM DATA
  // ===========================================
  // To customize the lead capture form:
  // 1. Add/remove fields in the formData state below
  // 2. Update the form inputs in the JSX
  // 3. Modify the handleSubmit function to integrate with your CRM/email service
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: ''
  });

  // ===========================================
  // CUSTOMIZATION GUIDE - FORM SUBMISSION
  // ===========================================
  // Replace this function with your actual form submission logic:
  // - Integrate with email marketing services (Mailchimp, ConvertKit, etc.)
  // - Send data to your CRM system
  // - Add validation and error handling
  // - Implement success/failure notifications
  // - Add analytics tracking
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! Your free audit request has been submitted. Check your email within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Above the Fold */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 10,000+ businesses</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Skyrocket Your Conversions
                <span className="block text-yellow-400">Effortlessly</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Get up to <strong className="text-yellow-400">3x more leads</strong> in 24 hours with our proven conversion optimization system. 
                <strong className="text-white"> 64% average boost guaranteed.</strong>
              </p>
              
              {/* Social Proof */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {testimonials.slice(0, 3).map((testimonial) => (
                      <img
                        key={testimonial.id}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-blue-100">4.9/5 from 2,847 reviews</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                >
                  Get Your Free Audit Now
                </button>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch 2-Min Demo</span>
                </button>
              </div>
            </div>
            
            {/* Hero Image/Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Website Audit
                </h2>
                <p className="text-gray-600">
                  Discover exactly what's holding back your conversions
                </p>
              </div>
              
              <form id="audit-form" onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <input
                  type="url"
                  name="website"
                  placeholder="Your Website URL"
                  value={formData.website}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Get My Free Audit Report
                </button>
              </form>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                🔒 Your information is 100% secure. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {['TechCorp', 'StartupXYZ', 'ScaleUp Co.', 'InnovateLab', 'GrowthCo'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Our Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop losing potential customers. Our proven system identifies and fixes the exact issues 
              preventing your website from converting visitors into paying customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: '64% Average Conversion Boost',
                description: 'Our clients see an average 64% increase in conversions within the first month.',
                color: 'text-green-600'
              },
              {
                icon: Clock,
                title: 'Results in 24 Hours',
                description: 'Start seeing improvements within 24 hours of implementing our recommendations.',
                color: 'text-blue-600'
              },
              {
                icon: Shield,
                title: '100% Risk-Free Guarantee',
                description: 'If you don\'t see results in 30 days, we\'ll refund every penny. No questions asked.',
                color: 'text-purple-600'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${benefit.color.replace('text-', 'bg-').replace('600', '100')} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. See what our clients are saying.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 relative">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                {testimonial.results && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                    <p className="text-green-800 font-semibold text-center">
                      📈 {testimonial.results}
                    </p>
                  </div>
                )}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works (It's Simple)
            </h2>
            <p className="text-xl text-gray-600">
              Get your conversion optimization audit in 3 easy steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Your Website',
                description: 'Fill out our simple form with your website URL and basic information.',
                icon: ExternalLink
              },
              {
                step: '02',
                title: 'We Analyze Everything',
                description: 'Our experts conduct a comprehensive audit of your conversion funnel.',
                icon: TrendingUp
              },
              {
                step: '03',
                title: 'Get Your Action Plan',
                description: 'Receive a detailed report with specific recommendations to boost conversions.',
                icon: Download
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 absolute top-10 -right-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our free audit
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to 3x Your Conversions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 10,000+ businesses that have already transformed their results. 
            Get your free audit now and start seeing results in 24 hours.
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Last Chance - Free Audit
            </h3>
            <ul className="text-left space-y-2 mb-6">
              {[
                'Comprehensive conversion analysis',
                'Personalized action plan',
                'Priority email support',
                '30-day money-back guarantee'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get My Free Audit Now
            </button>
            <p className="text-xs text-gray-500 mt-4">
              ⏰ Limited time offer - Act now!
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full aspect-video relative">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-60" />
                <p className="text-lg">Demo video would play here</p>
                <p className="text-sm opacity-60 mt-2">2-minute conversion optimization overview</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesLandingBlog;