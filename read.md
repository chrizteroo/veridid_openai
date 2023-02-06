**Creating own chatGPT using API**

**veridid_ai**

1. Go to Desktop
2. Create a folder name open_ai_veridid
3. Open vscode
4. Drag and drop newly created folder
5. Check if you have node.js  if yes continue
6. Open terminal
7. npm create vite@latest client --template vanilla
>NOTE: we are creating a vanilla type client a javascript project

8. OK to proceed y
9. Select vanilla
10. Select javascript

>NOTE: Client package is downloaded

11. cd to client then
12. Run npm install
>NOTE: This will install all essential packages

13. Go to https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fadrianhajdin%2Fproject_openai_codex%2Ftree%2Fmain%2Fclient%2Fassets
14. And upload assets or better still create your own assets
15. Navigate back to client and paste the assets folder in client


16. Also go to :https://gist.github.com/adrianhajdin/2059ca74452a18d1560aac9499f58900
17. Copy the syles and paste in styles.css
>NOTE: the style is used in order to have same look and feel of chatGPT

18. Inside the assets folder move favicon.ico into the Public Folder
>NOTE: Now what is remaining in assets folder are bot.svg,send.svg, and user.svg
19. Still in the public folder delete vite.svg file
20. Also delete counter.js
21. Go to Index.html
22. Change vite.svg to favicon.ico
23. Change the title from vite app to Veridid - Coding AI
24. Also add a link tag with href style.css
25. Still on index.html, in the body with an id of app,
>With a self closing <div id=“chat_container”></div>
>This is going to rap together the entire application
>Below the second self closing<div
>Add 
>Form tag
>Inside the form we going to add textarea
>The text area is going to have a name “prompt” with a number of rows.

>Example:
<textarea name="prompt" rows="1" cols="1 placeholder=Ask Veridid..."></textarea>

26. Next you add a submit button
27. Then hook everything to the module which will be named scripts we change main.js to script.js
28. Also change the main.js folder to script.js
29. delete all the code inside the script.js for now.
30. Go to terminal, make sure you are in the client folder or cd .. to get there
31. Once you are in the root file, run 
32. npm run dev
>NOTE: this will start application so that we can see what we’ve done so far.
33. Click on the localhost address to view in your browser example  http://localhost:5173/

>Next, 
34. lets start import from assets example bot , user
35. Create 2 elements form and #chat_container as in index.html
36. Create one variable example let loadInterval

>Next add function that will load the messages


37. Close all folder and navigate to the root folder to create server folder
38. Cd .. to the the root folder in the terminal. Cd to server folder and init
39. npm init -y
>NOTE: this will create package.js in the server folder
40. Go to package.json change the main.js to script
41. Install some dependencies for the server side application
42. npm install cors, dotenv, express, nodemon, openai
43. Click enter
44. Create a new file server.js
>NOTE: from this file we going to set up server and all the configuration
  
**Next we need to get the API key**

45. Sign-up or sign in into your openai.com
46. Go to profile by the right and select View API
47. Click on create new secret Key
48. Copy key
49. Open server folder
50. In the root of the application
>NOTE: We moved the .env file to server folder later.
51. Create file .env
52. OPENAI_API_KEY= “  ”
53. Paste the key
54. SAVE AND CLOSE
55. Navigate back to server.js and import express, core, *dotenv, configuration, openaiapi.
56. Go to openai
57. Click on  examples
58. Search for code
59. Click on Natural language to openAiAPI
60. Click on open playground
61. On the right side select any model that fits your usage from the drop down menu
>For me am using text Davinci003
>It seems that this one is more capable, it understand text and produce high quality responses.
>NOTE: there ar variables like temperatures ,max_tokens and other things I need to adjust
62. Click view code on the upper right hand
>NOTE: make sure it is node.js if not change it there is a drop-menu before copy icon.
63. Copy the snippet code
>NOTE: Have set up all the response I only need the parameter we can pass into the model.
>Example:
model: "text-davinci-003",
  model: "text-davinci-003",
      prompt:`${prompt}`,
       
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,

>NOTE: above is the shorter version

64. Paste in the server js


65. Go to package .json remove the  "test": "echo \"Error: no test specified\" && exit 1"
66. Add a new script "server": "nodemon server"
67. And a new “type    "type":"module",

>NOTE: I have already removed the “main”:”index.js”
>It might conflict with index.js from the server
68. Now ready to run
69. Npm run server
>NOTE: 
>From the server side
>Now that the server is up and running split the terminal to start the client side

70. npm run dev 
>NOTE: Network: use --host to expose
>org-BfGt1jPnLAqUgDpEohGmc8Ur
>Veridic api

>Sk-b.......................

>Coldimeji api
>Sk-n……….

>NOTE: .env suppose to be created inside the server(as mentioned before)
>NOTE: set server localhost to 5001
71. While client is 5173


**To deploy**
72. Stop both terminal close all the localhost windows
73. Deploy the client side first you deploy to Heroku or GitHub 
>NOTE: Using GitHub

74. Go to  your Github repository
75. Add new by clicking the + icon  
76. Select new repository
77. Give  a name example veridid_ai
78. Make it public 
79. Click create repository
80. Go back to vs code, 
81. On GitHub use the first command line
82. Cd from the client to the root of the repository in vs code cd ..
83. git init
84. git add .
85. On the root create a file .gitignore, add .env file and node_modules files
86. Git init
87. Git add .
88. Git commit -m
89. git branch -M main
90.git commit -m "first commit" 
91. git branch -M main

92. git remote add origin https://github.com/chrizteroo/veridid_ai.git
93. git push -u origin main

94. Go to GitHub refresh page




