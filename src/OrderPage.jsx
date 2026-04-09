import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Classic Belgian Waffle', price: 180, category: 'Classic', emoji: '🧇' },
  { id: 2, name: 'Chocolate Overload', price: 220, category: 'Chocolate', emoji: '🍫' },
  { id: 3, name: 'Strawberry Dream', price: 200, category: 'Fruit', emoji: '🍓' },
  { id: 4, name: 'Nutella Banana', price: 250, category: 'Special', emoji: '🍌' },
  { id: 5, name: 'Blueberry Bliss', price: 190, category: 'Fruit', emoji: '🫐' },
  { id: 6, name: 'Salted Caramel', price: 270, category: 'Special', emoji: '🍦' },
  { id: 7, name: 'Cookie Crunch', price: 210, category: 'Chocolate', emoji: '🍪' },
  { id: 8, name: 'Cinnamon Swirl', price: 170, category: 'Classic', emoji: '🌀' },
];

function OrderPage() {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({ name: '', phone: '', address: '', type: 'delivery', time: 'asap' });
  const [placed, setPlaced] = useState(false);

  const addItem = (item) => {
    setCart(prev => {
      const exists = prev.find(c => c.id === item.id);
      if (exists) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id) => setCart(prev => prev.filter(c => c.id !== id));
  const updateQty = (id, delta) => {
    setCart(prev => prev.map(c => c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c));
  };

  const subtotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const delivery = details.type === 'delivery' ? 40 : 0;
  const total = subtotal + delivery;

  const placeOrder = () => {
    if (!details.name || !details.phone) { alert('Please fill name and phone!'); return; }
    if (details.type === 'delivery' && !details.address) { alert('Please enter delivery address!'); return; }
    setPlaced(true);
  };

  const inputStyle = {
    display: 'block', width: '100%', marginBottom: '14px',
    padding: '12px 16px', borderRadius: '12px',
    border: '1.5px solid #e0d4c4', fontSize: '15px',
    boxSizing: 'border-box', fontFamily: 'inherit',
    background: '#faf6f0', color: '#1a0c05', outline: 'none'
  };

  if (placed) return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🎉</div>
        <h2 style={{ color: '#1a0c05', fontSize: '32px', fontWeight: '800', marginBottom: '12px' }}>Order Placed!</h2>
        <p style={{ color: '#8a6a52', fontSize: '16px', lineHeight: '1.7', marginBottom: '8px' }}>
          Thank you, <strong>{details.name}</strong>! 🧇
        </p>
        <p style={{ color: '#8a6a52', fontSize: '15px', marginBottom: '28px' }}>
          {details.type === 'delivery' ? '🛵 Your waffles will arrive in 30–45 mins!' : '🏃 Ready for pickup in 20 mins!'}
        </p>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '20px', border: '1px solid #ede3d8', maxWidth: '320px', margin: '0 auto 28px' }}>
          <div style={{ fontWeight: '700', color: '#1a0c05', marginBottom: '10px' }}>Order Summary</div>
          {cart.map(c => (
            <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#5c3317', marginBottom: '6px' }}>
              <span>{c.emoji} {c.name} x{c.qty}</span>
              <span>₹{c.price * c.qty}</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #ede3d8', marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '16px', color: '#1a0c05' }}>
            <span>Total</span><span>₹{total}</span>
          </div>
        </div>
        <button onClick={() => { setCart([]); setStep(1); setPlaced(false); setDetails({ name: '', phone: '', address: '', type: 'delivery', time: 'asap' }); }}
          style={{ background: '#1a0c05', color: '#f5c97a', border: 'none', padding: '14px 32px', borderRadius: '25px', fontSize: '16px', fontWeight: '700', cursor: 'pointer' }}>
          Order Again 🧇
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }`}</style>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a0c05, #7c3d12)', padding: '65px 30px', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
        <p style={{ color: '#f5c97a', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px', fontWeight: '700' }}>✦ PLACE YOUR ORDER ✦</p>
        <h1 style={{ color: '#faf6f0', fontSize: '44px', fontWeight: '800', margin: '0 0 12px' }}>Order Fresh Waffles</h1>
        <p style={{ color: 'rgba(250,246,240,0.6)', fontSize: '16px' }}>Build your perfect waffle box!</p>
      </div>

      {/* Step indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0', maxWidth: '500px', margin: '36px auto 40px', padding: '0 24px' }}>
        {[['1', 'Choose'], ['2', 'Review'], ['3', 'Details']].map(([num, label], i) => (
          <React.Fragment key={num}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: step >= parseInt(num) ? '#1a0c05' : '#e0d0bc',
                color: step >= parseInt(num) ? '#f5c97a' : '#8a6a52',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '800', fontSize: '16px', margin: '0 auto 6px',
                transition: 'all 0.3s'
              }}>{num}</div>
              <div style={{ fontSize: '12px', color: step >= parseInt(num) ? '#1a0c05' : '#aaa', fontWeight: '600' }}>{label}</div>
            </div>
            {i < 2 && <div style={{ flex: 1, height: '2px', background: step > i + 1 ? '#1a0c05' : '#e0d0bc', margin: '20px 8px 0', transition: 'background 0.3s' }} />}
          </React.Fragment>
        ))}
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px' }}>

        {/* STEP 1 - Choose items */}
        {step === 1 && (
          <div style={{ animation: 'fadeUp 0.4s ease' }}>
            <h2 style={{ color: '#1a0c05', fontSize: '24px', fontWeight: '800', marginBottom: '24px', textAlign: 'center' }}>Choose Your Waffles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {menuItems.map(item => {
                const inCart = cart.find(c => c.id === item.id);
                return (
                  <div key={item.id} style={{ background: '#fff', borderRadius: '18px', padding: '20px', border: `2px solid ${inCart ? '#1a0c05' : '#ede3d8'}`, transition: 'all 0.3s' }}>
                    <div style={{ fontSize: '38px', marginBottom: '10px' }}>{item.emoji}</div>
                    <div style={{ fontWeight: '700', color: '#1a0c05', fontSize: '16px', marginBottom: '4px' }}>{item.name}</div>
                    <div style={{ color: '#8a6a52', fontSize: '13px', marginBottom: '14px' }}>{item.category}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#5c3317', fontWeight: '800', fontSize: '18px' }}>₹{item.price}</span>
                      {inCart ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid #1a0c05', background: '#fff', color: '#1a0c05', fontWeight: '800', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                          <span style={{ fontWeight: '800', color: '#1a0c05', minWidth: '20px', textAlign: 'center' }}>{inCart.qty}</span>
                          <button onClick={() => addItem(item)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', background: '#1a0c05', color: '#f5c97a', fontWeight: '800', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                        </div>
                      ) : (
                        <button onClick={() => addItem(item)} style={{ background: '#1a0c05', color: '#f5c97a', border: 'none', padding: '8px 16px', borderRadius: '16px', cursor: 'pointer', fontSize: '13px', fontWeight: '700' }}>+ Add</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {cart.length > 0 && (
              <div style={{ textAlign: 'center' }}>
                <button onClick={() => setStep(2)} style={{ background: '#1a0c05', color: '#f5c97a', border: 'none', padding: '16px 40px', borderRadius: '30px', fontSize: '17px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 8px 24px rgba(26,12,5,0.3)' }}>
                  Review Order ({cart.reduce((a, c) => a + c.qty, 0)} items) →
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 2 - Review */}
        {step === 2 && (
          <div style={{ animation: 'fadeUp 0.4s ease', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ color: '#1a0c05', fontSize: '24px', fontWeight: '800', marginBottom: '24px', textAlign: 'center' }}>Review Your Order</h2>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '28px', border: '1px solid #ede3d8', marginBottom: '24px' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f5f0ea' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight: '700', color: '#1a0c05', fontSize: '15px' }}>{item.name}</div>
                      <div style={{ color: '#8a6a52', fontSize: '13px' }}>₹{item.price} each</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={() => updateQty(item.id, -1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid #e0d0bc', background: '#fff', cursor: 'pointer', fontWeight: '800', fontSize: '16px' }}>−</button>
                    <span style={{ fontWeight: '800', color: '#1a0c05', minWidth: '24px', textAlign: 'center' }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', background: '#1a0c05', color: '#f5c97a', cursor: 'pointer', fontWeight: '800', fontSize: '16px' }}>+</button>
                    <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: '#e24b4a', cursor: 'pointer', fontSize: '18px', marginLeft: '4px' }}>✕</button>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: '#5c3317', marginBottom: '8px' }}>
                  <span>Subtotal</span><span>₹{subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: '#5c3317', marginBottom: '12px' }}>
                  <span>Delivery</span><span>{details.type === 'delivery' ? '₹40' : 'Free (pickup)'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '800', color: '#1a0c05', borderTop: '2px solid #ede3d8', paddingTop: '12px' }}>
                  <span>Total</span><span>₹{total}</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, background: '#fff', color: '#1a0c05', border: '2px solid #d4b896', padding: '14px', borderRadius: '25px', fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}>← Back</button>
              <button onClick={() => setStep(3)} style={{ flex: 2, background: '#1a0c05', color: '#f5c97a', border: 'none', padding: '14px', borderRadius: '25px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 20px rgba(26,12,5,0.3)' }}>Continue →</button>
            </div>
          </div>
        )}

        {/* STEP 3 - Details */}
        {step === 3 && (
          <div style={{ animation: 'fadeUp 0.4s ease', maxWidth: '520px', margin: '0 auto' }}>
            <h2 style={{ color: '#1a0c05', fontSize: '24px', fontWeight: '800', marginBottom: '24px', textAlign: 'center' }}>Your Details</h2>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '28px', border: '1px solid #ede3d8' }}>

              <label style={{ fontSize: '13px', color: '#8a6a52', fontWeight: '700', display: 'block', marginBottom: '8px' }}>Order Type</label>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '18px' }}>
                {['delivery', 'pickup'].map(type => (
                  <button key={type} onClick={() => setDetails({ ...details, type })} style={{
                    flex: 1, padding: '12px', borderRadius: '14px', cursor: 'pointer',
                    background: details.type === type ? '#1a0c05' : '#fff',
                    color: details.type === type ? '#f5c97a' : '#5c3317',
                    border: `2px solid ${details.type === type ? '#1a0c05' : '#d4b896'}`,
                    fontWeight: '700', fontSize: '15px', transition: 'all 0.2s'
                  }}>{type === 'delivery' ? '🛵 Delivery' : '🏃 Pickup'}</button>
                ))}
              </div>

              <input value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} placeholder="Your name *" style={inputStyle} />
              <input value={details.phone} onChange={e => setDetails({ ...details, phone: e.target.value })} placeholder="Phone number *" style={inputStyle} />
              {details.type === 'delivery' && (
                <textarea value={details.address} onChange={e => setDetails({ ...details, address: e.target.value })} placeholder="Delivery address *" rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
              )}

              <label style={{ fontSize: '13px', color: '#8a6a52', fontWeight: '700', display: 'block', marginBottom: '8px' }}>When?</label>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {['asap', 'scheduled'].map(t => (
                  <button key={t} onClick={() => setDetails({ ...details, time: t })} style={{
                    flex: 1, padding: '10px', borderRadius: '12px', cursor: 'pointer',
                    background: details.time === t ? '#1a0c05' : '#fff',
                    color: details.time === t ? '#f5c97a' : '#5c3317',
                    border: `2px solid ${details.time === t ? '#1a0c05' : '#d4b896'}`,
                    fontWeight: '700', fontSize: '14px', transition: 'all 0.2s'
                  }}>{t === 'asap' ? '⚡ ASAP' : '📅 Schedule'}</button>
                ))}
              </div>

              <div style={{ background: '#faf6f0', borderRadius: '14px', padding: '16px', marginBottom: '20px', border: '1px solid #ede3d8' }}>
                <div style={{ fontWeight: '700', color: '#1a0c05', marginBottom: '8px' }}>Order Total</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#5c3317', fontSize: '18px', fontWeight: '800' }}>
                  <span>{cart.reduce((a, c) => a + c.qty, 0)} items</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, background: '#fff', color: '#1a0c05', border: '2px solid #d4b896', padding: '14px', borderRadius: '25px', fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}>← Back</button>
                <button onClick={placeOrder} style={{ flex: 2, background: '#f5c97a', color: '#1a0c05', border: 'none', padding: '14px', borderRadius: '25px', fontSize: '16px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 6px 20px rgba(245,201,122,0.4)' }}>Place Order 🧇</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default OrderPage;