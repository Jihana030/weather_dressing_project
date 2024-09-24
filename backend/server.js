const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use('/api', userRoutes);

app.post('/api/userData', (req,res)=>{
    console.log(req.body);
    res.json('Data received');
});

app.get('/', (req,res)=>{
    db.query('SELECT * FROM table_name', function (err, results, fields){
        if(err) throw err;
        res.send(results);
    })
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});