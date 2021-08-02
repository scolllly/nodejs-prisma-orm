import express from 'express';
import userController from './controller/user-controller'

const server = express();
const port = process.env.PORT || 3000;

//midleware
server.use(express.json());

server.use('/users',userController);



server.listen(port, () => {
    console.log(`Server running at port: `+ port);
});
