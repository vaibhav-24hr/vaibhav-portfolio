import React, { useState, useEffect } from 'react';
import { Award, Medal, ShieldCheck, ExternalLink, Eye, X } from 'lucide-react';
import './Awards.css';

const awardsData = [
  {
    type: "Certification",
    title: "Fundamentals of OCAP\u00AE — Indigenous Data Sovereignty",
    issuer: "First Nations Information Governance Centre (FNIGC)",
    date: "2025",
    icon: <ShieldCheck className="award-icon" />,
    link: "/Vaibhav_OCAP_Certificate.pdf"
  },
  {
    type: "Certification",
    title: "MICROSOFT AI Classroom Series",
    issuer: "Microsoft",
    date: "June 2021",
    icon: <Award className="award-icon" />
  },
  {
    type: "Award",
    title: "Smart India Hackathon 2022",
    issuer: "SAL EDUCATION",
    date: "2022",
    icon: <Medal className="award-icon" />
  }
];

const Awards = () => {
  const [previewCert, setPreviewCert] = useState(null);

  useEffect(() => {
    if (!previewCert) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setPreviewCert(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [previewCert]);

  return (
    <section className="section awards-section" id="awards">
      <div className="container">
        <h2 className="section-title">
          Certifications & <span className="text-gradient">Awards</span>
        </h2>
        
        <div className="awards-grid">
          {awardsData.map((item, idx) => (
            <div key={idx} className="award-card glass-panel animate-fade-in">
              <div className="award-header">
                {item.icon}
                <span className="award-type">{item.type}</span>
              </div>
              <h3 className="award-title">{item.title}</h3>
              <div className="award-footer">
                <span className="award-issuer">{item.issuer}</span>
                <span className="award-date">{item.date}</span>
              </div>
              {item.link && (
                <button
                  type="button"
                  className="award-link"
                  onClick={() => setPreviewCert(item)}
                >
                  <Eye size={14} /> Preview Certificate
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {previewCert && (
        <div className="cert-modal-overlay" onClick={() => setPreviewCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <h3 className="cert-modal-title">{previewCert.title}</h3>
              <div className="cert-modal-actions">
                <a
                  href={previewCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-newtab"
                >
                  <ExternalLink size={16} /> Open in new tab
                </a>
                <button
                  type="button"
                  className="cert-modal-close"
                  onClick={() => setPreviewCert(null)}
                  aria-label="Close preview"
                >
                  <X size={22} />
                </button>
              </div>
            </div>
            <iframe
              src={previewCert.link}
              title={previewCert.title}
              className="cert-modal-frame"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Awards;
