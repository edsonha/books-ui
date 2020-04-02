# Books-UI

React Frontend app that is using React

## How to use process.env

1. Create .env.development.local file

## How to deploy create-react-app on heroku

1. npx create-react-app \$MY_APP
2. cd \$MY_APP
3. git init
4. heroku create \$UNIQUE_APP_NAME --buildpack mars/create-react-app
   To change remote: heroku git:remote -a books-library-ui
5. git add .
6. git commit -m "react-create-app on Heroku"
7. git push heroku master
8. heroku open
