'use client'

import styles from '../styles/blogs.scss';
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'

export default function BlogsPage() {
  return (
    <>

    <Navbar />  
    <div className='mainPage'>
      Blogs page content

      {/* blog topics */}
      <div className='blogs'>
        <div className='blog-container'>
          <div className="blog-filter active">
            <label for="">All blogs</label>
          </div>
          <div className="blog-filter">
            <label for="">Somali Culture</label>
          </div>
          <div className="blog-filter">
            <label for="">Islamic topics (Deen)</label>
          </div>
          <div className="blog-filter">
            <label for="">Mobile App development</label>
          </div>
          <div className="blog-filter">
            <label for="">Web development</label>
          </div>
        </div>

        {/* blogs */}

        {/* subscription */}
        <div className='subscription'>
          <div className='subscription-container'>
            <h3>Subscribe to my newsletter</h3>
            <p>Get notified about new blogs, and updates.</p>
            <div className='subscription-input'>
              <input type="text" placeholder='Enter your email address'/>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <Footer />

    </>
  );
};
