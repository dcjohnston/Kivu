if (Posts.find().count() === 0){  

  Posts.insert({
    date: new Date(),
    freeWrite: "This is a free-write section to a mock post. Foo Bar Baz Bow Bow Bow." 
  });

}
