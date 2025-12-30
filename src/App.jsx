import './App.css'

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="nav-logo">BizPro</a>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-circle hero-bg-circle-1"></div>
        <div className="hero-bg-circle hero-bg-circle-2"></div>
        <div className="container hero-content">
          <h1>Transform Your Business with Innovation</h1>
          <p className="hero-subtitle">
            We deliver cutting-edge solutions that drive growth, enhance efficiency, 
            and unlock your business's full potential in the digital age.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Get Started
            </a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="bg-gradient-overlay"></div>
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">What We Offer</p>
            <h2>Our Premium Services</h2>
            <p>Comprehensive solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-3">
            <div className="glass-card service-card">
              <div className="service-icon">🚀</div>
              <h3>Digital Transformation</h3>
              <p>Modernize your operations with cutting-edge technology and strategic digital solutions.</p>
            </div>
            <div className="glass-card service-card">
              <div className="service-icon">💡</div>
              <h3>Business Consulting</h3>
              <p>Expert guidance to optimize processes, reduce costs, and maximize profitability.</p>
            </div>
            <div className="glass-card service-card">
              <div className="service-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>Transform raw data into actionable insights that drive informed decision-making.</p>
            </div>
            <div className="glass-card service-card">
              <div className="service-icon">🎯</div>
              <h3>Marketing Strategy</h3>
              <p>Innovative campaigns that amplify your brand and connect with your audience.</p>
            </div>
            <div className="glass-card service-card">
              <div className="service-icon">🔒</div>
              <h3>Cybersecurity</h3>
              <p>Protect your assets with enterprise-grade security solutions and monitoring.</p>
            </div>
            <div className="glass-card service-card">
              <div className="service-icon">⚡</div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure that grows with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="bg-gradient-overlay-secondary"></div>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <p className="section-subtitle">Who We Are</p>
              <h2>Building Success Stories Since 2010</h2>
              <p>
                We're a team of passionate innovators dedicated to helping businesses thrive 
                in an ever-evolving digital landscape. With over a decade of experience, 
                we've partnered with hundreds of companies to achieve remarkable growth.
              </p>
              <p>
                Our approach combines strategic thinking, technical expertise, and creative 
                problem-solving to deliver solutions that don't just meet expectations—they 
                exceed them.
              </p>
              <a href="#contact" className="btn btn-primary mt-md" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Partner With Us
              </a>
            </div>
            <div className="about-stats">
              <div className="glass-card stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <div className="bg-gradient-overlay"></div>
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Client Success</p>
            <h2>What Our Clients Say</h2>
            <p>Real results from real partnerships</p>
          </div>
          <div className="grid grid-2">
            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                "Working with BizPro transformed our entire operation. Their strategic insights 
                and technical expertise helped us increase revenue by 150% in just one year."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <h4>Sarah Mitchell</h4>
                  <p>CEO, TechVentures Inc.</p>
                </div>
              </div>
            </div>
            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                "The team's dedication and innovative approach exceeded all expectations. 
                They didn't just deliver a solution—they became true partners in our success."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JC</div>
                <div className="author-info">
                  <h4>James Chen</h4>
                  <p>Founder, Digital Dynamics</p>
                </div>
              </div>
            </div>
            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                "Outstanding service from start to finish. Their data analytics solutions 
                gave us insights we never knew we needed. Game-changing!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">ER</div>
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <p>COO, Growth Strategies Ltd.</p>
                </div>
              </div>
            </div>
            <div className="glass-card testimonial-card">
              <p className="testimonial-text">
                "Professional, responsive, and results-driven. BizPro helped us navigate 
                digital transformation seamlessly. Highly recommend!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MK</div>
                <div className="author-info">
                  <h4>Michael Kumar</h4>
                  <p>Director, Innovation Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section cta">
        <div className="bg-gradient-overlay-secondary"></div>
        <div className="container cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how we can help you achieve your goals. 
            Get in touch today for a free consultation.
          </p>
          <div className="hero-cta">
            <a href="mailto:hello@bizpro.com" className="btn btn-primary">Contact Us</a>
            <a href="tel:+1234567890" className="btn btn-secondary">Call Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="gradient-text">BizPro</h3>
              <p>
                Empowering businesses with innovative solutions 
                for sustainable growth and success.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">in</a>
                <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
                <a href="#" className="social-link" aria-label="Facebook">f</a>
                <a href="#" className="social-link" aria-label="Instagram">📷</a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Digital Transformation</a></li>
                <li><a href="#services">Consulting</a></li>
                <li><a href="#services">Analytics</a></li>
                <li><a href="#services">Marketing</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 BizPro. All rights reserved. Built with passion for excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
