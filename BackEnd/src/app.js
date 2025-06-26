const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: 'https://code-reviewer-iw1z.onrender.com', // your actual frontend URL
    methods: ["GET", "POST"],
  credentials: true
})
);


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app;