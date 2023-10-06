async function fnEditPost(event) {
    event.preventDefault();

    const posttitle = document.querySelector('#postTitle').value;
    const posttext = document.querySelector('#postText').value.trim();
    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    alert(posttext)
    alert(postId)
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

document.querySelector('#frmUpdatePost').addEventListener('submit', fnEditPost);