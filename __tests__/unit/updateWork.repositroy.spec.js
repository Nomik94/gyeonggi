const UpdateWorkRepository = require("../../repositories/updateWork.repository.js");


// posts.repository.js 에서는 아래 5개의 Method만을 사용합니다.
let updateWorkModel = {
  update: jest.fn()
}

let updateWorkRepository = new UpdateWorkRepository(updateWorkModel);

describe('Layered Architecture Pattern Posts Repository Unit Test', () => {

  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  })

  test('updateWorkRepository update Method', async () => {
    updateWorkModel.update = jest.fn(() => {
        return "update Result";
    });

    const updateWork = await updateWorkRepository.update();

    expect(updateWorkRepository.updateWorkModel.update).toHaveBeenCalledTimes(1);

    expect(updateWork).toBe("update Result")
  });


  test('Posts Repository createPost Method', async () => {
    // TODO: 여기에 코드를 작성해야합니다.
  });

});