# ✨ Vaibhav Adesara | Software Engineer Portfolio

A premium, recruiter-first, and high-performance personal portfolio website built with **React**, **Vite**, and **Vanilla CSS**. This repository showcases modern web engineering practices, featuring custom animations, a fully responsive glassmorphism UI, and interactive system architecture visualizations for technical projects.

🚀 **Live Link:** [vaibhavadesara.com](https://vaibhav-24hr.github.io/vaibhav-portfolio/) (or your deployed Netlify/Vercel URL)

---

## 📈 Key Portfolio Highlights

- **Recruiter-First UX:** Structured cleanly matching the base resume to facilitate fast scanning by technical recruiters and hiring managers.
- **Interactive System Architecture & Tech Stack Viewer:** Allows recruiters to click, toggle, and zoom into real system architectures and proposals for every project.
- **Responsive Layout & Mobile Support:** Hand-crafted CSS layout featuring a responsive hamburger navigation menu with custom drawer transitions.
- **Fluid Micro-Animations:** Uses custom CSS transitions, glassmorphic panels, and dynamic statistics counting for an immersive user experience.

---

## 🛠️ The Tech Stack

The portfolio application is engineered with high-efficiency, lightweight, and modern tools:

*   **Core Framework:** React 18 & JavaScript (ES6+)
*   **Build Tool & Dev Server:** Vite (for lightning-fast Hot Module Replacement)
*   **Styling System:** Vanilla CSS3 (Custom Design System with HSL variables, fluid layouts, and flex/grid architectures)
*   **Icons:** Lucide React
*   **Routing & UI State:** React State & React DOM

---

## 📂 Project Showcase & Architecture Details

The portfolio showcases four major software engineering projects, complete with design documentation:

### 1. 🌟 **AURA** — AI-Powered Creator Coaching Platform
*   **Tech Stack:** React Native, Redux, Node.js, MongoDB, Google Gemini API, MediaPipe
*   **Description:** Engineered a cross-platform mobile application utilizing React Native and Redux for predictable state management, backed by a scalable MongoDB architecture. Integrated Gemini API and MediaPipe to deliver real-time feedback on user physical presence.
*   **Assets included:** System Architecture Diagram, Technology Stack Matrix, and Project Proposal PDF.

### 2. 🌸 **Bloom Up** — AI-Powered Family Management Platform
*   **Tech Stack:** React, OpenAI API, Chart.js, Render, AWS (EC2), JWT, Node.js
*   **Description:** Architected highly secure backend authentication and authorization via JWT, streamlined deployment pipelines utilizing Amazon EC2 instances, and visualized data metrics through dynamic charts.
*   **Assets included:** System Architecture Diagram and Technology Stack Matrix.

### 3. 📡 **Beacon (Team SkyLine)** — Transit Reporting PWA
*   **Tech Stack:** Vanilla JavaScript, Firebase (Realtime Database), Supabase, PWA Service Workers
*   **Description:** Engineered a Progressive Web App (PWA) with offline-first capabilities, network-aware status detection, and real-time syncing. Leveraged Firebase and Supabase for real-time data persistence.
*   **Assets included:** PWA Architecture Diagram and Tech Stack Diagram.

### 4. 💰 **Expense Manager** — Enterprise Web Application
*   **Tech Stack:** Java, Spring Boot, MySQL, Thymeleaf/JSP, Spring Security, JWT
*   **Description:** Developed a full-stack Spring Boot MVC application enabling robust financial tracking, implementing a secure cookie/JWT-based authentication flow to protect financial information.
*   **Assets included:** AI-Generated System Architecture Diagram & Tech Stack Layout (matching the portfolio theme).

---

## 🚀 Getting Started Locally

Follow these steps to set up and run the portfolio on your local machine:

### Prerequisites
*   **Node.js** (v18.0.0 or higher recommended)
*   **npm** (comes packaged with Node)

### Installation & Run
1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/vaibhav-24hr/vaibhav-portfolio.git
    cd vaibhav-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Launch Local Development Server:**
    ```bash
    npm run dev
    ```
    *Open your browser and navigate to `http://localhost:5173` to see it live.*

4.  **Create a Production Build:**
    ```bash
    npm run build
    ```
    *Generates a lightweight, optimized production bundle inside the `/dist` directory.*

---

## 📐 Project Directory Structure

```text
├── docs/                        # Resume PDFs (Source of Truth)
├── public/
│   └── projects/                # High-res diagrams & PDF proposals
├── src/
│   ├── components/              # Modular UI Components
│   │   ├── About.jsx            # Value pillars & personal bio
│   │   ├── Awards.jsx           # SIH 2022 Hackathon & Microsoft AI cert
│   │   ├── Contact.jsx          # Contact handles & phone link
│   │   ├── Education.jsx        # Academic background (Langara, GTU)
│   │   ├── Hero.jsx             # Hero landing section & Title
│   │   ├── Projects.jsx         # Project showcase & tabs controller
│   │   ├── Skills.jsx           # Technical skills grid
│   │   ├── Stats.jsx            # Animated statistics grid
│   │   └── Timeline.jsx         # Professional experiences timeline
│   ├── App.jsx                  # Main application controller
│   ├── index.css                # Global styles, variables & layout
│   └── main.jsx                 # Vite Entrypoint
├── index.html                   # HTML entrypoint & SEO Meta Tags
├── package.json                 # Dependency definitions
└── README.md                    # This documentation file
```

---

## 🎨 Theme & Customization

The interface uses a tailored dark/neon color scheme powered by CSS custom properties in `src/index.css`:

```css
:root {
  --bg-primary: #0b0f19;       /* Deep navy space background */
  --bg-secondary: #111827;     /* Lighter gray-blue card panels */
  --accent-primary: #6366f1;   /* Indigo primary brand glow */
  --accent-secondary: #f59e0b; /* Gold secondary highlight */
  --text-primary: #f3f4f6;     /* Off-white readable text */
  --glass-border: rgba(255, 255, 255, 0.08);
}
```

Feel free to customize these CSS variables to match your personal brand!

---

## 📄 License
This project is open-source. Feel free to use it to showcase your own portfolio!
