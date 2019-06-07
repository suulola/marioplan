const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.payload);
      // const newP = { ...action.payload, id: state.projects.length + 1 };
      return {
        ...state
        // projects: [...state.projects, newP]
      };
    case "CREATE_PROJECT_ERROR":
      console.log("created project error", action.payload);
      return {
        ...state
      };
     
    default:
      return state;
  }
};

export default projectReducer;
