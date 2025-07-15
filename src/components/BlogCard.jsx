import React from 'react';
import '../styles/BlogCard.css';
import fallbackImage from "../assets/Blog_image.jpeg";

const BlogCard = ({ title, date, excerpt, tags, image, link }) => {
  return (
    <div className="blog-card">
      <img src={image || fallbackImage} alt={title} />
      <div className="blog-content">
        <div className="blog-header">
          <h2>{title}</h2>
          <span className="blog-date">{date}</span>
        </div>

        <p className="blog-excerpt">{excerpt}</p>

        <div className="blog-tags">
          {tags.map((tag, i) => (
            <span key={i} className="blog-tag">{tag}</span>
          ))}
        </div>

        <div className="blog-footer">
          <a href={link} target="_blank" rel="noopener noreferrer" className="read-blog-btn">
            📖 Read Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
