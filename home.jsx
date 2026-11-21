import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <main className="page-container">
      <aside className="sidebar">
        <section className="sidebar-card">
          <p className="eyebrow">Conuel eCommerce</p>
          <h2>About Us</h2>
          <div className="profile-placeholder" role="img" aria-label="Profile image placeholder">
            <span></span>
          </div>
          <p>
            Hello, welcome to our sample eCommerce website.
          </p>
        </section>

        <section className="sidebar-card quick-links">
          <p className="eyebrow">EXPLORE</p>
          <h3>More to discover</h3>
          <a href="#first-post">My latest story</a>
          <a href="#second-post">Things I enjoy</a>
          <a href="#site-footer">Visit the footer</a>
        </section>
      </aside>

      <section className="main-content" aria-label="Latest posts">
        <article className="post-card" id="first-post">
          <p className="eyebrow">FEATURED POST</p>
          <h2>Welcome to Our Website</h2>
          <p className="post-meta">A little introduction</p>
          <div className="post-banner banner-one">
            <span>Our Story</span>
          </div>
          <p className="post-lead">A place where we can share our ideas and experiences.</p>
          <p>
            This website is a simple space to introduce ourselves and share some
            of the things that matter to us. Take a look around and feel free
            to explore the different sections.
          </p>
        </article>

        <article className="post-card" id="second-post">
          <p className="eyebrow">PERSONAL NOTES</p>
          <h2>Things We Enjoy</h2>
          <p className="post-meta">A few of our interests · November 18, 2026</p>
          <div className="post-banner banner-two">
            <span>LEARN · CREATE · GROW</span>
          </div>
          <p className="post-lead">Every day is a chance to learn something new.</p>
          <p>
            We enjoy discovering new ideas, learning about technology, being
            creative, and spending time on activities that help us improve.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
