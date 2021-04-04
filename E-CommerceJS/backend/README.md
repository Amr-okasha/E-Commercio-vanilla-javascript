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
6.note you should open both backage.json to be able to fitch
b-
add webpack ==>>
compine files of js together to make it faster make main.js file
1.cd frontend
2.(npm install -D webpack webpack-cli webpack-dev-server)
these backages ==>> are called development mood - development dependencies

(npm install -D webpack webpack-cli) the two first backages
===> make it possiple to combine all js files and build final main.js
the last backage
(webpack-dev-server)
==>is just for development phase it check files with change it auto reload web server and apply changes
in using the last package there is no need to <<< live server >>> so uninstall it as below
3.(npm uninstall live-server)
4.update backage.json <<inside frontend>>
folder with the next json object instead of live server that already exists
<<"start":"webPack-dev-server --mode development --watch-content-base --open">>
--watch-content-base ====>>>>>
to check source folder and render if there change in folder and rebuild javascript file
--open ====>>>>
it automatically open web browser and launch web application there
5.move <<index.html ,index.css and images>>from (( src to frontend )) folder
6.rename (((app.js))) to <<<index.js>>>
7.update index.html
8.add<script src="main.js"></script>before body</body> and remove the old one
there is no main.js file (webpack-dev-server)created it on the fly it doest exist to see it is on the fly
9.npm start

notes:
webpack is a backage only for frontend
node.js-backage.json shouldbe in them location to prevent mistakes
compatibility items an important to work correctly with each other
