import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "../redux/actions";
import { todoListSelector } from "../redux/selector";

export default function Home() {
  const [ToDoName, setToDoName] = useState("");
  const [priority, setPriority] = useState("");

  const handleInputChange = (e) => {
    setToDoName(e.target.value);
  };
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const ToDo = {
    id: uuid(),
    name: ToDoName,
    priority: priority,
  };
  const usedispatch = useDispatch();
  const Submit = () => {
    usedispatch(addToDo(ToDo));
    setToDoName("");
    setPriority("Medium");
  };
  const deleteItem = (index) => {
    usedispatch(deleteToDo(index));
  };
  const todoListnew = useSelector(todoListSelector);
  const classname = {
    body: {
      fontFamily: "Serif",
      fontSize: "20px",
      padding: "0 15%",
      color: "Black",
    },
    card: {
      boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      marginTop: "20px",
    },
    title: {
      textAlign: "center",
      fontWeigh: "Border",
      fontSize: "40px",
    },
    priority: {
      float: "Right",
    },
    button: {
      float: "Right",
      marginLeft: "10px",
    },
  };
  return (
    <div className="container" style={classname.body}>
      <div className="card" style={classname.card}>
        <div className="card-body">
          <h5 className="" style={classname.title}>
            Danh sách các việc cần làm
          </h5>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Nhập việc cần làm</label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="input1"
                onChange={handleInputChange}
                value={ToDoName}
              />
            </div>
            <div className="col-sm-4">
              <select
                className="form-select"
                value={priority}
                onChange={handlePriorityChange}
              >
                <option defaultValue="Medium">Lựa chọn mức độ</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
            <button
              className="btn btn-primary col-sm-12"
              onClick={() => {
                Submit();
              }}
            >
              Nhập
            </button>
          </div>

          <div>
            Danh Sách <hr />
            {todoListnew.map((ToDo, index) => {
              return (
                <p className="text-black" key={ToDo.id}>
                  {ToDo.name}

                  <button
                    className="btn btn-warning"
                    style={classname.button}
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    Xoá
                  </button>
                  {<span style={classname.priority}>{ToDo.priority}</span>}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
