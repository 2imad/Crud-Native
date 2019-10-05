import createDataContext from "./createDataContext";

const thoughtReducer = (state, action) => {
  switch (action.type) {
    case "add_thought":
      return [...state, { title: `Thought #${state.length + 1}` }];
    default:
      return state;
  }
};
const addThougt = dispatch => {
  return () => dispatch({ type: "add_thought" });
};

export const { Context, Provider } = createDataContext(
  thoughtReducer,
  { addThougt },
  []
);
