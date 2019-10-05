import createDataContext from "./createDataContext";
import { ADD_THOUGHT, DELETE_THOUGHT } from "./actions";
import uuid from "uuid/v1";

const thoughtReducer = (state, action) => {
  switch (action.type) {
    case "add_thought":
      return [...state, { title: `Thought #${state.length + 1}`, id: uuid() }];
    case "delete_thought":
      return state.filter(though => though.id !== action.payload);
    default:
      return state;
  }
};
const addThougt = dispatch => {
  return () => dispatch({ type: ADD_THOUGHT });
};
const deleteThought = dispatch => {
  return id => dispatch({ type: DELETE_THOUGHT, payload: id });
};

export const { Context, Provider } = createDataContext(
  thoughtReducer,
  { addThougt, deleteThought },
  []
);
