import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();//创建express脚本实例
const port = 3000;


// 将数字转换为对应的星期几名称
// let dayName;
app.get("/", (req, res) => {
    // 创建一个日期对象表示当前日期
    const today = new Date();
    const day = today.getDay();
    // console.log(day);
    let type = "a weekday";
    let adv = "it is time to work hard";
    if (day ===0 || day ===6){
        type = "the weekend";
        adv = "it is time to have fun";
    }
    // 使用 getDay() 方法获取星期几
    const dayOfWeek = today.getDay();
        res.render("index.ejs",{
        dayType:type,
        advice:adv,
        });
    });//创建根路由
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

