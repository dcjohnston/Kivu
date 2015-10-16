var {Slider, Paper, DatePicker} = MUI;
var {Grid, Col, Row} = ReactBootstrap;

SubmissionForm = React.createClass({
  render() {

    var lastPeriod;
    if (true) { //user is female
      lastPeriod = <DatePicker mode="landscape"/>;
    }

    return (
      <Paper zDepth={1} className="submission-container">
        <form>
          <Slider name="pain" defaultValue={0} max={10} min={0}/>
          <Slider name="energy" OveralldefaultValue={0} max={10} min={0}/>
          <Slider name="mood" defaultValue={0} max={10} min={0}/>
          <Slider name="stress" defaultValue={0} max={10} min={0}/>
          <Slider name="anxiety" defaultValue={0} max={10} min={0}/>
          {lastPeriod}

        </form>
      </Paper>
    );
  }
});

export default SubmissionForm;
