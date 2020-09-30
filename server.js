const express =require("express")

const server=express()

server.get("/",(req,res)=>{

    res.json({message:"hello,World"})
})

server.get("/users",(req,res)=>{
    const users=db.getUsers()

    res.json(users)
})

server.get("/users/:id",(req,res)=>{
    const id=req.params.id
    const user=db.getUserById(id)

    if(user){
        res.json(user)
    }
    else{
        res.status(404).json(
            {
                message:"user not found",
            }
            
        )
    }
})

server.post("/users",(req,res)=>{
    const newUser=db.CreateUser({
        name:"BOB Doe",
    })
    res.status(201).json(newUser)
})

server.listen(8081, () =>{
    console.log("server started")
})