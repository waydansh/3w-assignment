
# Full-Stack Leaderboard Challenge 🏆

This is a dynamic, full-stack web application that simulates a real-time points leaderboard. It features a modern frontend built with React and a robust backend API powered by Node.js and Express.

-----

## Live Demo & Links 🚀

  * [cite\_start]**Live Frontend:** [**3w-assignment.netlify.app**](https://3w-assignment.netlify.app/) 
  * [cite\_start]**Backend API Base URL:** [**threew-assignment-xs8i.onrender.com/api**](https://threew-assignment-xs8i.onrender.com/api) 
  * [cite\_start]**GitHub Repository:** [**github.com/waydansh/3w-assignment**](https://github.com/waydansh/3w-assignment) 

-----

## Features ✨

  * **Dynamic User Management:** Add new players directly from the UI.
  * **Point Claiming System:** Select a player and award them random points (1-10).
  * **Real-Time Leaderboard:** Rankings update instantly after points are claimed.
  * **Visual Podium:** A distinct UI for the top 3 ranked players.
  * **Persistent Data:** User data and point histories are stored in a MongoDB database.
  * **Responsive Design:** The UI is fully optimized for both desktop and mobile devices.

-----

## Technology Stack 🛠️

  * **Frontend:** React (Vite), CSS3 (Flexbox, Grid), JavaScript (ES6+)
  * **Backend:** Node.js, Express.js
  * **Database:** MongoDB (with Mongoose)
  * **Deployment:**
      * Frontend hosted on **Netlify**.
      * Backend hosted on **Render**.

-----

## Local Setup & Installation ⚙️

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/waydansh/3w-assignment.git
    cd 3w-assignment
    ```

2.  **Set up the Backend:**

      * Navigate to the `backend` directory.
        ```bash
        cd backend
        ```
      * Install dependencies.
        ```bash
        npm install
        ```
      * Create a `.env` file in the `backend` directory and add your MongoDB connection string:
        ```
        MONGO_URI=your_mongodb_connection_string
        ```
      * Start the backend server.
        ```bash
        npm start
        ```

    The backend will be running on `http://localhost:5000`.

3.  **Set up the Frontend:**

      * Open a new terminal and navigate to the `frontend` directory.
        ```bash
        cd frontend
        ```
      * Install dependencies.
        ```bash
        npm install
        ```
      * Start the frontend development server.
        ```bash
        npm run dev
        ```

    The frontend will open and run on `http://localhost:5173` (or another available port).
