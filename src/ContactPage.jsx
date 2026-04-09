import React, { useState, useEffect } from 'react';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    if (form.name && form.email && form.message) setSent(true);
    else alert('Please fill all required fields!');
  };

  const inputStyle = {
    display: 'block', width: '100%', marginBottom: '14px',
    padding: '13px 16px', borderRadius: '12px',
    border: '1.5px solid #e0d4c4', fontSize: '15px',
    boxSizing: 'border-box', fontFamily: 'inherit',
    background: '#faf6f0', color: '#1a0c05', outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s'
  };

  return (
    <div style={{ background: '#faf6f0', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes slideInLeft  { from { opacity:0; transform:translateX(-40px) } to { opacity:1; transform:translateX(0) } }
        @keyframes slideInRight { from { opacity:0; transform:translateX(40px)  } to { opacity:1; transform:translateX(0) } }
        @keyframes pulse { 0%,100% { box-shadow:0 0 0 0 rgba(245,201,122,0.35) } 50% { box-shadow:0 0 0 10px rgba(245,201,122,0) } }
      `}</style>

      <div style={{ background: 'linear-gradient(135deg, #1a0c05, #7c3d12)', padding: '65px 30px', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
        <p style={{ color: '#f5c97a', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px', fontWeight: '700' }}>✦ GET IN TOUCH ✦</p>
        <h1 style={{ color: '#faf6f0', fontSize: '44px', fontWeight: '800', margin: '0 0 12px' }}>Visit The Waffle Factory</h1>
        <p style={{ color: 'rgba(250,246,240,0.6)', fontSize: '16px', margin: 0 }}>We'd love to serve you fresh waffles!</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '50px auto', padding: '0 24px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>

          <div style={{ background: '#1a0c05', borderRadius: '24px', padding: '36px', color: '#faf6f0', animation: visible ? 'slideInLeft 0.6s ease forwards' : 'none' }}>
            <h3 style={{ color: '#f5c97a', marginBottom: '28px', fontSize: '22px', fontWeight: '700' }}>📍 Our Details</h3>
            {[
              ['📍', 'Address', '12 Waffle Lane, Anna Nagar\nChennai - 600040'],
              ['📞', 'Phone', '+91 98765 43210'],
              ['✉️', 'Email', 'hello@wafflefactory.in'],
              ['🕐', 'Hours', 'Mon–Sun: 8:00 AM – 10:00 PM'],
              ['🛵', 'Delivery', 'Available via Swiggy & Zomato'],
            ].map(([icon, label, value]) => (
              <div key={label} style={{ display: 'flex', gap: '14px', marginBottom: '22px', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(245,201,122,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0, animation: 'pulse 2.5s infinite' }}>{icon}</div>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(250,246,240,0.4)', letterSpacing: '1px', marginBottom: '4px' }}>{label.toUpperCase()}</div>
                  <div style={{ fontSize: '14px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', borderRadius: '24px', padding: '36px', border: '1px solid #ede3d8', animation: visible ? 'slideInRight 0.6s ease forwards' : 'none' }}>
            <h3 style={{ color: '#1a0c05', marginBottom: '24px', fontSize: '22px', fontWeight: '700' }}>Send a Message</h3>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
                <p style={{ fontSize: '20px', fontWeight: '700', color: '#1a0c05' }}>Message Sent!</p>
                <p style={{ color: '#8a6a52', marginTop: '8px', lineHeight: '1.7' }}>Thank you! We'll reply within 24 hours.<br />Come visit us anytime 🧇</p>
              </div>
            ) : (
              <>
                {[{ name: 'name', placeholder: 'Your name *' }, { name: 'email', placeholder: 'Your email *' }, { name: 'subject', placeholder: 'Subject' }].map(f => (
                  <input key={f.name} name={f.name} value={form[f.name]} onChange={handle} placeholder={f.placeholder} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#7c3d12'; e.target.style.boxShadow = '0 0 0 3px rgba(124,61,18,0.1)'; }}
                    onBlur={e => { e.target.style.borderColor = '#e0d4c4'; e.target.style.boxShadow = 'none'; }} />
                ))}
                <textarea name="message" value={form.message} onChange={handle} placeholder="Your message *" rows={4} style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => { e.target.style.borderColor = '#7c3d12'; e.target.style.boxShadow = '0 0 0 3px rgba(124,61,18,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = '#e0d4c4'; e.target.style.boxShadow = 'none'; }} />
                <button onClick={submit} style={{ width: '100%', background: '#1a0c05', color: '#f5c97a', border: 'none', padding: '15px', borderRadius: '30px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 6px 20px rgba(26,12,5,0.3)' }}
                  onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 30px rgba(26,12,5,0.4)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 6px 20px rgba(26,12,5,0.3)'; }}>
                  Send Message 🧇
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;