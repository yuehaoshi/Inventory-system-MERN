# MERN stack project: Inventory Management System

This project is following the tutorial from [SEBASTIAN](https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/), but compared to the original tutorial, I made some changed to update the features that has been discarded by `react-router v6`, such as `useParams`, `Router`, and changed some class-based Component to Functions to better fit newer version React.

## FrontEnd:
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- In terminal, cd (change directory) to `INVENTORY-SYSTEM`, run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## BackEnd:
- In terminal, cd (change directory) to `INVENTORY-SYSTEM`, run `nodemon server`
- Setting Mongodb
    - If you haven't installed Mongodb before, follow [this tutorial](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) and "started MongoDB as a macOS service". (You can find installation for systems other than MacOS in similar page of the tutorial)
    - In `INVENTORY-SYSTEM/backend` directory, run `mongosh`, you will be in Mongodb
    - type `use shoppings`, this will make mongoDB switched to db "shoppings"
    
