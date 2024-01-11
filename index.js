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
    res.send('멍멍')
  }else if(p === 'cat'){
    res.send('야옹')
  }else if(p === 'pig'){
    res.send('꿀꿀')
  }else{
    res.send('알수없는 동물입니다')
  }
})



app.get('/user/:id', (req,res) => {
    const q = req.params 
    res.send(q.id)
})

app.listen(3000)