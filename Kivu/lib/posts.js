// place collecitons here
// since /lib runs first
// is accessible on client & server

// dont use var keyword
// since we want Posts to be globally
// accessible thruout our app
Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    //TODO: disable for now
    // check(postAttributes, {
    //   title: String,
    //   url: String
    // });

    // var postRecentlySubmitted = Posts.findOne({
    //   submitted: {
    //     $gte: (new Date()).setMinutes(-5)
    //   }
    // });
    // if (postWithSameLink) {
    //   return {
    //     postExists: true,
    //     _id: postWithSameLink._id
    //   };
    // }
    
    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  }
});
