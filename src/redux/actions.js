export const addToDo = (data) => {
  return {
    type: "todoList/addToDo",
    payload: data,
  };
};
