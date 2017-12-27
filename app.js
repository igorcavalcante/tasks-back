const express = require("express")
const bodyPaser = require("body-parser")
const {Sprint, Project} = require("./model/Tasks.js")

const app = express()
app.use(bodyPaser.json())

app.post("/task", (req, res) => {
    const prj = Project.findOne({name: req.body.project})
        .then(result => {
            console.log(result)
            req.body.project = result
            const sprint = new Sprint(req.body)

            return sprint.save()
        }).then((err, res) => {
            console.log("task salva com sucesso", result)

            res.status(200).send(result)
        }).catch(e => {
        res.status(400).send(e)
    })
})

app.listen(3000, () => console.log("rodando na porta 3000"))
