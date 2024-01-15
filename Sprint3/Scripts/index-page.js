
// {
//   "api_key": "0fe65b0e-a7a1-4335-9a8c-da40a0a85a94"
// }

async function commentsApi() {
  try {
    const comments = await bandSiteApi.getComments();

    let commentBox = document.querySelector(".comment__previous-comments");
    commentBox.innerHTML = ""; 

    comments.forEach(comment => {
      let mainCommentsBox = document.createElement("div");
      mainCommentsBox.classList.add("comment__previous");
      commentBox.appendChild(mainCommentsBox);

      let avatar = document.createElement("img");
      avatar.classList.add("comment__avatar-box-img");
      avatar.src = "./Assets/Images/Mohan-muruge.jpg";
      mainCommentsBox.appendChild(avatar);

      let content2 = document.createElement("div");
      content2.classList.add("comment__heading--main");
      mainCommentsBox.appendChild(content2);

      let content = document.createElement("div");
      content.classList.add("comment__heading");
      content2.appendChild(content);

      let name = document.createElement("div");
      name.classList.add("comment__heading--name");
      name.innerText = comment.name;
      content.appendChild(name);

      let date = document.createElement("div");
      date.classList.add("comment__heading--date");
      date.innerText = comment.date;
      content.appendChild(date);

      let textbox = document.createElement("div");
      textbox.classList.add("comment__text-box-main");
      content2.appendChild(textbox);

      let commentDescription = document.createElement("p");
      commentDescription.classList.add("comment__text-box-main--comment");
      commentDescription.innerText = comment.comment;
      textbox.appendChild(commentDescription);
    });
  } catch (error) {
    console.error('Error API:', error.message);
  }
}

let form = document.querySelector(".comment__input-box");
form.addEventListener("submit", async function (details) {
  details.preventDefault();
  let today = new Date().toLocaleDateString('en-US');
  let submittedComment = {
    "name": details.target.name.value,
    "comment": details.target.comment.value
  };

  try {
    await bandSiteApi.postComment(submittedComment);
  
    commentsApi();
    form.reset();
  } catch (error) {
    console.error('Error API:', error.message);
  }
});

commentsApi();
