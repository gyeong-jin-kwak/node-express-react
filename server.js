const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function(){
  console.log('listening on 8080')
});

// 2 public에 있는 static 파일을 쓰겠다
// app.use( express.static( path.join(__dirname, 'public') ) );

// 3
// app.use( express.static( path.join(__dirname, 'react-project/build') ) );

// 7 기본은 main.html, /react url 입력시 페이지 이동
app.use( '/', express.static( path.join(__dirname, 'public') ) );
app.use( '/react', express.static( path.join(__dirname, 'react-project/build') ) );

// 1, 6 (주석 풀어줌)
app.get('/', function(request, answer){
  answer.sendFile( path.join(__dirname, 'public/main.html') )
});

//4
app.get('/', function(request, answer){
  answer.sendFile( path.join(__dirname, 'react-project/build/index.html') )
});

//5 *(모든글자) 어떤 글자를 쓰든 리액트 html을 보내주어라
// app.get('*', function(request, answer){
//   answer.sendFile( path.join(__dirname, 'react-project/build/index.html') )
// });