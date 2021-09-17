const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const serviceRoutes = require('./routes/services');
const artistRoutes = require('./routes/artists');

// const dbURI = 'mongodb://localhost/localtrend';
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('Mongodb connected...'))
    .catch((err) => console.log(err));

app.use('/api/services', serviceRoutes);
app.use('/api/artists', artistRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));