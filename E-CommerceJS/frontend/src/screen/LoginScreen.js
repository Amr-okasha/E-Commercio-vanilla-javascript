const LoginScreen = {
    after_render: () => { },
    render: () => {
        return `<div class="form-container">
    
<form class="signin-form">
    <ul class=form-items>
        <li>
            <h1>Log-in</h1>
        </li>
        <li>
            <label for="email">Email :</label>
            <input type="email" name="email" id="email" class="email">
        </li>
        <li>
            <label for="password">Password :</label>
            <input type="password" name="password" id="password" class="password">
        </li>
        <li>
            <button type="submit" id="submit" class=" fw">Log-in</button>
        </li>
        <li>
            New user :
            <a href="/#/register">Create new account</a>
        </li>
        
    </ul>
</form>

</div>`


    }
}


export default LoginScreen