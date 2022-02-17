/**
 * Routing
 */

//cara mangil http
const http = require("http"); 

//cara bikin server
const server = http.createServer((req ,res) =>{
    let url,
    dataResponse
    //cara jadiin data Json
    res.setHeader("Content-Tyepe","application/json")
    url = req.url

    //Routing
    if(url === "/home"){
        dataResponse = {
            data : "ini adalah Homepage"

        }
    }

    else if (url === "/login"){
        dataResponse = {
            data : "ini adalah login"

        }
    }

    else if (url === "/"){
        dataResponse = {
            data : "Not"
        }
    }

   
    return res.end(JSON.stringify(dataResponse))
}) 

//cara mangil server
server.listen(3000)
