const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const PORT = process.env.PORT || 3000;

const app = express()

app.use(cors({
  origin: 'https://code-reviewer-rust-pi.vercel.app', // your actual frontend URL
  credentials: true
}));


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

module.exports = app