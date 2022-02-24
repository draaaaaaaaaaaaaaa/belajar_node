const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    let urlRequest,
        urlObj,
        urlQuery,
        dataResponse;

    res.setHeader("Content-Type", "application/json");
    urlRequest = req.url;


    urlObj = url.parse(urlRequest);
    console.log(urlObj)
    urlQuery = urlObj.query;

    if (!urlQuery) {
        dataResponse = {
            data: "Query string not found",
        };
        return res.end(JSON.stringify(dataResponse));
    }
    dataResponse = querystring.parse(urlQuery);
    return res.end(JSON.stringify(dataResponse));
});

// set port server
server.listen(3000);