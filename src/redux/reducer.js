const initState = {
  todoList: [
    { id: "1", name: " Học ReactJS", priority: "Medium" },
    { id: "2", name: " Học Database", priority: "High" },
    { id: "3", name: " Học NodeJS", priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addToDo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "todoList/deleteToDo":
      return {
        ...state,
        todoList: state.todoList.filter(
          (item, index) => index !== action.payload
        ),
      };
    default: {
      return state;
    }
  }
};

export default rootReducer;
