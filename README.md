# 🦐 PrawnHub.site

**Live Prawn Price Tracker Across Tamil Nadu**

PrawnHub is a real-time price monitoring platform designed to track and display the live prices of prawns across major locations in Tamil Nadu. The goal is to bring transparency and timely updates to prawn sellers, buyers, and market observers.

> 🌐 Visit (soon): [https://prawnhub.site](https://prawnhub.site)

---

## 🧩 Tech Stack

### Frontend:
- **React.js** (Vite-based setup)
- **Axios** (for API calls)
- **Tailwind CSS** (for styling)
- **React Router DOM** (for navigation)

### Backend:
- **Flask** (Python-based API backend)
- **PostgreSQL** (for storing prawn price data)
- **SQLAlchemy** (ORM for Flask)

---

## 📁 Folder Structure (Frontend)

```bash
prawnhub-frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   └── PriceCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Market.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── api.js
├── .gitignore
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
