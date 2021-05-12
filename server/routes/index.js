var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors())

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://ProcioneOuO:procione@cluster0.4jsac.mongodb.net/test';

/* GET */
router.get('/getDogList', function (req, res, next) {
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("baratieri").collection("dogs");
        collection.find().toArray((err, result) => {
            if (err) console.log(err.message);
            else { res.send(result); }
            client.close();
        });
    });
    
});

module.exports = router;
