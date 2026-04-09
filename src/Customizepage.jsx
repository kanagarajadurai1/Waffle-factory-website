import { useState } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --cream: #FAF6EF;
    --charcoal: #1C1C1C;
    --rust: #C4502A;
    --warm-gray: #8A8075;
    --light-gray: #EDE9E2;
    --gold: #D4A853;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .cp-root {
    min-height: 100vh;
    background: var(--cream);
    font-family: 'DM Sans', sans-serif;
    color: var(--charcoal);
    padding: 0 0 80px 0;
  }

  .cp-hero {
    background: var(--charcoal);
    color: var(--cream);
    padding: 56px 48px 40px;
    position: relative;
    overflow: hidden;
  }

  .cp-hero::before {
    content: 'CUSTOMIZE';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Playfair Display', serif;
    font-size: 120px;
    font-weight: 900;
    color: rgba(255,255,255,0.04);
    letter-spacing: -4px;
    pointer-events: none;
    white-space: nowrap;
  }

  .cp-hero-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--rust);
    margin-bottom: 12px;
  }

  .cp-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 60px);
    font-weight: 900;
    line-height: 1.05;
    max-width: 500px;
  }

  .cp-hero p {
    margin-top: 16px;
    color: rgba(250,246,239,0.55);
    font-size: 14px;
    max-width: 360px;
    line-height: 1.6;
  }

  .cp-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 0;
    max-width: 1100px;
    margin: 0 auto;
    padding: 48px 24px 0;
    align-items: start;
  }

  @media (max-width: 768px) {
    .cp-layout { grid-template-columns: 1fr; }
    .cp-hero { padding: 40px 24px 32px; }
  }

  /* ── Left column ── */
  .cp-left { padding-right: 48px; }

  .cp-section { margin-bottom: 40px; }

  .cp-section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .cp-section-num {
    width: 28px;
    height: 28px;
    background: var(--rust);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;
    flex-shrink: 0;
  }

  .cp-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 700;
  }

  /* ── Base item selector ── */
  .cp-base-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
  }

  .cp-base-card {
    border: 1.5px solid var(--light-gray);
    border-radius: 12px;
    padding: 16px 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: white;
    position: relative;
  }

  .cp-base-card:hover {
    border-color: var(--rust);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(196,80,42,0.1);
  }

  .cp-base-card.active {
    border-color: var(--rust);
    background: #FEF5F1;
  }

  .cp-base-card.active::after {
    content: '✓';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background: var(--rust);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
  }

  .cp-base-emoji { font-size: 28px; margin-bottom: 8px; }

  .cp-base-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--charcoal);
  }

  .cp-base-price {
    font-size: 12px;
    color: var(--warm-gray);
    margin-top: 2px;
  }

  /* ── Size selector ── */
  .cp-size-row {
    display: flex;
    gap: 10px;
  }

  .cp-size-btn {
    flex: 1;
    padding: 14px;
    border: 1.5px solid var(--light-gray);
    border-radius: 10px;
    background: white;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s;
  }

  .cp-size-btn:hover { border-color: var(--rust); }

  .cp-size-btn.active {
    border-color: var(--rust);
    background: #FEF5F1;
  }

  .cp-size-label { font-size: 13px; font-weight: 500; }
  .cp-size-sub { font-size: 11px; color: var(--warm-gray); margin-top: 2px; }

  /* ── Toppings ── */
  .cp-toppings-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .cp-topping {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border: 1.5px solid var(--light-gray);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.18s;
    background: white;
    user-select: none;
  }

  .cp-topping:hover { border-color: var(--gold); }

  .cp-topping.active {
    border-color: var(--gold);
    background: #FFFBF0;
  }

  .cp-topping-check {
    width: 18px;
    height: 18px;
    border: 1.5px solid var(--light-gray);
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    transition: all 0.15s;
  }

  .cp-topping.active .cp-topping-check {
    background: var(--gold);
    border-color: var(--gold);
    color: white;
  }

  .cp-topping-name { font-size: 13px; font-weight: 400; }
  .cp-topping-price { font-size: 11px; color: var(--warm-gray); margin-left: auto; }

  /* ── Spice ── */
  .cp-spice-row { display: flex; gap: 8px; flex-wrap: wrap; }

  .cp-spice-btn {
    padding: 10px 18px;
    border-radius: 50px;
    border: 1.5px solid var(--light-gray);
    background: white;
    cursor: pointer;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.18s;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .cp-spice-btn:hover { border-color: var(--rust); }

  .cp-spice-btn.active {
    background: var(--rust);
    border-color: var(--rust);
    color: white;
  }

  /* ── Special notes ── */
  .cp-textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1.5px solid var(--light-gray);
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--charcoal);
    background: white;
    resize: vertical;
    min-height: 90px;
    outline: none;
    transition: border-color 0.2s;
  }

  .cp-textarea:focus { border-color: var(--rust); }
  .cp-textarea::placeholder { color: #C4BAB0; }

  /* ── Right column: Summary ── */
  .cp-summary {
    position: sticky;
    top: 24px;
    background: var(--charcoal);
    color: var(--cream);
    border-radius: 16px;
    padding: 28px 24px;
  }

  .cp-summary-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .cp-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 13px;
    margin-bottom: 10px;
    gap: 12px;
  }

  .cp-summary-row-label { color: rgba(250,246,239,0.55); line-height: 1.4; }
  .cp-summary-row-val { font-weight: 500; text-align: right; line-height: 1.4; }

  .cp-summary-divider {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.1);
    margin: 16px 0;
  }

  .cp-summary-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
  }

  .cp-summary-total-label {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
  }

  .cp-summary-total-price {
    font-size: 22px;
    font-weight: 700;
    color: var(--gold);
  }

  .cp-qty-row {
    display: flex;
    align-items: center;
    gap: 0;
    margin: 20px 0;
    background: rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 4px;
  }

  .cp-qty-btn {
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    color: var(--cream);
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }

  .cp-qty-btn:hover { background: rgba(255,255,255,0.1); }

  .cp-qty-num {
    flex: 1;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
  }

  .cp-add-btn {
    width: 100%;
    padding: 15px;
    background: var(--rust);
    border: none;
    border-radius: 10px;
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: all 0.2s;
  }

  .cp-add-btn:hover {
    background: #B04525;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(196,80,42,0.3);
  }

  .cp-add-btn:active { transform: translateY(0); }

  .cp-toppings-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 4px;
  }

  .cp-chip {
    font-size: 11px;
    background: rgba(212,168,83,0.15);
    color: var(--gold);
    border-radius: 4px;
    padding: 2px 6px;
  }

  .cp-toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: var(--charcoal);
    color: var(--cream);
    padding: 14px 24px;
    border-radius: 50px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    opacity: 0;
    pointer-events: none;
    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 999;
    border: 1px solid rgba(255,255,255,0.1);
    white-space: nowrap;
  }

  .cp-toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const BASE_ITEMS = [
  { id: 'burger', emoji: '🍔', name: 'Classic Burger', price: 8.99 },
  { id: 'pizza', emoji: '🍕', name: 'Wood-fired Pizza', price: 11.99 },
  { id: 'wrap', emoji: '🌯', name: 'Grilled Wrap', price: 7.49 },
  { id: 'bowl', emoji: '🥗', name: 'Power Bowl', price: 9.49 },
  { id: 'pasta', emoji: '🍝', name: 'House Pasta', price: 10.49 },
  { id: 'sub', emoji: '🥖', name: 'Toasted Sub', price: 7.99 },
];

const SIZES = [
  { id: 'small', label: 'Small', sub: 'Regular portion', mod: 0 },
  { id: 'medium', label: 'Medium', sub: 'Great value', mod: 2 },
  { id: 'large', label: 'Large', sub: 'Go big!', mod: 4 },
];

const TOPPINGS = [
  { id: 'cheese', name: 'Extra Cheese', price: 0.75 },
  { id: 'avocado', name: 'Avocado', price: 1.25 },
  { id: 'bacon', name: 'Crispy Bacon', price: 1.5 },
  { id: 'mushrooms', name: 'Mushrooms', price: 0.75 },
  { id: 'jalapeños', name: 'Jalapeños', price: 0.5 },
  { id: 'onions', name: 'Caramelized Onions', price: 0.75 },
  { id: 'egg', name: 'Fried Egg', price: 1.0 },
  { id: 'truffle', name: 'Truffle Oil', price: 1.75 },
];

const SPICE = [
  { id: 'mild', label: '😌 Mild' },
  { id: 'medium', label: '🌶 Medium' },
  { id: 'hot', label: '🔥 Hot' },
  { id: 'xhot', label: '💀 Extra Hot' },
];

export default function CustomizePage() {
  const [base, setBase] = useState('burger');
  const [size, setSize] = useState('medium');
  const [toppings, setToppings] = useState([]);
  const [spice, setSpice] = useState('medium');
  const [notes, setNotes] = useState('');
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);

  const toggleTopping = (id) => {
    setToppings(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const selectedBase = BASE_ITEMS.find(b => b.id === base);
  const selectedSize = SIZES.find(s => s.id === size);
  const toppingTotal = toppings.reduce((sum, tid) => {
    const t = TOPPINGS.find(t => t.id === tid);
    return sum + (t ? t.price : 0);
  }, 0);
  const unitPrice = (selectedBase?.price || 0) + (selectedSize?.mod || 0) + toppingTotal;
  const total = (unitPrice * qty).toFixed(2);

  const handleAddToOrder = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="cp-root">
        <div className="cp-hero">
          <div className="cp-hero-label">Build Your Order</div>
          <h1>Make It<br />Yours.</h1>
          <p>Every detail, your way. Pick your base, stack your toppings, choose your heat.</p>
        </div>

        <div className="cp-layout">
          {/* LEFT */}
          <div className="cp-left">
            {/* Base */}
            <div className="cp-section">
              <div className="cp-section-header">
                <div className="cp-section-num">1</div>
                <div className="cp-section-title">Choose Your Base</div>
              </div>
              <div className="cp-base-grid">
                {BASE_ITEMS.map(item => (
                  <div
                    key={item.id}
                    className={`cp-base-card ${base === item.id ? 'active' : ''}`}
                    onClick={() => setBase(item.id)}
                  >
                    <div className="cp-base-emoji">{item.emoji}</div>
                    <div className="cp-base-name">{item.name}</div>
                    <div className="cp-base-price">from ${item.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="cp-section">
              <div className="cp-section-header">
                <div className="cp-section-num">2</div>
                <div className="cp-section-title">Pick a Size</div>
              </div>
              <div className="cp-size-row">
                {SIZES.map(s => (
                  <div
                    key={s.id}
                    className={`cp-size-btn ${size === s.id ? 'active' : ''}`}
                    onClick={() => setSize(s.id)}
                  >
                    <div className="cp-size-label">{s.label}</div>
                    <div className="cp-size-sub">
                      {s.mod === 0 ? 'Base price' : `+$${s.mod}.00`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Toppings */}
            <div className="cp-section">
              <div className="cp-section-header">
                <div className="cp-section-num">3</div>
                <div className="cp-section-title">Add Toppings</div>
              </div>
              <div className="cp-toppings-grid">
                {TOPPINGS.map(t => (
                  <div
                    key={t.id}
                    className={`cp-topping ${toppings.includes(t.id) ? 'active' : ''}`}
                    onClick={() => toggleTopping(t.id)}
                  >
                    <div className="cp-topping-check">{toppings.includes(t.id) ? '✓' : ''}</div>
                    <span className="cp-topping-name">{t.name}</span>
                    <span className="cp-topping-price">+${t.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spice */}
            <div className="cp-section">
              <div className="cp-section-header">
                <div className="cp-section-num">4</div>
                <div className="cp-section-title">Spice Level</div>
              </div>
              <div className="cp-spice-row">
                {SPICE.map(s => (
                  <button
                    key={s.id}
                    className={`cp-spice-btn ${spice === s.id ? 'active' : ''}`}
                    onClick={() => setSpice(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="cp-section">
              <div className="cp-section-header">
                <div className="cp-section-num">5</div>
                <div className="cp-section-title">Special Instructions</div>
              </div>
              <textarea
                className="cp-textarea"
                placeholder="Allergies, substitutions, or any special requests…"
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </div>
          </div>

          {/* RIGHT: Summary */}
          <div className="cp-summary">
            <div className="cp-summary-title">Your Order</div>

            <div className="cp-summary-row">
              <span className="cp-summary-row-label">Base</span>
              <span className="cp-summary-row-val">{selectedBase?.name}</span>
            </div>

            <div className="cp-summary-row">
              <span className="cp-summary-row-label">Size</span>
              <span className="cp-summary-row-val">{selectedSize?.label}</span>
            </div>

            <div className="cp-summary-row">
              <span className="cp-summary-row-label">Spice</span>
              <span className="cp-summary-row-val">
                {SPICE.find(s => s.id === spice)?.label}
              </span>
            </div>

            {toppings.length > 0 && (
              <div className="cp-summary-row" style={{ flexDirection: 'column', gap: 6 }}>
                <span className="cp-summary-row-label">Toppings</span>
                <div className="cp-toppings-chips">
                  {toppings.map(tid => {
                    const t = TOPPINGS.find(t => t.id === tid);
                    return <span key={tid} className="cp-chip">{t?.name}</span>;
                  })}
                </div>
              </div>
            )}

            {notes && (
              <div className="cp-summary-row">
                <span className="cp-summary-row-label">Notes</span>
                <span className="cp-summary-row-val" style={{ fontSize: 12, opacity: 0.7 }}>
                  {notes.slice(0, 40)}{notes.length > 40 ? '…' : ''}
                </span>
              </div>
            )}

            <hr className="cp-summary-divider" />

            <div className="cp-summary-row">
              <span className="cp-summary-row-label">Unit Price</span>
              <span className="cp-summary-row-val">${unitPrice.toFixed(2)}</span>
            </div>

            <div className="cp-qty-row">
              <button className="cp-qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span className="cp-qty-num">Qty: {qty}</span>
              <button className="cp-qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
            </div>

            <div className="cp-summary-total">
              <span className="cp-summary-total-label">Total</span>
              <span className="cp-summary-total-price">${total}</span>
            </div>

            <button className="cp-add-btn" style={{ marginTop: 20 }} onClick={handleAddToOrder}>
              Add to Order →
            </button>
          </div>
        </div>
      </div>

      <div className={`cp-toast ${toast ? 'show' : ''}`}>
        ✓ Added to your order!
      </div>
    </>
  );
}