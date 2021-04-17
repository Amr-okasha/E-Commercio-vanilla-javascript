import { update } from "../api";
import CheckoutSteps from "../components/CheckoutSteps";
import { getUserInfo, setUserInfo, clearUser, getShipping, setShipping, getPayment, setPayment } from "../localSorage";
import { hideLoading, showLoading, showMessage } from "../utils";


const PaymentScreen = {
    after_render: () => {
        document
            .getElementById("payment-form")
            .addEventListener("submit", async (e) => {
                e.preventDefault()
                const Paymentmethod = document.querySelector("input[name='payment-method']:checked")
                setPayment(
                    Paymentmethod
                )
                document.location.hash = "/placeorder"
            })

    },
    render: () => {
        const { name, email } = getUserInfo()
        if (!name) {
            document.location.hash = "/"
        }

        return `
    ${CheckoutSteps.render({ step1: true, step2: true, step3: true })}
        <div class="form-container">
    
<form id="payment-form" class="profile-form">
    <ul class=form-items>
        <li>
       <div>
       <label for="paypal">Paypal</label>
       <input type="radio" name="payment-method" id="paypal" value="Paypal" checked >
       </div>
        </li>
         <li>
         <li>
       <div>
       <label for="stripe">Stripe</label>
       <input type="radio" name="payment-method" id="stripe" value="Stripe" checked >
       </div>
        </li>
         <li>
            <button type="submit" id="submit" class=" fw">Continue</button>
        </li>
      
        
    </ul>
</form>

</div>`


    }
}


export default PaymentScreen