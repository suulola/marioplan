export const createProject = (project, history) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {

  const firestore = getFirestore()
  firestore.collection('projects').add({
    ...project,
    authorFirstName: 'Oluwa',
    authorLastName: 'Seyi',
    createdAt: new Date()
  })
  .then(() => {
    dispatch({
      type: "CREATE_PROJECT",
      payload: project
    });
    history.push("/");
  })
  .catch(err => dispatch({
    type: 'CREATE_PROJECT_ERROR',
    payload: err
  }))
 
};
