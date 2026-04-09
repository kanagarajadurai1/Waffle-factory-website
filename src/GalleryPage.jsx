import React, { useState, useEffect } from 'react';
import Lightbox from './Lightbox';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=600', title: 'Classic Belgian Waffle', description: 'Light, crispy and golden with maple syrup', tag: 'Classic', height: 280, price: '₹180' },
  { id: 2, url: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600', title: 'Chocolate Waffle', description: 'Rich dark chocolate batter with ganache drizzle', tag: 'Chocolate', height: 220, price: '₹220' },
  { id: 3, url: 'https://i.pinimg.com/1200x/e6/cc/28/e6cc281c37cf6991e3af16069a88dab2.jpg', title: 'Strawberry Waffle', description: 'Fresh strawberries with whipped cream', tag: 'Fruit', height: 300, price: '₹200' },
  { id: 4, url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600', title: 'Nutella Waffle', description: 'Nutella loaded with banana slices', tag: 'Special', height: 360, price: '₹200' },
  { id: 5, url: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600', title: 'Nuts Waffle', description: 'Nutella loaded with banana slices', tag: 'Special', height: 250, price: '₹250' },
  { id: 6, url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600', title: 'Blueberry Waffle', description: 'Packed with blueberries and honey drizzle', tag: 'Fruit', height: 200, price: '₹190' },
  { id: 7, url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600', title: 'Caramel Waffle', description: 'Salted caramel sauce with vanilla ice cream', tag: 'Special', height: 240, price: '₹270' },
  { id: 8, url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600', title: 'Cookie Waffle', description: 'Cookie-dough waffle with choco chips', tag: 'Chocolate', height: 230, price: '₹210' },
  { id: 9, url: 'https://i.pinimg.com/736x/ba/f8/3e/baf83e425cd0dcf317515063c640595c.jpg', title: 'Cinnamon Waffle', description: 'Warm cinnamon sugar with cream cheese glaze', tag: 'Classic', height: 340, price: '₹170' },
];

function GalleryPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const tags = ['All', 'Classic', 'Chocolate', 'Fruit', 'Special'];
  const filtered = images.filter(img =>
    (filter === 'All' || img.tag === filter) &&
    (img.title.toLowerCase().includes(search.toLowerCase()) ||
      img.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes heroFadeIn { from { opacity:0; transform:translateY(30px) } to { opacity:1; transform:translateY(0) } }
        @keyframes float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-14px) } }
        @keyframes cardIn { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        .waffle-float { display:inline-block; animation:float 3s ease-in-out infinite; }
        .card-in { opacity:0; animation:cardIn 0.5s ease forwards; }
      `}</style>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1a0c05 0%, #7c3d12 50%, #1a0c05 100%)',
        padding: '80px 30px 70px', textAlign: 'center',
        width: '100%', boxSizing: 'border-box', overflow: 'hidden', position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(245,201,122,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '-50px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(245,201,122,0.05)' }} />
        <div style={{ opacity: visible ? 1 : 0, animation: visible ? 'heroFadeIn 0.8s ease forwards' : 'none' }}>
          <p style={{ color: '#f5c97a', letterSpacing: '4px', fontSize: '12px', marginBottom: '16px', fontWeight: '700' }}>✦ ARTISAN WAFFLE HOUSE ✦</p>
          <h1 style={{ color: '#faf6f0', fontSize: '52px', fontWeight: '800', margin: '0 0 16px', lineHeight: '1.15' }}>
            Waffles Made with <span className="waffle-float">🧇</span> Love
          </h1>
          <p style={{ color: 'rgba(250,246,240,0.7)', fontSize: '17px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: '1.8' }}>
            Crispy outside, fluffy inside — crafted daily with the finest ingredients since 1998.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {[['🧇', '50+', 'Varieties'], ['⭐', '4.9', 'Rating'], ['👥', '10k+', 'Customers']].map(([icon, num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px' }}>{icon}</div>
                <div style={{ color: '#f5c97a', fontSize: '30px', fontWeight: '800' }}>{num}</div>
                <div style={{ color: 'rgba(250,246,240,0.5)', fontSize: '12px', letterSpacing: '1px', marginTop: '2px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{ padding: '48px 28px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ color: '#1a0c05', fontSize: '34px', fontWeight: '800', marginBottom: '8px' }}>Our Signature Menu</h2>
          <p style={{ color: '#8a6a52', fontSize: '15px' }}>Click any waffle to explore details</p>
        </div>
        <div style={{ position: 'relative', maxWidth: '380px', margin: '0 auto 24px' }}>
          <span style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search waffles..."
            style={{ width: '100%', padding: '13px 20px 13px 46px', borderRadius: '30px', border: '2px solid #e0d0bc', fontSize: '15px', outline: 'none', background: '#fff', color: '#1a0c05', boxSizing: 'border-box', boxShadow: '0 4px 15px rgba(180,130,80,0.1)', transition: 'all 0.3s' }}
            onFocus={e => { e.target.style.borderColor = '#7c3d12'; e.target.style.boxShadow = '0 4px 20px rgba(124,61,18,0.25)'; }}
            onBlur={e => { e.target.style.borderColor = '#e0d0bc'; e.target.style.boxShadow = '0 4px 15px rgba(180,130,80,0.1)'; }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {tags.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)} style={{
              padding: '9px 22px', borderRadius: '25px', cursor: 'pointer',
              background: filter === tag ? '#1a0c05' : '#fff',
              color: filter === tag ? '#f5c97a' : '#5c3317',
              border: `2px solid ${filter === tag ? '#1a0c05' : '#d4b896'}`,
              fontWeight: '700', fontSize: '14px',
              transform: filter === tag ? 'scale(1.06)' : 'scale(1)',
              transition: 'all 0.25s',
              boxShadow: filter === tag ? '0 6px 20px rgba(26,12,5,0.3)' : 'none'
            }}>{tag}</button>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '28px', fontSize: '14px' }}>
          {filtered.length} waffle{filtered.length !== 1 ? 's' : ''} found
        </p>
        <div style={{ columns: '3 220px', columnGap: '18px', maxWidth: '1100px', margin: '0 auto' }}>
          {filtered.map((img, i) => (
            <div key={img.id} className="card-in" style={{ animationDelay: `${i * 0.07}s`, breakInside: 'avoid', marginBottom: '18px' }}>
              <div onClick={() => setSelected(img)} style={{
                borderRadius: '18px', overflow: 'hidden', cursor: 'pointer',
                position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                background: '#fff', transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(59,31,13,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'; }}
              >
                <img src={img.url} alt={img.title} style={{ width: '100%', height: `${img.height}px`, objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(20,8,0,0.93))', color: '#fff', padding: '36px 16px 16px' }}>
                  <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '5px' }}>{img.title}</div>
                  <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '10px' }}>{img.description}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ background: '#f5c97a', color: '#1a0c05', borderRadius: '12px', padding: '3px 12px', fontSize: '12px', fontWeight: '700' }}>{img.tag}</span>
                    <span style={{ color: '#f5c97a', fontWeight: '700', fontSize: '16px' }}>{img.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Lightbox image={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
export default GalleryPage;