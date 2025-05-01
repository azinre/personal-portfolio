import React from 'react';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  excerpt,
  date,
  imageUrl,
  category,
  readTime,
}) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime} read</span>
          <span>•</span>
          <span className="text-primary-main">{category}</span>
        </div>
        
        <h3 className="font-heading text-xl font-semibold text-primary-dark mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <a
          href="#"
          className="text-primary-main hover:text-primary-dark font-medium"
        >
          Read More →
        </a>
      </div>
    </article>
  );
};

export default BlogPostCard; 