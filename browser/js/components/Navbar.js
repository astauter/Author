import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import history from '../history';
import { logOutUser } from '../redux/currentUser';
import isLoggedIn from '../utilityFuncs';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><img src="/images/logo.png" /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/users" activeClassName="active">users</NavLink>
              </li>
              <li>
                <NavLink to="/stories" activeClassName="active">stories</NavLink>
              </li>
            </ul>
            { this.renderLogout() }
            { this.renderLoginSignup(this.props.currentUser) }
          </div>
        </div>
      </nav>
    );
  }

  renderLoginSignup(currentUser) {
    if (isLoggedIn(currentUser)) {
      return null;
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
          <NavLink to="/signup" activeClassName="active">signup</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">login</NavLink>
          </li>
        </ul>
      );
    }
  }

  renderLogout() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
        <button
          className="navbar-btn btn btn-default"
          onClick={this.props.logout}>
          logout
        </button>
        </li>
      </ul>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => ({ currentUser: state.currentUser });

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logOutUser(history))
  }
});

export default withRouter(connect(mapProps, mapDispatch)(Navbar));
