import express from 'express';

import postRoutes from "./routes/post.routes.js"

const app = express();
const PORT = "3000";

app.use(express.json()) // for parsing application/json

app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.use('/api/posts', postRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})

// save algo
// get Data
// req.body
// already exist check
// push new data
// write data to file
// send response

// edit elgo
// get data
// req.body
// req.params
// find index by id
// update data with req.body
// write data to file
// send response



// express.json() is a built-in middleware function in Express that parses incoming requests with JSON payloads and makes the parsed data available in req.body.


// It checks the Content-Type header.

// If it's application/json, it reads the request body.

// It then parses the JSON string into a JavaScript object.

// That object is assigned to req.body.