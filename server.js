const express=require('express');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const cors= require('cors');

const login=require('./Controllers/login');
const signup=require('./Controllers/signup');
const hotels=require('./Controllers/hotels');

const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test',
    database : 'project'
  }
});

const app=express();
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{res.send('heyyy')});
app.post('/login', login.handleLogin(db,bcrypt));
app.post('/signup', signup.handleSignup(db,bcrypt));
app.put('/hotels', hotels.handleHotels(db));

app.listen(3000);