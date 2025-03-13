require('dotenv').config()
const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes')

const app = express();
const port = process.env.port || 3000;

connectToDB();

app.use(express.json());

app.use('/api/books',bookRoutes);



app.listen(port,()=>{
    console.log(`Server is now running on port ${port}`);
});

