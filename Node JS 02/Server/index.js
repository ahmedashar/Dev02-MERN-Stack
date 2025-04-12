import http from 'http';
import fsPromise from 'fs/promises';

const server = http.createServer(async (req, res) => {
    if(req.url === "/users" && req.method === "GET"){
        let users = await fsPromise.readFile("./files/users.json", "utf-8");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(users)
    }else{
        res.end("Hello World")
    }
})

server.listen(3000,()=>{
    console.log('Server is running on port http://localhost:3000')
    
})