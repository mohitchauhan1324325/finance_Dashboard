# Finance Dashboard

A modern, responsive finance dashboard built with React that helps users track income, expenses, and financial insights through interactive charts and clean UI.

---

## Features

*  **Dashboard Overview**

  * Total Balance, Income, Expenses
  * Time-based balance trend chart
  * Category-wise spending breakdown

*  **Transaction Management**

  * Add and delete transactions
  * Filter by category and type
  * Sort by date or amount

*  **Export Functionality**

  * Download transactions as **CSV** or **JSON**

*  **Role-Based Access Control (RBAC)**

  * Admin → Add/Delete transactions
  * Viewer → Read-only access

*  **Dark Mode**

  * Toggle between light and dark themes
  * Persisted using localStorage

*  **Responsive Design**

  * Works smoothly on mobile, tablet, and desktop

*  **Animations**

  * Smooth UI transitions using Framer Motion

---

##  Tech Stack

* React (Vite)
* Tailwind CSS
* Recharts (Charts)
* Framer Motion (Animations)
* Context API (State Management)
* LocalStorage / API (Optional backend)

---

##  Project Structure

```
src/
│
├── components/
│   ├── dashboard/
│   ├── transactions/
│   ├── insights/
│   ├── layout/
│   └── role/
│
├── context/
├── pages/
├── utils/
└── assets/
```
---

##  Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/mohitchauhan1324325/finance_Dashboard.git
```

2. Navigate to project:

```bash
cd finance-Dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Run the app:

```bash
npm run dev
```

---

##  Environment Variables (Optional API Mode)

Create a `.env` file:

```
VITE_USE_API=false
VITE_API_URL=your_api_url_here
```

---

##  Screenshots

(Add screenshots here if needed)

---

##  Key Learnings

* State management using Context API
* Building responsive UI with Tailwind CSS
* Data visualization using charts
* File export using Blob API
* Implementing dark mode with persistence
* Adding smooth animations using Framer Motion

---

##  Future Improvements

* Edit transactions
* Backend integration (Node.js + MongoDB)
* Authentication system
* Import CSV feature
* Toast notifications

---

##  Author

Mohit Chauhan

