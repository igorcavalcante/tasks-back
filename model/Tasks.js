const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/tasks")

const projectSchema = new Schema({
    name: String,
    cost: Number
})

const Project = mongoose.model("Project", projectSchema)

const Sprint = mongoose.model("Sprint", {
    timeInit: {
        type: Date,
        required: true
    },
    timeEnd: {
        type: Date,
        required: false
    },
    time: {
        type: Number,
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    project: {
        type: projectSchema,
        required: true
    }
})

exports.Sprint = Sprint
exports.Project = Project