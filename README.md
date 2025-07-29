# 🚀 Fullstack App with Docker Compose

This is a fullstack web application consisting of a **React frontend** and a **Node.js backend**, containerized using **Docker** and orchestrated using **Docker Compose**.  
It can be easily deployed on local machines or cloud servers like AWS EC2.

---

## 🧱 Project Structure
project/
├── frontend/
│ ├── Dockerfile
│ ├── package.json
│ └── src/
├── backend/
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
├── docker-compose.yml


---

## ⚙️ Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express
- **Containerization**: Docker
- **Orchestration**: Docker Compose

---

## 🐳 How to Run the Project

### Prerequisites

- Docker installed
- Docker Compose installed

### Steps

# Step 1: Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Step 2: Build and start the containers
sudo docker-compose up --build -d

# Step 3: Access the app
Frontend: http://your-ec2-ip:3000  
Backend:  http://your-ec2-ip:5000

---

🧪 Testing
To verify:
Frontend is up → Visit http://localhost:3000 
Backend is running → curl http://localhost:5000

---

⚙️ Notes
The frontend package.json includes:
"proxy": "http://backend:5000"
His connects React to the backend via the container service name.
Make sure port 3000 and 5000 are open in your server’s security group/firewall.


👨‍💻 Author
Prasad Khade
linkedin.com/in/prasad-khade-438a25218




 
