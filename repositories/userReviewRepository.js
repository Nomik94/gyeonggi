class UserReviewRepository{

    constructor(reviewModel,workModel) {
        this.reviewModel = reviewModel;
        this.workModel = workModel;
    }

    createReview = async (star,content,workId)=>{
        const reviewData = await this.reviewModel.create({
            star:star,
            content:content,
            work_id:workId
        });
        const work = await this.workModel.findByPk(workId);

        await this.workModel.update({
            status:5}, {
            where: {workId: workId}
        })

        return reviewData;
    }

}


module.exports = UserReviewRepository;