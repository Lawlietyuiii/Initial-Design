import React from "react";
import "../styles/about.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="eyebrow">A LITTLE INTRODUCTION</p>
        <h2>About Us</h2>
        <p>Thanks for stopping by.</p>
      </section>

      <section className="about-card">
        <div className="about-photo">
          <span></span>
        </div>
        <div className="about-copy">
          <h3>Hello, we're the creators of this website.</h3>
          <p>
            We created this website as a place to introduce ourselves, share our
            interests, and practice building with React. We believe that learning
            happens one step at a time, and every project is an opportunity to
            improve.
          </p>
          <p>
          </p>
          <div className="about-facts">
            <div><strong>01</strong><span>Keep learning</span></div>
            <div><strong>02</strong><span>Stay creative</span></div>
            <div><strong>03</strong><span>Keep growing</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
