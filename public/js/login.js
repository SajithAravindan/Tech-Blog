async function fnUserLogin(event) {
    event.preventDefault();
    console.log('in');
    const strUserName = document.querySelector('#txtboxUsername').value.trim();
    const strPassWord = document.querySelector('#txtboxPwd').value.trim();

    if (strUserName && strUserName) {        
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({ strUserName, strPassWord }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) document.location.replace('/dashboard');
        else alert(response.statusText);        
    }
}
document.querySelector('#frmLogin').addEventListener('submit', fnUserLogin);

