// import data from "../javascript/data.js" the backend instead of this
const HomeScreen = {
    render: async () => {
        //  const { products } = data this has commented becouse the backend is created
        //instead of the last statement we will make fetch api

        const response = await fetch("http://localhost:5000/api/products", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response || !response.ok) {
            return `<div>Error in getting data</div>`
        }
        const products = await response.json()
        console.log(products)
        return `
        <ul class="products">
        ${products.map(product => `
        <li>
        <section class="product">
                        <a href="/#/product/${product.id}">
                            <img src="${product.image}" alt="${product.name1}">
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1"> ${product.name1} </a>
                        </div>
                        <div class="product-brand">
                            <p>${product.brand}</p>
                        </div>
                        <div class=product-price>
                            <p>price <span>$${product.price}</span></p>
                        </div>
                    </section>
        </li>
        `).join('\n')}
        `
    }
}
export default HomeScreen