const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
const container = document.getElementById("container");

function increaseLike(i) {
  const likesCount = document.getElementById("like" + i);
  likesCount.innerText = posts[i].likes + 1 + " likes";
}

for (let i = 0; i < posts.length; i++) {
  container.innerHTML += `
            <div class="container">
                <section class="post-content-1">
                    <div class="user-info">
                        <img src="${posts[i].avatar}" id="avatar">
                        <div>
                            <p id="name" class="user-info-text">${posts[i].name}</p>
                            <p id="location" class="user-info-text">${posts[i].location}</p>
                        </div>
                    </div>
                    <img src="${posts[i].post}" id="post" onclick="increaseLike(${i})">                              <!--postImage-->
                    <div class="info">
                        <img src="images/icon-heart.png" class="icons" onclick="increaseLike(${i})">                 <!--likeIcon-->
                        <img src="images/icon-comment.png" class="icons">
                        <img src="images/icon-dm.png" class="icons">
                        <p class="info-text" id="like${i}">${posts[i].likes} likes</p>                                <!--likes-->
                        <div class="nothing">
                            <p id="username" class="info-text">${posts[i].username}</p>
                            <p class="info-text" id="comment">${posts[i].comment}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="espace">aa</div>`;
}
