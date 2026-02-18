# WebStarkupisz

Norsk webbyrå-side. React + Vite + Tailwind CSS.

---

## How to run this project from GitHub

Follow these steps exactly to run the code after cloning from GitHub.

### Prerequisites

- **Node.js** (v18 or newer) — [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

### Step-by-step (run from GitHub)

| Step | Command / Action |
|------|------------------|
| 1 | Open terminal (PowerShell, CMD, or Git Bash) |
| 2 | `git clone https://github.com/cxaxys-hue/Bedrift-nettside.git` |
| 3 | `cd Bedrift-nettside` |
| 4 | `npm install` *(installs dependencies — like `pip install -r requirements.txt`)* |
| 5 | `npm run dev` *(starts development server)* |
| 6 | Open browser at `http://localhost:5173` |

### Commands reference

```bash
# Install dependencies (required first time)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Project structure

```
Bedrift-nettside/
├── index.html
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
├── node_modules/     (created by npm install)
└── dist/             (created by npm run build)
```

---

## Pushing this project to GitHub

If you haven't created the repo yet:

### 1. Create the repository on GitHub

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `Bedrift-nettside`
3. Choose **Public**
4. Do **not** initialize with README (you already have one)
5. Click **Create repository**

### 2. Push your code

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: WebStarkupisz landing page"

# Add remote
git remote add origin https://github.com/cxaxys-hue/Bedrift-nettside.git

# Push to main branch
git branch -M main
git push -u origin main
```

---

## Tech stack

- React 19
- Vite 6
- Tailwind CSS 4
- Lucide React, React Icons
