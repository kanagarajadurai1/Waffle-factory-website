import React, { useState, useEffect } from 'react';

const reviews = [
  { name: 'Priya S.', stars: 5, tag: 'Classic', text: 'Best waffles in Chennai! The classic Belgian waffle is absolutely divine. Come here every weekend!' },
  { name: 'Rajan K.', stars: 5, tag: 'Chocolate', text: 'Crispy, fluffy and full of flavour. The chocolate waffle with ice cream is a must-try!' },
  { name: 'Meena A.', stars: 4, tag: 'Fruit', text: 'Loved the strawberry waffle. Great ambiance and very friendly staff. Highly recommended!' },
  { name: 'Arjun T.', stars: 5, tag: 'Special', text: 'The Nutella waffle is out of this world. Perfect crispy texture every single time!' },
];

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({ name: '', category: 'Classic', recommend: 'yes', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    if (rating > 0 && form.name && form.comment) setSubmitted(true);
    else alert('Please fill your name, rating and comment!');
  };

  const inputStyle = {
    display: 'block', width: '100%', marginBottom: '14px',
    padding: '12px 16px', borderRadius: '12px',
    border: '1.5px solid #e0d4c4', fontSize: '15px',
    boxSizing: 'border-box', fontFamily: 'inherit',
    background: '#faf6f0', color: '#1a0c05', outline: 'none',
    transition: 'border-color 0.3s'
  };

  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        .rev-card { opacity:0; animation: fadeUp 0.5s ease forwards; }
      `}</style>

      <div style={{ background: 'linear-gradient(135deg, #1a0c05, #7c3d12)', padding: '65px 30px', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
        <p style={{ color: '#f5c97a', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px', fontWeight: '700' }}>✦ CUSTOMER LOVE ✦</p>
        <h1 style={{ color: '#faf6f0', fontSize: '44px', fontWeight: '800', margin: '0 0 12px' }}>What Our Customers Say</h1>
        <p style={{ color: 'rgba(250,246,240,0.6)', fontSize: '16px', margin: 0 }}>Real reviews from our waffle lovers</p>
      </div>

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '48px 24px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px', marginBottom: '50px' }}>
          {reviews.map((r, i) => (
            <div key={r.name} className="rev-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ background: '#fff', borderRadius: '18px', padding: '24px', border: '1px solid #ede3d8', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(92,51,23,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ color: '#f5c97a', fontSize: '20px', marginBottom: '10px' }}>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
                <span style={{ display: 'inline-block', background: '#fdf3e3', color: '#b07d3a', fontSize: '11px', fontWeight: '700', padding: '2px 10px', borderRadius: '10px', marginBottom: '10px' }}>{r.tag}</span>
                <p style={{ fontSize: '14px', color: '#5c3317', lineHeight: '1.7', marginBottom: '14px' }}>"{r.text}"</p>
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#1a0c05' }}>— {r.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: '24px', padding: '36px', border: '1px solid #ede3d8', maxWidth: '560px', margin: '0 auto', animation: visible ? 'fadeUp 0.7s ease forwards' : 'none' }}>
          <h3 style={{ color: '#1a0c05', fontSize: '24px', fontWeight: '800', marginBottom: '28px', textAlign: 'center' }}>Share Your Experience 🧇</h3>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
              <p style={{ fontSize: '20px', fontWeight: '700', color: '#1a0c05' }}>Thank You!</p>
              <p style={{ color: '#8a6a52', marginTop: '8px', lineHeight: '1.7' }}>Your feedback means the world to us.<br />See you again soon!</p>
            </div>
          ) : (
            <>
              <input name="name" value={form.name} onChange={handle} placeholder="Your name" style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#7c3d12'} onBlur={e => e.target.style.borderColor = '#e0d4c4'} />
              <label style={{ fontSize: '13px', color: '#8a6a52', display: 'block', marginBottom: '10px', fontWeight: '700' }}>Your Rating</label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', fontSize: '40px' }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} onClick={() => setRating(s)} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)}
                    style={{ cursor: 'pointer', color: s <= (hover || rating) ? '#f5c97a' : '#ddd', transform: s <= (hover || rating) ? 'scale(1.25)' : 'scale(1)', transition: 'all 0.15s', display: 'inline-block' }}>★</span>
                ))}
              </div>
              <label style={{ fontSize: '13px', color: '#8a6a52', display: 'block', marginBottom: '8px', fontWeight: '700' }}>Waffle Category</label>
              <select name="category" value={form.category} onChange={handle} style={inputStyle}>
                {['Classic', 'Chocolate', 'Fruit', 'Special'].map(c => <option key={c}>{c}</option>)}
              </select>
              <label style={{ fontSize: '13px', color: '#8a6a52', display: 'block', marginBottom: '10px', fontWeight: '700' }}>Would You Recommend Us?</label>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
                {['yes', 'no'].map(v => (
                  <label key={v} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px', color: '#1a0c05' }}>
                    <input type="radio" name="recommend" value={v} checked={form.recommend === v} onChange={handle} />
                    {v === 'yes' ? '👍 Yes' : '👎 No'}
                  </label>
                ))}
              </div>
              <textarea name="comment" value={form.comment} onChange={handle} placeholder="Tell us about your waffle experience..." rows={4} style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = '#7c3d12'} onBlur={e => e.target.style.borderColor = '#e0d4c4'} />
              <button onClick={submit} style={{ width: '100%', background: '#1a0c05', color: '#f5c97a', border: 'none', padding: '15px', borderRadius: '30px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 6px 20px rgba(26,12,5,0.3)' }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 30px rgba(26,12,5,0.4)'; }}
                onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 6px 20px rgba(26,12,5,0.3)'; }}>
                Submit Feedback ⭐
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default FeedbackPage;