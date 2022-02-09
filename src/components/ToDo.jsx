import React, {useState} from 'react';
import { ToDoList } from './ToDoList';

export default function ToDo() {
  const [ToDoList1, setToDoList1] = useState(ToDoList);

  return (
    <div >
      Danh Sách <hr />
      {ToDoList1.map( (ToDo) => {
        return(
          <p className="text-black" key={ToDo.id}>Việc làm: {ToDo.name} | Mức độ: {ToDo.priority} </p>
        )
      })}
    </div>
  );
}
