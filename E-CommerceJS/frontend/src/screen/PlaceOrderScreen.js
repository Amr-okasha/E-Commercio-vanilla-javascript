import CheckoutSteps from "../components/CheckoutSteps"
import { getCartItems, getPayment, getShipping } from "../localSorage"

const ConvertCartToOrder = () => {
    const orderItems = getCartItems()
    if (orderItems == 0) {
        document.location.hash = "/cart"
    }

    const shipping = getShipping()
    // if (!shipping.address) {
    //     document.location.hash = "/shipping"
    // }
    console.log(getShipping(), "orderItems")
    const Payment = getPayment()
    if (!Payment) {
        document.location.hash = "/payment"
    }

    const itemPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemPrice > 100 ? 0 : 10;
    const taxPrice = Math.round(.15 * itemPrice * 100) / 100;
    const totalPrice = taxPrice + shippingPrice + itemPrice;
    return ({
        orderItems,
        shipping,
        Payment,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice
    })
}
const PlaceOrderScreen = {

    after_render: () => {

    },
    render: () => {
        const { orderItems,
            shipping,
            Payment,
            itemPrice,
            shippingPrice,
            taxPrice,
            totalPrice } = ConvertCartToOrder()

        return `
        ${CheckoutSteps.render({ step1: true, step2: true, step3: true, step4: true })}
            <div class="order">
                <div class=order-info>
                    <div>
                        <h4>Shipping</h4>
                        <div>
                        ${shipping.address} ,
                        ${shipping.city} ,
                        ${shipping.postalCode} ,
                        ${shipping.country}
                        </div>

                    </div>
                    <div class=payment>
                        <h4>Payment</h4>
                        <div>
                        Payment Method : ${Payment.Paymentmethod}
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li class=list1>
                                <h2>Shopping Cart</h2>
                                <div>Price</div>
                            </li>
                            
                          



            ${orderItems.map(orderitem => `
            
            <li class=list2>
            <div class=cart-image><img src="${orderitem.image}" alt="${orderitem.name}" /></div>
            <div class=cart-item>
                <div>
                    <a href="/#/product/${orderitem.product}">${orderitem.name}</a>
                </div>
                <div>
                        QTY : ${orderitem.qty}
                </div>
            </div>
            <div class=cart-price>
                    ${orderitem.price}
            </div>
            
            </li>
            `).join('\n')
            }

            
               
         
   
      
                        </ul >
                    </div >  
                    
                </div >
                <div class=order-action>
                <ul>
                    <li>
                        <h6 class=total>Order Summary</h6>
                    </li>
                    <li>
                        <div>Items</div><div>${itemPrice}</div>
                    </li>
                    <li>
                       ${shippingPrice ? ` <div>Shipping</div><div>${shippingPrice}</div>` :
                `<div>Shipping</div><div>Free</div>`
            }
                    </li>
                    <li>
                        <div>Tax</div><div>${taxPrice}</div>
                    </li>
                    <li>
                        <div class=total>Order Total</div><div>${totalPrice}</div>
                    </li>
                    <li>
                    <button class="primary fw">Place Order</button>
                    </li>
                </ul>
               </div>  
            </div >

    `

    }
}
export default PlaceOrderScreen


