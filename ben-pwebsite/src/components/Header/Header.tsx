import React from 'react';
import './Header.css';

interface HeaderProps {
  title?: string;
  links?: Array<{ label: string; href: string }>;
}

const Header: React.FC<HeaderProps> = ({ 
  title = 'My Website', 
  links = [] 
}) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">{title}</h1>
        <nav className="header-nav">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;