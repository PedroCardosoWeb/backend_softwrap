const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())
server.use(express.json())

const PeopleRoutes = require('./routes/PeopleRoutes')
server.use('/people', PeopleRoutes)

server.listen(3000, () => {
  console.log('API online')
});
