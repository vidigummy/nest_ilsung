



// 웹브라우저에서 보낸 데이터를 받아서 처리하는 body-parser를 불러온다.
var bodyParser = require('body-parser')

// 브라우저에서 오는 응답이 json 일수도 있고, 아닐 수도 있으므로 urlencoded() 도 추가한다.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// localhost:3000/email_post 에
// res.send() 내부의 내용을 출력한다.
// 브라우저에서 받은 데이터는 req.body 에 저장된다.
app.post('/', function(req, res) {
    res.send("<h1> welcome! </h1>" + req.body.email)
})