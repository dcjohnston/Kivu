Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

// Local (client-only) collection
Errors = new Mongo.Collection(null); // passing in null
// makes this a local (client-side only) collection
// since we wont bother to sync errors to the dataas
