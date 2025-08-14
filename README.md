# Vibrant Designs

A modern web project built with **Vue 3** + **Vite** and **UnoCSS**, designed as the base for the *Vi\_brant Designs* website.
This repository contains everything needed to start development locally, customize the site, and prepare for deployment.

---

## 🚀 Features

* ⚡ **Vite** for lightning-fast builds and hot reloads
* 🎨 **UnoCSS** for highly customizable styling
* 🖥 **Vue 3** with `<script setup>` syntax for clean, modern components
* 📂 Organized file structure for easy scaling

---

## 📦 Prerequisites

Before you begin, make sure you have:

* [Node.js](https://nodejs.org/) (v18+ recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed globally
* A code editor (VS Code recommended)

---

## 🛠 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/StevenKariuki/VibrantDesigns.git
cd VibrantDesigns
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

This will start a local server and open the project in your default browser.

---

## 📁 Project Structure

```
VibrantDesigns/
│
├── public/             # Static assets (images, icons, etc.)
├── src/
│   ├── assets/         # App-specific assets
│   ├── components/     # Vue components
│   ├── App.vue         # Root component
│   ├── main.js         # Entry point
│   └── styles/         # Global styles (UnoCSS config)
│
├── uno.config.ts       # UnoCSS configuration
├── vite.config.js      # Vite build configuration
├── package.json        # Project metadata & dependencies
└── README.md           # This file
```

---

## 🎨 Styling with UnoCSS

UnoCSS is already configured in `uno.config.ts`.
To customize:

1. Open `uno.config.ts`
2. Add or adjust presets, shortcuts, and theme colors
3. Restart your dev server to see changes

---

## 🏗 Building for Production

```bash
npm run build
```

The built files will be output to the `dist/` folder.

---

## 🌍 Deployment

You can deploy the `dist/` folder to any static hosting service such as:

* [Vercel](https://vercel.com)
* [Netlify](https://netlify.com)
* GitHub Pages
* Your own server

Example (Vercel CLI):

```bash
npm install -g vercel
vercel
```

---

## 🧩 Additional Commands

* **Lint** (if ESLint configured):

```bash
npm run lint
```

* **Preview Production Build**:

```bash
npm run preview
```

---

## 📜 License

MIT License — free to use and modify.

---

## 👨‍💻 Author

**Vi\_brant** — [GitHub Profile](https://github.com/StevenKariuki)
