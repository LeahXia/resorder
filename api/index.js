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
    dishes[dish.id] = dish;
  });

});

export default router;
