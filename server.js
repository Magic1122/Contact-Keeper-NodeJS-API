const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect to DB
connectDB()

// Init Middleware, it need to be added to have the ability to accept body data with the requests
app.use(express.json({ extended: false }))


const PORT = process.env.PORT | 5000

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to the ContactKeeper API'
    })
})

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
