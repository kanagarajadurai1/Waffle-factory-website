import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Classic Belgian Waffle', desc: 'Light, crispy and golden with maple syrup & butter', price: 180, category: 'Classic', emoji: '🧇', popular: true },
  { id: 2, name: 'Chocolate Overload', desc: 'Dark chocolate batter with ganache drizzle & chips', price: 220, category: 'Chocolate', emoji: '🍫', popular: true },
  { id: 3, name: 'Strawberry Dream', desc: 'Fresh strawberries, whipped cream & berry compote', price: 200, category: 'Fruit', emoji: '🍓', popular: false },
  { id: 4, name: 'Nutella Banana', desc: 'Nutella spread loaded with fresh banana slices', price: 250, category: 'Special', emoji: '🍌', popular: true },
  { id: 5, name: 'Blueberry Bliss', desc: 'Packed with blueberries, honey & lemon zest', price: 190, category: 'Fruit', emoji: '🫐', popular: false },
  { id: 6, name: 'Salted Caramel', desc: 'Golden waffle with salted caramel & vanilla ice cream', price: 270, category: 'Special', emoji: '🍦', popular: true },
  { id: 7, name: 'Cookie Crunch', desc: 'Cookie-dough batter with choco chips & cookie crumble', price: 210, category: 'Chocolate', emoji: '🍪', popular: false },
  { id: 8, name: 'Cinnamon Swirl', desc: 'Warm cinnamon sugar with cream cheese glaze', price: 170, category: 'Classic', emoji: '🌀', popular: false },
  { id: 9, name: 'Mango Tango', desc: 'Fresh mango chunks with coconut cream & chilli lime', price: 220, category: 'Fruit', emoji: '🥭', popular: true },
  { id: 10, name: 'Red Velvet', desc: 'Red velvet waffle with cream cheese frosting', price: 260, category: 'Special', emoji: '❤️', popular: false },
];

function MenuPage() {
  const [filter, setFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');

  const categories = ['All', 'Classic', 'Chocolate', 'Fruit', 'Special'];

  const filtered = menuItems.filter(item =>
    filter === 'All' || item.category === filter
  );

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(c => c.id === item.id);
      if (exists) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    setToast(`${item.emoji} ${item.name} added!`);
    setTimeout(() => setToast(''), 2500);
  };

  const totalItems = cart.reduce((a, c) => a + c.qty, 0);

  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        @keyframes toastIn { from { opacity:0; transform:translateX(100px) } to { opacity:1; transform:translateX(0) } }
        .menu-card { animation: fadeUp 0.5s ease forwards; opacity: 0; }
      `}</style>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', top: '80px', right: '20px', zIndex: 999,
          background: '#1a0c05', color: '#f5c97a', padding: '14px 22px',
          borderRadius: '16px', fontSize: '15px', fontWeight: '700',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          animation: 'toastIn 0.4s ease'
        }}>{toast}</div>
      )}

      {/* Cart badge */}
      {totalItems > 0 && (
        <div style={{
          position: 'fixed', bottom: '28px', right: '28px', zIndex: 999,
          background: '#f5c97a', color: '#1a0c05', borderRadius: '50px',
          padding: '14px 22px', fontWeight: '800', fontSize: '16px',
          boxShadow: '0 8px 30px rgba(245,201,122,0.4)', cursor: 'pointer'
        }}>🛒 {totalItems} item{totalItems > 1 ? 's' : ''}</div>
      )}

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1a0c05, #7c3d12)',
        padding: '65px 30px', textAlign: 'center',
        width: '100%', boxSizing: 'border-box'
      }}>
        <p style={{ color: '#f5c97a', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px', fontWeight: '700' }}>✦ FULL MENU ✦</p>
        <h1 style={{ color: '#faf6f0', fontSize: '46px', fontWeight: '800', margin: '0 0 12px' }}>Our Waffle Menu</h1>
        <p style={{ color: 'rgba(250,246,240,0.6)', fontSize: '16px', margin: 0 }}>
          {menuItems.length} handcrafted waffles — pick your favourite!
        </p>
      </div>

      <div style={{ padding: '44px 28px 60px', maxWidth: '1100px', margin: '0 auto' }}>

        {/* Filter buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              padding: '10px 24px', borderRadius: '25px', cursor: 'pointer',
              background: filter === cat ? '#1a0c05' : '#fff',
              color: filter === cat ? '#f5c97a' : '#5c3317',
              border: `2px solid ${filter === cat ? '#1a0c05' : '#d4b896'}`,
              fontWeight: '700', fontSize: '14px',
              transform: filter === cat ? 'scale(1.06)' : 'scale(1)',
              transition: 'all 0.25s',
              boxShadow: filter === cat ? '0 6px 20px rgba(26,12,5,0.25)' : 'none'
            }}>{cat}</button>
          ))}
        </div>

        {/* Menu Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {filtered.map((item, i) => (
            <div key={item.id} className="menu-card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div style={{
                background: '#fff', borderRadius: '20px', padding: '24px',
                border: '1px solid #ede3d8', transition: 'all 0.3s', cursor: 'default'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(92,51,23,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span style={{ fontSize: '44px' }}>{item.emoji}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                    {item.popular && (
                      <span style={{
                        background: '#f5c97a', color: '#1a0c05',
                        fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '10px'
                      }}>⭐ Popular</span>
                    )}
                    <span style={{
                      background: '#fdf3e3', color: '#b07d3a',
                      fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '10px'
                    }}>{item.category}</span>
                  </div>
                </div>
                <h3 style={{ color: '#1a0c05', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{item.name}</h3>
                <p style={{ color: '#8a6a52', fontSize: '14px', lineHeight: '1.6', marginBottom: '18px' }}>{item.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#5c3317', fontSize: '22px', fontWeight: '800' }}>₹{item.price}</span>
                  <button onClick={() => addToCart(item)} style={{
                    background: '#1a0c05', color: '#f5c97a', border: 'none',
                    padding: '10px 20px', borderRadius: '20px', cursor: 'pointer',
                    fontSize: '14px', fontWeight: '700', transition: 'all 0.2s'
                  }}
                    onMouseEnter={e => { e.target.style.background = '#7c3d12'; e.target.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.target.style.background = '#1a0c05'; e.target.style.transform = 'scale(1)'; }}
                  >+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MenuPage;