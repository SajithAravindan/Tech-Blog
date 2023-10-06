async function fnDeletePost(event) {
    event.preventDefault();

    const postIid = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${postIid}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#btnDeletePost').addEventListener('click', fnDeletePost);