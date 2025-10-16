# Kassara Landing Page - Nginx Deployment Guide

## 📦 Production Build

Build files are ready in the `dist/` folder.

## 🚀 Nginx Deployment

### 1. Build the Project

```bash
npm run build
```

This creates optimized production files in `dist/` folder.

### 2. Upload Files to Server

Upload the `dist/` folder contents to your server:

```bash
# Using SCP
scp -r dist/* user@your-server:/var/www/kassara-landing/

# Or using rsync
rsync -avz dist/ user@your-server:/var/www/kassara-landing/
```

### 3. Configure Nginx

Copy the nginx configuration:

```bash
sudo cp nginx.conf /etc/nginx/sites-available/kassara-landing
sudo ln -s /etc/nginx/sites-available/kassara-landing /etc/nginx/sites-enabled/
```

Or manually create `/etc/nginx/sites-available/kassara-landing`:

```nginx
server {
    listen 80;
    server_name kassara.com www.kassara.com;
    
    root /var/www/kassara-landing;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    # Handle React Router (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Don't cache index.html
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    error_page 404 /index.html;
}
```

### 4. Test and Reload Nginx

```bash
# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 5. SSL Setup (Optional but Recommended)

Using Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d kassara.com -d www.kassara.com
```

## 🌐 Alternative Deployment Options

### Vercel (Easiest)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or use Netlify CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

Add to `package.json`:

```json
{
  "homepage": "https://AliMahmoodiTabriz.github.io/kassara-landing",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Then:

```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🔧 Environment Variables

For production, update:

- WhatsApp number in `src/utils/constants.js`
- Social media links in `src/utils/constants.js`
- Domain in nginx config

## 📊 Performance

The built files are optimized:
- Minified JavaScript
- Optimized CSS
- Gzip compression ready
- Asset caching configured

Build size: ~350 KB (gzipped ~110 KB)

## ✅ Checklist Before Deployment

- [ ] Update WhatsApp number
- [ ] Update social media links
- [ ] Update domain in nginx.conf
- [ ] Test build locally: `npm run preview`
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Verify both languages (TR/EN)
- [ ] Setup SSL certificate

## 📞 Support

For deployment issues, contact: info@kassara.com

