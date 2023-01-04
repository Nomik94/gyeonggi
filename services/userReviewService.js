const {Review} = require("../models")
const {Work} = require("../models")
const UserReviewRepository = require("../repositories/userReviewRepository")
class UserReviewService{

    userReviewRepository = new UserReviewRepository(Review,Work);
    writeReview = async (star,content,workId)=>{
        const createReview = await this.userReviewRepository.createReview(star,content,workId);
        return createReview;
    }
}

module.exports = UserReviewService