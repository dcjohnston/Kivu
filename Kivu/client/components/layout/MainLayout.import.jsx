injectTapEventPlugin();

var {AppCanvas, Styles} = MUI;
var {ThemeManager, LightRawTheme} = Styles;
var {Grid} = ReactBootstrap;

MainLayout = React.createClass({

  render() {
    return (
      <AppCanvas>
        <Grid>
          {this.props.header}
          {this.props.content}
          {this.props.footer}
        </Grid>
      </AppCanvas>
    );
  }
});

export default MainLayout;
