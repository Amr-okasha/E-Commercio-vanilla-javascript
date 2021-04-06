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
5.if !props.value return empty div
6.else use fa fa-star ,fa-star-half-o and fa-star-o
7.last span for props.text ||""
8.style div.rating, span and last apan
9.edit home screen
10.add div.product-rating and use rating component
