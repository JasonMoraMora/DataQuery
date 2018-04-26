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

//----Crear Documento
app.post('/createDoc', (req, res)=>{    
    var MyObj = JSON.parse(req.body.items);
    MongoClient.connect(url, (err, client)=> {
        test.equal(null, err);
        var db = client.db(dbName);
        db.collection('Information').insertOne(MyObj, (err, result)=>{
            test.equal(null, err);
            console.log('Datos registrados correctamente');
            db.collection('Information').find({}).toArray((err, result)=>{                
                res.render('index', {title: 'DataQuery', records: result});
                client.close();
            });   
        });   
    });
});

//----Actualizar Documento
app.post('/updateDoc', (req, res)=>{
    var MyObj = JSON.parse(req.body.items);    
    var query = { ndocumento: MyObj.ndocumento };        
    var newValues = { $set : MyObj};
    MongoClient.connect(url, function(err, client) {
        test.equal(null, err);
        var db = client.db(dbName);
        db.collection('Information').updateOne(query, newValues, (err, result)=>{
            test.equal(null, err);
            console.log('Datos actualizados');
            db.collection('Information').find({}).toArray((err, result)=>{                
                res.render('index', {title: 'DataQuery', records: result});
                client.close();
            });   
        });
    });
});

app.post('/deteteDoc', (req, res)=>{
    var MyObj = JSON.parse(req.body.NDoc);   
    var query = { ndocumento : MyObj };         
    MongoClient.connect(url, function(err, client) {
        test.equal(null, err);
        var db = client.db(dbName);
        db.collection('Information').deleteOne(query, (err, result)=>{
            test.equal(null, err);
            console.log('Datos Eliminados correctamente');
            db.collection('Information').find({}).toArray((err, result)=>{                
                res.render('index', {title: 'DataQuery', records: result});
                client.close();
            });   
        });
    });    
});

app.post('/SearchDocToUpd', (req, res)=>{    
    var NDoc = parseInt(req.body.NDoc);
    var query = { ndocumento: NDoc };
    MongoClient.connect(url, (err, client)=> {    
        test.equal(null, err);
        var db = client.db(dbName);
        db.collection("Information").findOne(query, (err, result)=>{
            res.send(result);            
        });        
    });
});

app.post('/SearchDocToDel', (req, res)=>{    
    var NDoc = parseInt(req.body.NDoc);
    var query = { ndocumento: NDoc };
    MongoClient.connect(url, (err, client)=> {    
        test.equal(null, err);
        var db = client.db(dbName);
        db.collection("Information").findOne(query, (err, result)=>{
            res.send(result);
        });        
    });
});

//RUN SERVER
app.listen(3000, ()=>{
    console.log('Servidor web iniciado en el puerto 3000');
});