import express from 'express';
import data from '../src/menu-data';

const router = express.Router();

router.get('/dishes',(req,res) => {
  res.send( { dishes: data.dishes });
});

export default router;
