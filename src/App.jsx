import { useMemo, useState } from "react";
import "./App.css";

const products = [
  { name: "عيش", category: "يومي", icon: "🥖", description: "عيش طازج يوميًا بطعم أصيل." },
  { name: "فينو", category: "يومي", icon: "🥖", description: "فينو طازج للفطار والسندوتشات." },
  { name: "قرص سادة", category: "قرص", icon: "🫓", description: "قرص طازة بطعم بسيط وأصيل." },
  { name: "قرص بالسمسم", category: "قرص", icon: "🫓", description: "قرص طازة ومغطى بالسمسم." },
  { name: "قرص بالعجوة", category: "قرص", icon: "🫓", description: "قرص بالعجوة بطعم غني ومميز." },
  { name: "فطير بأنواعه", category: "فطير", icon: "🥧", description: "اختيارات متنوعة من الفطير حسب المتاح." },
  { name: "باتيه", category: "معجنات", icon: "🥐", description: "باتيه طازج بقوام خفيف وطعم مميز." },
  { name: "كرواسون", category: "معجنات", icon: "🥐", description: "كرواسون طازج مناسب للفطار أو أي وقت." },
  { name: "منين", category: "مخبوزات", icon: "🍪", description: "منين بطعم أصيل مع الشاي والقهوة." },
  { name: "بقسماط", category: "مخبوزات", icon: "🥨", description: "بقسماط مقرمش ومناسب للفطار." },
  { name: "بتونسالية", category: "مخبوزات", icon: "🥖", description: "مخبوزات طازة بطعم مميز." },
  { name: "فايش", category: "مخبوزات", icon: "🥖", description: "فايش طازج ومناسب للفطار." },
];

const categories = ["الكل", "يومي", "قرص", "فطير", "معجنات", "مخبوزات"];

function App() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "الكل" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.includes(search.trim());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="bakery">

      {/* NAVBAR */}
      <header className="navbar">

        <a href="#home" className="logo">
          <span>مخبز</span>
          الصلاة على النبي
        </a>

        <nav className="nav-links">
          <a href="#home">الرئيسية</a>
          <a href="#about">عن المخبز</a>
          <a href="#products">المنتجات</a>
          <a href="#contact">تواصل معنا</a>
        </nav>

        <a
          href="tel:01287041187"
          className="call-btn"
        >
          اتصل بنا
        </a>

      </header>


      <main>

        {/* HERO */}
        <section id="home" className="hero">

          <div className="hero-content">

            <div className="eyebrow">
              مخبوزات طازة • جودة نهتم بيها
            </div>

            <h1>
              طعم
              <span> يستاهل </span>
              التجربة.
            </h1>

            <p>
              أهلاً بيكم في مخبز الصلاة على النبي.
              مخبوزات طازة كل يوم، بطعم أصيل
              واهتمام بكل تفصيلة.
            </p>

            <div className="hero-actions">

              <a
                href="#products"
                className="primary-btn"
              >
                شوف المنتجات
              </a>

              <a
                href="https://wa.me/201287041187"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                اطلب على واتساب
              </a>

            </div>

            <div className="hero-info">

              <div>
                <strong>12+</strong>
                <span>نوع من المخبوزات</span>
              </div>

              <div>
                <strong>يوميًا</strong>
                <span>مخبوزات طازة</span>
              </div>

              <div>
                <strong>الإسماعيلية</strong>
                <span>مكاننا</span>
              </div>

            </div>

          </div>


          <div className="hero-art">

            <div className="circle-back"></div>

            <div className="bread-circle">

              <div className="bread">🥖</div>

              <span>FRESH</span>

              <strong>DAILY</strong>

              <small>
                مخبوزات طازة
              </small>

            </div>

          </div>

        </section>


        {/* ABOUT */}
        <section
          id="about"
          className="about section"
        >

          <div className="section-label">
            01 / عن المخبز
          </div>

          <div className="about-content">

            <h2>
              بنحب الشغل
              <br />
              <em>الصح.</em>
            </h2>

            <p>
              مخبز الصلاة على النبي في الإسماعيلية
              هدفه تقديم مخبوزات طازة بجودة نهتم
              بيها وطعم يستاهل التجربة.
            </p>

            <p>
              عندنا تشكيلة متنوعة من المخبوزات
              والمعجنات والفطير، وبنحاول كل يوم
              نقدم حاجة ترضيكم.
            </p>

          </div>

        </section>


        {/* PRODUCTS */}
        <section
          id="products"
          className="products section"
        >

          <div className="products-header">

            <div>

              <div className="section-label">
                02 / المنتجات
              </div>

              <h2>
                اختار
                <br />
                <em>اللي نفسك فيه.</em>
              </h2>

            </div>


            <div className="search-box">

              <span>⌕</span>

              <input
                type="text"
                placeholder="ابحث عن منتج..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

          </div>


          {/* FILTERS */}
          <div className="filters">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  activeCategory === category
                    ? "filter active"
                    : "filter"
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* PRODUCT GRID */}
          <div className="product-grid">

            {filteredProducts.map((product, index) => (

              <article
                className="product-card"
                key={product.name}
              >

                <div className="product-top">

                  <span className="number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="category">
                    {product.category}
                  </span>

                </div>


                <div className="product-icon">
                  {product.icon}
                </div>


                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.description}
                </p>


                <a
                  href={`https://wa.me/201287041187?text=${encodeURIComponent(
                    `السلام عليكم، عايز أستفسر عن ${product.name}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="product-order"
                >
                  استفسر عن المنتج
                  <span>←</span>
                </a>

              </article>

            ))}

          </div>


          {filteredProducts.length === 0 && (

            <div className="no-results">
              مفيش منتج مطابق للبحث.
            </div>

          )}

        </section>


        {/* HIGHLIGHT */}
        <section className="highlight">

          <div className="highlight-inner">

            <span>
              FRESH • QUALITY • TASTE
            </span>

            <h2>
              الجودة
              <em> بتبان.</em>
            </h2>

            <p>
              بنهتم بالتفاصيل عشان كل لقمة
              تكون على قد توقعاتكم.
            </p>

          </div>

        </section>


        {/* WHY US */}
        <section className="why section">

          <div className="section-label">
            03 / ليه إحنا؟
          </div>

          <div className="why-grid">

            <div className="why-card">
              <span>01</span>
              <h3>طازة</h3>
              <p>
                مخبوزات بنهتم إنها تكون طازة
                ومناسبة ليومك.
              </p>
            </div>

            <div className="why-card">
              <span>02</span>
              <h3>تنوع</h3>
              <p>
                من العيش والفينو للمعجنات
                والفطير والمخبوزات.
              </p>
            </div>

            <div className="why-card">
              <span>03</span>
              <h3>اهتمام</h3>
              <p>
                نهتم بالتفاصيل عشان نوصل
                للنتيجة اللي نرضى عنها.
              </p>
            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section
          id="contact"
          className="contact section"
        >

          <div>

            <div className="section-label">
              04 / تواصل معنا
            </div>

            <h2>
              مستنيينكم
              <br />
              <em>في الإسماعيلية.</em>
            </h2>

          </div>


          <div className="contact-card">

            <p>
              للاستفسار عن المنتجات أو الطلب،
              تواصلوا معانا مباشرة.
            </p>

            <a
              href="tel:01287041187"
              className="phone"
            >
              01287041187
            </a>

            <span className="location">
              📍 الإسماعيلية
            </span>

            <a
              href="https://wa.me/201287041187"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <span>واتساب</span>
              تواصل معنا
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div>
          <strong>
            مخبز الصلاة على النبي
          </strong>

          <span>
            الإسماعيلية
          </span>
        </div>

        <span>
          © 2026 جميع الحقوق محفوظة
        </span>

      </footer>

    </div>
  );
}

export default App;