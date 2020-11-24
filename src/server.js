import express from 'express';
import * as bodyParser from 'body-parser';
import mainRoute from './routes';
import DataBaseServer from './libs/Database';
import cors from 'cors';


export default class Server {

  constructor(config) {
    this.app = express();
    this.config= config;
  }

  bootstrap = () => {
    this.initBodyParser();
    this.setUpRoutes();

    return this;

  }

  initBodyParser = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
  }

  run = () => {
    const { app, config: { PORT: port, MONGO_URL: mongoUrl } } = this;
    DataBaseServer.open(mongoUrl).then(() => {
      app.listen(port, error => {
        if (error) {
          throw error
        }
        console.log('App is running successfully at port number: ' + port);
      });
    });
  }


  setUpRoutes = () => {
    const { app } = this;
    app.use(cors());
    console.log('-----------------------In Set Up routes----------------------');
    app.get('/health', (req, res) => {
      res.send('okayyy');
    });
    app.use('/api', mainRoute);
    return this;
  }
}