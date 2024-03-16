import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, address } = this.props;
    const { count } = this.state;
    return (
      <div className="details">
        <h1>count: {count}</h1>
        <button
          className="button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          INCREASE
        </button>
        <h1 className="user-header">Name: {name}</h1>
        <p className="user-address">Address: {address}</p>
      </div>
    );
  }
}
export default UserClass;
