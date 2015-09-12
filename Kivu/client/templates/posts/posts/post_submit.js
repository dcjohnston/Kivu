Template.postSubmit.events({
  'submit form': function(e){
    e.preventDefault();
    var post = {
      jStability: $(e.target).find('[name=jStability]').val(),
      anxiety: $(e.target).find('[name=anxiety]').val(),
      energy: $(e.target).find('[name=energy]').val()
    };

    //invoke meteor method from client side
    Meteor.call('postInsert', post, function(e, res){
      if (e){
        throw e;
      }
      if (res.postExists){
        alert('This link already has been posted');
      }
      Router.go("postPage", {_id: res._id});
    });    
  }
});
