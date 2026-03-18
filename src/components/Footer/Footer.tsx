import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <div className="footer-logos">
            <img src="icons/aqvex-minilogo.svg" alt="Q-logo" className="logo-aqvex img" />

            <div className="zrobleno-ua">
              <img src="icons/zrobleno-ua.svg" alt="Support Ukraine" className="logo-item img" />
            </div>
          </div>

          <div className="footer-copyright">
            ADVEX © 2026 | Bce права защищены
          </div>
        </div>

        <div className="footer-payments">
          <img className="master-card img" src="icons/master-card.svg" alt="Mastercard" />
          <img className="visa img" src="icons/visa.svg" alt="Visa" />
          <img className="iPay img" src="icons/iPay.svg" alt="Apple Pay" />
          <img className="gPay img" src="icons/gPay.svg" alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
};