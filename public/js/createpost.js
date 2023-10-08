//Async Function to call the related route for the realtive Restend point for Adding New Post
async function fnCreatePost(event) {
    event.preventDefault();

    document.location.replace('/dashboard/new')
}
//Button Event Listner
document.querySelector('#btnNewPost').addEventListener('click', fnCreatePost);