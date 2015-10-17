var {Paper, DropDownMenu} = MUI;
AssistedDevices = React.createClass({
  render() {
    var options = [
      {payload: '0', text: "None"},
      {payload: '1', text: "Cane"},
      {payload: '2', text: "Walker"},
      {payload: '3', text: "Wheel Chair"}
    ];

    return (
      <Paper zDepth={1} className="form-field-wrapper">
        <DropDownMenu menuItems={options}></DropDownMenu>
      </Paper>
    );
  }
});

export default AssistedDevices;
