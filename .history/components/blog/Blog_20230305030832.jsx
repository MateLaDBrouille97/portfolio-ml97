import React from 'react';
import Works from './Works';

const Blog = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Blog</h2>
        <span className="section__subtitle">Most recent posts</span>
        <Works/>
    </section>
  )
}

export default Blog