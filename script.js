let selectedImageUrl = "";
let text = "";
let color = "#000000";

function changeBackground(url){
    let textbox = document.getElementById('textbox');
    text = textbox.value;
    textbox.style.backgroundImage = `url(${url})`;
    textbox.style.backgroundSize = 'cover';
    textbox.style.backgroundRepeat = 'no-repeat';
    textbox.style.color = "#ffffff";
    selectedImageUrl = url;
    color = "#ffffff";
}
function removeBg(){
    let textbox = document.getElementById('textbox');
    textbox.style.backgroundImage = '';
    textbox.style.backgroundSize = '';
    textbox.style.backgroundRepeat = '';
    textbox.style.color = "#000000";
    selectedImageUrl = "";
    color = "#000000";
}

function addPost(){
    let textbox = document.getElementById('textbox');
    text = textbox.value;
    document.querySelector('.main_container').innerHTML += `<div class="post_div">
      <h2>Post</h2>
      <hr />
      <div class="post">
        <div class="profile">
          <img src="assets/user.png" alt="not founded" />
          <h2>Hassan Naseer</h2>
        </div>
        <div class="text_box" style="background-image: url('${selectedImageUrl}'); background-size: cover; background-repeat: no-repeat; color: ${color};">
          <p>${text}</p>
        </div>
        <div class="buttons">
          <button class="like" >
            <i class="fa-regular fa-thumbs-up" onclick="thumbsUp()"></i> Like
          </button>
          <button class="comment" onclick="displayComment(this)">
    <i class="fa-regular fa-comment"></i> Comment
</button>
          <button class="share">
            <i class="fa-regular fa-share"></i> Share
          </button>
        </div>
        <div class="comment_con">
          <hr />
          <div class="comment_input" style="display: none;">
            <input type="text" placeholder="Write a comment..." / class="commentInput">
            <button onclick="addComment(this)">comment</button>
          </div>
            <div class="comment_list">

            </div>
        </div>
      </div>
    </div>`;
}


function addComment(button) {
    // Find the closest .post and its input and comment_list
    const postDiv = button.closest('.post');
    const commentInput = postDiv.querySelector('.commentInput').value;
    const commentList = postDiv.querySelector('.comment_list');

    commentList.innerHTML += `<div class="comment">
        <div class="profile">
            <img src="assets/user.png" alt="not founded" />
            <h2>Hassan Naseer</h2>
        </div>
        <div class="new_comment">
            <h2>${commentInput}</h2>
        </div>
    </div>`;
}

let comment_container = document.querySelector('.comment_input');

function displayComment(button) {
    // Find the closest .post and then its .comment_input
    const postDiv = button.closest('.post');
    const commentInputDiv = postDiv.querySelector('.comment_input');
    if (commentInputDiv) {
        commentInputDiv.style.display = 'flex';
    }
}

function thumbsUp() {
    let likeButton = event.target;
    if (likeButton.classList.contains('fa-regular')) {
        likeButton.classList.remove('fa-regular');
        likeButton.classList.add('fa-solid');
    } else {
        likeButton.classList.remove('fa-solid');
        likeButton.classList.add('fa-regular');
    }
}