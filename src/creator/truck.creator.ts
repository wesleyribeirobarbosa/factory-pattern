import transporter from '../products/transporter';
import Truck from '../products/truck';
import Creator from './creator';

export default class TruckCreator extends Creator {
 factoryMethod(): transporter {
  return new Truck();
 }
}