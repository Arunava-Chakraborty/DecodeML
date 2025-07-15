import React from 'react';
import '../styles/BlogCard.css'; // create this if not already

const BlogCard = ({ title, date, excerpt, tags, thumbnail }) => {
  return (
    <div className="blog-card">
      <img src={thumbnail} alt="blog thumbnail" className="blog-thumbnail" />
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
      </div>
    </div>
  );
};

export default BlogCard;
