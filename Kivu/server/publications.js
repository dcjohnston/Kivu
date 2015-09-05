Meteor.publish('posts', function(author) {
  return Posts.find({
    author: author,
    flagged: undefined //limit what is exposed to subscribers
  });
});
