var {Paper} = MUI;
HumanModel = React.createClass({
  render() {
    return (
      <Paper zDepth={1}>
        <div className="flex-dead-center form-field-wrapper">
          <iframe id ="embeddedHuman" frameBorder="0" width="800" height="600"
            allowFullScreen="true"
            src="https://human.biodigital.com/embedded.html?uaid=1IovV&be=b76">

          </iframe>
        </div>
      </Paper>
    );
  }
});

export default HumanModel;
