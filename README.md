# HomeSpice App

=> Output video

Backend screenshots :
<img width="1429" alt="Mongo 1" src="https://github.com/user-attachments/assets/40c4efac-4590-42a7-9765-a003f7862a64" />

<img width="1429" alt="Mongo 2" src="https://github.com/user-attachments/assets/f2a98338-f07e-499f-b98c-0e7d51f4ab26" />


https://github.com/user-attachments/assets/5b7c815a-bbe9-44a5-8996-2991dcb90484



This is a full-stack web application that displays a weekly menu. It uses a **React frontend** and an **Express + MongoDB backend** to fetch and display daily menu items from a database.

---

## 🚀 Features

- 📅 **Day-wise Grouped Menus**: Automatically groups menu items by day (e.g., Monday, Tuesday).
- 🔄 **Real-time Data Fetching**: React frontend dynamically fetches data from Express backend.
- 📡 **REST API Integration**: Backend exposes a `/api/menu` endpoint for retrieving menu data.
- 🌐 **CORS Enabled**: Configured to allow cross-origin requests from frontend (`localhost:3000`).
- 💾 **MongoDB Integration**: Menu items are stored and retrieved from a MongoDB database.
- ⚙️ **Modular Codebase**: Clean separation of concerns via Express routers and models.

---

## 🛠️ Tech Stack

| Frontend | Backend  | Database |
|----------|----------|----------|
| React.js | Express.js | MongoDB (Mongoose) |

---

## 📂 Project Structure
usmans-cook/
│
├── backend/
│   ├── dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── seed.js
│   ├── server.js
│   ├── models/
│   │   ├── MenuItem.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── menu.js
│   │   └── orders.js
│   └── data/
│
├── frontend/
│   ├── dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── CheckoutPage.jsx
│   │   │   └── OrdersPage.jsx
│   │   ├── components/
│   │   │   ├── FoodItem.jsx
│   │   │   └── FoodList.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   │   ├── timeValidator.js
│   │   │   └── calculateTotal.js
│   │   ├── config/
│   │   │   └── config.js
│   │   └── assets/
│   └── public/
│       ├── vite.svg
│       └── assets/
│           ├── biryani.jpg
│           ├── kheer.png
│           └── paratha.jpeg
│
├── docker-compose.yml
└── README.md



🔧 Getting Started

1. Clone the repo
   
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
3. Setup the backend
cd server
npm install
npm start
Make sure MongoDB is running locally or change the connection URI in index.js.

4. Setup the frontend
cd client
npm install
npm start
App will run on http://localhost:3000 and fetch menu from http://localhost:5000/api/menu.

License
This project is open-source and free to use for learning and personal projects.

🙌 Acknowledgments
Created by Muhammad Usman
Feel free to contribute or suggest improvements!
