import { useState } from 'react'
import './App.css'

function App() {
  // État pour les informations de l'entreprise (modifiables)
  const [businessInfo, setBusinessInfo] = useState({
    nom: 'Tapisserie La Bénédiction de Dieu',
    slogan: 'L\'art de la rénovation de meubles',
    description: 'Spécialiste de la tapisserie d\'ameublement depuis plus de 20 ans',
    telephone: '+228 99 46 85 79',
    email: 'rodriguehessou14@gmail.com',
    adresse: 'Lomé, Togo',
    horaires: 'Lun-Ven: 8h-20h, Sam: 9h-19h'
  });

  // Images permanentes de la galerie (ajoutez vos images ici)
  const defaultGalleryImages = [
    // Exemple : décommentez et modifiez avec vos vraies images
    { id: 1, url: '/images/galerie/1.jpeg', name: 'Réfection fauteuil Louis XV', isPermanent: true },
    { id: 2, url: '/images/galerie/2.jpeg', name: 'Restauration canapé ancien', isPermanent: true },
    { id: 3, url: '/images/galerie/3.jpeg', name: 'Chaise restaurée', isPermanent: true },
    { id: 5, url: '/images/galerie/4.jpeg', name: 'Restauration canapé ancien', isPermanent: true },
    { id: 6, url: '/images/galerie/5.jpeg', name: 'Chaise restaurée', isPermanent: true },
    { id: 4, url: '/images/galerie/6.jpeg', name: 'Chaise restaurée', isPermanent: true },


  ];

  const [galleryImages, setGalleryImages] = useState(defaultGalleryImages);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      name: file.name,
      isPermanent: false
    }));
    setGalleryImages([...galleryImages, ...newImages]);
  };

  const removeImage = (id) => {
    // Ne permet de supprimer que les images temporaires (uploadées)
    setGalleryImages(galleryImages.filter(img => img.id !== id || img.isPermanent));
  };

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ nom: '', email: '', telephone: '', message: '' });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="nav-logo">{businessInfo.nom}</a>
          <ul className="nav-links">
            <li><a href="#accueil" onClick={(e) => { e.preventDefault(); scrollToSection('accueil'); }}>Accueil</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#galerie" onClick={(e) => { e.preventDefault(); scrollToSection('galerie'); }}>Galerie</a></li>
            <li><a href="#apropos" onClick={(e) => { e.preventDefault(); scrollToSection('apropos'); }}>À Propos</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1>{businessInfo.slogan}</h1>
          <p className="hero-subtitle">
            {businessInfo.description}. Nous redonnons vie à vos meubles avec passion et savoir-faire.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Demander un Devis
            </a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              Nos Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Nos Expertises</p>
            <h2>Services de Tapisserie</h2>
            <p>Des prestations complètes pour tous vos besoins en ameublement</p>
          </div>
          <div className="grid grid-3">
            <div className="card service-card">
              <div className="service-icon">🛋️</div>
              <h3>Réfection de Sièges</h3>
              <p>Restauration complète de vos fauteuils, chaises et canapés avec des tissus de qualité.</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">🪑</div>
              <h3>Rénovation  </h3>
              <p>Expertise dans la restauration de meubles anciens en respectant les techniques traditionnelles.</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">✂️</div>
              <h3>Confection sur Mesure</h3>
              <p>Création de coussins, rideaux et habillages personnalisés selon vos envies.</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">🔧</div>
              <h3>Réparation</h3>
              <p>Remise en état de la structure, ressorts et sangles de vos meubles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="section gallery">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Nos Réalisations</p>
            <h2>Galerie de Projets</h2>
            <p>Découvrez quelques-unes de nos plus belles restaurations</p>
          </div>
          <div className="mb-md" style={{ textAlign: 'center' }}>
            {/* <label htmlFor="image-upload" className="btn btn-primary" style={{ cursor: 'pointer' }}>
              📸 Ajouter des Photos (Temporaire)
            </label> */}
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            {/* <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              💡 Pour des images permanentes, placez vos photos dans <code>public/images/galerie/</code> et modifiez le code (ligne 17-22)
            </p> */}
          </div>

          <div className="gallery-grid">
            {galleryImages.length === 0 ? (
              // Placeholders par défaut
              [...Array(6)].map((_, index) => (
                <div key={index} className="gallery-item">
                  <span className="gallery-placeholder">🖼️</span>
                </div>
              ))
            ) : (
              // Images uploadées
              galleryImages.map((image) => (
                <div key={image.id} className="gallery-item" style={{ position: 'relative' }}>
                  <img
                    src={image.url}
                    alt={image.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
                  />
                  {!image.isPermanent && (
                    <button
                      onClick={() => removeImage(image.id)}
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(255, 0, 0, 0.8)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <p className="section-subtitle">Notre Histoire</p>
              <h2>Artisan Tapissier Passionné</h2>
              <p>
                Depuis plus de 20 ans, notre atelier perpétue la tradition de la tapisserie d'ameublement
                avec passion et excellence. Chaque meuble qui nous est confié bénéficie d'un savoir-faire
                artisanal transmis de génération en génération.
              </p>
              <p>
                Nous travaillons avec les meilleurs fournisseurs de tissus et matériaux pour garantir
                une qualité irréprochable et une durabilité exceptionnelle de nos réalisations.
              </p>
              <div className="about-features mt-md">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Plus de 20 ans d'expérience</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Techniques traditionnelles et modernes</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Tissus de qualité supérieure</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Devis gratuit et personnalisé</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="card" style={{ padding: '3rem', textAlign: 'center', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                  <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🪡</div>
                  <h3>Savoir-faire Artisanal</h3>
                  <p>Chaque projet est unique et réalisé avec soin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-content">
            <div className="section-header">
              <p className="section-subtitle">Contactez-nous</p>
              <h2>Demandez Votre Devis Gratuit</h2>
              <p>Nous sommes à votre écoute pour tous vos projets de tapisserie</p>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="nom">Nom complet *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    className="form-input"
                    value={formData.nom}
                    onChange={handleFormChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="telephone">Téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className="form-input"
                  value={formData.telephone}
                  onChange={handleFormChange}
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Votre projet *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  placeholder="Décrivez-nous votre projet de tapisserie..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Envoyer ma demande
              </button>
            </form>

            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📞</div>
                <h4>Téléphone / WhatsApp</h4>
                <p>
                  <a href={`tel:${businessInfo.telephone}`}>{businessInfo.telephone}</a>
                  <br />
                  <a
                    href={`https://wa.me/22899468579`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    💬 WhatsApp
                  </a>
                </p>
              </div>
              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h4>Email</h4>
                <p><a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a></p>
              </div>
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h4>Adresse</h4>
                <p>{businessInfo.adresse}</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🕐</div>
                <h4>Horaires</h4>
                <p>{businessInfo.horaires}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>{businessInfo.nom}</h3>
              <p>
                Votre artisan tapissier de confiance pour la restauration
                et la création de meubles d'exception.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">f</a>
                <a href="#" className="social-link" aria-label="Instagram">📷</a>
                <a href="#" className="social-link" aria-label="LinkedIn">in</a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Réfection de sièges</a></li>
                <li><a href="#services">Restauration</a></li>
                <li><a href="#services">Sur mesure</a></li>
                <li><a href="#services">Conseil</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#apropos">À propos</a></li>
                <li><a href="#galerie">Galerie</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Devis gratuit</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Informations</h4>
              <ul>
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">CGV</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 {businessInfo.nom}. Tous droits réservés. Artisan tapissier professionnel.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
