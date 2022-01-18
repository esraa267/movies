import React from "react";
import { connect } from "react-redux";
class HomeClass extends React.Component() {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <div >
            <h4>Movies</h4>
            
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state
  }
}
export default connect(mapStateToProps)(HomeClass);
