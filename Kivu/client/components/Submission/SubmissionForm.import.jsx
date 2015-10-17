import SliderWrapper from '/client/components/Submission/SliderWrapper';
import HumanModel from '/client/components/dataVis/HumanModel';
import PeriodTracker from '/client/components/Submission/Period';
import AssistedDevices from '/client/components/Submission/AssistedDevices';
import Exercise from '/client/components/Submission/Exercise';
var {Paper} = MUI;

SubmissionForm = React.createClass({
  render() {

    var lastPeriod;
    if (true) { //user is female
      lastPeriod = <PeriodTracker/>;
    }

    return (
      <Paper zDepth={1} className="submission-container">
        <form>
          <HumanModel />
          <SliderWrapper name="pain" defaultValue={0} max={10}
            min={0} prompt={"Pain"}/>
          <SliderWrapper name="energy" OveralldefaultValue={0}
            max={10} min={0} prompt={"Energy"}/>
          <SliderWrapper name="mood" defaultValue={0}
            max={10} min={0} prompt={"Mood"}/>
          <SliderWrapper name="stress" defaultValue={0}
            max={10} min={0} prompt={"Stress"}/>
          {lastPeriod}
          <AssistedDevices></AssistedDevices>
          <Exercise></Exercise>
        </form>
      </Paper>
    );
  }
});

export default SubmissionForm;
