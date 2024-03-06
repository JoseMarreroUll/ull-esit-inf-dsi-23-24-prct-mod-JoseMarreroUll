import { expect } from 'chai';
import 'mocha';
import { Adapter } from '../src/ejercicio-1/adapter';
import { Complex } from '../src/ejercicio-1/complex';
import { Rational } from '../src/ejercicio-1/rational';


describe('Adaptador de racionales para complejos', () => {
  let rational1 :Rational;
  let rational2 :Rational;
  let complex1 :Complex;
  let complex2 :Complex;

  beforeEach(() => {
    rational1 = new Rational (1, 4);
    rational2 = new Rational (3, 8);
    complex1 = new Complex (5, 8);
    complex2 = new Complex (7, 6);
  });

  it ('Se puede sumar un número racional con uno complejo', () => {
    let rat_adap = new Adapter(rational1);
    let solution = new Complex (21/4, 8);
    expect(rat_adap.add(complex1)).to.be.eql(solution);

    rat_adap = new Adapter(rational2);
    solution = new Complex (43/8, 8);
    expect(rat_adap.add(complex1)).to.be.eql(solution);
  });

  it ('Se puede restar un número racional con uno complejo', () => {
    let rat_adap = new Adapter(rational2);
    let solution = new Complex (-37/8, -8);
    expect(rat_adap.substract(complex1)).to.be.eql(solution);

    rat_adap = new Adapter(rational1);
    solution = new Complex (-19/4, -8);
    expect(rat_adap.substract(complex1)).to.be.eql(solution);
  });

  it ('Se puede multiplicar un número racional con uno complejo', () => {
    let rat_adap = new Adapter(rational1);
    let solution = new Complex (7/4, 3/2);
    expect(rat_adap.multiply(complex2)).to.be.eql(solution);

    rat_adap = new Adapter(rational2);
    solution = new Complex (21/8, 9/4);
    expect(rat_adap.multiply(complex2)).to.be.eql(solution);
  });

  it ('Se puede dividir un número racional con uno complejo', () => {
    const rat_adap = new Adapter(rational2);
    const solution = new Complex (2.625/85, -2.25/85);
    expect(rat_adap.divide(complex2)).to.be.eql(solution);
  });

  it ('Se puede sumar dos números racionales adaptados', () => {
    const rat_adap_1 = new Adapter(rational1);
    const rat_adap_2 = new Adapter(rational2);
    const solution = new Complex(5/8, 0)
    expect(rat_adap_1.add(rat_adap_2)).to.be.eql(solution);
  });

  it ('Se puede restar dos números racionales adaptados', () => {
    const rat_adap_1 = new Adapter(rational1);
    const rat_adap_2 = new Adapter(rational2);
    const solution = new Complex(-1/8, 0)
    expect(rat_adap_1.substract(rat_adap_2)).to.be.eql(solution);
  });

  it ('Se puede multiplicar dos números racionales adaptados', () => {
    const rat_adap_1 = new Adapter(rational1);
    const rat_adap_2 = new Adapter(rational2);
    const solution = new Complex(3/32, 0)
    expect(rat_adap_1.multiply(rat_adap_2)).to.be.eql(solution);
  });

  it ('Se puede dividir dos números racionales adaptados', () => {
    const rat_adap_1 = new Adapter(rational1);
    const rat_adap_2 = new Adapter(rational2);
    const solution = new Complex(2/3, 0)
    expect(rat_adap_1.divide(rat_adap_2)).to.be.eql(solution);
  });
});

describe ('La clase Racional funciona correctamente', () => {
  let rational1 :Rational;
  let rational2 :Rational;

  beforeEach(() => {
    rational1 = new Rational (1, 4);
    rational2 = new Rational (3, 8);
  });

  it('Se suman números racionales correctamente', () => {
    const solution = new Rational(5, 8)
    expect(rational1.add(rational2)).to.eql(solution);
  });
  
  it('Se restan números racionales correctamente', () => {
    const solution = new Rational(-1, 8)
    expect(rational1.substract(rational2)).to.eql(solution);
  });
  
  it('Se multiplican números racionales correctamente', () => {
    const solution = new Rational(3, 32)
    expect(rational1.multiply(rational2)).to.eql(solution);
  });
  
  it('Se dividen números racionales correctamente', () => {
    const solution = new Rational(2, 3)
    expect(rational1.divide(rational2)).to.eql(solution);
  });

  it ('Se devulve el valor absoluto de un número racional', () => {
    const negative_rational = new Rational (-2, 5);
    expect(negative_rational.abs()).to.eql(new Rational(2, 5))
  });
  
  it ('Se invierte un número racional', () => {
    expect(rational1.inv()).to.eql(new Rational(4, 1));
  });

  it ('No se puede invertir un número racional con numerador = 0', () => {
    const aux = new Rational(0, 5);
    expect(aux.inv()).to.be.undefined;
  });

  it('No se puede dividir un racional entre otro que su numerador es 0', () => {
    const newParam = new Rational(0, 5)
    expect(rational1.divide(newParam)).to.be.undefined;
  });
  
  it('No se puede instanciar un racional con denominador 0', () => {
    expect(() => new Rational(8, 0)).to.throw('No se puede inicializar un racional con denominador 0')
  });
});