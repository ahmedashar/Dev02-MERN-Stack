import fs from 'fs/promises';

const getPosts = async (req, res)=> {
    try {
        const data = await fs.readFile('posts.json', 'utf-8') 
        const posts = JSON.parse(data);
        res.status(200).json({message: "Data fetched Successfuly", data: posts, status: "sucess"})
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message, status: "failed"})
    }
}
const getPost = async (req, res)=> {
    try {
        const data = await fs.readFile('posts.json', 'utf-8')
        const posts = JSON.parse(data);
        const id = req.params.id;

        const post = posts.find((item) => item.id == id);
        if(!post){
            return res.status(404).json({message: "No Post Found with this id", status: "failed"})
        }

        res.status(200).json({message: "Data fetched Successfuly", data: post, status: "sucess"})
        
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message, status: "failed"})
    }
}

const addPost = async (req, res)=> {
    try {
        const data = await fs.readFile('posts.json', 'utf-8')
        const posts = JSON.parse(data);
        const newPost = req.body;
        posts.push(newPost)

        await fs.writeFile('posts.json', JSON.stringify(posts, null, 2), 'utf-8') 
        res.status(201).json({message: "Post Added Successfully", data: posts, status: "success"})
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message, status: "failed"})
    }
}

const editPost = async (req, res)=> {
    try {
        const data = await fs.readFile('posts.json', 'utf-8')
        const posts = JSON.parse(data);
        const editPostData = req.body;
        const postId = req.params.id;

        const postIndex = posts.findIndex((item) => item.id == postId);

        if(postIndex === -1){
            return res.status(404).json({message: "No Post Found with this id", status: "failed"})
        }
        posts[postIndex] = {...posts[postIndex], ...editPostData};
        let updatedpost = posts[postIndex];
        
        await fs.writeFile('posts.json', JSON.stringify(posts, null, 2), 'utf-8')

        res.status(200).json({message: "Post Updated Successfully", data: updatedpost, status: "success"})
        

    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message, status: "failed"})
    }
}


export {getPosts, getPost , addPost, editPost}