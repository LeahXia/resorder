import express from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri + '/menu', (err, db) => {
  assert.equal(null, err);
  mdb = db;
});


const router = express.Router();

router.get('/dishes',(req, res) => {
  let dishes = {};
  mdb.collection('dishes').find({}).each((err, dish) => {
    assert.equal(null, err);

    if (!dish){
      res.send({dishes});
      return;
    }
    dishes[dish._id] = dish;
  });
});

router.get('/tempOrder',(req, res) => {
  let dishes = {};
  mdb.collection('tempOrder').find({}).each((err, dish) => {
    assert.equal(null, err);

    if (!dish){
      res.send({dishes});
      return;
    }
    dishes[dish._id] = dish;
  });

});

router.post('/orders', (req, res) => {
  const dishesOrdered = req.body;
  const order = {dishesOrdered};

  mdb.collection('orders').insertOne(order, function(err){
    assert.equal(null, err);
    var orderID = order._id;
    res.send({
      [orderID]:dishesOrdered
    });
  });
});

export default router;
