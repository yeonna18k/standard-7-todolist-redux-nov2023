const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

const initialState = {
  todos: [
    {
      id: 1,
      title: "react공부",
      content: "react 강의듣기",
      isDone: true,
    },
    {
      id: 2,
      title: "redux 공부",
      content: "redux todolist 만들기",
      isDone: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {};
    case SWITCH_TODO:
      return {};
    default:
      return state;
  }
};

export default todos;
