async function commentsApi() {
  try {
    const comments = await bandSiteApi.getComments();

    const commentBox = document.querySelector(".comment__previous-comments");
    commentBox.innerHTML = "";

    comments.forEach(comment => {
      const mainCommentsBox = document.createElement("div");
      mainCommentsBox.classList.add("comment__previous");
      commentBox.appendChild(mainCommentsBox);

      const avatar = document.createElement("img");
      avatar.classList.add("comment__avatar-box-img");
      avatar.src = "./Assets/Images/Mohan-muruge.jpg";
      mainCommentsBox.appendChild(avatar);

      const content2 = document.createElement("div");
      content2.classList.add("comment__heading--main");
      mainCommentsBox.appendChild(content2);

      const content = document.createElement("div");
      content.classList.add("comment__heading");
      content2.appendChild(content);

      const name = document.createElement("div");
      name.classList.add("comment__heading--name");
      name.innerText = comment.name;
      content.appendChild(name);

      const date = document.createElement("div");
      date.classList.add("comment__heading--date");
      datetime = comment.timestamp; 
      const dateconversion=new Date(datetime)
      date.innerText = dateconversion.toLocaleDateString('en-US');
      content.appendChild(date);

      const textbox = document.createElement("div");
      textbox.classList.add("comment__text-box-main");
      content2.appendChild(textbox);

      const commentDescription = document.createElement("p");
      commentDescription.classList.add("comment__text-box-main--comment");
      commentDescription.innerText = comment.comment;
      textbox.appendChild(commentDescription);
    });
  } catch (error) {
    console.error('Error API:', error.message);
  }
}

const form = document.querySelector(".comment__input-box");
form.addEventListener("submit", async function (details) {
  details.preventDefault();
  const submittedComment = {
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
