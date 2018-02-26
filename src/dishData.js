import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri + '/menu', (err, db) => {
  assert.equal(null, err);

  db.collection('dishes').insertMany([
    {id :1,dishName :'French Fries',dishPrice :4},
    {id :2,dishName :'Lobster Bisque',dishPrice :5.95},
    {id :3,dishName :'Caesar Selections',dishPrice :8.95},
    {id :4,dishName :'Crab Sandwich',dishPrice :7.95}
  ]).then(response => {
    console.info('Dishes', response.insertedCount);
    db.close();
  });
});
