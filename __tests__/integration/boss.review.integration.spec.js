const supertest = require('supertest');
const app = require('../../app.js');
const { sequelize } = require('../../models/index.js');

beforeAll(async () => {
  if (process.env.NODE_ENV === 'test') await sequelize.sync();
  else throw new Error('NODE_ENV가 test 환경으로 설정되어 있지 않습니다.');
});

describe('Boss 리뷰 통합테스트', () => {
  test('api/review/:userId', async () => {
    const response = await supertest(app).get(`/api/review/:userId`);

    expect(response.status).toEqual(200);

    expect(response.body).toEqual({
      data: [
        // {
        //   star: 3,
        //   content: 'content_1',
        //   createdAt: new Date('07 October 2011 15:50 UTC'),
        // },
        // {
        //   star: 1,
        //   content: 'content_2',
        //   createdAt: new Date('06 October 2011 15:50 UTC'),
        // },
      ],
    });
  });
});

afterAll(async () => {
  // 통합 테스트가 완료되었을 경우 sequelize의 연결된 테이블들의 정보를 초기화합니다.
  if (process.env.NODE_ENV === 'test') await sequelize.sync({ force: true });
  else throw new Error('NODE_ENV가 test 환경으로 설정되어 있지 않습니다.');
});
