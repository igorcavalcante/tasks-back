const tasks = require("./model/Tasks.js")

const project1 = new tasks.Project({name: "MVP"})
project1.save()

const task1 = new tasks.Sprint({time: "60", taskName: "Setup do projeto", project: project1})
task1.save()
