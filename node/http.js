/**
 * Core modul : http
 * 
 * membuat server menggunakan module http
 */

 const http = require("http") //! Membuat modul http

 const server = http.createServer((req, res) => {
 
     // inisialisasi variable yang akan digunakan
     let data;
 
     console.log(req);
 
 
     /**
      * object request itu banyak, tapi yang sering dipakai hanya 3 :
      * url, method, headers.
      */
 
     // create object yang berisi url, method, dan headers
 
     data = {
         url : req.url,
         method : req.method,
         header : req.headers,
     };
 
     //* ini akan merubah set response menjadi berupa data json
     res.setHeader("Content-Type", "application/json")
 
     res.end(JSON.stringify(data))
 });
 
 server.listen(5000)