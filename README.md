# tab-tracker-mevn

> A Vue.js / Node.js /Express.js / MongoDb web application for keeping track of guitar tabs.
> Live demo [_here_](https://tab-tracker-mevn.herokuapp.com/)

## General Information

You can use this application to try to learn the song with guitar

## Technologies

- Vue.js / Vuex
- Mongodb
- Node.js / Express.js
- passport
- JWT
- Joi
- Bcrypt

## Features

- Login/sign up flow with e-mail address
- Search through the list of available songs in the Browse tab
- View the song details including basic information, tabs, lyrics and youtube video
- List of recently viewed songs for a logged in user
- Bookmark song functionality for a logged in user
- Add a new song & Edit a typical metadata of a song for a logged in user

## Setup

Client - Terminal A
```
$ cd client
$ npm install
$ npm start
```
Server - Terminal B
```
$ cd server
$ npm install
$ npm start
```

## Screenshots
- This is the home page (user is not logged in) but he/she can see the list of the available songs
![image](https://user-images.githubusercontent.com/48249708/118304729-e6cc2080-b49b-11eb-8c88-c3ea5cf33651.png)

- User is logged in so he can add a new song, bookmark a particular song, view a song details & have access to all the recently viewed songs
![image](https://user-images.githubusercontent.com/48249708/118304845-0bc09380-b49c-11eb-93cf-f7227d2fcde0.png)

- view song details page: user can edit a song, see its youtube video and its tab and lyrics
![image](https://user-images.githubusercontent.com/48249708/118304913-2561db00-b49c-11eb-9bc8-f9adbf5f1465.png)



