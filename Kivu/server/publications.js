Meteor.publish('posts', function(author) {
  return Posts.find({
    flagged: undefined //limit what is exposed to subscribers
  });
});
