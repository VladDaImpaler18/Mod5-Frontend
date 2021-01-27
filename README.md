# README

## Table of Contents
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Changelog](#changelog)


## Getting Started -- The Frontend

In the Terminal, navigate to the frontend/ folder and run the command `npm install && npm start`. This will install the necessary npm packages and open a page in the browser to view the webapp. The page may not load all the required information because the backend still has to be set up, and started.

To set up the backend, in the Terminal navigate to the backend/ folder and run the command `bundle install`. The database used in this project is PostgreSQL. PostgeSQL requires a username to be created in advance, and have the username inputted in `./config/database.yml` on lines 27, 62 & 86. If you were to use the default values I have set, the lines will look like `username: vlad`. In order to use the pre-set username `vlad` you must create a PostgreSQL role. In the terminal enter the command `sudo -u postgres createuser --superuser vlad`. Assuming you have the ability to sudo, this command will create a user named 'vlad' and give them --superuser abilities, normally not recommended but for the purpose of the demo will work.

Now the database must be created and loaded. To do so navigate to the backend/ folder and use the rails command `rails db:migrate`. Once the database is loaded and the schema is created, enter the command `rails db:setup` create the databases. Finally, populate the database with seed users by loading up the seed data, run the command `rails db:seed` then `rails s` to start the backend api server.

**NOTE: The backend is not included in this repo.** For a fully functional demo, navigate to the backend's github repo and clone it.
For the backend goto: https://github.com/VladDaImpaler18/Mod5-Backend 
Currently you are viewing the frontend: https://github.com/VladDaImpaler18/Mod5-Frontend

## Usage
This demo is for demonstrating how the Budget Application will work. Currently a pre-made user can be selected and entries can be added & removed from their budget. Navigate to the account page `localhost:3000/account` and select one of the three users to login as. Each user has their own budget and wishlist *(planned feature)*. With a user selected, navigate to the budget page `localhost:3000/budget` and you can view their income statement, click to expand the lists to see more details about the purchases, and expand the details on each individual purchase as well.


## Contributors
If you would like to contribute fork the github repo, create your feature branch, commit changes and push the branch.

## License
(c) 2020 Vladimir Jimenez, all rights reserved. For Online Software Engineering PT - React Project

## Changelog
Version .9b (1/27/2020) Initial Release 

## Todo
* Wishlist Components
* Budget Component track all purchases and keeps record
* Scope of date for budget (weekly view, monthly, Year To Date)
* Add Calendar component for date entry
* Style and beautification