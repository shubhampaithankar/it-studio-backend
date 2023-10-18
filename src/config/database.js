// config/database.js
const mongoose = require('mongoose')

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = mongoose.connection

  db.on('error', (err) => {
    console.error('MongoDB connection error:', err)
  })

  db.once('open', () => {
    console.log('Connected to MongoDB')
  })
}

module.exports = connectDatabase
