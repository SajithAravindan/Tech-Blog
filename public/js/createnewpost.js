//Async Function to call the related route for the realtive Restend point for Adding New Post
async function fnCreateNewPost(event) {
    event.preventDefault();
    //Get the Post Title & Post Description Value
    const title = document.querySelector('#postTitle').value.trim();
    const postContent = document.querySelector('#postText').value.trim();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            postContent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');//Call the handler
    } else {
        alert(response.statusText);//Error
    }
}
//Button Event Listner
document.querySelector('#frmCreatePost').addEventListener('submit', fnCreateNewPost);