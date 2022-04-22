import Transporter from './transporter';

export default class Truck implements Transporter {
 transport(): string {
  return 'Transporting using Truck!';
 }
}
