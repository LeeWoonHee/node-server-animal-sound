const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.json('hello world')
})

app.get('/sound/:name', (req,res) => {
  const p = req.params.name
  if(p === 'dog') {
    res.json({'sound' : '멍멍'})
  }else if(p === 'cat'){
    res.json({'sound' : '야옹'})
  }else if(p === 'pig'){
    res.json({'sound' : '꿀꿀'})
  }else{
    res.send('알수없는 동물입니다')
  }
})


app.listen(3000)