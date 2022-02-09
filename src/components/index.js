import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../redux/actions";
import { todoListSelector } from "../redux/selector";

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
  const usedispatch = useDispatch();
  const Submit = () => {
    usedispatch(addToDo(ToDo));
    setToDoName("");
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

          <div>
            Danh Sách <hr />
            {todoListnew.map((ToDo) => {
              return (
                <p className="text-black" key={ToDo.id}>
                  Việc làm: {ToDo.name} | Mức độ: {ToDo.priority}{" "}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
