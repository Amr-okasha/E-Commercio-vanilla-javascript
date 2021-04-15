import { getUserInfo } from "../localSorage";

const Header = {
    render: () => {
        const { name } = getUserInfo()
        console.log(name, "name")
        return `
        <div>
        <a href="/#/">Furniture-Store</a>
    </div>
    <div>
    ${name ? `<a href="/#/profile">${name}</a>` : `<a href="/#/signin">Log-In</a>`}   
            <a href="/#/cart">Shopping-Cart</a>
    </div >
    `
    },
    after_render: () => {


    },
};
export default Header