export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      var user = firebase.auth().currentUser;
      dispatch({ type: "LOGIN_SUCCESS" });
    })
    .catch(err => {
      dispatch({
        type: "LOGIN_ERROR",
        err
      });
    });
};

export const signUp = newUser => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(resp => {
      return firestore
        .collection("users")
        .doc(resp.user.uid)
        .set({
          firstName: newUser.firstname,
          lastName: newUser.lastname,
          email: newUser.email,
          initials:
            newUser.firstname.slice(0, 1).toUpperCase() +
            newUser.lastname.slice(0, 1).toUpperCase()
        });
    })
    .then(res => {
      return dispatch({ type: "SIGNUP_SUCCESS" });
    })
    .catch(err => {
      dispatch({
        type: "SIGNUP_ERROR",
        err: err
      });
    });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "SIGNOUT_SUCCESS" });
    });
};
