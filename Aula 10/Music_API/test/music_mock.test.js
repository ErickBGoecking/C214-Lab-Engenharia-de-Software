const Music = require('../src/application/music_service');
const Constants = require('../src/utils/Constant');
const Utils = require('../src/utils/utils');
const UsersRepository = require('../src/port/music_repository');

jest.mock('../src/port/music_repository');

test('CREATE - Dado válido', async () => {
    const data = {
        name: "The Nights",
        band: "Avicci"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ ...data, id });

    const result = await Music.create(data);
    expect(result).toEqual({ ...data, id });
})

test('CREATE - Dado duplicado', async () => {
    const data = {
        name: "The Nights",
        band: "Avicci"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Music.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})
