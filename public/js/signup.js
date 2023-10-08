//Async Function to call the related route for the realtive Restend point for User SignUp
async function fnUserSignup(event) {
    event.preventDefault();

    //Get the UserName & Password Value
    const username = document.querySelector('#txtboxUsernameSignUp').value.trim();
    const password = document.querySelector('#txtboxPwdSignUp').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) document.location.replace('/dashboard');
        else alert(response.statusText);
    }
}
//Button Event Listner
document.querySelector('#frmSignUp').addEventListener('submit', fnUserSignup);