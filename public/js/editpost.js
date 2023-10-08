//Async Function to call the related route for the realtive Restend point for Editing Post
async function fnEditPost(event) {
    event.preventDefault();

    //Get the Post Title & Post Content Value
    const posttitle = document.querySelector('#postTitle').value;
    const posttext = document.querySelector('#postText').value.trim();

    //Get the related Post Id from URL Object
    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            posttitle,
            posttext
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
//Button Event Listner
document.querySelector('#frmUpdatePost').addEventListener('submit', fnEditPost);