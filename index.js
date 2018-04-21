const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
const express = require('express');
const bodyParser = require('body-parser');

//ACCESS EXPRESS PROPERTY
let app = express();

//URL SERVER
let url = 'mongodb://localhost:27017';

// DATABASE NAME
const dbName = 'DataQuery';

//CONECT SERVER
MongoClient.connect(url, function(err, client) {
    test.equal(null, err);
    console.log("Connected successfully to server");
    client.close();
});

//MODELO DE VISTAS
app.set('view engine', 'hbs');

//CARPETAS PUBLICAS
app.use(express.static('public'));

//PROCESAMIENTO DE DATOS
app.use(bodyParser.urlencoded({extended: false}));

//METODOS HTTP
app.get('/', (req, res)=>{    
    MongoClient.connect(url, function(err, client) {    
        test.equal(null, err);
        var db = client.db(dbName);
        db.collection('Information').find({}).toArray((err, result)=>{
            test.equal(null, err);
            res.render('index', {title: 'DataQuery', records: result});
            client.close();
        });   
    });
});

app.post('/createDoc', (req, res)=>{    
    var MyObj = JSON.parse(req.body.items);    
    console.log(MyObj);
    MongoClient.connect(url, function(err, client) {    
        test.equal(null, err);
        var db = client.db(dbName);
        db.collection('Information').insertOne(MyObj, (err, result)=>{
            test.equal(null, err);
            console.log('Documento registrado correctamente');
            client.close();
        });   
    });
    MongoClient.connect(url, function(err, client) {    
        test.equal(null, err);
        var db = client.db(dbName);
        db.collection('Information').find({}).toArray((err, result)=>{
            test.equal(null, err);
            res.render('index', {title: 'DataQuery', records: result});
            client.close();
        });   
    });
});

//RUN SERVER
app.listen(3000, ()=>{
    console.log('Servidor web iniciado en el puerto 3000');
});