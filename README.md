# MorningCoffee-Backend

This is the backend to the application MorningCoffee, check out the links below
* Live: [MorningCoffee - Live](http://morningcoffee.thelaclair.com) 
* Code: [MorningCoffee - Code](https://github.com/aLaclair/MorningCoffee)
* Published Backend: [MorningCoffee - Backend](https://morning-coffee-backend-austin.herokuapp.com)

## API Endpoints

* GET /users will display user information **You will be able to see passwords, but this is not a secure site so the passswords are unmeaningful**
* GET /users/:id/schedule will display users schedule for the day if any
* GET /findUser/:username will search for a particular user
* POST /addUser will add a user to the database
* POST /addScheduleBlock will add a schedule block to for the user
* GET /delete/block/:id will delete whichever schedule block was clicked

## Contributor/Owner
* Austin LaClair
