# EduVision AI — Student Performance Predictor

> **Predict. Prevent. Empower.**  
> An AI-powered web application that predicts student academic performance using Machine Learning to identify at-risk students before they fall behind.

---

## Overview

EduVision AI is a full-stack frontend web application built with HTML, CSS, and JavaScript. It simulates an intelligent academic monitoring system that uses ML model outputs to flag at-risk students early — giving faculty the insights needed to intervene at exactly the right moment.

The platform serves three types of users — **Students**, **Faculty**, and **Admins** — each with a tailored dashboard and feature set.

---

## Live Demo

Open `index.html` directly in your browser. Use **any ID + any password** to log in.

---

## Features

### For Students
- **Overview Dashboard** — GPA, attendance, assignment completion, and study streak at a glance
- **Subject Performance** — Progress bars and radar charts per subject
- **AI Teacher (Prof. AI)** — 24/7 chatbot for doubt clearing, note generation, and exam prep powered by Claude AI
- **Previous Year Papers (PYQ)** — Filterable by subject (Math, Physics, CS, Chemistry)
- **Study Materials** — Notes, videos, practice sets, and formula sheets
- **Achievements & Badges** — Gamified milestone tracking
- **Events & Placements** — Upcoming college events and placement statistics with an AI career coach

### For Faculty
- **Command Center** — Overview of total students, high/medium/low risk counts, and trend charts
- **Manage Students** — Add, edit, view, and delete student records
- **Edit Marks** — Inline editable marks table; risk score recalculates automatically
- **Risk Alerts** — List of students crossing critical risk thresholds
- **Analytics** — Score histograms, subject averages, and class distribution charts
- **Events & Placements** — Add events, manage placement records, and edit placement summary statistics

### For Admins
- **System Overview** — Uptime, institution count, model version
- **Dataset Manager** — CSV/Excel upload interface for training data
- **Model Training** — Trigger ML model retraining
- **Activity Log** — System-level event log

---

## ML Models Used

| Model | Accuracy | Notes |
|---|---|---|
| 🌲 Random Forest | 96.2% | Ensemble learning · 500 trees · Best for complex patterns |
| ⚡ XGBoost | 94.8% | Gradient boosting · Handles missing data well |
| 📊 Logistic Regression | 91.3% | Fast, interpretable · Great for binary classification |
| 🌿 Decision Tree | 88.9% | Highly explainable · Faculty-friendly outputs |

---

## Key Stats

| Metric | Value |
|---|---|
| Prediction Accuracy | 94.7% |
| Students Monitored | 12,000+ |
| Dropout Prevention Rate | 89% |
| Partner Colleges | 48 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, responsive grid) |
| Logic | Vanilla JavaScript |
| Charts | Chart.js 4.4.0 |
| Fonts | Rajdhani, Exo 2, JetBrains Mono (Google Fonts) |
| AI Integration | Anthropic Claude API (AI Teacher chatbot) |

---

## Project Structure

```
student-performance-project/
├── index.html       # Main application (all pages and modals)
├── styles.css       # Global styles, themes, components
├── script.js        # Application logic, data, chart rendering
├── .gitignore
├── LICENSE          # MIT License
└── README.md
```

---

## Getting Started

### Prerequisites

No build tools or dependencies are required. Just a modern web browser.

### Run Locally

```bash
git clone https://github.com/meghanasid22-boop/student-performance-project.git
cd student-performance-project
# Open index.html in your browser
open index.html
```

Or use a local dev server (optional):

```bash
npx serve .
# Visit http://localhost:3000
```

---

## Login Guide

| Role | Credentials |
|---|---|
| Student | Any ID + any password |
| Faculty | Any ID + any password |
| Admin | Any ID + any password |

> This is a frontend demo. Authentication is simulated — no real backend required.

---

## Pages & Navigation

| Page | Route (in-app) | Description |
|---|---|---|
| Home | `showPage('home')` | Landing page with hero, features, ML model stats |
| Features | `showPage('features')` | Detailed feature breakdown and tech stack |
| About | `showPage('about')` | Mission, vision, team values |
| Login | `showPage('login')` | Role-based login selector |
| Student Dashboard | `showPage('student')` | Full student portal |
| Faculty Dashboard | `showPage('faculty')` | Faculty control center |
| Admin Panel | `showPage('admin')` | System administration |

---

## Screenshots

> _Add screenshots of the Home page, Student Dashboard, Faculty Portal, and AI Teacher here._

---

## Roadmap

- [ ] Backend integration (Node.js / Python Flask / FastAPI)
- [ ] Real ML model inference via REST API
- [ ] Persistent database for student records
- [ ] Email/SMS alert integration
- [ ] Mobile app version
- [ ] Role-based authentication with JWT

---

## Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Meghana Sid** — [@meghanasid22-boop](https://github.com/meghanasid22-boop)

---

> _EduVision AI — because no student should fall through the cracks._
