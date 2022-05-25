const Constants = require('../src/utils/Constant');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        name: "The Nights",
        band: "Avicci"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        band: "Avicci"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
