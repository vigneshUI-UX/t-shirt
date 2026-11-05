import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const PRODUCTS = [
  {
    id: 1,
    name: "Essential Oversized",
    category: "Essentials",
    basePrice: 899,
    image: "https://i.pinimg.com/736x/e3/5d/28/e35d286cd4d666963e02b4ecfa772f75.jpg",
    colorImages: {
      Black: "https://i.pinimg.com/736x/e3/5d/28/e35d286cd4d666963e02b4ecfa772f75.jpg",
      White: "https://i.pinimg.com/1200x/9d/3a/3f/9d3a3f40b60e2192c3580e577529f23a.jpg",
      Sand: "https://i.pinimg.com/736x/bc/2b/61/bc2b61720ee5abdb912183b62b058165.jpg",
    },
    colors: ["Black", "White", "Sand"],
    sizePrices: { S: 0, M: 50, L: 100, XL: 150 },
    sizes: ["S", "M", "L", "XL"],
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "Classic Street",
    category: "Streetwear",
    basePrice: 999,
    image: "https://i.pinimg.com/1200x/91/20/7b/91207b86e9753e2857fdbc1beba8ae2c.jpg",
    colorImages: {
      White: "https://i.pinimg.com/1200x/91/20/7b/91207b86e9753e2857fdbc1beba8ae2c.jpg",
      Black: "https://i.pinimg.com/1200x/ea/3a/7b/ea3a7ba3eec7062698a37525c282d013.jpg",
      Olive: "https://i.pinimg.com/1200x/af/f8/50/aff850763a139e72b2ea1f15842a3edc.jpg",
    },
    colors: ["White", "Black", "Olive"],
    sizePrices: { S: 0, M: 0, L: 120, XL: 200 },
    sizes: ["S", "M", "L", "XL"],
    tag: "NEW DROP",
  },
  {
    id: 3,
    name: "Minimal Graphic",
    category: "Graphics",
    basePrice: 1099,
    image: "https://i.pinimg.com/1200x/b3/93/29/b39329f163ec7136b2e6a8d5333db952.jpg",
    colorImages: {
      Black: "https://i.pinimg.com/1200x/b3/93/29/b39329f163ec7136b2e6a8d5333db952.jpg",
      Cream: "https://i.pinimg.com/1200x/39/72/8d/39728d422584ecc52469f838360dfc51.jpg",
    },
    colors: ["Black", "Cream"],
    sizePrices: { S: 0, M: 80, L: 150, XL: 250 },
    sizes: ["S", "M", "L", "XL"],
    tag: "LIMITED",
  },
  {
    id: 4,
    name: "Everyday Cotton",
    category: "Essentials",
    basePrice: 799,
    image: "https://i.pinimg.com/736x/07/de/ab/07deabca2a5c87df3ed8cce2d0c3d472.jpg",
    colorImages: {
      White: "https://i.pinimg.com/736x/07/de/ab/07deabca2a5c87df3ed8cce2d0c3d472.jpg",
      Grey: "https://rukminim2.flixcart.com/image/767/767/xif0q/t-shirt/1/t/y/s-basic-grey-wike-denims-original-imahrhgvtns5yumc.jpeg?q=90",
      Black: "https://i.pinimg.com/1200x/b7/d4/67/b7d467d4261811e720fc2ada502756ec.jpg",
    },
    colors: ["White", "Grey", "Black"],
    sizePrices: { S: 0, M: 50, L: 100, XL: 150 },
    sizes: ["S", "M", "L", "XL"],
    tag: "",
  },
  {
    id: 5,
    name: "Urban Fit",
    category: "Streetwear",
    basePrice: 1199,
    image: "https://i.pinimg.com/736x/53/c9/b0/53c9b0d5975647230005531ab7aa131f.jpg",
    colorImages: {
      Olive: "https://i.pinimg.com/736x/53/c9/b0/53c9b0d5975647230005531ab7aa131f.jpg",
      Black: "https://i.pinimg.com/736x/0f/8a/74/0f8a7449f8e1b86e62f700660c6b9995.jpg",
    },
    colors: ["Olive", "Black"],
    sizePrices: { S: 0, M: 60, L: 130, XL: 220 },
    sizes: ["S", "M", "L", "XL"],
    tag: "TRENDING",
  },
  {
    id: 6,
    name: "Signature Logo",
    category: "Graphics",
    basePrice: 999,
    image: "https://i.pinimg.com/1200x/d9/17/e8/d917e89c987f2013f522d26622ef5626.jpg",
    colorImages: {
      Black: "https://i.pinimg.com/1200x/d9/17/e8/d917e89c987f2013f522d26622ef5626.jpg",
      White: "https://i.pinimg.com/736x/34/16/a9/3416a966e0fd1ba4467d5d58a5a09413.jpg",
    },
    colors: ["Black", "White"],
    sizePrices: { S: 0, M: 50, L: 100, XL: 180 },
    sizes: ["S", "M", "L", "XL"],
    tag: "",
  },
];

const HERO_SLIDES = [
  {
    title: "WEAR YOUR\nOWN STORY.",
    description: "Everyday essentials. Uncomplicated style. Made to move with you.",
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/t-shirt/b/m/8/s-basic-grey-wike-denims-original-imahrhgvjsazz8bf.jpeg?q=90",
  },
  {
    title: "MAKE ROOM\nFOR BOLD.",
    description: "Relaxed fits and timeless pieces made for your everyday rotation.",
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/t-shirt/0/z/m/s-2-smileeee-4line-wike-denims-original-imahzk4fvhzykhmb.jpeg?q=90",
  },
];

const COLLECTIONS = [
  {
    title: "ESSENTIALS",
    subtitle: "The everyday uniform",
    image: "https://i.pinimg.com/736x/97/24/4b/97244b1bb69176f1eacc4498b48daf23.jpg",
    category: "Essentials",
  },
  {
    title: "STREETWEAR",
    subtitle: "Made for the streets",
    image: "https://i.pinimg.com/736x/7d/ec/c6/7decc67c4dee6e637e0d02e5240aa29c.jpg",
    category: "Streetwear",
  },
  {
    title: "GRAPHIC TEES",
    subtitle: "Say it without words",
    image: "https://i.pinimg.com/1200x/be/1a/28/be1a281fa7dfcda4e60c410860d79021.jpg",
    category: "Graphics",
  },
];

const VIDEO_CLIPS = [
  {
    id: 1,
    title: "URBAN ROTATION",
    video: "https://www.pexels.com/download/video/7317021/",
  },
  {
    id: 2,
    title: "DAILY MOTION",
    video: "https://www.pexels.com/download/video/7317015/",
  },
  {
    id: 3,
    title: "MINIMAL AESTHETIC",
    video: "https://www.pexels.com/download/video/9558222/",
  },
  {
    id: 4,
    title: "SIGNATURE FIT",
    video: "https://www.pexels.com/download/video/7316387/",
  },
];

const REVIEWS = [
  {
    id: 1,
    name: " Sharma",
    rating: "★★★★★",
    comment: "The fabric quality is unreal! Fits perfectly oversized without looking boxy.",
  },
  {
    id: 2,
    name: "Vicky",
    rating: "★★★★★",
    comment: "Super comfortable for long summer days. Color doesn't fade after washing.",
  },
  {
    id: 3,
    name: "Udhaya",
    rating: "★★★★☆",
    comment: "Loved the street fit! Fast shipping and premium packaging.",
  },
];

const FAQS = [
  {
    q: "What is your return policy?",
    a: "We offer a 7-day hassle-free return and exchange policy from the date of delivery.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders are dispatched within 24 hours and delivered within 3-5 business days across India.",
  },
  {
    q: "How do I choose my size?",
    a: "Our tees are relaxed/oversized. Choose your standard size for a relaxed drape, or size down for a standard fit.",
  },
  {
    q: "What fabric do you use?",
    a: "We use 100% combed heavy-cotton (240 GSM) for durable softness and structure.",
  },
];

function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#home" className="brand" onClick={closeMenu}>
        THREAD<span></span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>HOME</a>
        <a href="#collections" onClick={closeMenu}>COLLECTIONS</a>
        <a href="#shop" onClick={closeMenu}>SHOP</a>
        <a href="#videos" onClick={closeMenu}>VIDEOS</a>
        <a href="#why-us" onClick={closeMenu}>WHY US</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
      </nav>

      <a href="#bag" className="bag-link" onClick={closeMenu}>
        BAG <span>{cartCount}</span>
      </a>
    </header>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = HERO_SLIDES[activeSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${slide.image})` }}>
      <div className="hero-overlay" />
      <div className="hero-content" key={activeSlide}>
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1>{slide.title}</h1>
        <p className="hero-description">{slide.description}</p>
        <a href="#shop" className="button button-light">
          SHOP THE COLLECTION <span></span>
        </a>
      </div>

      <div className="hero-bottom">
        <div className="hero-dots">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              className={activeSlide === index ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index}>
            GOOD FIT. GOOD FEEL. GOOD ENERGY. <b>✳</b> MADE FOR EVERYDAY. <b>✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function Collections({ onSelectCategory }) {
  return (
    <section className="section collections-section" id="collections">
      <div className="section-heading">
        <div>
          <h2>THE COLLECTIONS<span></span></h2>
        </div>
     
      </div>

      <div className="collection-grid">
        {COLLECTIONS.map((item, index) => (
          <button
            className={`collection-card collection-card-${index + 1}`}
            key={item.title}
            onClick={() => onSelectCategory(item.category)}
          >
            <img src={item.image} alt={item.title} />
            <span className="collection-info">
              <small>{item.subtitle}</small>
              <strong>{item.title}</strong>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ProductDetail({ product, onAddToCart }) {
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(product.colors[0]);

  useEffect(() => {
    setSize("M");
    setColor(product.colors[0]);
  }, [product]);

  const currentPrice = product.basePrice + (product.sizePrices[size] || 0);
  const currentImage = product.colorImages?.[color] || product.image;

  return (
    <section className="product-detail section">
      <div className="detail-image">
        <img src={currentImage} alt={`${product.name} - ${color}`} />
      </div>

      <div className="detail-content">
        <h2>{product.name}<span></span></h2>
        <p className="detail-description">
          Made for everyday comfort with a relaxed silhouette and a clean, easy-to-style look.
        </p>
        <p className="detail-price">₹{currentPrice.toLocaleString("en-IN")}</p>

        <div className="selection-group">
          <div className="selection-label">
            <strong>SELECT COLOUR</strong>
            <span>{color}</span>
          </div>
          <div className="color-options">
            {product.colors.map((item) => (
              <button
                key={item}
                className={`color-option color-${item.toLowerCase()} ${
                  color === item ? "selected" : ""
                }`}
                onClick={() => setColor(item)}
                aria-label={item}
                title={item}
              />
            ))}
          </div>
        </div>

        <div className="selection-group">
          <div className="selection-label">
            <strong>SELECT SIZE</strong>
            <span>{size}</span>
          </div>
          <div className="size-options">
            {product.sizes.map((item) => (
              <button
                key={item}
                className={size === item ? "selected" : ""}
                onClick={() => setSize(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          className="button button-dark add-detail-button"
          onClick={() => onAddToCart(product, size, color, currentPrice)}
        >
          ADD TO BAG <span>＋</span>
        </button>
      </div>
    </section>
  );
}

function ProductHighlights() {
  const highlights = [
    { title: "240 GSM Cotton", desc: "Heavyweight premium cotton built to last." },
    { title: "Pre-Shrunk", desc: "Maintains true shape and size wash after wash." },
    { title: "Breathable Knit", desc: "Keeps you cool during warmer everyday hours." },
    { title: "Reinforced Collar", desc: "Double-stitched ribbed collar stays firm." },
  ];

  return (
    <section className="section highlights-section">
      <div className="section-heading">
        <div>
          <h2>PRODUCT HIGHLIGHTS<span></span></h2>
        </div>
      </div>
      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div className="highlight-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoClips() {
  return (
    <section className="section video-clips-section" id="videos">
      <div className="section-heading">
        <div>
          <h2>THE VIDEO EDIT<span></span></h2>
        </div>
      </div>
      <div className="video-clips-grid">
        {VIDEO_CLIPS.map((clip) => (
          <div className="video-clip-card" key={clip.id}>
            <video autoPlay loop muted playsInline>
              <source src={clip.video} type="video/mp4" />
            </video>
            <div className="video-clip-overlay" />
            <div className="video-clip-info">
              <small>{clip.subtitle}</small>
              <h3>{clip.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Shop({ products, onAddToCart, onViewProduct }) {
  return (
    <section className="section shop-section" id="shop">
      <div className="section-heading">
        <div>
          <h2>SHOP THE DROP<span></span></h2>
        </div>
       
      </div>

      <div className="product-grid">
        {products.map((product) => {
          const defaultPrice = product.basePrice + (product.sizePrices["M"] || 0);
          return (
            <article className="product-card" key={product.id}>
              <button
                className="product-image"
                onClick={() => onViewProduct(product)}
                aria-label={`View ${product.name}`}
              >
                <img src={product.image} alt={product.name} />
                {product.tag && <span className="product-tag">{product.tag}</span>}
              </button>

              <div className="product-info">
                <div>
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-price">
                    ₹{defaultPrice.toLocaleString("en-IN")}
                  </p>
                </div>
                <button
                  className="quick-add"
                  onClick={() => onAddToCart(product, "M", product.colors[0], defaultPrice)}
                  aria-label={`Add ${product.name} to bag`}
                >
                  +
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { title: "Premium Fabric", desc: "100% combed cotton designed for all-day wear." },
    { title: "Tailored Fits", desc: "Custom relaxed cuts crafted to flatter every build." },
    { title: "Eco-Conscious", desc: "Sustainably produced with non-toxic fabric dyes." },
    { title: "Fast Shipping", desc: "Quick dispatch and real-time tracking straight to your door." },
  ];

  return (
    <section className="section why-us-section" id="why-us">
      <div className="section-heading">
        <div>
          <h2>WHY CHOOSE US<span></span></h2>
        </div>
      </div>
      <div className="why-us-grid">
        {reasons.map((item, index) => (
          <div className="why-us-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CustomerReviews() {
  return (
    <section className="section reviews-section">
      <div className="section-heading">
        <div>
          <h2>CUSTOMER REVIEWS<span></span></h2>
        </div>
      </div>
      <div className="reviews-grid">
        {REVIEWS.map((review) => (
          <div className="review-card" key={review.id}>
            <span className="review-rating">{review.rating}</span>
            <p className="review-comment">"{review.comment}"</p>
            <h4 className="review-author"> {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading">
        <div>
          <h2>FREQUENTLY ASKED QUESTIONS<span></span></h2>
        </div>
      </div>
      <div className="faq-list">
        {FAQS.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.q}</h3>
              <span>{openIndex === index ? "−" : "＋"}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactUs({ onShowToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    onShowToast("Message sent! We'll reach back soon.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <div>
          <h2>CONTACT US<span></span></h2>
        </div>
      </div>
      <div className="contact-layout">
        <div className="contact-info">
          <h3>LET'S TALK</h3>
          <p>Have questions about fits, orders, or custom drops? We're here to help.</p>
          <div className="contact-details">
            <p><strong>Email:</strong> trendy@threadtheory.com</p>
            <p><strong>Hours:</strong> Mon – Sat: 10:00 AM – 7:00 PM</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="button button-dark">
            SEND MESSAGE <span></span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Newsletter({ onShowToast }) {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    onShowToast("THANK YOU — YOU'RE ON THE LIST!");
    setEmail("");
  }

  return (
    <section className="newsletter-section">
      <div>
        <h2>GOOD THINGS<br />ARE COMING<span></span></h2>
        <p>Get first access to new drops, updates and more.</p>
      </div>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email">YOUR EMAIL ADDRESS</label>
        <div className="newsletter-input-wrap">
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit" aria-label="Subscribe"></button>
        </div>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a href="#home" className="brand footer-brand">
          THREAD<span></span>
        </a>
        <p>Everyday pieces. Personal style.<br />That's the THREAD THEORY.</p>
        <div className="footer-links">
          <a href="#home">HOME</a>
          <a href="#collections">COLLECTIONS</a>
          <a href="#shop">SHOP</a>
          <a href="#why-us">WHY US</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 THREAD. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}

function ConfettiCanvas({ burstId }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!burstId) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);

    const colors = ["#f4c95d", "#ef8354", "#8ecae6", "#b8d8ba", "#ffffff"];
    const particles = Array.from({ length: 180 }, () => ({
      x: width / 2,
      y: height / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.8) * 18,
      gravity: 0.22 + Math.random() * 0.16,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 14,
      size: 4 + Math.random() * 7,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100 + Math.random() * 45,
    }));

    let animationFrame;
    let frame = 0;

    function animate() {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.vx *= 0.992;
        particle.rotation += particle.rotationSpeed;
        particle.life -= 1;

        context.save();
        context.translate(particle.x, particle.y);
        context.rotate((particle.rotation * Math.PI) / 180);
        context.globalAlpha = Math.max(0, Math.min(1, particle.life / 35));
        context.fillStyle = particle.color;
        context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 0.65);
        context.restore();
      });

      frame += 1;
      if (frame < 150) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        context.clearRect(0, 0, width, height);
      }
    }

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [burstId]);

  return <canvas className="confetti-canvas" ref={canvasRef} />;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [confettiId, setConfettiId] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [toast, setToast] = useState("");

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 1499 ? 0 : 99;
  const grandTotal = subtotal + shipping;

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }

  function addToCart(product, size = "M", color = product.colors[0], price = product.basePrice) {
    setOrderConfirmed(false);
    const itemId = `${product.id}-${size}-${color}`;

    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.itemId === itemId);
      if (existing) {
        return currentCart.map((item) =>
          item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      const image = product.colorImages?.[color] || product.image;

      return [
        ...currentCart,
        {
          itemId,
          productId: product.id,
          name: product.name,
          price: price,
          image: image,
          size,
          color,
          quantity: 1,
        },
      ];
    });

    showToast(`${product.name} added to your bag`);
  }

  function changeQuantity(itemId, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) => (item.itemId === itemId ? { ...item, quantity: item.quantity + amount } : item))
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(itemId) {
    setCart((currentCart) => currentCart.filter((item) => item.itemId !== itemId));
  }

  function confirmOrder() {
    if (cart.length === 0) {
      showToast("Your bag is empty");
      return;
    }
    setOrderConfirmed(true);
    setConfettiId((current) => current + 1);
    setCart([]);
  }

  function selectCategory(category) {
    setActiveCategory(category);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  }

  function viewProduct(product) {
    setSelectedProduct(product);
    document.querySelector(".product-detail")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <ConfettiCanvas burstId={confettiId} />
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <Marquee />

        <Collections onSelectCategory={selectCategory} />

        <ProductDetail product={selectedProduct} onAddToCart={addToCart} />

        <ProductHighlights />

        <VideoClips />

        <section className="shop-filter section" aria-label="Shop categories">
          <div className="filter-heading">
            <div className="filter-buttons">
              {["All", "Essentials", "Streetwear", "Graphics"].map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <Shop products={filteredProducts} onAddToCart={addToCart} onViewProduct={viewProduct} />

        <WhyChooseUs />
        <CustomerReviews />
        <FAQSection />
        <ContactUs onShowToast={showToast} />
        <Newsletter onShowToast={showToast} />

        <section className="cart-section section" id="bag">
          <div className="section-heading cart-heading">
            <div>
              <h2>YOUR BAG<span></span></h2>
            </div>
            <span className="bag-count">{cartCount} ITEMS</span>
          </div>

          {orderConfirmed && (
            <div className="order-success">
              <span className="success-icon">✓</span>
              <h3>ORDER CONFIRMED!</h3>
              <p>Thanks for choosing THREAD THEORY. You're all set.</p>
            </div>
          )}

          {cart.length === 0 ? (
            <div className="empty-bag">
              <span>＋</span>
              <h3>YOUR BAG IS WAITING.</h3>
              <p>
                {orderConfirmed ? "Your order has been confirmed. Happy wearing!" : "Looks like you haven't added anything yet."}
              </p>
              <a href="#shop" className="button button-dark">
                EXPLORE THE SHOP <span></span>
              </a>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items">
                {cart.map((item) => (
                  <article className="cart-item" key={item.itemId}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-info">
                      <p className="product-category">THREAD THEORY</p>
                      <h3>{item.name}</h3>
                      <p>Colour: {item.color} / Size: {item.size}</p>
                      <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                      <div className="quantity-control">
                        <button onClick={() => changeQuantity(item.itemId, -1)} aria-label="Decrease quantity">
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => changeQuantity(item.itemId, 1)} aria-label="Increase quantity">
                          +
                        </button>
                      </div>
                    </div>
                    <button className="remove-item" onClick={() => removeFromCart(item.itemId)}>
                      REMOVE ×
                    </button>
                  </article>
                ))}
              </div>

              <aside className="cart-summary">
                <h3>ORDER SUMMARY</h3>
                <div className="summary-line">
                  <span>Subtotal</span>
                  <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
                </div>
                <div className="summary-line">
                  <span>Shipping</span>
                  <strong>{shipping === 0 ? "FREE" : `₹${shipping.toLocaleString("en-IN")}`}</strong>
                </div>
                {subtotal < 1499 && (
                  <p className="shipping-note">
                    Add ₹{(1499 - subtotal).toLocaleString("en-IN")} more for free shipping.
                  </p>
                )}
                <div className="summary-total">
                  <span>TOTAL</span>
                  <strong>₹{grandTotal.toLocaleString("en-IN")}</strong>
                </div>
                <button className="button button-dark confirm-button" onClick={confirmOrder}>
                  CONFIRM ORDER <span></span>
                </button>
                <p className="checkout-note">THIS IS A FRONT-END DEMO CHECKOUT.</p>
              </aside>
            </div>
          )}
        </section>
      </main>

      <Footer />
      {toast && <div className="toast-message">{toast}</div>}
    </>
  );
}