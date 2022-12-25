Creating own chatGPT using API

veridid_ai

Go to Desktop
Create a folder name open_ai_veridid
Open vscode
Drag and drop newly created folder
Check if you have node.js  if yes continue
Open terminal
npm create vite@latest client --template vanilla
NOTE: we are creating a vanilla type client a javascript project

OK to proceed y
Select vanilla
Select javascript

NOTE: Client package is downloaded

cd to client then
Run npm install
NOTE: This will install all essential packages

Go to https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fadrianhajdin%2Fproject_openai_codex%2Ftree%2Fmain%2Fclient%2Fassets
And upload assets or better still create your own assets
Navigate back to client and paste the assets folder in client


Also go to :https://gist.github.com/adrianhajdin/2059ca74452a18d1560aac9499f58900
Copy the syles and paste in styles.css
NOTE: the style is used in order to have same look and feel of chatGPT

Inside the assets folder move favicon.ico into the Public Folder
NOTE: Now what is remaining in assets folder are bot.svg,send.svg, and user.svg
Still in the public folder delete vite.svg file
Also delete counter.js
Go to Index.html
Change vite.svg to favicon.ico
Change the title from vite app to Veridid - Coding AI
Also add a link tag with href style.css
Still on index.html, in the body with an id of app,
With a self closing <div id=“chat_container”></div>
This is going to rap together the entire application
Below the second self closing<div
Add 
Form tag
Inside the form we going to add textarea
The text area is going to have a name “prompt” with a number of rows.

Example:
<textarea name="prompt" rows="1" cols="1 placeholder=Ask Veridid..."></textarea>

Next you add a submit button
Then hook everything to the module which will be named scripts we change main.js to script.js
Also change the main.js folder to script.js delete all the code inside the script.js for now.
Go to terminal, make sure you are in the client folder or cd .. to get there
Once you are in the root file, run 
npm run dev
NOTE: this will start application so that we can see what we’ve done so far.
Click on the localhost address to view in your browser example  http://localhost:5173/

Next, lets start import from assets example bot , user
Create 2 elements form and #chat_container as in index.html
Create one variable example let loadInterval

Next add function that will load the messages


Close all folder and navigate to the root folder to create server folder
Cd .. to the the root folder in the terminal. Cd to server folder and init
npm init -y
NOTE: this will create package.js in the server folder
Go to package.json change the main.js to script
Install some dependencies for the server side application
npm install cors, dotenv, express, nodemon, openai
Click enter
Create a new file server.js
NOTE: from this file we going to set up server and all the configuration
Next we need to get the API key

Sign-up or sign in into your openai.com
Go to profile by the right and select View API
Click on create new secret Key
Copy key
Open server folder
In the root of the application
NOTE: We moved the .env file to server folder later.
Create file .env
OPENAI_API_KEY= “  ”
Paste the key
SAVE AND CLOSE
Navigate back to server.js and import express, core, *dotenv, configuration, openaiapi.
Go to openai
Click on  examples
Search for code
Click on Natural language to openAiAPI
Click on open playground
On the right side select any model that fits your usage from the drop down menu
For me am using text Davinci003
It seems that this one is more capable, it understand text and produce high quality responses.
NOTE: there ar variables like temperatures ,max_tokens and other things I need to adjust
Click view code on the upper right hand
NOTE: make sure it is node.js if not change it there is a drop-menu before copy icon.
Copy the snippet code
NOTE: Have set up all the response I only need the parameter we can pass into the model.
Example:
model: "text-davinci-003",
  model: "text-davinci-003",
      prompt:`${prompt}`,
       
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,

NOTE: above is the shorter version

Paste in the server js


Go to package .json remove the  "test": "echo \"Error: no test specified\" && exit 1"
Add a new script "server": "nodemon server"
And a new “type    "type":"module",

NOTE: I have already removed the “main”:”index.js”
It might conflict with index.js from the server
Now ready to run
Npm run server
NOTE: 
From the server side
Now that the server is up and running split the terminal to start the client side

npm run dev 
NOTE: Network: use --host to expose
org-BfGt1jPnLAqUgDpEohGmc8Ur
Veridic api

Sk-b.......................

Coldimeji api
Sk-n……….

NOTE: .env suppose to be created inside the server(as mentioned before)
NOTE: set server localhost to 5001
While client is 5173


To deploy
Stop both terminal close all the localhost windows
Deploy the client side first you deploy to Heroku or GitHub 
NOTE: Using GitHub

Go to  your Github repository
Add new by clicking the + icon  
Select new repository
Give  a name example veridid_ai
Make it public 
Click create repository
Go back to vs code, 
On GitHub use the first command line
Cd from the client to the root of the repository in vs code cd ..
git init
git add .
On the root create a file .gitignore, add .env file and node_modules files
Git init
Git add .
Git commit -m
git branch -M main
git commit -m "first commit" 
git branch -M main

git remote add origin https://github.com/chrizteroo/veridid_ai.git
git push -u origin main

Go to GitHub refresh page




