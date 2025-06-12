# HomeSpice App

=> Output video


https://github.com/user-attachments/assets/f60fb817-f720-474c-9f09-57575f7ac24b



Backend screenshots :


<img width="600" alt="Mongo 1" src="https://github.com/user-attachments/assets/40c4efac-4590-42a7-9765-a003f7862a64" />

<img width="600" alt="Mongo 2" src="https://github.com/user-attachments/assets/f2a98338-f07e-499f-b98c-0e7d51f4ab26" />





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


<img width="302" alt="Screenshot 2025-06-13 at 1 25 29 AM" src="https://github.com/user-attachments/assets/552da163-f839-41f8-8d11-6b3d6045424d" />


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
