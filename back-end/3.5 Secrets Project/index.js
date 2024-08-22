//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();//创建express脚本实例
const port = 3000;
var secret = "ILoveYou"
var check = false;
app.use(bodyParser.urlencoded({ extended: true }));//解析body数据，存在req.body中
function inputAnsCheck(req, res, next) {
  
  console.log(req.body);
  const password = req.body["password"]
  if( password === secret){
    check = true;
  }
  next();
}
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });//创建根路由

app.use(inputAnsCheck);
app.post("/check", (req, res) => {
    if (check){
        res.sendFile(__dirname + "/public/secret.html");
    }
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});