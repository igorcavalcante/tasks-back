const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost:27017/tasks")

const projectSchema = new Schema({
    name: String
})

const Project = mongoose.model("Project", projectSchema)

const Sprint = mongoose.model("Sprint", {
    time: {
        type: Number
    },
    taskName: {
        type: String
    },
     project: projectSchema
})

exports.Sprint = Sprint
exports.Project = Project