import React from 'react';
import { Calendar, Users, Target, Award, Quote, Mail, Phone, MapPin } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Camilla Wilson',
    role: 'Payment Gateway Support',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Expert in payment systems and financial technology with 8+ years of experience helping businesses optimize their payment processes.'
  },
  {
    id: '2',
    name: 'Olive Nacelle',
    role: 'VP of Customer Success',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Passionate about creating exceptional customer experiences and building long-term relationships with our community.'
  },
  {
    id: '3',
    name: 'Sophie Chamberlain',
    role: 'Specialized Support',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Technical specialist focused on providing personalized solutions for complex customer needs and technical challenges.'
  },
  {
    id: '4',
    name: 'Jessica Dobrev',
    role: 'Payments Support',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dedicated to ensuring smooth payment operations and helping customers navigate financial processes with ease.'
  },
  {
    id: '5',
    name: 'Orlando Diggs',
    role: 'Customer Success Lead',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Leading our customer success initiatives with a focus on growth, retention, and delivering measurable value to our clients.'
  },
  {
    id: '6',
    name: 'Sasha Kim',
    role: 'Customer Success Manager',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Committed to understanding customer goals and ensuring they achieve success through our platform and services.'
  }
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    content: "We've been blown away by the support from ModernBlog. We suggested an improvement to our content management and they implemented it in a few days!",
    author: 'Amélie Laurent',
    role: 'CTO',
    company: 'Beyond Systems',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    content: "The team's expertise and dedication to our success has been incredible. They truly understand our business needs and deliver solutions that work.",
    author: 'Marcus Chen',
    role: 'Head of Marketing',
    company: 'TechFlow Inc',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            About ModernBlog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We're a passionate team of creators, developers, and storytellers dedicated to building 
            the most beautiful and functional blogging platform for modern content creators.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center p-6 bg-white rounded-3xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-gray-900 mb-2">2019</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider text-sm">Founded</p>
            </div>
            <div className="text-center p-6 bg-white rounded-3xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider text-sm">Active Users</p>
            </div>
            <div className="text-center p-6 bg-white rounded-3xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-gray-900 mb-2">1M+</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider text-sm">Posts Published</p>
            </div>
            <div className="text-center p-6 bg-white rounded-3xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <Award className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-gray-900 mb-2">99%</h3>
              <p className="text-gray-600 font-bold uppercase tracking-wider text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Meet Our Beautiful Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Our philosophy is simple: hire great people and give them the 
              resources and support to do their best work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-2xl font-black border-4 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300">
                <Users className="w-5 h-5" />
                <span>Book a Demo</span>
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black border-4 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-700 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-3xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Don't just take our word for it. Here's what our amazing clients have to say about working with us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-3xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 p-8"
              >
                <Quote className="w-8 h-8 text-blue-600 mb-6" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-900"
                  />
                  <div>
                    <h4 className="font-black text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
                We believe that everyone has a story worth telling. Our mission is to provide 
                creators with the most beautiful, powerful, and intuitive blogging platform 
                that helps them share their stories with the world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From recipe bloggers to tech enthusiasts, from design portfolios to parenting 
                advice - we support every type of content creator with specialized layouts, 
                SEO optimization, and modern design aesthetics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 flex items-center justify-center">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Beautiful, responsive designs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 flex items-center justify-center">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">SEO optimization built-in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 flex items-center justify-center">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Multiple content types supported</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 flex items-center justify-center">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">24/7 customer support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Start Your Story?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-medium">
            Join thousands of creators who trust ModernBlog to share their stories with the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-black border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300">
              Start Your Blog Today
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-black border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 hover:text-white transition-all duration-300">
              Schedule a Demo
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-gray-300">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span className="font-medium">hello@modernblog.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;