import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <div className="mark">DB</div>
          <div>
            <div style={{ fontWeight: 700 }}>Danbam</div>
            <div style={{ fontSize: "12px", color: "var(--muted)" }}>Bar</div>
          </div>
        </div>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a className="cta" href="#reserve">Reserve</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="intro">
            <h1>Handmade pasta & wood-fired pizzas — fresh every day.</h1>
            <p>
              Warm ambiance, seasonal ingredients, and a curated wine list. Open
              for lunch & dinner — walk-ins welcome.
            </p>

            <div className="cards">
              <div className="card" style={{ minWidth: "220px" }}>
                <h3>Today's Special</h3>
                <p>
                  Truffle mushroom tagliatelle — 12-hour braised mushrooms,
                  cream, pecorino.
                </p>
              </div>
              <div className="card" style={{ minWidth: "220px" }}>
                <h3>Hours</h3>
                <p>
                  Mon–Sat: 11:30 — 22:00
                  <br />
                  Sun: 11:30 — 20:00
                </p>
              </div>
            </div>
          </div>

          <aside>
            <div className="reserve" id="reserve">
              <h3 style={{ marginTop: 0 }}>Reserve a table</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Reservation request sent!");
                }}
              >
                <div className="row">
                  <div className="col">
                    <input type="text" placeholder="Full name" required />
                  </div>
                  <div className="col">
                    <input type="tel" placeholder="Phone" required />
                  </div>
                </div>
                <div className="row" style={{ marginTop: ".6rem" }}>
                  <div className="col">
                    <input type="date" required />
                  </div>
                  <div className="col">
                    <input type="time" required />
                  </div>
                </div>
                <div style={{ marginTop: ".6rem" }}>
                  <select required>
                    <option value="">Party size</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                <div style={{ marginTop: ".6rem" }}>
                  <textarea rows="3" placeholder="Notes (allergies, requests)" />
                </div>
                <div
                  style={{
                    marginTop: ".8rem",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button type="submit">Request</button>
                </div>
              </form>
            </div>
          </aside>
        </section>

        <section id="menu">
          <h2 style={{ marginBottom: ".6rem" }}>Our Menu</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h4>
                Margherita <span className="price">₱450</span>
              </h4>
              <p>San Marzano tomatoes, fior di latte, basil.</p>
            </div>
            <div className="menu-item">
              <h4>
                Truffle Tagliatelle <span className="price">₱520</span>
              </h4>
              <p>Wild mushrooms, parmigiano, black truffle oil.</p>
            </div>
            <div className="menu-item">
              <h4>
                Seafood Risotto <span className="price">₱620</span>
              </h4>
              <p>Shrimp, squid, clams, saffron broth.</p>
            </div>
            <div className="menu-item">
              <h4>
                Caesar Salad <span className="price">₱290</span>
              </h4>
              <p>Romaine, anchovy dressing, parmesan crisp.</p>
            </div>
            <div className="menu-item">
              <h4>
                Tiramisu <span className="price">₱220</span>
              </h4>
              <p>Classic zabaglione and espresso-soaked ladyfingers.</p>
            </div>
            <div className="menu-item">
              <h4>
                Affogato <span className="price">₱180</span>
              </h4>
              <p>Vanilla gelato, hot espresso shot.</p>
            </div>
          </div>
        </section>

        <section id="gallery">
          <h2 style={{ marginBottom: ".6rem" }}>Gallery</h2>
          <div className="gallery">
            <img
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop"
              alt="dish"
            />
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt="interior"
            />
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop"
              alt="chef"
            />
          </div>
        </section>

        <section id="about" style={{ marginTop: "1.5rem" }}>
          <h2>About Us</h2>
          <p style={{ color: "var(--muted)", maxWidth: "70ch" }}>
            Danbam started as a neighborhood trattoria with one goal: delicious
            food made with care. We source seasonal produce and bake our bread
            daily. Come share a table with us.
          </p>
        </section>

        <section id="contact" style={{ marginTop: "1.5rem" }}>
          <h2>Contact & Hours</h2>
          <p style={{ color: "var(--muted)" }}>
            123 Harbor St, Cityname • (02) 555-1234 • hello@danbam.example
          </p>
        </section>
      </main>

      <footer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            © <strong>Danbam</strong> — All rights reserved
          </div>
          <div style={{ color: "var(--muted)" }}>Follow us on Instagram • Facebook</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// vercel.json
export const config = {
  runtime: "edge",
  regions: ["sin1"],
  routes: [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
};

