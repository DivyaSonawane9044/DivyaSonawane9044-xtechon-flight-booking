# XTechon Flight Booking (MERN)

## Description
A minimal full-stack flight booking system built for XTechon assignment:
- Database-driven flight search (MongoDB)
- Dynamic surge pricing: 3 attempts in 5 minutes → +10% price; resets after 10 minutes
- Wallet system (default ₹50,000)
- PDF ticket generation (pdfkit)
- Booking history and re-download ticket

## Tech stack
- Backend: Node.js, Express, Mongoose
- Frontend: React (create-react-app)
- DB: MongoDB

## Setup (local)
1. Ensure MongoDB is running locally (default `mongodb://localhost:27017`).
2. Backend:
   ```bash
   cd backend
   cp .env.example .env    # create .env with MONGO_URI and BASE_URL
   npm install
   npm run seed            # seeds 12 flights
   npm run dev             # or npm start
   ```
3. Frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```
4. Open frontend at http://localhost:3000. Backend runs at http://localhost:5000.
