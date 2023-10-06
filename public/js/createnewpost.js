async function fnCreateNewPost(event) {
    event.preventDefault();

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
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#frmCreatePost').addEventListener('submit', fnCreateNewPost);