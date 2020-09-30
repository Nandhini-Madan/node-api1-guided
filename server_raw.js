const http = require("http");
const server = http.createServer((req, res) => {

    //use req to get information about http request
    //use "res" to send information back to the browser
    //Status code 

    //200 success code

    //send back a "succes" status code
    res.statusCode = 200
    //tell browser we are sending the HTML
    res.setHeader("content-Type", "text/html")
    //send the actual HTML
    res.write("<h1>Hello,university</h1>")
    //send this build response out into the internet
    res.end()
})

//Web server need to be continuously listening
server.listen(8080,()=>{
    console.log("server started")
})
