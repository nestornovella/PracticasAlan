const {
    esPar,
    esMultiploDeDosYCinco,
    mirror,
    arrayToObject,
    cuentaCifras,
    elMasGrandeYelMasPequeno,
    numeroAestrella,
    aLenguageInclusivo,
    Potenciado,
    toCamelCase,
    filtraLosPares
} = require('../evaluaciones/evaluacionInicial'); 

describe('esPar', () => {
    test('Identifica si un número es par', () => {
        expect(esPar(4)).toBe('es par');
        expect(esPar(7)).toBe('es inpar');
        expect(esPar(12)).toBe('es par');
        expect(esPar(3)).toBe('es inpar');
    });
});

describe('esMultiploDeDosYCinco', () => {
    test('Verifica si un número es múltiplo de 2 y 5', () => {
        expect(esMultiploDeDosYCinco(10)).toBe(true);
        expect(esMultiploDeDosYCinco(7)).toBe(false);
        expect(esMultiploDeDosYCinco(20)).toBe(true);
        expect(esMultiploDeDosYCinco(11)).toBe(false);
    });
});

describe('mirror', () => {
    test('Invierte una palabra', () => {
        expect(mirror('Hola mundo')).toBe('odnum aloH');
        expect(mirror('un saludo')).toBe('odulas nu');
    });
});

describe('arrayToObject', () => {
    test('Convierte un array a un objeto con propiedades específicas', () => {
        expect(arrayToObject(['Juan', 'password123', 'juan@example.com'])).toEqual({
            name: 'Juan',
            password: 'password123',
            email: 'juan@example.com',
        });
    });
});

describe('cuentaCifras', () => {
    test('Cuenta la cantidad de dígitos en un número', () => {
        expect(cuentaCifras(132)).toBe(3);
        expect(cuentaCifras(49322)).toBe(5);
        expect(cuentaCifras(4932231)).toBe(7);
        expect(cuentaCifras(4)).toBe(1);
    });
});

describe('elMasGrandeYelMasPequeno', () => {
    test('Encuentra el número más grande y más pequeño en un array', () => {
        expect(elMasGrandeYelMasPequeno([3, 1, 5, 9])).toEqual({ min: 1, max: 9 });
        expect(elMasGrandeYelMasPequeno([100, 300, 99, 15, 800])).toEqual({ min: 15, max: 800 });
    });
});

describe('numeroAestrella', () => {
    test('Convierte un número a una cadena de estrellas', () => {
        expect(numeroAestrella(9)).toBe('*********');
        expect(numeroAestrella(4)).toBe('****');
        expect(numeroAestrella(18)).toBe('******************');

    });
});

describe('aLenguageInclusivo', () => {
    test('Convierte palabras al lenguaje inclusivo', () => {
        expect(aLenguageInclusivo('todos')).toBe('todes');
        expect(aLenguageInclusivo('bienvenidos')).toBe('bienvenides');
    });
});

describe('Potenciado', () => {
    test('Calcula la potencia de un número', () => {
        expect(Potenciado(2, 2)).toBe(4);
        expect(Potenciado(2, 4)).toBe(16);
        expect(Potenciado(3, 3)).toBe(27);

    });
});

describe('toCamelCase', () => {
    test('Convierte una frase a camelCase', () => {
        expect(toCamelCase('hola mundo')).toBe('holaMundo');
        expect(toCamelCase('comenzar de nuevo')).toBe('comenzarDeNuevo');
        expect(toCamelCase('vida muerte')).toBe('vidaMuerte');
        

    });
});

describe('filtraLosPares', () => {
    test('Filtra los números pares de un array', () => {
        expect(filtraLosPares([1, 8, 9, 4])).toEqual([8, 4]);
        expect(filtraLosPares([1, 3, 5, 13])).toEqual([]);
        expect(filtraLosPares([1, 2, 3, 3, 11, 100])).toEqual([2, 100]);
    });
});
