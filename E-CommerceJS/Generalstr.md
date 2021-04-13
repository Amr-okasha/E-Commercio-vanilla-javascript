1.make the str of the files
2.create node-modules package.json and add data-info for dependencies in frontend file  
3.create html structure
4.create css styling
5.create data.js an object that contains data that we will use in our product
6.create folder screen which has pages that will render in our screen
7.create homepage.js and the rest of pages are objects has method render:()=>{}
that get data from data.js
8.make router funcion on app.js it takes data from homescreen.js page and render it in the main tag --in this moment we should delete html elements inside the main tag
9.create the other pages as const name={} has the method which talk about product
or not found
10.create utils.js page which has function that get url hash split it into array
and retun an object which have three proprties --route object --
11.create the route object in the which hase a key and value the key path string
and the value the name of the page that created in the screen folder to display each of them in the screen
12.add const name =callback of the function that create the route object from the utils.js
13.create var that concat turnary operators that rebuil the path
14.create var that create the condtion routeObject[path] ? if it apth exist as property value it will get the property name and access it througth the main page
if it dosent it get the error404page
15.create the backend folder
16.create node-modules package.json and add data-info for dependencies in backend file in the root file server.js
17.create the backend once it runs
18.move data.js from frontend to the backend and connet them cancel ES6 convert to ES5 (import default) converted to( module.export =)
19.cancel the function that get data fom data.js and make http request and
fetch data from backend
20.add webpack
21.move html css images from source file drag them in the front end file directly
22.change the name of the app.js to index.js
23.install npm webpack and put its info in package.json in frontend
24.install axios packages and instead of fetch use axios
25.install babel backages
26.convert data from ES5 to ES6 in the front End
27.add some data to package.json in the root folder to turn ES6 and run data without npm start
28.code linting features
29.create rating component
30.create product screen for each product
31.centralize the api.js and make all axios and fetch data create through it
32.handle the error and show the error message and the error that comes from back end
33.create div .details with 3 colums
34.create add to cart button with (add-button) id
35.after_render()new method to add event to the button
36.redirect user to cart/:product_id and callback it with await to get a promise to just run router function with the new route.
8/4/2021
add to cart action link to local storage
11/4/2021
a-
create product cart screen ui
b-
finish shopping-cart what we going to do delete and update qty acions
and also when user click on proceed to check-out button redirct to sign in page
c-Connect To MongoDB and Create Admin User
