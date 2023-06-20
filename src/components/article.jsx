import React from 'react';
import Image from '../assets/images/image-web-3-desktop.jpg';

function Article() {
  return (
    <article>
      <img src={Image} alt="article" />
      <div className="article-content">
        <h2>The Bright Future of Web 3.0?</h2>
        <div className="article-info">
          <p>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
      But is it really fulfilling its promise?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </article>
  )
}

export default Article;
