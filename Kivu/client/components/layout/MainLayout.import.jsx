injectTapEventPlugin();

var {AppCanvas, Styles} = MUI;
var {ThemeManager, LightRawTheme} = Styles;

MainLayout = React.createClass({

  render() {
    return (
      <AppCanvas>
        {this.props.header}
        {this.props.content}
        {this.props.footer}
      </AppCanvas>
    );
  }
});

export default MainLayout;
