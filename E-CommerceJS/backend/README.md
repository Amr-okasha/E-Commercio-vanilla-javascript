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
in the root folder install cors
(npm install cors)
in server.js ===>
(const cors = require("cors"))
(app.use(cors())) ==>put it after const app =express
6.note you should open both backage.json to be able to fitch
b-
add webpack ==>>
to handle all js file and compine them together to improve the speed and also make it possible npm packages to apply them to the project
compine files of js together to make it faster make main.js file
1.cd frontend
2.(npm install -D webpack webpack-cli webpack-dev-server)
these backages ==>> are called development mood - development dependencies
cor
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

10.<<npm install axios>> (axios library) in <<frontend folder>>
11.change fetch to axios in HomeScreen

5-4-2021

A-
instal babel transpiler for ES6 syntax in the backend
remove all terminal and in the root folder
1.(npm install -D @babel/core @babel/cli @babel/node @babel/preset-env) in the root
2.create (.babelrc )file in the root the formate inside it is jsonso we will write
and set presets to @babel/preset-env create this settings below inside pranthis

({
"presets": [
[
"@babel/preset-env",
{
"targets":{
"node":"current"
}
}
]
]
})

3.(npm install -D nodemon) is the same
node backend ("start": "node backend/server.js") but the diffrence is it work the code and run it automatically we dont need to start the code every time to run
4.update in package.json root start: nodemon --watch backend --exec babel-node backend/server.js
("start": "nodemon --watch backend --exec babel-node backend/server.js")
nodemon --watch ===>backend watch the backend
--exec ===> any change it will be run with this
babel ==> turn to ES6
node ===> make javascript back end file to run
backend/server.js ==> the file that babel will work with
5.npm start
6.convert (require to import) in server.js as ES6
7.convert data.js syntax ES5 to ES6

b-
code linting feature in backend
this way dosent work should try to run it with npx see traversy
help developer to fin error faster and fix them easier
1.use eslint as acode linter in server .js
2.root folder install eslint as dev dependencies
(npm install -D eslint)
3.vscode extentions get (eslint) install it
4.configuration ===>
create ---(.eslint.rc.js)--- in the root folder
5.inside it define setting of eslint javascript modules
6.its list of coding rules that make code consistent and integrated

(module.exports = {
env: {
browser: true,
node: true,
es2020
},
extends: ['airbnb-base'],
parserOptions: {
sourceType: "module",
ecmaversion: 11
},
rules:{
'no-console':0,
}
})

6.1.enviroment of eslint configuration
browser for the frontend
node for backend
env: {
browser: true,
node: true,
es2020
}
6.2.the second option extends ==>extensions
extends:['airbnb-base']
6.3.this setting because of using import export ES6 module styleing in the backend
parserOptions: {
sourceType: "module"
}
6.4. ecmaversion: 11
javascript version

6.5.rules:{
'no-console':0,
}
to didnt show console log error
7.install ===>
(npm install eslint-config-airbnb-base eslint-plugin-import)

install eslint-config-airbnb-base ===>apply airbnb plugin coding style
eslint-plugin-import ====>make it possiple import export validation in js code

8.press Eslint down the bar below and run make sure its running
note =>to know the proplem with somthing click on it and press f8

9.press (ctr-shift-p)
type ===> eslint
select Disable Eslint
repeat again
select enable Esint

10.change file eslint name to (.eslintrc.js)
11.press on the error and press (ctr-s)to fix
12.if the error dosent solved
12.a.enable action and saveto fix all js lint
(ctr-shift-p)==>type (json) =>select (preferences open settening json)
12.b.add
("editor.formatOnSave": true,),
("editor.codeActionsOnSave": {"source.fixAll.eslint":true}),

13.install vs code extensions
-(javaScript(ES6)code snippest)
-(es7 react redux graphql react native snippests)
-(prettier-code formatter) with eslint make proplems because both do the same
install
(eslint config prettier in the terminal)
(npm install -D eslint-config-prettier) in the root file
\*enable eslint config
-open eslintrc.js
add prettier like that extends: ['airbnb-base',"prettier"],
-(Html &less grammer injection)
