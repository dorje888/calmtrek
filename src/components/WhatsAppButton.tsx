import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const WhatsAppButton: React.FC = () => {
  // Use wa.me format without the plus sign. Nepal country code +977 -> 977
  const phone = '9779818129888';
  const text = encodeURIComponent('Hello Calm Trek, I have a question about your treks.');
  const whatsappHref = `https://wa.me/${phone}?text=${text}`;
  const callHref = `tel:+977${phone}`;

  // Create a container appended to document.body so the button is not affected by parent stacking/overflow
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');
    // position container fixed so it always stays in viewport regardless of page scroll or parent transforms
    el.style.position = 'fixed';
    el.style.bottom = '1.5rem';
    el.style.left = '1.5rem';
    el.style.zIndex = '99999';
    // allow clicks only on children
    el.style.pointerEvents = 'none';
    document.body.appendChild(el);
    setContainerEl(el);
    return () => {
      if (el.parentNode) el.parentNode.removeChild(el);
      setContainerEl(null);
    };
  }, []);

  // Close on outside click or Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (e.target instanceof Node && wrapperRef.current.contains(e.target)) return;
      setShowMenu(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowMenu(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const button = (
    <div ref={wrapperRef} style={{ pointerEvents: 'auto' }}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={showMenu}
        onClick={() => setShowMenu((s) => !s)}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white hover:scale-105 transform transition-transform"
      >
        {/* Pulse background (non-interactive) - allow it to extend outside the button */}
        <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        {/* Optional subtle static ring to make pulse clearer */}
        <span className="absolute -inset-1 rounded-full ring-2 ring-[#25D366]/30 opacity-60 pointer-events-none" />
        {/* WhatsApp icon (SVG) - keep above the pulse */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 w-7 h-7 md:w-8 md:h-8">
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12a11.92 11.92 0 001.71 6L0 24l6.29-1.65A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.173-3.48-8.52zM12 21.5c-1.02 0-2.02-.14-2.98-.41l-.21-.07-3.74.98.97-3.65-.07-.2A9.5 9.5 0 012.5 12 9.5 9.5 0 1112 21.5z" />
          <path d="M17.04 14.04c-.28-.14-1.64-.81-1.9-.9-.26-.09-.45-.14-.64.14-.19.28-.74.9-.9 1.09-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19.04-.35-.02-.49-.07-.14-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3.01.14.19 2.02 3.08 4.9 4.31 2.88 1.24 2.88.83 3.4.78.52-.05 1.64-.66 1.87-1.3.23-.64.23-1.19.16-1.3-.07-.12-.26-.19-.54-.33z" fill="white" />
        </svg>
      </button>

      {/* Popover menu with options */}
      {showMenu && (
        <div className="absolute left-0 bottom-full mb-3 w-44 bg-background rounded-xl shadow-lg p-2 text-sm" role="menu">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded hover:bg-muted/50"
            role="menuitem"
            onClick={() => setShowMenu(false)}
          >
            Message on WhatsApp
          </a>
          <a
            href={callHref}
            className="block px-3 py-2 rounded hover:bg-muted/50"
            role="menuitem"
            onClick={() => setShowMenu(false)}
          >
            Call +977 {phone}
          </a>
        </div>
      )}
    </div>
  );

  if (!containerEl) return null;
  return createPortal(button, containerEl);
};

export default WhatsAppButton;
