import React, { useState, useEffect } from 'react';

function Navbar({ setPage, activePage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pages = ['gallery', 'menu', 'customize', 'order', 'contact', 'feedback'];

  return (
    <nav style={{
      background: scrolled ? 'rgba(20,10,3,0.97)' : '#1a0c05',
      padding: '14px 28px', display: 'flex', alignItems: 'center',
      position: 'sticky', top: 0, zIndex: 100,
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      transition: 'all 0.4s ease', width: '100%', boxSizing: 'border-box'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: 'auto' }}>
        <span style={{ fontSize: '24px' }}>🧇</span>
        <span style={{ color: '#f5c97a', fontSize: '20px', fontWeight: '800', letterSpacing: '1px' }}>
          The Waffle Factory
        </span>
      </div>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {pages.map(p => (
          <button key={p} onClick={() => setPage(p)} style={{
            background: activePage === p ? '#f5c97a' : 'transparent',
            color: activePage === p ? '#1a0c05' : '#f5c97a',
            border: '1.5px solid #f5c97a',
            padding: '7px 16px', borderRadius: '25px',
            cursor: 'pointer', fontSize: '13px', fontWeight: '700',
            textTransform: 'capitalize', transition: 'all 0.3s ease'
          }}
            onMouseEnter={e => { if (activePage !== p) e.target.style.background = 'rgba(245,201,122,0.15)'; }}
            onMouseLeave={e => { if (activePage !== p) e.target.style.background = 'transparent'; }}
          >{p.charAt(0).toUpperCase() + p.slice(1)}</button>
        ))}
      </div>
    </nav>
  );
}
export default Navbar;