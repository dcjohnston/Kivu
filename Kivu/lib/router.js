Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () { //resolve this before completeing route
    return Meteor.subscribe('posts');
  }
});

Router.route('/', {
  name: 'postsList' //this is technically just route name
  // but router will infer templateName from this
  // unless it's explicitly set
});

//set a dynamic route
Router.route('/posts/:_id',{
  name: 'postPage',
  data: function () {
    return Posts.findOne({
      _id: this.params._id //'this' is data context established by router
    });
  }
});

Router.route('/submit/', {
  name: 'postSubmit'
});

var requireLogin = function () {
  if (!Meteor.user()){
    if (Meteor.loggingIn()){
      this.render('loading');
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};


Router.onBeforeAction(requireLogin, {
  only: 'postSubmit'
});

// whenever data function returns falsy
// show the not found page
Router.onBeforeAction('dataNotFound',{
  only: 'postPage'
});


