import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    description:{
        type: String,
    },
},{
    timestamps: true,
})

const TodoModel = mongoose.model('Todos', todoSchema)

export default TodoModel







// const userSchema = new mongoose.Schema(
//     {
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//         minLength: 3,
//         maxLength: 50
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true,
//         trim: true,
//         match: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
//     },
//     age: {
//         type: Number,
//         min: 1,
//         max: 120,
//         required: true,
//     },
//     isActive: {
//         type: Boolean,
//         default: true
//     },
//     roles: {
//         type: [String],
//         enum: ['user', 'admin','superadmin', 'guest'],
//         default: ['user']
//     }
// }, {
//     timestamps: true,
// }
// )
