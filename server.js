const http = require('http')
const app = require('./app.js')

const port = process.env.PORT || 5000
const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`started on port ${port}`)
})