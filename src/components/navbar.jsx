import React from "react";

// Stateless Functional Component (Used when there is no states beign used)
const NavBar = ({totalCounters}) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};
/*
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters} //This only works with classes
            </span>
          </a>
        </div>
      </nav>
    );
  }
}
*/
export default NavBar;
