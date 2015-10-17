var {Slider, Paper} = MUI;

SliderWrapper = React.createClass({
  render() {
    return (
      <Paper zDepth={1} className="form-field-wrapper">
        <label>{this.props.prompt}</label>
        <Slider name={this.props.name} defaultValue={this.props.defaultValue}
          max={this.props.max} min={this.props.min}/>
      </Paper>
    );
  }
});

export default SliderWrapper;
