export const ToDoList = [
  {id:"1", name:" Học ReactJS", priority:"Medium"},
  {id:"2", name:" Học Database", priority:"High"},
  {id:"3", name:" Học NodeJS", priority:"Low"},
];

export const Add = ({ToDo}) =>{
  ToDoList.push(ToDo)
  console.log(ToDoList)
}

