const WorkShowRepository = require('../../repositories/workshow.repository');

let mocksStartWorkModel = {
  findAll: jest.fn(),
};

let workShowRepository = new WorkShowRepository(mocksStartWorkModel);

describe('Start Work Repository Unit Test', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('findAll', async () => {
    mocksStartWorkModel.findAll = jest.fn(() => {
      return 'findAll Result';
    });

    const startWorks = await workShowRepository.findAllStartWork();

    expect(startWorks).toBe('findAll Result');
  });
});
