const ReviewRepository = require('../../repositories/bossReview.repository');

let mockReviewModel = {
  findAll: jest.fn(),
};

let reviewRepository = new ReviewRepository(mockReviewModel);

describe('Boss Review Repository Unit Test', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('findAll', async () => {
    mockReviewModel.findAll = jest.fn(() => {
      return 'findAll Result';
    });

    const reviews = await reviewRepository.findAllReview();

    expect(reviews).toBe('findAll Result');
  });
});
