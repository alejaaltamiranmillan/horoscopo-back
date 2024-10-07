const express = require('express');
const {urlencoded, json} = require('express');
const router = require('./routes/signos.routes.js');
const cors = require('cors');

const app = express();

app.use(urlencoded({extended: true}))
app.use(json())

const corsOptions = {
    origin: '*',
    methods: 'GET, HEAD, PATCH, POST, PUT, DELETE',
    allowedHeaders: ['Content-Type, Authorization']
};

app.get('/', (req, res)=>{
    res.send("hola mundo")
})

app.use(cors())
app.use('/api', router);

app.listen(4001, ()=>{
    console.log('listening at port 4001');
})