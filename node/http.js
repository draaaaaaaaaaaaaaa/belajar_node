/**
 * core modul : http
 * 
 * Membuat server sederhana mengunakan modul sederhana
 */

const http = require("http"); 

const server = http.createServer((req,res) => {
    //inisiasi variabel yang akan digunakan
    let data;

    console.log(req);

    /**
     * object reques itu banyank , tapi yangdipakai cuman tiga
     *  url,method dan header
     */

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    res.setHeader("Content-Type","application/json")

    res.end(JSON.stringify(data))
})

server.listen(5000)