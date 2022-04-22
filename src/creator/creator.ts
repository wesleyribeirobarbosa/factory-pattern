import Transporter from '../products/transporter';

export default abstract class Creator {
 abstract factoryMethod(): Transporter;

 genTransportCode(): number {
  return Math.random() * 1000;
 }

}