import React, { useState } from 'react';

function ImageCard({ image, onClick, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(image)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '18px', overflow: 'hidden', cursor: 'pointer',
        position: 'relative', marginBottom: '18px',
        boxShadow: hovered
          ? '0 20px 50px rgba(59,31,13,0.35)'
          : '0 4px 20px rgba(0,0,0,0.1)',
        background: '#fff',
        transform: hovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <img
          src={image.url} alt={image.title}
          style={{
            width: '100%', height: `${image.height}px`,
            objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        />
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(transparent, rgba(20,8,0,0.93))',
        color: '#fff', padding: '36px 16px 16px',
        transform: hovered ? 'translateY(0)' : 'translateY(3px)',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '5px' }}>{image.title}</div>
        <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '10px' }}>{image.description}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            background: '#f5c97a', color: '#2c1a0e',
            borderRadius: '12px', padding: '3px 12px',
            fontSize: '12px', fontWeight: '700'
          }}>{image.tag}</span>
          <span style={{ color: '#f5c97a', fontWeight: '700', fontSize: '16px' }}>{image.price}</span>
        </div>
      </div>
    </div>
  );
}
export default ImageCard;