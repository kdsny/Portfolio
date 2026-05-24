import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone, HiX } from 'react-icons/hi';
import { profile } from '../data/portfolio';
import './HireMeModal.css';

export default function HireMeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="hire-modal" role="dialog" aria-modal="true" aria-labelledby="hire-modal-title">
      <button type="button" className="hire-modal__backdrop" onClick={onClose} aria-label="Close dialog" />
      <div className="hire-modal__panel">
        <button type="button" className="hire-modal__close" onClick={onClose} aria-label="Close">
          <HiX />
        </button>

        <h2 id="hire-modal-title" className="hire-modal__title">
          Let&apos;s <span className="text-accent">Connect</span>
        </h2>
        <p className="hire-modal__subtitle">
          Interested in working together? Reach out through any of these channels.
        </p>

        <ul className="hire-modal__contacts">
          <li>
            <a href={`mailto:${profile.email}`}>
              <HiMail aria-hidden />
              <span>
                <strong>Email</strong>
                {profile.email}
              </span>
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone}`}>
              <HiPhone aria-hidden />
              <span>
                <strong>Phone</strong>
                {profile.phoneDisplay}
              </span>
            </a>
          </li>
          <li>
            <div className="hire-modal__static">
              <HiLocationMarker aria-hidden />
              <span>
                <strong>Location</strong>
                {profile.location}
              </span>
            </div>
          </li>
        </ul>

        <div className="hire-modal__social">
          <p>Follow me</p>
          <div className="hire-modal__social-links">
            <a href={profile.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        <button type="button" className="btn btn--primary hire-modal__cta" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>,
    document.body
  );
}
