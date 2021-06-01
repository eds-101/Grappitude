# Final Project rework

* Increased features and functionality
- Login and signup feature via custom Rails Authentication API
- Comments - Sentiment Analyser, delete comments with confirmation
- Maps feature for choosing spots

![Grappitude v2 Gif](https://imgur.com/a/zF3aBoh)

# How to install and run the program:
```sh
$ git clone git@github.com:eds-101/fight-recommender.git
Use your terminal, navigate to root of this project root folder and run the following commands
$ npm install
Authentication: Create a secrets.js file @ root and save the following line
export const API_URL = "https://blooming-plains-19601.herokuapp.com"
Copy the string below into backend/server.js, const uri on line 14 replacing existing data
"mongodb+srv://ed:ed@cluster0.tsyxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;"
Start the server from root folder
$ node server/index.js
Open a second terminal @ root
$ expo start
Press 'i' in terminal to run app in iPhone simulator
```
