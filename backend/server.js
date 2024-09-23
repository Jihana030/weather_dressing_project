const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.post('/api/userData', (req,res)=>{
    console.log(req.body);
    res.json('Data received');
});

app.listen(3001, ()=>{
    console.log('server start')
});