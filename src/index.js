import config from './config/configurations';
import Server from './server';
const server = new Server(config);
server.bootstrap();
server.run();