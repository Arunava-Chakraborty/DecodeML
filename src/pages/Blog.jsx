import React, { useState } from 'react';
import blogs from '../data/blogs';
import BlogCard from '../components/BlogCard';
import '../styles/Blog.css'; // Make sure to create/update styles accordingly

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('date');

  // Filter blogs based on search
  const filteredBlogs = blogs
    .filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === 'likes') return b.likes - a.likes;
      if (sortOption === 'relevance') return b.relevance - a.relevance;
      return new Date(b.date) - new Date(a.date); // Default = sort by date
    });

  return (
    <div className="blog-page">
      <div className="blog-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="sort-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="date">📅 Date</option>
          <option value="relevance">🔍 Relevance</option>
          <option value="likes">❤️ Most Liked</option>
        </select>
      </div>

      <h2 className="blog-title">Latest Blog Posts</h2>
      {filteredBlogs.length ? (
        filteredBlogs.map((blog, i) => <BlogCard key={i} {...blog} />)
      ) : (
        <p>No blogs found matching your search.</p>
      )}
    </div>
  );
};

export default Blog;
