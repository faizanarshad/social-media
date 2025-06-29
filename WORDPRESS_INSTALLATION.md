# Qbrik AI Solutions - WordPress Theme Installation Guide

## 🚀 **Installation Steps for Namecheap WordPress Hosting**

### **Step 1: Prepare Your Files**
1. Create a new folder called `qbrik-theme` on your computer
2. Copy these files into the folder:
   - `style.css` (WordPress theme header)
   - `index.php` (Main template)
   - `header.php` (Header template)
   - `footer.php` (Footer template)
   - `functions.php` (Theme functions)
   - `styles.css` (Your existing CSS)
   - `script.js` (Your existing JavaScript)
   - `app/` folder (All images)

### **Step 2: Upload to WordPress**
1. **Login to WordPress Admin**
   - Go to your WordPress admin panel
   - Navigate to Appearance → Themes

2. **Upload Theme**
   - Click "Add New" → "Upload Theme"
   - Choose the `qbrik-theme` folder (zip it first)
   - Click "Install Now"
   - Activate the theme

### **Step 3: Configure Theme**
1. **Set Site Title & Tagline**
   - Go to Settings → General
   - Set Site Title: "Qbrik Solution"
   - Set Tagline: "AI Innovation for Business Transformation"

2. **Create Pages**
   - Go to Pages → Add New
   - Create these pages:
     - **Home** (set as front page)
     - **Services**
     - **AI Solutions**
     - **Portfolio**
     - **Team**
     - **Contact**
     - **Blog**

3. **Set Up Navigation**
   - Go to Appearance → Menus
   - Create a new menu called "Primary Menu"
   - Add all your pages to the menu
   - Set location to "Primary Menu"

### **Step 4: Upload Images**
1. **Upload to Media Library**
   - Go to Media → Add New
   - Upload all images from `app/images/` folder
   - Organize them in folders:
     - `ai-solutions/`
     - `team/`
     - `services/`
     - `portfolio/`
     - `theme/`

2. **Update Image URLs**
   - In your pages, replace image paths like:
     - `app/images/team/faizan.jpg` → Use WordPress media URLs

### **Step 5: Create Custom Content**
1. **AI Solutions**
   - Go to AI Solutions → Add New
   - Create entries for each AI solution
   - Add featured images

2. **Portfolio**
   - Go to Portfolio → Add New
   - Create portfolio items
   - Add project descriptions and images

3. **Team Members**
   - Go to Team Members → Add New
   - Add each team member
   - Fill in position, LinkedIn, GitHub links

### **Step 6: Install Recommended Plugins**
1. **Contact Form 7** (for contact forms)
2. **Yoast SEO** (for SEO optimization)
3. **WP Rocket** (for performance)
4. **Wordfence Security** (for security)

### **Step 7: Customize Content**
1. **Home Page**
   - Edit the Home page
   - Use Custom HTML blocks to add your hero section
   - Copy content from your original `index.html`

2. **Other Pages**
   - Edit each page with your content
   - Use WordPress blocks or Custom HTML

## 🎯 **Alternative: Simple Page Integration**

If you prefer not to create a full theme:

### **Option A: Use Custom HTML Blocks**
1. Create new pages in WordPress
2. Use "Custom HTML" blocks
3. Copy your HTML content
4. Upload images to Media Library
5. Update image URLs

### **Option B: Use Page Builders**
1. Install Elementor or WPBakery
2. Create pages using the page builder
3. Import your design as sections
4. Customize content through the interface

## 🔧 **Troubleshooting**

### **Images Not Loading**
- Check image URLs in Media Library
- Ensure proper file permissions
- Verify image paths in HTML

### **Styles Not Loading**
- Check if `styles.css` is properly linked
- Clear WordPress cache
- Check browser console for errors

### **JavaScript Issues**
- Ensure `script.js` is properly enqueued
- Check for jQuery conflicts
- Verify script loading order

## 📞 **Support**

For additional help:
1. Check WordPress documentation
2. Contact Namecheap support
3. Review theme files for errors

## 🎉 **Success!**

Once completed, your Qbrik website will be fully integrated with WordPress, giving you:
- Easy content management
- SEO optimization
- Security updates
- Mobile responsiveness
- Professional appearance 