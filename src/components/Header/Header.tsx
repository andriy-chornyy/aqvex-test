import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="https://official-site.com" className="header-logo-link" target="_blank" rel="noopener noreferrer">
          <img src="icons/header-logo.svg" alt="Official Site Logo" className="header-logo-img" />
        </a>
      </div>
    </header>
  );
};