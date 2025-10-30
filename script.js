/* === STYLES GLOBAUX === */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Poppins', Arial, sans-serif;
  line-height: 1.5;
}

img, video, iframe {
  max-width: 100%;
  height: auto;
  display: block;
}

/* === HEADER === */
.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 20px;
  background: #007bff;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-weight: bold;
  font-size: 1.4em;
}

.home-header nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.home-header nav a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;
}

.home-header nav a:hover {
  text-decoration: underline;
}

.btn-login {
  background: white;
  color: #007bff !important;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: bold;
}

/* === SECTION HERO === */
.hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('https://images.unsplash.com/photo-1563720223185-11003d5164d0') center/cover;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.cta {
  background: #ffcc00;
  color: black;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
}

/* === SERVICES === */
.services {
  padding: 60px 20px;
  text-align: center;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.service-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 25px;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

/* === A PROPOS & CONTACT === */
.apropos, .contact {
  padding: 60px 20px;
  background: #f8f9fa;
  text-align: center;
}

/* === FOOTER === */
footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 15px 0;
  font-size: 0.9rem;
}

/* === FORMULAIRES & TABLEAUX === */
.simple-header {
  background: #007bff;
  color: white;
  text-align: center;
  padding: 20px;
}

.form-section {
  max-width: 600px;
  margin: 40px auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

form label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
}

form input, form select, form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

form button {
  margin-top: 20px;
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

form button:hover {
  background: #0056b3;
}

/* === TABLES === */
.table-section {
  max-width: 90%;
  margin: 40px auto;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background: #007bff;
  color: white;
}

tr:hover {
  background: #f2f2f2;
}

/* === RESPONSIVE DESIGN === */
@media (max-width: 768px) {
  .home-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .home-header nav {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 10px;
    margin-top: 10px;
  }

  .home-header nav a {
    display: block;
    width: 100%;
    padding: 8px 0;
  }

  .hero {
    padding: 80px 15px;
    background-position: center;
  }

  .hero-content h1 {
    font-size: 1.8em;
  }

  .hero-content p {
    font-size: 1em;
  }

  .cta {
    padding: 10px 18px;
    font-size: 0.95rem;
  }

  .services, .apropos, .contact {
    padding: 40px 15px;
  }

  .service-card {
    padding: 20px;
  }
}
