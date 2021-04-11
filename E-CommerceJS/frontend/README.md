E-COMMERCIO
1/4/2021
Creat Folder Structure
1.create root folder as E-COMMERCIOJS.
2.add frontend and backend folder
3.create src folder in frontend
4.create index.html with heading E-COMMERCIO
5.run npm init -y enter
6.npm install -D live-server to develop dependencies it just fot front end phase
7.add command as property in the object script
with name start and value "live-server src --verbose",
"start":"live-server src --verbose",
8.run npm start
9.creat html file and add the structure of the website page
10.add some styles with css
2/4/2021
1.create data.js some info object of the the products
2.export an array of 6 products
3.create screen/Homescreen.js
4.added extension Html&less grammar injection to make the inside backteck like html 'HTML&LESS grammar injections'
https://marketplace.visualstudio.com/items?itemName=gsheru.vscode-inject-html-less-grammar
5.export home screen as an object with render()method
6.import data.js
7.retur data mapped to lis inside an ul
8.creat app.js
9.link it to index.html as module
10.set main id to main-container
11.create router function inside app.js
12.set main_container innerHtml to Homescreen.render()
13.set load event of window to router() function
3/4/2021
1.creat route screen object for home screen
2.creat utils.js
3.export parseRequestURL()
4.set url as hash adderess split by slash
5.return resource id and verb of url
6.update router()
7.set request as parseRequestURL()
8.Build ParseURL and compare with routes
9.if routes exists render it ,else render 404
10.creat screen/error.js and render error message
11.we will open the link then add /api/products to the link like we wrote it in the backend get
6/4/2021
create rating Component
1.create component/Rating.js
2.create div rating
3.link to font awesome.css in index.html
4.define rating object with render()
put props as argument to path data
5.if !props.value return empty div
6.else use fa fa-star ,fa-star-half-o and fa-star-o
7.last span for props.text ||""
8.style div.rating, span and last apan
9.edit home screen
10.add div.product-rating and use rating component
create product screen
1.get product id from request
2.implement /api/product/:id api
3.send ajax request to product api (and handle the error and get the error message of the backend the orginal and the one that we have made) add it to productScreen.js
4.create backend to result(each single product) link (add new end poind)
4.1.#centralize the api.js and make all axios and fetch data create through it
4.2.create config.js to reach the api
7/4/2021
5.create div .details with 3 colums
6.colum 1 for product image
7.colum 2 for product info
8.colum 3 for product action
9.style .details and all columns
10.create add to cart button with (add-button) id
11.after_render()new method to add event to the button
12.redirect user to cart/:product_id and callback it with await to get a promise to just run router function with the new route.
8/4/2021
add to cart action link to local storage
1.create CartScreen.js
2.parseRequestURL() to get request.id and get the link form config
3.getproduct(baseUrl)
4.addToCart()
5.get cart items
6.cart items.find
7.if exist? item update qty:Add item
8.set cart items
11/4/2021
create product cart screen ui
1.create html an css for cart screen
which consists of cart-list /cart-action
display elments from local storage with map function
2.cart-list contains 3 container cart-image cart-name cart-price
3.cart-name contains anchor-tag which represent product-name
and also select-box which allow client to slelect needed qty
delete-button that delete undesired products
4.cart-action contains two containers
the qty and the price which diplayed from reduce function
and the second one is abutton which transfer to the log-in to proceed the action
note:remain the media-querey for small screens
