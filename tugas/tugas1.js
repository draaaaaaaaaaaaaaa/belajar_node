//buat http
const daffa = require("http")

//buat server
const ramadhan = daffa.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");
    url = req.url

    method = req.method ?  "get";

    if (url.toLocaleLowerCase === "/") {
        dataResponse = {
            data: "Selamat Datang Di HomePage Kami"
        }
    } else if (url.toLocaleLowerCase === "/about") {
        dataResponse = {
            data: "Berhasil Masuk Ke About"
        }
    } else if (url.toLocaleLowerCase === "/form") {
        if (method === "POST") {
            dataResponse = {
                data: " Anda Berhasil Masuk Ke Form Dengan Menggunakan Method POST"
            }
        } else {
            dataResponse = {
                data: `Maaf Coba kemabli, Dan Ubah Mehthod ${method}, Menjadi POST`
            }
        }
    } else {
        dataResponse = {
            data: "404,Page no Found"
        }
    }
})

ramadhan.listen(3000)