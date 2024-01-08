let comments = [
    {
      name: "Connor Walton",
      date: "02/17/2021",
      comment:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Miles Acosta",
      date: "12/20/2020",
      comment:
        "I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough."
    },
    {
      name: "Emilie Beach",
      date: "01/09/2021",
      comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    }
  ];
  
  function Comments(array) {
    let commentBox = document.querySelector(".comment__previous-comments");
  
    for (let i = 0; i < array.length; i++) {
      let mainCommentsBox = document.createElement("div");
      mainCommentsBox.classList.add("comment__previous");
      commentBox.appendChild(mainCommentsBox);
  
      let avatar = document.createElement("img");
      avatar.classList.add("comment__avatar-box-img");
      avatar.src="./Assets/Images/Mohan-muruge.jpg"
      mainCommentsBox.appendChild(avatar);
  
      let content = document.createElement("div");
      content.classList.add("comment__heading");
      mainCommentsBox.appendChild(content);
  
      let name = document.createElement("div");
      name.classList.add("comment__heading--name");
      name.innerText = array[i]["name"];
      content.appendChild(name);
  
      let date = document.createElement("div");
      date.classList.add("comment__heading--date");
      date.innerText = array[i]["date"];
      content.appendChild(date);
  
      let textbox = document.createElement("div");
      textbox.classList.add("comment__text-box-main");
      mainCommentsBox.appendChild(textbox);
  
      let commentDescription = document.createElement("p");
      commentDescription.classList.add("comment__text-box-main--comment");
      commentDescription.innerText = array[i]["comment"];
      textbox.appendChild(commentDescription);
    }
  }
  Comments(comments);
 