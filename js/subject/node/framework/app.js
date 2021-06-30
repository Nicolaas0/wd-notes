const express = require('express')
const app = express()

// use() method is for incoming request
// app.use((req,res) => {
//    console.log("WE GOT A REQUEST")
//    res.send('Hello we got your request!')
// })

app.listen(3000, () => {
   console.log("SERVER RESTARTED!")
})

app.get('/profile', (req, res) => {
   console.log('ENTERING PROFILE!')
   res.send('THIS IS YOUR PROFILE')
})

app.post('/profile', (req, res) => {
   res.send('THIS IS YOUR PROFILE BUT IN POST')
})

app.get('/profile/:username', (req, res) => {
   const { username } = req.params;
   res.send(`YOU ARE IN THE ${username} profile`)
})

app.get('/search', (req, res) => {
   const { query } = req.query;
   res.send(`Search result : ${query}`)
})