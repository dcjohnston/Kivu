Template.postsList.helpers({
  posts: function(){
    return Posts.find({}, {
      fields: {
        title: true //defaults to true, this is just for demonstration
      },
      sort: {
        submitted: -1
      },
    });
  }
});
