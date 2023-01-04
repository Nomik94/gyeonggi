const PostRepository = require("../../../repositories/posts.repository.js");


// posts.repository.js 에서는 아래 5개의 Method만을 사용합니다.
let mockPostsModel = {
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}

let postRepository = new PostRepository(mockPostsModel);

describe('Layered Architecture Pattern Posts Repository Unit Test', () => {

  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  })

  test('Posts Repository findAllPost Method', async () => {

    // findAll Mock의 Return 값을 "findAll String"으로 설정합니다.
    mockPostsModel.findAll = jest.fn(() => {
      return "findAll String"
    });

    // postRepository의 findAllPost Method를 호출합니다.
    const posts = await postRepository.findAllPost();

    // postsModel의 findAll은 1번만 호출 되었습니다.
    expect(postRepository.postsModel.findAll).toHaveBeenCalledTimes(1);

    // mockPostsModel의 Return과 출력된 findAll Method의 값이 일치하는지 비교합니다.
    expect(posts).toBe("findAll String");
  });


  test('Posts Repository createPost Method', async () => {

    // create Mock의 Return 값을 "findAll String"으로 설정합니다.
    mockPostsModel.create = jest.fn(() => {
      return "create Return String"
    });

    // createPost Method를 실행하기 위해 필요한 Params 입니다.
    const createPostParams = {
      nickname: "createPostNickname",
      password: "createPostPassword",
      title: "createPostTitle",
      content: "createPostContent",
    }

    // postRepository의 createPost Method를 실행합니다.
    const createPostData = await postRepository.createPost(
      createPostParams.nickname,
      createPostParams.password,
      createPostParams.title,
      createPostParams.content,
    );

    // createPostData는 postsModel의 create를 실행한 결과값을 바로 반환한 값인지 테스트합니다.
    expect(createPostData).toBe("create Return String");

    // postRepository의 createPost Method를 실행했을 때, postsModel의 create를 1번 실행합니다.
    expect(mockPostsModel.create).toHaveBeenCalledTimes(1);

    // postRepository의 createPost Method를 실행했을 때, postsModel의 create를 아래와 같은 값으로 호출합니다.
    expect(mockPostsModel.create).toHaveBeenCalledWith({
      nickname: createPostParams.nickname,
      password: createPostParams.password,
      title: createPostParams.title,
      content: createPostParams.content,
    });
  });

});