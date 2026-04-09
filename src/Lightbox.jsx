import React, { useEffect } from 'react';

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!image) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.9)', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: '20px',
      animation: 'fadeIn 0.25s ease'
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(40px) } to { opacity:1; transform:translateY(0) } }
      `}</style>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', borderRadius: '24px',
        overflow: 'hidden', maxWidth: '520px', width: '100%',
        animation: 'slideUp 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.6)'
      }}>
        <div style={{ position: 'relative' }}>
          <img src={image.url} alt={image.title}
            style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
          <button onClick={onClose} style={{
            position: 'absolute', top: '14px', right: '14px',
            background: 'rgba(0,0,0,0.65)', color: '#fff', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            fontSize: '18px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>✕</button>
        </div>
        <div style={{ padding: '26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <span style={{
                background: '#fdf3e3', color: '#b07d3a',
                borderRadius: '10px', padding: '3px 12px',
                fontSize: '12px', fontWeight: '700'
              }}>{image.tag}</span>
              <h2 style={{ color: '#1a0c05', margin: '10px 0 6px', fontSize: '24px' }}>{image.title}</h2>
            </div>
            <span style={{ color: '#5c3317', fontWeight: '700', fontSize: '24px' }}>{image.price}</span>
          </div>
          <p style={{ color: '#8a6a52', lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>{image.description}</p>
          <button onClick={onClose} style={{
            background: '#1a0c05', color: '#f5c97a', border: 'none',
            padding: '13px 30px', borderRadius: '25px',
            cursor: 'pointer', fontSize: '15px', fontWeight: '700', width: '100%',
            transition: 'opacity 0.2s'
          }}>Close ✕</button>
        </div>
      </div>
    </div>
  );
}
export default Lightbox;