import { isVisible } from "@testing-library/user-event/dist/utils";
import * as React from "react";
import "./App.css";

export default function App() {
  //---------------------------Variables---------------------------//
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");
  const [gender, setGender] = React.useState<string | undefined>("");

  var submit: boolean = false;
  //console.log(submit);

  //---------------------------Event Functions---------------------------//
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  //---------------------------Event/Submit Functions---------------------------//
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //Stops page from refreshing on submit
    event.preventDefault();
    submit = true;
    console.log(name, age, color, gender, submit);
  };

  //---------------------------Event/Clear Functions---------------------------//
  const handleClear = () => {
    // Reset Form
    setName("");
    setAge("");
    setColor("");
    setGender("");

    console.log("Clear");
  };
  //---------------------------Main Section---------------------------//
  return (
    <div className="pa-16 d-flex">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <Input name="Name" value={name} onChange={changeName} />
          <Input name="Age" value={age} onChange={changeAge} />
          <Radio name="Gender" onChange={changeGender} />
          <Select name="Favourite Color" value={color} onChange={changeColor} />
          <button type="submit" className="btn-primary mb-16">
            Submit
          </button>
          <button type="button" className="btn-secondary" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>

      <div className="msg">
        <h1>
          {name} is {age} years old, and {gender === "male" ? "he" : "she"}{" "}
          likes {color} color.
        </h1>
      </div>
    </div>
  );
}

//---------------------------Input Component---------------------------//
type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

//---------------------------Radio Component---------------------------//
type RadioType = {
  name: string;
  //value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio = ({ onChange, name }: RadioType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input type="radio" value="male" name="gender" onChange={onChange} />
      <label>Male</label>
      <input type="radio" value="female" name="gender" onChange={onChange} />
      <label>Female</label>
    </div>
  );
};

//---------------------------Select Component---------------------------//
type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
