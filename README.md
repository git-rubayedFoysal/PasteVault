# 🗂️ PasteVault

> A modern code & text paste manager built with React and Redux Toolkit.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-paste--vault--dev.vercel.app-teal?style=flat-square&logo=vercel)](https://paste-vault-dev.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC?style=flat-square&logo=redux)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

## 🔗 Live Demo

**[paste-vault-dev.vercel.app](https://paste-vault-dev.vercel.app/)**

---

## ✨ Features

- 📝 **Create Pastes** — write and save code or text with a title
- ✏️ **Edit Pastes** — update any saved paste anytime
- 👁️ **View Mode** — read-only view with syntax highlighting
- 🗑️ **Delete Pastes** — remove pastes instantly
- 📋 **Copy to Clipboard** — one-click copy with checkmark feedback
- 🎨 **Syntax Highlighting** — Monaco Editor (VS Code engine) with 10+ languages
- 💾 **Persistent Storage** — pastes saved to localStorage, survive page refresh
- 📱 **Responsive Design** — works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Redux Toolkit | State management |
| React Router | Client-side routing |
| Monaco Editor | Code editor with syntax highlighting |
| TailwindCSS | Styling |
| localStorage | Data persistence |
| Vite | Build tool |

---

## 📁 Project Structure

```
paste-vault/
├── public/
│   └── sticky-note.png
├── src/
│   ├── components/
│   │   ├── Create.jsx         # Create paste page
│   │   ├── EditPaste.jsx      # Edit paste page
│   │   ├── Error.jsx          # 404 error page
│   │   ├── Footer.jsx         # Footer component
│   │   ├── InputForm.jsx      # Shared form (create/edit/view)
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Pastes.jsx         # All pastes list
│   │   ├── ViewPaste.jsx      # View paste (read-only)
│   │   └── index.js           # Component exports
│   ├── Features/
│   │   └── pasteSlice.js      # Redux slice + localStorage
│   ├── Store/
│   │   └── Store.js           # Redux store config
│   ├── App.jsx                # Root layout + routes
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/git-rubayedFoysal/paste-vault.git

# Navigate to project directory
cd paste-vault

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧭 Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Pastes` | All pastes list |
| `/create` | `Create` | Create new paste |
| `/paste/:id` | `ViewPaste` | View paste (read-only) |
| `/edit/:id` | `EditPaste` | Edit existing paste |

---

## 💡 Key Implementation Details

- **Single `InputForm` component** handles create, edit, and view modes via `props.type`
- **`useParams`** reads paste ID from URL to prefill form on edit/view
- **localStorage** is managed inside Redux slice reducers — no separate `useEffect` needed
- **`useRef`** used for copy timer to prevent stale closure bugs
- **Monaco Editor** replaces textarea for proper code formatting and syntax highlighting

---

## 🌐 Supported Languages

JavaScript · TypeScript · Python · C++ · Java · CSS · HTML · JSON · Markdown · Plain Text

---

## 👨‍💻 Author

**Rubayed Ahmed Foysal**

[![GitHub](https://img.shields.io/badge/GitHub-git--rubayedFoysal-181717?style=flat-square&logo=github)](https://github.com/git-rubayedFoysal)

---

## 📄 License

MIT License — free to use and modify.