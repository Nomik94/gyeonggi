const BossReviewService = require('../../services/bossReview.service');

let mockBossReviewService = {
  findAllReview: jest.fn(),
};

let bossReviewService = new BossReviewService();
bossReviewService.BossReviewRepository = mockBossReviewService;

describe('Boss Review Service Unit Test', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('findAllReview', async () => {
    const findAllReviewReturnValue = [
      {
        star: 3,
        content: 'content_1',
        createdAt: new Date('07 October 2011 15:50 UTC'),
      },
      {
        star: 1,
        content: 'content_2',
        createdAt: new Date('06 October 2011 15:50 UTC'),
      },
    ];

    mockBossReviewService.findAllReview = jest.fn(() => {
      return findAllReviewReturnValue;
    });

    const allReview = await bossReviewService.findAllReview();

    expect(allReview).toEqual(
      findAllReviewReturnValue.sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
    );
  });
});
