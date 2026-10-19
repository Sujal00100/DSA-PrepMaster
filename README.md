# ⚡ DSA-PrepMaster — 90-Day DSA Roadmap & Tracker

[![Live Demo](https://img.shields.io/badge/Live%20Demo-dsa--prepmaster.vercel.app-000?style=for-the-badge&logo=vercel&logoColor=white)](https://dsa-prepmaster.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-DSA--PrepMaster-181717?style=for-the-badge&logo=github)](https://github.com/Sujal00100/DSA-PrepMaster)
[![Questions](https://img.shields.io/badge/Questions-150%20Curated-7C3AED?style=for-the-badge)](https://dsa-prepmaster.vercel.app/)

> 🌐 **Live Website:** [https://dsa-prepmaster.vercel.app/](https://dsa-prepmaster.vercel.app/)

A modern, dark-themed interactive roadmap designed to conquer technical coding interviews in 90 days with **150 handpicked LeetCode questions** covering all major Data Structures & Algorithms topics.

---

## ✨ Features

- **🎯 150 Handpicked Questions**: Curated progression from Easy to Medium and Hard across all DSA topics (Arrays, Strings, Linked Lists, Trees, Heaps, Graphs, Dynamic Programming, Greedy, Intervals, Backtracking, and Bit Manipulation).
- **🧠 Topic-Free Practice Mode**: Problem rows hide the topic and data structure names so you practice identifying underlying algorithmic patterns cold—just like in real technical interviews.
- **💡 On-Demand Pattern Hints**: Click **💡 Hint** on any question to reveal:
  - 🏷️ **Topic Name**
  - 🟣 **Core Algorithmic Pattern**
  - 🔵 **Step-by-Step Approach**
  - 🟡 **Key Aha! Insight**
- **📊 Interactive Progress Dashboard**:
  - Live animated SVG radial progress ring with real-time percentage.
  - Easy / Medium / Hard completion counters.
  - Dynamic Day Streak and auto-calculated Daily Goal.
- **🌱🔥⚡ 3 Structured Phases**:
  - **🌱 Foundation Phase** (Days 1–30 | Q1–Q50): Core fundamentals, Two Pointers, Stacks, Binary Search, Linked Lists, Basic Trees.
  - **🔥 Intermediate Phase** (Days 31–70 | Q51–Q110): Advanced Trees, Heaps, Backtracking, Graphs, 1-D DP, Intervals.
  - **⚡ Mastery Phase** (Days 71–90 | Q111–Q150): 2-D DP, Advanced Graphs, Greedy, Math, Bit Manipulation, and Hard interview problems.
- **🔍 Filter & Search**: Instant real-time search by problem name, question number, or tags. Filter by *All*, *Easy*, *Medium*, *Hard*, *Done*, or *Pending*.
- **💾 Local Storage Persistence**: Your progress, completed checkboxes, and streak dates persist automatically across browser sessions.
- **🎨 Premium Dark UI**: Glassmorphic aesthetic with ambient glowing gradients, micro-animations, and responsive layout for mobile and desktop.

---

## 🚀 Live Demo & Usage

### 🌐 Access Online
Use the tracker directly from any desktop or mobile browser at:  
👉 **[https://dsa-prepmaster.vercel.app/](https://dsa-prepmaster.vercel.app/)**

### 💻 Run Locally
No build tools or installation needed! Simply clone and open `index.html`:

```bash
# Clone the repository
git clone https://github.com/Sujal00100/DSA-PrepMaster.git

# Navigate to the folder
cd DSA-PrepMaster

# Open index.html in your browser
# On Windows:
start index.html
# On macOS:
open index.html
# On Linux:
xdg-open index.html
```

---

## 📁 Project Structure

```text
DSA-PrepMaster/
├── index.html        # Main semantic HTML5 markup & dashboard
├── style.css         # Dark theme, glassmorphism, animations & responsiveness
├── app.js            # 150 questions dataset, hint system & state logic
├── generate_app.py   # Python generator script for the dataset and hints
└── README.md         # Documentation with live links
```

---

## 🏆 90-Day Strategy

1. Aim for **1 to 2 problems per day** following the sequential day schedule.
2. Read the problem statement cold and try to identify the pattern before looking at the hint.
3. If stuck for >20 minutes, open **💡 Hint** to review the pattern and approach.
4. Code and test the solution directly on [LeetCode](https://leetcode.com).
5. Check off the problem to track your streak and watch your progress ring fill up!
