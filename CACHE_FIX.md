# 🔧 Cache Fix Instructions

The `tw-animate-css` import has been **completely removed** from the codebase. If you're still seeing the error, it's a **cache issue**.

## ✅ What Was Fixed

The problematic line has been removed from `/src/styles/tailwind.css`:
```css
/* REMOVED: @import 'tw-animate-css'; */
```

## 🔄 Clear Cache & Restart

Follow these steps in order:

### Step 1: Stop the Dev Server
Press `Ctrl+C` (or `Cmd+C` on Mac) in your terminal

### Step 2: Clear Node Modules Cache
```bash
rm -rf node_modules
rm -rf .vite
rm pnpm-lock.yaml
```

### Step 3: Reinstall Dependencies
```bash
pnpm install
```

### Step 4: Start Fresh
```bash
pnpm run dev
```

## 🚀 Alternative: Quick Restart

If the above doesn't work, try just restarting the dev server:

```bash
# Stop the server (Ctrl+C)
# Then start it again
pnpm run dev
```

## 📁 Verify the Fix

You can verify the import is gone by checking the file:

```bash
cat src/styles/tailwind.css
```

You should see:
```css
@import 'tailwindcss' source(none);
@source '../**/*.{js,ts,jsx,tsx}';

/* Custom Brand Colors - AG Varmeteknikk */
@theme {
  ...
}
```

**NO** `@import 'tw-animate-css';` line should be present!

## 🆘 Still Having Issues?

If you're still seeing the error after clearing cache:

1. Check your browser's DevTools console for cached errors
2. Hard refresh the browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
3. Close all browser tabs and restart
4. Try incognito/private browsing mode

The error is **definitely a caching issue** - the import has been completely removed from the source code.
