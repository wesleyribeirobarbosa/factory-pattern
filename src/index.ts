import express, { json, Request, Response, NextFunction, Router } from 'express';
import CarCreator from './creator/car.creator';
import TruckCreator from './creator/truck.creator';

const server = express();
const bodyParser = json();

const contentType = (req: Request, res: Response, next: NextFunction): void => {
  res.type('json');
  next();
};

server.use(bodyParser);
server.use(contentType);

const router = Router();

router.get('/car', (req, res) => {
  const creator = new CarCreator();
  const car = creator.factoryMethod();
  res.send(car.transport());
});

router.get('/truck', (req, res) => {
 const creator = new TruckCreator();
 const truck = creator.factoryMethod();
 res.send(truck.transport());
});

server.use('/api', router);

server.listen(8000, () => {
 console.log('Server running on port 8000');
});
