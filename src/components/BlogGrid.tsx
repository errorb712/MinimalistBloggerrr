import React from 'react';
import { BlogPost } from '../types/blog';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  layout: 'grid' | 'list';
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, layout }) => {
  if (layout === 'list') {
    return (
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            {index === 0 ? (
              <BlogCard post={post} variant="featured" />
            ) : (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 md:h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <BlogCard post={post} variant="compact" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;