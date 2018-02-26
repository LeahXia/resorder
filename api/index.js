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

router.get('/tempOrder',(req, res) => {
  let dishes = {};
  mdb.collection('tempOrder').find({}).each((err, dish) => {
    assert.equal(null, err);

    if (!dish){
      res.send({dishes});
      return;
    }
    dishes[dish.id] = dish;
  });

});

// router.post('/tempOrder', (req, res) => {
//   const contestId = ObjectID(req.body.contestId);
//   const dishName = req.body.dishName;
//   // validation ...
//   mdb.collection('tempOrder').insertOne({ dishName }).then(result =>
//     mdb.collection('dishes').findAndModify(
//       { _id: contestId },
//       [],
//       { $push: { nameIds: result.insertedId } },
//       { new: true }
//     ).then(doc =>
//       res.send({
//         updatedContest: doc.value,
//         newName: { _id: result.insertedId, name }
//       })
//     )
//   )
//   .catch(error => {
//     console.error(error);
//     res.status(404).send('Bad Request');
//   });
// });

export default router;
