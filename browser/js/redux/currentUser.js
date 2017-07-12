import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';

/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser  = user => ({ type: SET_CURRENT_USER, currentUser: user });

/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.currentUser;

    default:
      return currentUser;
  }
}


/* ------------   THUNK CREATORS     ------------------ */

export const logInUser = ({email, password, history}) => dispatch => {
  axios.post('/api/users/login', {email, password})
    .then(res => res.data)
    .then(potentialUser => {
        dispatch(setCurrentUser(potentialUser))
        history.push(`/users/${potentialUser.id}`);
    })
    .catch(err => {
      console.log(err)
    });

};
