
import "./App.css";
import ClientPortal from "./pages/ClientPortal";
import AIHub from "./pages/AIHub";

function App() {
  if (window.location.pathname === "/client-portal") {
    return <ClientPortal />;
  }

  if (window.location.pathname === "/ai-hub") {
    return <AIHub />;
  }

  return (

    <div className="site">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">
        <div className="nav-inner">

          <a href="#" className="logo">
            ZELVIX MEDIA<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#ai-hub">AI Hub</a>
            <a href="#websites">Websites</a>
            <a href="/client-portal">Client Portal ↗</a>
          </nav>

          <div className="nav-socials">

            <a
              href="https://www.instagram.com/zelvixmedia_/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
            >
              ZELVIX MEDIA <span>↗</span>
            </a>

            <a
              href="https://www.instagram.com/zayaan_zelvix/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
            >
              ZAYAAN <span>↗</span>
            </a>

          </div>

        </div>
      </header>


      {/* =========================
          MAIN
      ========================= */}

      <main>


        {/* =========================
            HERO
        ========================= */}

        <section className="hero">

          <div className="hero-grid"></div>

          <div className="hero-content">

            <div className="eyebrow">
              <span className="status-dot"></span>
              CREATIVE MEDIA STUDIO
            </div>

            <h1>
              Create.
              <br />
              <span>Captivate.</span>
              <br />
              Grow.
            </h1>

            <p className="hero-description">
              We create modern digital content that helps businesses
              communicate, connect and stand out.
            </p>

            <div className="hero-actions">

              <a
                href="#services"
                className="button button-primary"
              >
                Explore Services <span>↗</span>
              </a>

              <a
                href="#about"
                className="button button-secondary"
              >
                Discover Zelvix
              </a>

            </div>

          </div>

          <div className="hero-bottom">
            <span>AI CONTENT</span>
            <span>VIDEO</span>
            <span>MOTION</span>
            <span>DESIGN</span>
            <span>SOCIAL MEDIA</span>
          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}

        <section
          className="about section"
          id="about"
        >

          <div className="section-label">
            <span>01</span>
            ABOUT ZELVIX
          </div>

          <div className="about-content">

            <h2>
              Creative ideas,
              <br />
              <em>built for today's world.</em>
            </h2>

            <div className="about-text">

              <p>
                Zelvix Media is a creative media studio focused on
                helping businesses build a stronger digital presence.
              </p>

              <p>
                From AI-powered visuals and video production to motion
                graphics and social media design, we turn ideas into
                content designed to get noticed.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            SERVICES
        ========================= */}

        <section
          className="services section"
          id="services"
        >

          <div className="section-label">
            <span>02</span>
            WHAT WE DO
          </div>

          <div className="section-heading">

            <h2>
              Built to make
              <br />
              <em>brands stand out.</em>
            </h2>

            <p>
              Creative solutions designed around your business,
              audience and digital goals.
            </p>

          </div>

          <div className="services-grid">

            <div className="service-card">

              <span className="service-number">
                01
              </span>

              <div className="service-icon">
                ✦
              </div>

              <h3>
                AI Video Production
              </h3>

              <p>
                Cinematic AI advertisements, promotional videos,
                creative campaigns and visual storytelling.
              </p>

              <span className="service-arrow">
                ↗
              </span>

            </div>


            <div className="service-card">

              <span className="service-number">
                02
              </span>

              <div className="service-icon">
                ◉
              </div>

              <h3>
                Reels & Short-Form
              </h3>

              <p>
                Engaging short-form content created for today's
                fast-moving social platforms.
              </p>

              <span className="service-arrow">
                ↗
              </span>

            </div>


            <div className="service-card">

              <span className="service-number">
                03
              </span>

              <div className="service-icon">
                ＋
              </div>

              <h3>
                Motion Graphics
              </h3>

              <p>
                Animated typography, promotional graphics,
                explainers and dynamic visual content.
              </p>

              <span className="service-arrow">
                ↗
              </span>

            </div>


            <div className="service-card">

              <span className="service-number">
                04
              </span>

              <div className="service-icon">
                ◇
              </div>

              <h3>
                Social Media Design
              </h3>

              <p>
                Posters, campaigns, announcements and creative
                visuals designed for social media.
              </p>

              <span className="service-arrow">
                ↗
              </span>

            </div>


            <div className="service-card">

              <span className="service-number">
                05
              </span>

              <div className="service-icon">
                ⌁
              </div>

              <h3>
                Content Strategy
              </h3>

              <p>
                Creative ideas and content direction built around
                your brand and audience.
              </p>

              <span className="service-arrow">
                ↗
              </span>

            </div>


            <div className="service-card">

              <span className="service-number">
                06
              </span>

              <div className="service-icon">
                ↗
              </div>

              <h3>
                Creative Campaigns
              </h3>

              <p>
                From concept to final output, we turn campaigns
                into content people remember.
              </p>

              <span className="service-arrow">
                ↗
              </span>

            </div>

          </div>

        </section>

        {/* =========================
    WEBSITE DEVELOPMENT
========================= */}

<section className="website-offer section" id="websites">
  <div className="website-offer-grid"></div>

  <div className="section-label">
    <span>03</span>
    WEBSITE DEVELOPMENT
  </div>

  <div className="website-offer-content">
    <div className="website-offer-text">
      <div className="website-offer-badge">
        YOUR BUSINESS. YOUR WEBSITE.
      </div>

      <h2>
        Build a website
        <br />
        for your <em>business.</em>
      </h2>

      <p>
        Take your business online with a modern, responsive website
        designed to showcase your brand, services and business
        professionally.
      </p>

      <div className="website-offer-features">
        <span>✦ Modern Design</span>
        <span>✦ Mobile Responsive</span>
        <span>✦ Business Focused</span>
      </div>

      <a href="#contact" className="website-offer-button">
        Build My Website <span>↗</span>
      </a>
    </div>

    <div className="website-price-card">
      <span className="website-price-label">
        WEBSITE DEVELOPMENT
      </span>

      <div className="website-price">
        <span className="currency">₹</span>4,999
        <span className="price-plus">/-</span>
      </div>

      <span className="website-price-note">
        STARTING PRICE
      </span>

      <div className="website-price-divider"></div>

      <p>
        A professional online presence starts here.
      </p>

      <span className="website-price-footer">
        DOMAIN & HOSTING EXTRA
      </span>
    </div>
  </div>
</section>


        {/* =========================
            APPROACH
        ========================= */}

        <section
          className="approach section"
          id="approach"
        >

          <div className="section-label">
            <span>03</span>
            OUR APPROACH
          </div>

          <div className="approach-top">

            <h2>
              From idea
              <br />
              <em>to impact.</em>
            </h2>

            <p>
              A simple creative process that keeps every project
              focused, intentional and effective.
            </p>

          </div>

          <div className="process">

            <div className="process-item">

              <span>01</span>

              <h3>
                Discover
              </h3>

              <p>
                Understand your business, audience and objective.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-item">

              <span>02</span>

              <h3>
                Create
              </h3>

              <p>
                Develop the concept, direction and visual language.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-item">

              <span>03</span>

              <h3>
                Refine
              </h3>

              <p>
                Edit, animate and polish every important detail.
              </p>

            </div>


            <div className="process-line"></div>


            <div className="process-item">

              <span>04</span>

              <h3>
                Deliver
              </h3>

              <p>
                Provide content ready for your digital platforms.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            WHY ZELVIX
        ========================= */}

        <section className="why section">

          <div className="section-label">
            <span>04</span>
            WHY ZELVIX
          </div>

          <div className="why-grid">

            <div className="why-intro">

              <h2>
                More than
                <br />
                <em>just content.</em>
              </h2>

              <p>
                We believe good creative work starts with a strong
                idea and ends with a clear purpose.
              </p>

            </div>


            <div className="why-list">

              <div className="why-item">

                <span>01</span>

                <div>

                  <h3>
                    Creative First
                  </h3>

                  <p>
                    Ideas come before execution. Every project starts
                    with a reason to create.
                  </p>

                </div>

              </div>


              <div className="why-item">

                <span>02</span>

                <div>

                  <h3>
                    AI Powered
                  </h3>

                  <p>
                    We use modern AI tools to explore new creative
                    possibilities and workflows.
                  </p>

                </div>

              </div>


              <div className="why-item">

                <span>03</span>

                <div>

                  <h3>
                    Social Ready
                  </h3>

                  <p>
                    Content is designed for the way people consume
                    digital media today.
                  </p>

                </div>

              </div>


              <div className="why-item">

                <span>04</span>

                <div>

                  <h3>
                    Business Focused
                  </h3>

                  <p>
                    Creative isn't enough. The work should have a
                    purpose for your business.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            AI HUB
        ========================= */}

        <section
          className="ai-hub section"
          id="ai-hub"
        >

          <div className="ai-glow"></div>

          <div className="section-label">
            <span>05</span>
            ZELVIX AI HUB
          </div>

          <div className="ai-content">

            <div>

              <div className="ai-badge">
                FREE • NO SIGN-UP
              </div>

              <h2>
                Explore the
                <br />
                <em>AI side of Zelvix.</em>
              </h2>

              <p>
                Discover AI videos, prompts, creative resources and
                experiments created by Zelvix.
              </p>

            </div>

           <a
  href="/ai-hub"
  className="ai-button"
>
  Explore AI Hub
  <span>↗</span>
</a>
          </div>

        </section>


        {/* =========================
            CONTACT
        ========================= */}

        <section
          className="contact section"
          id="contact"
        >

          <div className="contact-content">

            <div className="section-label">
              <span>06</span>
              START A PROJECT
            </div>

            <h2>
              Have an idea?
              <br />
              <em>Let's create it.</em>
            </h2>

            <p>
              Tell us what you're looking to create and let's
              turn the idea into something worth seeing.
            </p>

            {/* EMAIL */}

            <div className="contact-email">
              <span>EMAIL</span>

              <a href="mailto:zelvixmedia2026@gmail.com">
                zelvixmedia2026@gmail.com
              </a>
            </div>


            {/* CONTACT BUTTONS */}

            <div className="contact-actions">

              <a
                href="mailto:zelvixmedia2026@gmail.com?subject=Project%20Inquiry%20-%20Zelvix%20Media"
                className="contact-button"
              >
                Email Zelvix Media
                <span>↗</span>
              </a>


              <a
                href="https://www.instagram.com/zelvixmedia_/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                Instagram
                <span>↗</span>
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">

            <div className="footer-logo">
              ZELVIX MEDIA<span>.</span>
            </div>

            <p>
              Creative media for brands
              <br />
              ready to be noticed.
            </p>

          </div>


          <div className="footer-links">

            <div className="footer-column">

              <span className="footer-heading">
                EXPLORE
              </span>

              <a href="#about">
                About
              </a>

              <a href="#services">
                Services
              </a>

              <a href="#approach">
                Approach
              </a>

              <a href="#ai-hub">
                AI Hub
              </a>

            </div>


            <div className="footer-column">

              <span className="footer-heading">
                CONNECT
              </span>

              <a
                href="https://www.instagram.com/zelvixmedia_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>

              <a
                href="https://www.instagram.com/zayaan_zelvix/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zayaan ↗
              </a>

              <a href="#contact">
                Start a Project ↗
              </a>

              <a href="mailto:zelvixmedia2026@gmail.com">
                Email Zelvix ↗
              </a>

            </div>

          </div>

        </div>


        <div className="footer-line"></div>


        <div className="footer-bottom">

          <span>
            © 2026 ZELVIX MEDIA
          </span>

          <span>
            CREATE • CAPTIVATE • GROW
          </span>

          <span>
            INDIA
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;