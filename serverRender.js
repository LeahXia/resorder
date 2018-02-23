//this file fetch data from API
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/app';

import config from './config';
import axios from 'axios';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/dishes`)
    .then(resp => {
      return {
        initialMarkup:ReactDOMServer.renderToString(
          <App initialDishes={resp.data.dishes}/>
        ),
        initialData:resp.data
      };
    });

export default serverRender;
