
import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';
import bodyParser from 'body-parser';



const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
  src:path.join(__dirname, 'sass'),
  dest:path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req,res) => {
  serverRender()
    .then(({initialMarkup, initialData}) => {
      res.render('index',{
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);

});


server.use('/api',apiRouter);
server.use(express.static('public'));


server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
