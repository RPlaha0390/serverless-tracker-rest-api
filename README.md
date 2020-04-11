# serverless-tracker-rest-api

## Endpoints

_NB: The below endpoints will need to be updated every time you run `sls-deploy` in either `user-service` or `tracks-service` directory_

#### Tracks

- POST - https://yd27zm7isb.execute-api.us-east-1.amazonaws.com/dev/tracks
- GET - https://yd27zm7isb.execute-api.us-east-1.amazonaws.com/dev/tracks/{id}
- GET - https://yd27zm7isb.execute-api.us-east-1.amazonaws.com/dev/tracks
- PUT - https://yd27zm7isb.execute-api.us-east-1.amazonaws.com/dev/tracks/{id}
- DELETE - https://yd27zm7isb.execute-api.us-east-1.amazonaws.com/dev/tracks/{id}

#### Users

- POST - https://g4say3prtd.execute-api.us-east-1.amazonaws.com/dev/sign-in
- POST - https://g4say3prtd.execute-api.us-east-1.amazonaws.com/dev/sign-up
- GET - https://g4say3prtd.execute-api.us-east-1.amazonaws.com/dev/user
- GET - https://g4say3prtd.execute-api.us-east-1.amazonaws.com/dev/users
