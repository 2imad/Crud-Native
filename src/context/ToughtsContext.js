import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
import { DELETE_THOUGHT, EDIT_THOUGHT, GET_THOUGHTS } from "./actions";

const thoughtReducer = (state, action) => {
  switch (action.type) {
    case GET_THOUGHTS:
      return action.payload;
    case EDIT_THOUGHT:
      return state.map(thought => {
        return thought.id === action.payload.id ? action.payload : though;
      });
    case DELETE_THOUGHT:
      return state.filter(though => though.id !== action.payload);
    default:
      return state;
  }
};

const getThoughts = dispatch => {
  return async () => {
    const res = await jsonServer.get("/thoughts");
    dispatch({ type: GET_THOUGHTS, payload: res.data });
  };
};
const addThougt = () => {
  return async (title, content, callback) => {
    await jsonServer.post("/thoughts", { title, content });
    callback ? callback() : null;
  };
};
const deleteThought = dispatch => {
  return async id => {
    await jsonServer.delete(`/thoughts/${id}`);
    dispatch({ type: DELETE_THOUGHT, payload: id });
  };
};

const editThought = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/thoughts/${id}`, { title, content });
    dispatch({ type: EDIT_THOUGHT, payload: { id, title, content } });
    callback ? callback() : null;
  };
};

export const { Context, Provider } = createDataContext(
  thoughtReducer,
  { addThougt, deleteThought, editThought, getThoughts },
  []
);
