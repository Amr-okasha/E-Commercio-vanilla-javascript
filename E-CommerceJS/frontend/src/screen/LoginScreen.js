import { signin } from "../api";
import { getUserInfo, setUserInfo } from "../localSorage";
import { hideLoading, showLoading, showMessage } from "../utils";

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
                document.location.hash = "/"
            }
        })
    },
    render: () => {
        if (getUserInfo().name) {
            document.location.hash = "/"
        }
        return `<div class="form-container">
    
<form id="signin-form" class="signin-form">
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