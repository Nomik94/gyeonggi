const BossReviewService = require('../../services/bossReview.service');

let mockBossReviewRepository = {
  findAllReview: jest.fn(),
};

let mockUserId = 2;

let bossReviewService = new BossReviewService();
bossReviewService.bossReviewRepository = mockBossReviewRepository;

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

    mockBossReviewRepository.findAllReview = jest.fn(() => {
      return findAllReviewReturnValue;
    });

    const allReview = await bossReviewService.findAllReviews(mockUserId);

    expect(allReview).toEqual(
      findAllReviewReturnValue.sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
    );

    expect(mockBossReviewRepository.findAllReview).toHaveBeenCalledTimes(1);
  });
});
