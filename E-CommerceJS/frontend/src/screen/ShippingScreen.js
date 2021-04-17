import { update } from "../api";
import CheckoutSteps from "../components/CheckoutSteps";
import { getUserInfo, setUserInfo, clearUser, getShipping, setShipping } from "../localSorage";
import { hideLoading, showLoading, showMessage } from "../utils";


const ShippingScreen = {
    after_render: () => {
        document
            .getElementById("shipping-form")
            .addEventListener("submit", async (e) => {
                e.preventDefault()
                setShipping({
                    address: document.getElementById("address").value,
                    city: document.getElementById("city").value,
                    postalCode: document.getElementById("postalCode").value,
                    country: document.getElementById("country").value

                })
                document.location.hash = "/payment"
            })

    },
    render: () => {
        const { name, email } = getUserInfo()
        if (!name) {
            document.location.hash = "/"
        }
        const { address, city, postalCode, country } = getShipping()
        return `
    ${CheckoutSteps.render({ step1: true, step2: true })}
        <div class="form-container">
    
<form id="shipping-form" class="profile-form">
    <ul class=form-items>
        <li>
            <h3>Shipping</h3>
        </li>
        <li>
            <label for="address">Address :</label>
            <input type="text" name="address" id="address" class="address" value=${address}>
        </li>
        <li>
        <label for="city">City :</label>
        <input type="text" name="city" id="city" class="city" value=${city}>
    </li>
    <li>
            <label for="postalCode">PostalCode :</label>
            <input type="text" name="postalCode" id="postalCode" class="postalCode" value=${postalCode}>
        </li>
        <li>
            <label for="country">Country :</label>
            <input type="text" name="country" id="country" class="country" value=${country}>
        </li>
         <li>
            <button type="submit" id="submit" class=" fw">Continue</button>
        </li>
      
        
    </ul>
</form>

</div>`


    }
}


export default ShippingScreen