Template.postsList.helpers({
  posts: function(){
    return Posts.find({}, {
      fields: {
        title: true
      }
    });
  }
});
