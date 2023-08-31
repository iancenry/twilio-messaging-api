require('dotenv').config();
const express = require('express');
const path = require('path');
// const cors = require('cors') - add if frontend was on different server
// const bodyParser = ('body-parser') - will add later

const app = express();

//render the single page application public/index.html
app.use(express.static(path.join(__dirname, 'public')));

const apiRoutes = require('./routes/api/message.js');

const PORT = process.env.port || 5000;

// app.use(cors());
// app.use(bodyParser.json()); - parse the body of requests automatically
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/message', apiRoutes);

app.listen(PORT, () => console.log(`Server running on PORT  ${PORT}`));
