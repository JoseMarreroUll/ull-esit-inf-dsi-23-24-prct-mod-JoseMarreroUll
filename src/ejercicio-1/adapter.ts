import { Complex } from "./complex"
import { Rational } from "./rational"

export class Adapter extends Complex {
  constructor(rational: Rational) {
    super(rational.numerador/rational.denominador, 0);
  }
}