var request = require("request");
var http = require("http");
var fs = require ("fs");
// const bodyParser = require('body-parser');
var data = fs.readFileSync('./data.json');
var url =  "http://localhost:8080/vegetables"
var port = process.env.PORT || 8080


// .use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
// .use(bodyParser.json())

http.createServer(function(req,res){
    let projects = JSON.parse(data);
 
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(projects));
    res.end();
  
    // fs.readFile("./data.json","utf8",fuction(err,Data){
    //     res.writeHead(200, {'Content-Type': 'json'});
    //     res.send(Data);
    //     res.end()
    // });
    //    res.writeHead(200, {'Content-Type': 'application/json'});
    //    res.write(write);
    //    res.end(JSON.stringify(projects, null, 2));
    // fs.readFile("./data.json", "utf8", (err, Data) => {
    //     if (err) {
    //       console.log("File read failed:", err);
    //       return;
    //     }
    //     console.log( Data);
    //   });
}).listen(port, () => {
    console.log('server started',port)
  });