import { signin } from "../api";
import { getUserInfo, setUserInfo } from "../localSorage";
import { hideLoading, RedirectUser, showLoading, showMessage } from "../utils";

const LoginScreen = {
    after_render: () => {


        const signInForm = document.getElementById("signin-form")
        signInForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            showLoading()
            const data = await signin({
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
    
<form id="signin-form" class="signin-form">
    <ul class=form-items>
        <li>
            <h3>Log-in</h3>
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
        <li class=trans>
            New user :
            <a href="/#/register">Create new account</a>
        </li>
        
    </ul>
</form>

</div>`


    }
}


export default LoginScreen