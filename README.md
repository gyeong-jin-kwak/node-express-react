# Node + Express 서버와 React 합치기

* `server.js`
```
const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function(){
  console.log('listening on 8080')
});
```
* package.json 생성 `npm init`
* `npm install express`
* `node server.js` or `nodemon server.js`
* `http://localhost:8080/`
```
// 2 public에 있는 static 파일을 쓰겠다
app.use( express.static( path.join(__dirname, 'public') ) );

// 1
app.get('/', function(request, answer){
  answer.sendFile( path.join(__dirname, 'public/main.html') )
});
```
* `npx create-react-app 'react-project'`
    * `npm install --save react-router-dom`
    * `import { BrowserRouter } from 'react-router-dom';`
    * `<BrowserRouter><App /></BrowserRouter>`
    * `import { Route, Link, Switch } from 'react-router-dom';`
* `npm run build`

## 리액트 프로젝트로 경로 변경
```
// 3
app.use( express.static( path.join(__dirname, 'react-project/build') ) );

//4
app.get('/', function(request, answer){
  answer.sendFile( path.join(__dirname, 'react-project/build/index.html') )
});

```
* 경로를 입력해도 리액트 페이지가 보여질 수 있도록
```
app.get('*', function(request, answer){
  answer.sendFile( path.join(__dirname, 'react-project/build/index.html') )
});
```

## 메인 페이지에서 '/react' url로 리액트 페이지를 보여주고 싶을 때
```
app.use( '/', express.static( path.join(__dirname, 'public') ) );
app.use( '/react', express.static( path.join(__dirname, 'react-project/build') ) );
```
* 리액트 프로젝트의 `package.json`
* `"homepage": "/react",` 추가
* `npm run build`

* `live server` `proxy` 검색