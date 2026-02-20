Flint and Steel 🍳

A responsive recipe website designed for home cooks who want structured, easy-to-follow cooking instructions.
The project demonstrates semantic HTML structure, organized CSS styling, and scalable layout design.

📌 Project Overview

Flint and Steel is a static front-end recipe collection website featuring:

A hero landing section

Informational introduction

Responsive recipe grid

Structured ingredient and instruction formatting

Clean, minimal UI

The goal of this project is to showcase:

Semantic HTML5 layout

Responsive image handling

Grid-based card design

Clear content hierarchy

🧱 Project Structure
flint-and-steel/
│
├── index.html
├── styles.css
├── script.js
├── Creamy Garlic Pasta.jpeg
├── Classic Vegetable Stir Fry.jpeg
├── Mug Cake.jpeg
└── README.md
File Breakdown
File	Purpose
index.html	Main HTML structure
styles.css	Layout, responsiveness, styling
script.js	Reserved for future interactivity
Image files	Recipe visuals
README.md	Project documentation
🎨 Features
1. Hero Section

Bold landing header

Call-to-action button

Responsive layout

2. Recipe Cards

Each recipe includes:

Image

Title

Meta info (time, servings, difficulty)

Description

Ingredients list

Step-by-step instructions

3. Responsive Image Handling

Images use:

.recipe-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

This ensures:

No stretching

Uniform card height

Clean cropping behavior

📐 Layout System

The layout uses:

Semantic tags (header, main, section, article, footer)

CSS Grid for recipe cards

Container-based width control

Modular class naming (BEM-inspired structure)

Example:

<header class="hero">
<section class="container recipes-grid">
<article class="recipe-card">
⚙️ How to Run

Since this is a static site:

Download or clone the repository

Open index.html in your browser

No dependencies required.
No build tools required.

📱 Responsiveness

The site adapts to:

Desktop

Tablet

Mobile

Viewport meta tag included:

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

Images scale automatically using width: 100%.

🚀 Future Improvements

Potential upgrades:

Add recipe filtering system

Implement search functionality

Add dark mode toggle

Convert to React or Next.js

Connect to backend (Node.js / Firebase)

Add user-submitted recipes

Implement animations (CSS or GSAP)

🧠 Technical Concepts Demonstrated

Semantic HTML5

CSS Grid

Object-fit for responsive media

Content hierarchy

Modular CSS architecture

Progressive enhancement potential

📜 License

This project is open-source and available for educational and personal use.

👨‍🍳 Author

Created as a front-end practice project focused on layout discipline and content structure.
