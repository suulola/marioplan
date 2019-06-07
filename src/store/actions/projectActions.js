export const createProject = (project, history) => (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile;

  const authorId = getState().firebase.auth.uid;
  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date()
    })
    .then(() => {
      dispatch({
        type: "CREATE_PROJECT",
        payload: project
      });
      history.push("/");
    })
    .catch(err =>
      dispatch({
        type: "CREATE_PROJECT_ERROR",
        payload: err
      })
    );
};
