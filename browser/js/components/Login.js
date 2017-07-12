import React from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../redux/currentUser';

/* -----------------    COMPONENT     ------------------ */

function Login (props) {

    const { message } = props;
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={props.onLoginSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{message}</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  // onLoginSubmit(event, history) {
  //   event.preventDefault();

  //   const email = event.target.email.value
  //   const password = event.target.password.value




  // }


/* -----------------    CONTAINER     ------------------ */

const mapState = (state, ownProps) => ({ message: 'Log in', history: ownProps.history });
const mapDispatch = (dispatch, ownProps) => {
  return {
    onLoginSubmit: function (event) {
      event.preventDefault();
      const email = event.target.email.value
      const password = event.target.password.value

      dispatch(logInUser({email, password, history: ownProps.history}))
    }
  }
};

export default connect(mapState, mapDispatch)(Login);
