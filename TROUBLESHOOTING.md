# 🔧 Troubleshooting Guide - Blank Page Issue

## Quick Fixes (Try these first):

### 1. Hard Refresh the Browser
- **Chrome/Firefox (Windows/Linux):** `Ctrl + Shift + R`
- **Chrome/Firefox (Mac):** `Cmd + Shift + R`
- **Safari:** `Cmd + Option + R`

### 2. Clear Browser Cache
- Open DevTools (F12)
- Right-click on the refresh button
- Select "Empty Cache and Hard Reload"

### 3. Check Terminal Output
When you run `npm run dev`, you should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

If you see errors instead, that's the problem!

### 4. Check Browser Console
- Open DevTools (F12)
- Go to Console tab
- Look for RED error messages
- Common errors and fixes:

**Error: "Failed to resolve module specifier"**
- Solution: Run `npm install` again

**Error: "404 Not Found" for assets**
- Solution: Make sure dev server is running

**Error: "Unexpected token '<'"**
- Solution: Clear browser cache

### 5. Try Different Port
If port 3000 is already in use:

Edit `vite.config.ts`:
```typescript
server: {
  port: 5173, // Change to different port
  open: true,
}
```

Then visit: `http://localhost:5173/`

---

## Step-by-Step Debugging:

### Step 1: Stop and Restart Dev Server
```bash
# Press Ctrl+C to stop the server
# Then restart:
npm run dev
```

### Step 2: Install Dependencies (if needed)
```bash
npm install
```

### Step 3: Check Node Version
```bash
node --version
# Should be 18.x or higher
```

If too old:
```bash
# Install nvm (Node Version Manager) first, then:
nvm install 18
nvm use 18
```

### Step 4: Clear npm Cache
```bash
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

### Step 5: Check for Build Errors
```bash
npm run build
# If this fails, the error message will tell you what's wrong
```

---

## Common Issues & Solutions:

### Issue: "Cannot find module"
**Solution:**
```bash
npm install --save react react-dom react-router-dom react-helmet-async
```

### Issue: Port 3000 already in use
**Solution:**
```bash
# Kill process on port 3000 (Mac/Linux):
lsof -ti:3000 | xargs kill -9

# Or use different port (see Step 5 above)
```

### Issue: TypeScript errors
**Solution:**
```bash
# Check for TS errors:
npx tsc --noEmit

# If errors appear, fix them or temporarily ignore:
# Add to tsconfig.json:
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

### Issue: Vite not found
**Solution:**
```bash
npm install --save-dev vite @vitejs/plugin-react
```

---

## Nuclear Option (Last Resort):

If nothing else works:

```bash
# 1. Backup your .env file if you have one
# 2. Delete everything and reinstall:

rm -rf node_modules
rm -rf dist
rm package-lock.json
npm install
npm run dev
```

---

## What to Check in Browser Console:

Open DevTools (F12) → Console tab. Look for:

### Good Signs:
```
[vite] connected.
[vite] page reload
```

### Bad Signs and Fixes:

**"Uncaught SyntaxError"**
→ JavaScript/TypeScript syntax error in code
→ Check terminal for TypeScript errors

**"404 (Not Found)"**
→ Asset or route not found
→ Check file paths and imports

**"Failed to fetch dynamically imported module"**
→ Browser cache issue
→ Hard refresh (Ctrl+Shift+R)

**Blank page with NO errors**
→ Check if `<div id="root">` exists in index.html
→ Check if main.tsx is correctly mounting the app

---

## Verify Setup:

### 1. Check index.html has root div:
```html
<div id="root"></div>
```

### 2. Check main.tsx is rendering:
```typescript
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
```

### 3. Check App.tsx has routes:
```typescript
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    // ...
  </Route>
</Routes>
```

---

## Still Not Working?

### Check these files exist:
```
src/
├── main.tsx ✓
├── App.tsx ✓
├── index.css ✓
├── pages/
│   └── Home.tsx ✓
└── components/
    └── Layout.tsx ✓
```

### Check package.json has scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

---

## Contact for Help:

If you've tried everything above and it still doesn't work, check:

1. **Terminal output** when running `npm run dev`
2. **Browser console** (F12 → Console tab)
3. **Network tab** in DevTools (F12 → Network tab)

Share screenshots of any error messages to get specific help!

---

## Quick Test:

Try this minimal test to see if Vite is working:

### Create test.html in project root:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Test</h1>
  <script>console.log('Working!')</script>
</body>
</html>
```

Visit: `http://localhost:3000/test.html`

If this shows "Test", then Vite works and the issue is in React code.
If this also fails, Vite server isn't running properly.
