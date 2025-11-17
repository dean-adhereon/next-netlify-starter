import Head from 'next/head'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ScriptwoRx",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "description": "Professional prescription generation software for healthcare providers. Streamline your practice with secure, compliant digital prescription management.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Head>
        <title>ScriptwoRx - Professional Prescription Generation Software | Powered By Injection Manager</title>
        <meta name="description" content="ScriptwoRx is a professional prescription generation software designed for healthcare providers. Create secure, compliant digital prescriptions with ease. Streamline your practice workflow today." />
        <meta name="keywords" content="prescription software, e-prescription, digital prescription, healthcare software, medical prescription, prescription generator, healthcare provider tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        <meta property="og:title" content="ScriptwoRx - Professional Prescription Generation Software" />
        <meta property="og:description" content="Create secure, compliant digital prescriptions with ease. Professional prescription generation software for healthcare providers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www-scriptworx.netlify.app/" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ScriptwoRx - Professional Prescription Generation Software" />
        <meta name="twitter:description" content="Create secure, compliant digital prescriptions with ease. Professional prescription generation software for healthcare providers." />
        
        <link rel="canonical" href="https://www-scriptworx.netlify.app/" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="landing-page">
        <header className="hero">
          <div className="hero-content">
            <div className="logo-container">
              <img src="/scriptworx-logo-horizontal.jpg" alt="ScriptwoRx Logo" className="logo" />
            </div>
            
            <h1 className="main-heading">Electronic Prescribing Software for Medical Specialists</h1>
            
            <p className="description">
              ScriptWoRx is electronic prescribing software designed specifically for medical specialists. 
              Supporting complex authority item prescriptions and aligning with Australian government healthcare digitization initiatives.
            </p>

            <div className="features-section">
              <h2 className="section-title">Key Features</h2>
              <ul className="features-list">
                <li>Designed by an award-winning ophthalmologist</li>
                <li>Supports over 143 million electronic prescriptions since May 2020</li>
                <li>Compliant with Pharmaceutical Benefits Scheme (PBS) medication prescribing criteria</li>
                <li>Currently expanding to support specialists across different therapeutic areas</li>
              </ul>
            </div>

            <div className="approach-section">
              <h2 className="section-title">Our Approach</h2>
              <div className="approach-steps">
                <div className="approach-step">
                  <h3>1. Discover</h3>
                  <p>Understanding medical specialists' and patients' needs</p>
                </div>
                <div className="approach-step">
                  <h3>2. Conceive</h3>
                  <p>Innovative design based on specialist practice challenges</p>
                </div>
                <div className="approach-step">
                  <h3>3. Deliver</h3>
                  <p>Software conforming to Australian standards</p>
                </div>
              </div>
            </div>

            <div className="unique-points">
              <h2 className="section-title">Why Choose ScriptWoRx</h2>
              <ul className="features-list">
                <li>Australian-owned</li>
                <li>Built by healthcare experts</li>
                <li>Focused on digital health technology</li>
                <li>Supports specialist prescribing workflows</li>
              </ul>
            </div>

            <div className="compliance-link">
              <p className="compliance-text">
                Keeping pace with the <a href="https://www.digitalhealth.gov.au/sites/default/files/documents/copy-of---doc25-138434-ep-conformance-register-20251020.pdf" target="_blank" rel="noopener noreferrer">Australian Digital Health Agency</a> in driving innovation for patient benefit
              </p>
            </div>

            <div className="contact-section">
              <p className="contact-info">
                <strong>Contact:</strong> <a href="mailto:enquiry@adhereon.com.au">enquiry@adhereon.com.au</a>
                {' | '}
                <a href="https://www.adhereon.com.au" target="_blank" rel="noopener noreferrer">www.adhereon.com.au</a>
              </p>
            </div>
          </div>
        </header>
      </div>

      <style jsx>{`
        .landing-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .hero {
          background: white;
          color: #0066cc;
          padding: 4rem 2rem;
          text-align: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo-container {
          margin-bottom: 2rem;
        }

        .logo {
          max-width: 400px;
          width: 100%;
          height: auto;
        }

        .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .description {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          opacity: 0.95;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          margin-top: 3rem;
        }

        .features-section,
        .approach-section,
        .unique-points {
          margin-bottom: 2rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 1.1rem;
          line-height: 2;
        }

        .features-list li {
          margin-bottom: 0.8rem;
          opacity: 0.95;
        }

        .features-list li::before {
          content: "✓ ";
          margin-right: 0.5rem;
          font-weight: bold;
        }

        .approach-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .approach-step {
          padding: 1.5rem;
          background: rgba(0, 102, 204, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(0, 102, 204, 0.2);
        }

        .approach-step h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .approach-step p {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .compliance-link {
          margin: 3rem 0 2rem 0;
          padding: 1.5rem;
          background: rgba(0, 102, 204, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(0, 102, 204, 0.2);
        }

        .compliance-text {
          font-size: 1.1rem;
          opacity: 0.95;
          line-height: 1.8;
          margin: 0;
        }

        .compliance-text a {
          color: #0066cc;
          text-decoration: underline;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .compliance-text a:hover {
          opacity: 0.8;
        }

        .contact-section {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 102, 204, 0.3);
        }

        .contact-info {
          font-size: 1.1rem;
          margin: 0;
        }

        .contact-info a {
          color: #0066cc;
          text-decoration: underline;
          transition: opacity 0.2s;
        }

        .contact-info a:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 2rem 1.5rem;
          }

          .logo {
            max-width: 280px;
          }

          .main-heading {
            font-size: 1.8rem;
          }

          .description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .features-list {
            font-size: 1rem;
            text-align: left;
          }

          .approach-steps {
            grid-template-columns: 1fr;
          }

          .compliance-text {
            font-size: 1rem;
          }

          .contact-info {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  )
}
