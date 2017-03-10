const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const { JwtStrategy, ExtractJwt } = require('passport-jwt');