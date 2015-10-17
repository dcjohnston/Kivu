var {Paper, Toggle} = MUI;
// will want store to control toggle state
Exercise = React.createClass({
  _toggleSecondaryFields(ev, displayFields) {
    console.log(arguments);
  },

  render() {
    return (
      <Paper zDepth={1} className="form-field-wrapper">
        <Toggle name="exercise" label="exercise" onToggle={this._toggleSecondaryFields}>
        </Toggle>
      </Paper>
    );
  }
});

export default Exercise;
