import { register } from "../api";
import { getUserInfo, setUserInfo } from "../localSorage";
import { hideLoading, RedirectUser, showLoading, showMessage } from "../utils";

const RegisterScreen = {
    after_render: () => {


        const registerForm = document.getElementById("register-form")
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            showLoading()
            const data = await register({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            })
            hideLoading()
            if (data.error) {
                showMessage(data.error)
            } else {
                setUserInfo(data)
                RedirectUser()
            }
        })
    },
    render: () => {
        if (getUserInfo().name) {
            RedirectUser()
        }
        return `<div class="form-container">
    
<form id="register-form" class="register-form">
    <ul class=form-items>
        <li>
            <h3>Create account</h3>
        </li>
        <li>
            <label for="name">Name :</label>
            <input type="name" name="name" id="name" class="name">
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
        <label for="repassword">Repassword :</label>
        <input type="password" name="repassword" id="repassword" class="repassword">
    </li>
        <li>
            <button type="submit" id="submit" class=" fw">Register</button>
        </li>
        <li class=trans>
            Already have an account 
            <a href="/#/signin">Log-in</a>
        </li>
        
    </ul>
</form>

</div>`


    }
}


export default RegisterScreen