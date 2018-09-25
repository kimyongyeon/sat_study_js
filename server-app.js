var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var members = []; // => mongodb, mysql 

// get, post, put, delete 
// 입력 
app.post("/members", (req, res) => {
    var member = req.body;
    console.log(req.body);
    members.push(member);
    res.send({
        result: "ok"
    })
});
// 출력 
app.get("/members", (req, res) => {
    res.send({
        members:  members
    });
});
// 수정 
app.put("/members", (req, res) => {

});
// 삭제 
app.delete("/members", (req, res) => {

});

app.get('/', function (req, res) {
  res.send({
      members:  [
        {
            number: 1,
            name: "영희",
            age: 15,
            addr: "광주"
        },
        {
            number: 2,
            name: "철수",
            age: 16,
            addr: "경기도"
        },
        {
            number: 3,
            name: "수미",
            age: 17,
            addr: "강원도"
        },
    ]
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});