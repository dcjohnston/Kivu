Template.postSubmit.events({
  'submit form': function(e){
    e.preventDefault();
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    //invoke meteor method from client side
    Meteor.call('postInsert', post, function(e, res){
      if (e){
        throw e;
      }
      Router.go("postPage", {_id: res._id});
    });
    
  }
});
