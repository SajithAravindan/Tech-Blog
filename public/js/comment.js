//Async Function to call the related route for the realtive Restend point for Adding New Comment
async function fncomments(event) {
    event.preventDefault();
    //Get the Comment Value
    const comment = document.querySelector('#commentText').value.trim();
    //Get the related Post Id from URL Object
    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                comment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);//Error
        }
    }
}
//Button Event Listner
document.querySelector('#frnCommentAdd').addEventListener('submit', fncomments);