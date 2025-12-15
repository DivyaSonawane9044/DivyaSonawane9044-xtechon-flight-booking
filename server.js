require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/xtechon_flights';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Ensure tickets dir exists
const ticketsDir = process.env.PDF_OUTPUT_DIR || './tickets';
if (!fs.existsSync(ticketsDir)) fs.mkdirSync(ticketsDir, { recursive: true });

// Models
const Flight = require('./models/Flight');
const User = require('./models/User');
const Booking = require('./models/Booking');
const Attempt = require('./models/Attempt');

// Routes
app.use('/api/flights', require('./routes/flights'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/users', require('./routes/users'));

// Serve tickets
app.use('/tickets', express.static(path.resolve(ticketsDir)));

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
