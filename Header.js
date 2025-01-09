import React from 'react';

const Header = () => {
  return (
    <header className="py-6 bg-[#1a1d2e] shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">John Munene</h1>
        <nav>
          <ul className="flex space-x-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
              <li key={section}>
                <a href={`#${section.toLowerCase()}`} className="hover:text-blue-400">
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

