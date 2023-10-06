async function fnCreatePost(event) {
    event.preventDefault();

    document.location.replace('/dashboard/new')
}


document.querySelector('#btnNewPost').addEventListener('click', fnCreatePost);