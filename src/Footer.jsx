import React from 'react';

function Footer({ setPage }) {
  return (
    <footer style={{
      background: '#0f0603',
      color: '#faf6f0',
      padding: '60px 40px 30px',
      width: '100%', boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '40px', maxWidth: '1000px', margin: '0 auto 48px'
      }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px' }}>🧇</span>
            <span style={{ color: '#f5c97a', fontSize: '20px', fontWeight: '800' }}>The Waffle Factory</span>
          </div>
          <p style={{ color: 'rgba(250,246,240,0.5)', fontSize: '14px', lineHeight: '1.8' }}>
            Crafting the perfect waffle since 1998. Made with love, served with joy — every single day.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
              <div key={i} style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(245,201,122,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', cursor: 'pointer',
                border: '1px solid rgba(245,201,122,0.15)',
                transition: 'all 0.3s'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,201,122,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,201,122,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >{icon}</div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#f5c97a', marginBottom: '20px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>QUICK LINKS</h4>
          {[['🏠 Gallery', 'gallery'], ['📍 Contact Us', 'contact'], ['⭐ Feedback', 'feedback']].map(([label, p]) => (
            <div key={p}
              onClick={() => { setPage(p); window.scrollTo(0, 0); }}
              style={{ color: 'rgba(250,246,240,0.55)', fontSize: '14px', marginBottom: '14px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f5c97a'; e.currentTarget.style.paddingLeft = '8px'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(250,246,240,0.55)'; e.currentTarget.style.paddingLeft = '0'; }}
            >→ {label}</div>
          ))}
        </div>

        {/* Menu */}
        <div>
          <h4 style={{ color: '#f5c97a', marginBottom: '20px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>OUR MENU</h4>
          {['Classic Waffles', 'Chocolate Waffles', 'Fruit Waffles', 'Special Waffles', 'Seasonal Specials'].map(item => (
            <div key={item} style={{ color: 'rgba(250,246,240,0.55)', fontSize: '14px', marginBottom: '12px' }}>
              🧇 {item}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: '#f5c97a', marginBottom: '20px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>CONTACT US</h4>
          {[
            ['📍', '12 Waffle Lane, Anna Nagar, Chennai - 600040'],
            ['📞', '+91 98765 43210'],
            ['✉️', 'hello@wafflefactory.in'],
            ['🕐', 'Open Daily: 8 AM – 10 PM'],
          ].map(([icon, text]) => (
            <div key={text} style={{ display: 'flex', gap: '10px', marginBottom: '14px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '14px', flexShrink: 0 }}>{icon}</span>
              <span style={{ color: 'rgba(250,246,240,0.55)', fontSize: '13px', lineHeight: '1.7' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(245,201,122,0.12)', paddingTop: '28px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'rgba(250,246,240,0.3)', fontSize: '13px', margin: 0 }}>
            © 2026 The Waffle Factory. Made with 🧇 in Chennai, India.
          </p>
          <p style={{ color: 'rgba(250,246,240,0.3)', fontSize: '13px', margin: 0 }}>
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;