async function fnUserSignup(event) {
    event.preventDefault();

    const username = document.querySelector('#txtboxUsernameSignUp').value.trim();
    const password = document.querySelector('#txtboxPwdSignUp').value.trim();
alert(1)
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

document.querySelector('#frmSignUp').addEventListener('submit', fnUserSignup);