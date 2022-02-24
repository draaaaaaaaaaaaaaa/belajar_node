/**
 * terdapat 2 bentuk transaksi 
 * yaitu uplod yaitu mengirim data ke klayen
 * donwload yaitu menerima data dari dari user
 */

const http = require("http");
const querystring = require("querystring");
const server = http.createServer((req,res) => {
    let urlReq,
    methodReq,
    dataReq;

    const chunkArr =[]
    const dataResponse = {}

    res.setHeader("Content-Type","application/json")

    urlReq = req.url
    methodReq = req.method
    
    if(urlReq.toLowerCase() === "/login"){
        if(methodReq.toLowerCase() === "get"){
            dataResponse.data = "ini Adalah halaman login"
        }else if(methodReq.toLowerCase() === "post"){
            //bufering data body
            req.on("data",(chunk) => {
                chunkArr.push(chunk) //maka akan menambah kan data chunk ke chunkarr
            })
        }else{
            dataResponse.data="Ubah method ke get atau post"
        }
    }else{
        dataResponse.data="gunkan endpoint /login"
    }

    req.on("end", () => {
        if(chunkArr.length !== 0){
            dataReq = Buffer.concat(chunkArr).toString()
            console.log(dataReq)

            let requestObj = querystring.parse(dataReq);

            dataResponse.data = requestObj;
        }
        return res.end(JSON.stringify(dataResponse))
    })
})

server.listen(3000)