import TodoModel from "../model/todo.model.js";

const addTodo = async (req, res) => {
    try {
        const data = req.body;
        if (!data?.title) {
            return res.status(400).json({ message: "Title is required", isSuccess: false });
        }
        // save into mongodb
        const todo = new TodoModel(data);
        await todo.save();

        res.status(201).json({ message: "Todo added successfully", isSuccess: true, data: todo });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error " + error?.message, isSuccess: false });
    }
}
const getTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();

        res.status(201).json({ message: "Todos fetch successfully", isSuccess: true, data: todos });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error " + error?.message, isSuccess: false });
    }
}
const getTodo = async (req, res) => {
    try {
        let id = req.params.id;
        const todo = await TodoModel.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found", isSuccess: false });
        }
        res.status(201).json({ message: "Todo fetch successfully", isSuccess: true, data: todo });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error " + error?.message, isSuccess: false });
    }
}

const updateTodo = async (req, res) => {
    try {
        let id = req.params.id;
        const data = req.body;

        if (!data?.title) {
            return res.status(400).json({ message: "Title is required", isSuccess: false });
        }

        const todo = await TodoModel.findByIdAndUpdate(id,data, {new: true});

        if (!todo) {
            return res.status(404).json({ message: "Todo not found", isSuccess: false });
        }

        res.status(201).json({ message: "Todo Updated Successfully", isSuccess: true, data: todo });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error " + error?.message, isSuccess: false });
    }
}
const replaceTodo = async (req, res) => {
    try {
        let id = req.params.id;
        const data = req.body;

        if (!data?.title) {
            return res.status(400).json({ message: "Title is required", isSuccess: false });
        }

        const todo = await TodoModel.findOneAndReplace({_id:id},data, {new: true, overwrite: true});

        if (!todo) {
            return res.status(404).json({ message: "Todo not found", isSuccess: false });
        }

        res.status(201).json({ message: "Todo Updated Successfully", isSuccess: true, data: todo });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error " + error?.message, isSuccess: false });
    }
}

const deleteTodo = async (req, res) => {
    try {
        let id = req.params.id;
        const todo = await TodoModel.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({ message: "Todo not found", isSuccess: false });
        }

        res.status(201).json({ message: "Todo Deleted Successfully", isSuccess: true, data: todo });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error " + error?.message, isSuccess: false });
    }
}
export { addTodo, getTodos, getTodo, updateTodo, replaceTodo,deleteTodo }