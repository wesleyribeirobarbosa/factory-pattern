import Car from '../products/car';
import transporter from '../products/transporter';
import Creator from './creator';

export default class CarCreator extends Creator {
 factoryMethod(): transporter {
  return new Car();
 }
}