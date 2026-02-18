# Step-by-step: Run this project from GitHub

Copy-paste these commands in order. No prior setup needed except Node.js installed.

---

## Checklist

- [ ] **Step 0:** Install [Node.js](https://nodejs.org/) (v18+) if you don't have it. Check with `node -v`.

---

- [ ] **Step 1:** Clone the repository
```bash
git clone https://github.com/cxaxys-hue/Bedrift-nettside.git
```

- [ ] **Step 2:** Go into the project folder
```bash
cd Bedrift-nettside
```

- [ ] **Step 3:** Install dependencies *(equivalent to `pip install -r requirements.txt` in Python)*
```bash
npm install
```

- [ ] **Step 4:** Start the development server
```bash
npm run dev
```

- [ ] **Step 5:** Open your browser at **http://localhost:5173**

---

## Optional: Build for production

```bash
npm run build
npm run preview
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm` not found | Install Node.js from [nodejs.org](https://nodejs.org/) |
| Port 5173 in use | Vite will suggest another port (e.g. 5174) |
| `EACCES` or permission errors | Run terminal as Administrator or use `npx` |
