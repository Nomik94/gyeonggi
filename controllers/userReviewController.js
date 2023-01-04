const UserReviewService = require("../services/userReviewService")
class UserReviewController{

    userReviewService = new UserReviewService();

    writeReview = async (req,res) =>{
        const {star,content,workId} = req.body;

        const reviewData = await this.userReviewService.writeReview(star,content,workId);
        if(reviewData.dataValues.star === star && reviewData.dataValues.work_id ===workId){
            res.send({msg:"리뷰작성에 성공하였습니다."})
        }else{
            res.send({msg:"리뷰작성에 실패하였습니다."})
        }
    }
}


module.exports = UserReviewController;
