$(document).ready(function () {
  bossReviewList();
  const params = getUrlParams();
  const userId = params.userId;
  show_members(userId);
});

function bossReviewList(userId) {
  $.ajax({
    type: 'GET',
    url: `/api/review/${userId}`,
    data: {},
    success: function (response) {
      let temp = '';
      $('#reviews').empty();
      response.reviews.forEach((review) => {
        temp += `<td>${review.content}</td>
        <td>${review.star}</td>
        <td>${review.createdAt}</td>`;
      });
      $('#reviews').append(temp);
    },
  });
}
