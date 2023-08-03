//import json server
const jsonserver= require('json-server');

//create a server using json-server
const server = jsonserver.create()

//set up the path for db.json
const router = jsonserver.router('db.json')

//return a middle ware used bt json server
const middleware = jsonserver.defaults()

//setup port
const port =process.env.PORT || 3001

//use in server
server.use(middleware)
server.use(router)

//to run the port
server.listen(port,()=>{
    console.log('jsonserver listening on the port 3001');
})