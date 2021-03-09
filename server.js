const express = require('express');
const connectDB = require('./config/db');

const app = express();

// All uncaught SYNC  error exceptions
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION!!! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Connecting DB
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running...'));

// Define Routes
// app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
} );