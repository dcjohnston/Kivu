var {AppBar, LeftNav, IconMenu, MenuItem, IconButton, Avatar} = MUI;

Header = React.createClass({

  _toggleSideBar(e) {
    return this.refs.leftNav.toggle();
  },

  render() {
    console.log(MenuItem.Types);
    var menuItems = [{
      type: MenuItem.Types.SUBHEADER,
      text: "My Diary"
    },
    {
      text: "Create New Entry"
    }, {
      text: "Analyze Diary"
    }, {
      type: MenuItem.Types.SUBHEADER,
      text: "My Profile"
    }, {
      text: "Edit Profile"
    }, {
      text: "Logout"
    }, {
      type: MenuItem.Types.SUBHEADER,
      text: "Help"
    }, {
      text: "Getting Started"
    }, {
      text: "FAQs"
    }, {
      text: "Contact Us"
    }];

    return (
      <div>
        <AppBar title="Title Your App" onLeftIconButtonTouchTap={this._toggleSideBar}>
        </AppBar>
        <LeftNav ref="leftNav" menuItems={menuItems} docked={false}></LeftNav>
      </div>
    );
  }
});

export default Header;
