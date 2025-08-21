# Shaheed Chronicles

**Shaheed Chronicles** is a React + Vite + Tailwind CSS project dedicated to honoring and preserving the history of the **Indian Army**.  
It provides a digital platform to explore the **wars, missions, awards, and sacrifices** of our soldiers in an informative and visually appealing way.  

---

## 📖 Project Overview

The **Shaheed Chronicles** project was built as an educational web platform to:  
- Provide knowledge about **wars** fought by the Indian Army.  
- Display **missions & operations** carried out in national interest.  
- Showcase **awards & honors** given to brave soldiers.  
- Offer a **gallery** of important images.  
- Give users a way to **connect** via a Contact page.  

This project also serves as a **portfolio-ready React project** demonstrating modern web development skills.  

---

## 🛠 Tech Stack

- ⚛ **React** (with Vite for fast bundling)  
- 🎨 **Tailwind CSS** for styling  
- 🌐 **React Router** for navigation  
- 📂 **JSON files** (`wars.json`, `missions.json`, `awards.json`) for data  

---

## 📂 Folder Structure

indianarmy/ # Root project folder
│── public/ # Public assets (favicon, static images, etc.)
│── src/
│ ├── components/ # Reusable UI components
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── HeroSection.jsx
│ │ └── ...
│ ├── pages/ # Page components
│ │ ├── Home.jsx
│ │ ├── Wars.jsx
│ │ ├── Missions.jsx
│ │ ├── Awards.jsx
│ │ ├── Gallery.jsx
│ │ └── Contact.jsx
│ ├── data/ # JSON data files
│ │ ├── wars.json
│ │ ├── missions.json
│ │ └── awards.json
│ ├── Layout.jsx # Common layout (Header + Footer + Outlet)
│ ├── main.jsx # Router configuration
│ └── App.jsx # (optional wrapper)
│── package.json # Project dependencies
│── tailwind.config.js # Tailwind setup
│── vite.config.js # Vite setup


---

## ⚡ Installation & Setup

Follow these steps to run the project locally:

 1. Clone the Repository
```bash
git clone https://github.com/KHUSHIAGARWAL10/indianarmy.git
cd indianarmy

2. Install Dependencies
npm install

3. Run Development Server
npm run dev

App will be available at: http://localhost:5173

4. Build for Production
npm run build

---

###▶️ Usage

Navigate to Home Page → Overview of project.

Open Wars Page → Displays wars with details and images from wars.json.

Explore Missions Page → Operations & missions displayed from JSON data.

Visit Awards Page → Honors & medals awarded to soldiers.

Use Contact Page → Allows visitors to connect (future: backend integration).

---

###🌟 Features (Current)

- ✅ Header & Footer with Navigation (Link & NavLink)  
- ✅ Routing setup with Layout.jsx (using Outlet)  
- ✅ Pages: Home, Wars, Missions, Awards, Gallery, Contact  
- ✅ Data-driven rendering from JSON files  
- ✅ Styled with Tailwind CSS for clean UI  


---


###🔮 Future Enhancements (Planned)

- ✨ Animations with Framer Motion → Smooth transitions & hero effects  
- 🖼️ Lightbox Gallery → Zoom-in feature for images  
- 📧 Contact Form Backend → Node.js + Express for storing form data  
- 🔐 Protected Routes → Restrict gallery access with login  
- 🌍 Deployment → Plan to host on Vercel or Netlify  


---


###🙏 Acknowledgments

Dedicated to the bravery and sacrifices of the Indian Army

Built using open-source tools: React, Vite, Tailwind CSS

