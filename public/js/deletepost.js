//Async Function to call the related route for the realtive Restend point for Deleting a Post
async function fnDeletePost(event) {
    event.preventDefault();
    //Get the related Post Id from URL Object
    const postIid = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${postIid}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');//Call the 
    } else {
        alert(response.statusText);
    }
}
//Button Event Listner
document.querySelector('#btnDeletePost').addEventListener('click', fnDeletePost);