const express = require('express');

const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200',
    //domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép), 
    //giả sử node server là http://localhost:8000
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
const app = express();
app.use(cors(corsOptions));

app.use(express.json());


app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/products').get((req, res) => {
    console.log('products');
    res.send([{ name: 'Book', id: '1', price: '600' }, { name: 'Poem', id: '2', price: '700' }, { name: 'Novel', id: '3', price: '800' }]
    );
});


// dung cho phan insert
app.route('/api/insert').post((req, res) => {

    console.log('insert product');
    console.log('item info:' + req.body);
    //res.send(201, req.body);
    res.status(201).send(req.body);
});