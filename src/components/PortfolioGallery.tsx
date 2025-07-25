import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, Github, Calendar, User, Tag, ArrowRight, 
  Play, Eye, Heart, Share2, Filter, Grid, List
} from 'lucide-react';
import { format } from 'date-fns';

interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  featuredImage: string;
  gallery: string[];
  moodboard: string[];
  technologies: string[];
  client: string;
  duration: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  completedAt: Date;
  tags: string[];
  likes: number;
  views: number;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    slug: 'ecommerce-platform-redesign',
    category: 'Web Design',
    description: 'Complete redesign of a modern e-commerce platform focusing on user experience and conversion optimization.',
    longDescription: 'This project involved a complete overhaul of an existing e-commerce platform. The main goals were to improve user experience, increase conversion rates, and create a more modern, accessible interface. We conducted extensive user research, created detailed user personas, and implemented a design system that could scale across multiple product categories.',
    featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    moodboard: [
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1779489/pexels-photo-1779489.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1779490/pexels-photo-1779490.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1779491/pexels-photo-1779491.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    client: 'TechCorp Inc.',
    duration: '3 months',
    role: 'Lead UI/UX Designer',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    completedAt: new Date('2024-01-15'),
    tags: ['UI/UX', 'E-commerce', 'Responsive Design', 'User Research'],
    likes: 124,
    views: 2340
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    slug: 'mobile-banking-app',
    category: 'Mobile Design',
    description: 'Intuitive mobile banking application with focus on security and ease of use.',
    longDescription: 'Designed a comprehensive mobile banking application that prioritizes security while maintaining an intuitive user experience. The app includes features like biometric authentication, real-time notifications, budget tracking, and seamless money transfers.',
    featuredImage: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4386322/pexels-photo-4386322.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    moodboard: [
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/590017/pexels-photo-590017.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/590018/pexels-photo-590018.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    technologies: ['React Native', 'Firebase', 'Figma', 'Principle'],
    client: 'SecureBank',
    duration: '4 months',
    role: 'Senior Mobile Designer',
    liveUrl: 'https://app.securebank.com',
    completedAt: new Date('2023-12-10'),
    tags: ['Mobile App', 'Fintech', 'Security', 'UX Research'],
    likes: 89,
    views: 1560
  },
  {
    id: '3',
    title: 'Brand Identity System',
    slug: 'brand-identity-system',
    category: 'Branding',
    description: 'Complete brand identity system for a sustainable fashion startup.',
    longDescription: 'Created a comprehensive brand identity system for an eco-friendly fashion startup. The project included logo design, color palette, typography system, packaging design, and brand guidelines that reflect the company\'s commitment to sustainability.',
    featuredImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1779489/pexels-photo-1779489.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1779490/pexels-photo-1779490.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    moodboard: [
      'https://images.pexels.com/photos/1779491/pexels-photo-1779491.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1779492/pexels-photo-1779492.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1779493/pexels-photo-1779493.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'InDesign'],
    client: 'EcoFashion Co.',
    duration: '2 months',
    role: 'Brand Designer',
    completedAt: new Date('2023-11-20'),
    tags: ['Branding', 'Logo Design', 'Sustainability', 'Print Design'],
    likes: 156,
    views: 2890
  }
];

const categories = ['All', 'Web Design', 'Mobile Design', 'Branding', 'UI/UX'];

const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'gallery' | 'moodboard'>('gallery');

  const filteredProjects = selectedCategory === 'All' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === selectedCategory);

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <img
                src={project.featuredImage}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'gallery'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Gallery ({project.gallery.length})
                </button>
                <button
                  onClick={() => setActiveTab('moodboard')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'moodboard'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Moodboard ({project.moodboard.length})
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {(activeTab === 'gallery' ? project.gallery : project.moodboard).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} ${activeTab} ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Client</h4>
                  <p className="text-gray-600">{project.client}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Duration</h4>
                  <p className="text-gray-600">{project.duration}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Role</h4>
                  <p className="text-gray-600">{project.role}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Completed</h4>
                  <p className="text-gray-600">{format(project.completedAt, 'MMM yyyy')}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Design Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my latest design projects, from web applications to brand identities
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{project.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{project.likes}</span>
                        </div>
                      </div>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {format(project.completedAt, 'MMM yyyy')}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-600 group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={project.featuredImage}
                      alt={project.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {format(project.completedAt, 'MMM yyyy')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-blue-600 hover:translate-x-1 transition-transform">
                        <span className="font-medium">View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default PortfolioGallery;