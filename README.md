
# Rock Paper Sciccor API

Rules -

Paper beats Rock
 
Rock beats Scissors

Scissors beats Paper
1) All user input values are going to be generated via random numbers. No need
for a user input mechanism.

2) It will be a 4 player game.

3) Each player will randomly choose either of the three (Rock, Paper or
Scissors). Calculate the results for each player in respect to every
other player based on the choices made.

4) The above should be repeated 50 times.

5) Return a JSON response with the results of each iteration.

## API Reference

#### Start

```http
  GET /game/start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

## Run Locally

Clone the project

```bash
  git clone https://github.com/VibhavSurve09/rock_paper_sciccor_api.git
```

Go to the project directory

```bash
  cd rock_paper_sciccor_api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack


**Server:** Node, Express

