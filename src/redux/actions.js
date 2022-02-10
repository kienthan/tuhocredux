export const addToDo = (data) => {
  return {
    type: "todoList/addToDo",
    payload: data,
  };
};

export const deleteToDo = (data) => {
  return {
    type: "todoList/deleteToDo",
    payload: data,
  };
};
