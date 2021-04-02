import data from "../javascript/data.js"
const HomeScreen = {
    render: () => {
        const { products } = data
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