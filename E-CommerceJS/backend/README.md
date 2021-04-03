3/4/2021
create Node.js server
1.run npm init root e-commercejs folder
2.npm install express 3. create server.js
4.add start command as node backend/server.js
5.require express
6.copy data.js from frontend to backend
7.create route for /api/products
finally you have to go to backage.json on the root folder and add to "scripts"
"start":"node backend/server.js"
8.return products in data.js
9.run npm start
4/4/2021
A-
create http request from the front end to get the data from backend
1.edit homescreen.js get the data from the backend instead of the data.js 
2.make async await in render function in HomeScreen.js
3.fetch products from "/api/products"in render()
4.make router() async and call await Screen.render in app.js
5.use cors on backend
b-
add webpack 
1.cd webapack
2.npm install -D webpack webpack-cli webpack-dev-server 
3.npm uninstall live-server 
4."start":"webPack-dev-server --mode development --watch-content-base --open"
5.move index.html ,index.css and images to front end folder
6.rename app.js to index.js
7.update index.html
8.add<script src="main.js"></script>before body</body>
9.npm start
10.npm install axios
11.change fetch to axios in HomeScreen