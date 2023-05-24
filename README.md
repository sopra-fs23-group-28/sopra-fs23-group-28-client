# Group 28 - Camel Race

This is a trivia quiz based game for 2 - 4 players. It was initially designed to be played locally with other people around you but it can also be done remotely. We were inspired to do this by a carnival game. 


## Main Components

These are the main files necessary to get a good overview for the game:

1. 
```
Check out [AppRouter](src/components/routing/routers/AppRouter.js)  
to comprehend the game flow from logging in until the game start.
```

2. 
```
[Lobby](src/components/views/lobby.js)  
hosts all entries and exits of players and thus is very integral  
to the application.
```

3. 
```
[Overview](src/components/views/overview.js) is the main hub for the websocket,  
there you can see all components involved in the question & answer game flow  
right up until the end of the game.
```

## Getting Started

You can start the game under the following link: https://sopra-fs23-group-28-client.oa.r.appspot.com

Or copy this and the server side repo (https://github.com/sopra-fs23-group-28/sopra-fs23-group-28-server) to your machine.

Then set it all up with the respective set-up instructions.

### Prerequisites

Be sure to have the following programs installed:

```
[Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  
for package management, all other dependencies will get installed with it
```

### Technologies that are used

* [React](https://react.dev/) - JS library
* [React-router-dom](https://reactrouter.com/en/main) - Version 6.4+ for routing
* [Socket.io](https://socket.io/docs/v4/) - For Websockets

### Set-up

Run the following line of code in the project root directory

```
npm install
```

Start a dev environment with

```
npm run dev
```

You can now see the application at http://localhost:3000 in your browser of choice (CSS fine-tuned for Google Chrome though).

Be sure to have the server side running as well! Otherwise you won't be able to get very far.
Check this at http://localhost:8080

## Illustrations

The game starts with a simple login screen where your username is the unique token.

![login](https://user-images.githubusercontent.com/74095071/240606792-f6a6a635-8c39-4178-abc3-b8e6769f54eb.jpg)


In the lobby you can either host a new session or join an existing one.

![lobby](https://user-images.githubusercontent.com/74095071/240608871-fcef6f6a-2676-4322-90f2-08becac2a1f0.jpg)


You have to choose an avatar before you can go to the waiting room.

![avatar](https://user-images.githubusercontent.com/74095071/240608895-950e9ed5-3ea7-4dfb-a2c1-48241d285baa.jpg)


As soon as there are at least 2 people in the waiting room, the host can start the game. It also shows the pin for sharing the session, rules if you need to read up on it and for the host a settings button to choose the number of steps for the next game.

![waitingRoom](https://user-images.githubusercontent.com/74095071/240608914-3511e733-9baf-485e-ae4a-b5e41325ef1b.jpg)


The game runs as follows:
- a difficulty is chosen for 4 rounds
- a category is voted on
- the question shows
- the race is updated according to the outcome of the game

When the game ends it shows a podium of the best 3 players.


## Roadmap

These features would have been nice, but could not be realized due to time restrictions:

* Gadgets: Power-ups that are rewarded for correct answer streaks (example names: camel round house kick, vodka bottle)
* Random events: with a small chance on the diffuclty wheel, this event redistributes the players on the field
* Spectator screen: a big screen view for spectators (follows hosts view)
* Tilting spin button: when the difficulty wheel spin button hits a new section it tilts for a bit

## Authors

For this FrontEnd part:

* **Cédric Styner** - *Main contributor* - [glt-cs](https://github.com/glt-cs)

* **Markus Senn** - *Main contributor* - [iKusii](https://github.com/iKusii)

* **Dennys Huber** - *Responsible TA* - [devnnys](https://github.com/devnnys)

* **Roy Rutishauser** - *template provider* - [royru](https://github.com/royru)

* **Luis Torrejón** - *template provider* - [luis-tm](https://github.com/luis-tm)

Continuous team work and BackEnd authors:

* **Elia Aeberhard** - *Main contributor* - [Elyisha](https://github.com/Elyisha)

* **Harris Sohrab** - *Main contributor* - [so-ri](https://github.com/so-ri)

* **Samuel Frank** - *Main contributor* - [samuelfrnk](https://github.com/samuelfrnk)

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE.md) file for details

## Acknowledgments

* Thanks to all the people that helped, on- and offline
* No camels were harmed in the making of this game (well not directly)
