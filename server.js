const express = require("express")

server.use = (express.json())

server.get("/", (req, res) => {

    res.json({ message: "hello,World" })
})

server.get("/users", (req, res) => {
    const users = db.getUsers()

    res.json(users)
})

server.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = db.getUserById(id)

    if (user) {
        res.json(user)
    }
    else {
        res.status(404).json(
            {
                message: "user not found",
            })
    }
})

server.post("/users", (req, res) => {
    const newUser = db.CreateUser({
        name: req.body.name,
    })
    res.status(201).json(newUser)
})

server.put("/users/:id", (req, res) => {
    const id=req.params.id
    const user=db.getUserById(id)
    if(user){
        const updatedUser=db.updateUser(id,{
            name:req.body.name,
        })
        res.json(updatedUser)
    }
    else{
        res.status(404).json({
            message:"user not found"
        })
    }


})
server.delete("/users/:id", (req, res) => {
    const id=req.params.id
    const user=db.getUserById(id)

    if(user){
        db.deleteUser(id)
        res.staus(204).end()
    }
    else{
        res.status(404).json({
            message:"User not found",
        })
    }

})
server.listen(8081, () => {
    console.log("server started")
})