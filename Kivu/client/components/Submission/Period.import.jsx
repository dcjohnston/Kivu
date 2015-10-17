var {DatePicker, Paper} = MUI;

Period = React.createClass({
  render() {
    return (
      <Paper zDepth={1} className="form-field-wrapper">
        <div className="flex-dead-center">
          <DatePicker mode="landscape" />
        </div>
      </Paper>
    );
  }
});

export default Period;
