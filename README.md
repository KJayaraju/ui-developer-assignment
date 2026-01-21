# UI Developer Assignment – Angular

This project is developed as part of the **UI Developer Assignment** using  
**Angular (Standalone Components)**, **Angular Material**, **HTML**, **CSS**, and **Bootstrap**.

The application is implemented based on the provided **Figma design** and demonstrates
UI development, navigation, component structure, and basic authentication flow.

---

## 🚀 Tech Stack

- Angular (Standalone Components)
- Angular Material
- HTML5
- CSS3
- Bootstrap
- TypeScript

---

## ✨ Features

### 🔐 Authentication
- Login page with:
  - Username & Password fields
  - Live validation
  - Password length validation (must be more than 5 characters)
  - Error messages displayed without disabling the login button
- Logout functionality
- Authentication simulated using `localStorage`

---

### 🧭 Layout & Navigation
- Top Header:
  - Logo
  - Stepper navigation (Product Info → Dispatch)
  - User info & Logout icon
- Left Sidebar Navigation:
  - Templates
  - Products
  - Applications
  - Sequences
- Active route highlighting
- Reusable layout component

---

### 📄 Pages Implemented
- Login
- Templates List
- Create Template
- Edit Template

---

### 🧩 Template Management
- Create templates with:
  - Template Name
  - Region
  - Modules
- Edit and update templates
- Tree-style module structure
- Variables management:
  - Variable name
  - Default value
  - Required flag
- Data persistence using `localStorage`

---

### 📱 Responsive Design
The application is responsive for the following screen sizes:
- Laptop – 1400px
- iPad Pro – 1024px
- iPhone 12 Pro – 390px

---

## 🗂️ Project Structure

src/
├── app/
│ ├── layout/
│ │ ├── layout.component.ts
│ │ ├── layout.component.html
│ │ └── layout.component.css
│ ├── pages/
│ │ ├── login/
│ │ ├── templates-list/
│ │ ├── create-template/
│ │ ├── edit-template/
│ └── app.routes.ts
├── styles.css
└── main.ts


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

git clone 
cd ui-developer-assignment
 

npm install
### 3️⃣ Run the Application
ng serve

###4️⃣ Open in Browser
http://localhost:4200

🔑 Demo Login

Username: Any value

Password: Must be more than 5 characters

```bash