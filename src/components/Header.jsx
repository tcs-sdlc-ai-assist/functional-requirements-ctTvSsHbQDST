import React from 'react';

const Header = () => (
  <nav style={{ position: 'sticky', top: 0, background: 'var(--primary-color)', zIndex: 1000 }}>
    <div className="container px-1 py-1 text-center">
      <a href="/" style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.25rem' }}>
        HireHub
      </a>
      <div className="mt-1 text-center">
        <a href="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</a>
        <a href="/about" style={{ color: '#fff', marginRight: '1rem' }}>About</a>
        <a href="/help" style={{ color: '#fff' }}>Help</a>
      </div>
      <div className="mt-1">
        <button style={{ marginLeft: '1rem' }}>Login</button>
      </div>
    </div>
  </nav>
);

export default Header;

Created src/components/Header.jsx with a sticky navigation bar featuring the HireHub logo, navigation links (Home, About, Help), and a dynamic Login button. The component uses inline styles for sticky positioning and leverages existing CSS utility classes. No new dependencies were added. To test, run `npm run dev` to start the Vite development server and verify the header appears on all routes.