// const http = require('http');
// const fs = require('fs');
// const url = require('url');

require('dotenv').config()
// console.log(process.env)

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.send('Hello from Home page.');
})

app.get('/about',(req,res)=>{
    return res.send(`Hello from About page`);
})

app.get('/contact-us',(req,res)=>{
    return res.send('Hello from Contact Us page.');
})

// function myHandler(req,res){
//     // console.log('New Request Rec.');
//     // console.log(req);
//     // res.end('Hello Server Again');
//     const URL = req.url;
//     const log = `Request received : ${Date()} at URL ${URL} and ${req.method} Method is used\n`;
//     const myURL = url.parse(URL,true);
//     console.log(myURL);
//     fs.appendFile('log.txt',log,(err,data)=>{ 
//         switch(myURL.pathname){
//             case '/':
//                 res.end('Homepage');  
//                 break;
//             case '/about':
//                 const username = myURL.query.name; 
//                 res.end(`You are ${username}`);
//                 break;
//             case '/contact-us':
//                 res.end("Contact Us");
//                 break;
//             case '/signup':
//                 if(req.method==='GET'){ 
//                     res.end("This is Sign-up form.");
//                 }    
//                 else if(req.method==='POST'){
//                     //DB query
//                     res.end('Success!');
//                 }           
//                 break;
//             default:
//                 res.end("404 Not Found!");                 
//         }   
//     })
// }

// const myServer = http.createServer(myHandler);

// const myServer = http.createServer(app);

// myServer.listen(5000,()=>{
//     console.log('Server Started!');
// })

app.listen(process.env.PORT,()=>{
    console.log('Server Started!');
})


