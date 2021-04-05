//make comment to export default to use this page in the backend and run module.export
// export default   (this deleted after  the file moved to the backend) because not didnt deal with ES6

// (module.exports  =) this deleted after babel install becouse the babel deal with node and ES6

export default {
    products: [

        {
            id: "1",
            name1: "sofa",
            category: "furniture",
            image: "../furnitureImages/product-1.jpg",
            price: 5000,
            brand: "Roche Bobois",
            rating: 4.1,
            numberReviews: 10,
            countInStock: 6,
        },
        {
            id: "2",
            name1: "dinningtable",
            category: "furniture",
            image: "../furnitureImages/product-2.jpg",
            price: 4500,
            brand: "Roche Bobois",
            rating: 4.5,
            numberReviews: 10,
            countInStock: 51,
        },
        {
            id: "3",
            name1: "furniture",
            category: "furniture",
            image: "../furnitureImages/product-3.jpg",
            price: 4000,
            brand: "Roche Bobois",
            rating: 4.5,
            numberReviews: 10,
            countInStock: 6,
        },
        {
            id: "4",
            name1: "lockers",
            category: "furniture",
            image: "../furnitureImages/product-4.jpg",
            price: 3000,
            brand: "Roche Bobois",
            rating: 3.5,
            numberReviews: 10,
            countInStock: 6,
        },
        {
            id: "5",
            name1: "chair",
            category: "double-bed",
            image: "../furnitureImages/product-5.jpg",
            price: 1200,
            brand: "Roche Bobois",
            rating: 4.3,
            numberReviews: 10,
            countInStock: 6,
        },
        {
            id: "6",
            name1: "single-bed",
            category: "furniture",
            image: "../furnitureImages/product-6.jpg",
            price: 600,
            brand: "Roche Bobois",
            rating: 4.9,
            numberReviews: 10,
            countInStock: 6,
        },
    ]
}