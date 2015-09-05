// place collecitons here
// since /lib runs first
// is accessible on client & server

// dont use var keyword
// since we want Posts to be globally
// accessible thruout our app
Posts = new Mongo.Collection('posts');
