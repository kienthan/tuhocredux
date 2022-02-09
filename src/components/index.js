import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ToDoList from "./ToDo";
import { Add } from "./ToDoList";

export default function Home() {
  const [ToDoName, setToDoName] = useState("");

  const handleInputChange = (e) => {
    setToDoName(e.target.value);
  };
  const ToDo = {
    id: uuid(),
    name: ToDoName,
    priority: "High",
  };
  const Submit = () => {
    Add({ ToDo });
    setToDoName("");
  };
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
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="input1"
                onChange={handleInputChange}
                value={ToDoName}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                Submit();
              }}
            >
              Nhập
            </button>
          </div>

          <ToDoList />
        </div>
      </div>
    </div>
  );
}
