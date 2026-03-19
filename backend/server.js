require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Example MongoDB integration
/*
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
*/

// Sample API Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Wanderlust API!' });
});

app.get('/api/hotels', (req, res) => {
    // Dummy Data
    const hotels = [
        { id: 1, name: 'Oceanview Resort', price: 200, location: 'Maldives', rating: 4.8 },
        { id: 2, name: 'Alpine Ski Lodge', price: 150, location: 'Swiss Alps', rating: 4.5 }
    ];
    res.json(hotels);
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
