import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-mark">TP</div>
          <div>
            <strong>TicketPro</strong>
            <small>La experiencia de ir a ver más.</small>
          </div>
        </div>

        <div className="footer-links">
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Contacto</a>
        </div>

        <div className="footer-socials" aria-label="Redes sociales">
          <button type="button" aria-label="Instagram">◎</button>
          <button type="button" aria-label="X">X</button>
          <button type="button" aria-label="YouTube">▶</button>
        </div>

        <div className="footer-accent" aria-hidden="true"></div>
      </div>
    </footer>
  );
}

export default Footer;
