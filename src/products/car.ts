import Transporter from './transporter';

export default class Car implements Transporter { 
 transport(): string {
  return 'Transporting using Car!';
 }
}
