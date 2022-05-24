import React, { useState } from "react";
import { useForm } from "react-hook-form";

/*
function ToDoList() {
  const [todo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if 
  };
  return (

    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="write a to do" />
        <button>add</button>
      </form>
    </div>
  );
}
*/
interface IForm {
  email: string
  firstName: string
  lastName: string
  username: string
  password: string
  password1: string 
}

function ToDoList() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  }

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed"
          }
        })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input {...register("firstName", {
          required: "First Name is required",
          minLength: 2,
          pattern: {
            value: /[A-Za-z]/,
            message: "it is too short."
          }
        })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input {...register("lastName", {
          required: "Last Name is required",
          minLength: 2,
          pattern: {
            value: /[A-Za-z]/,
            message: "it is too short."
          }
        })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input {...register("username", {
          required: "Username is requried",
          minLength: 5,
          pattern: {
            value: /[A-Za-z0-9]/,
            message: "it is too short."
          }
        })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input {...register("password", {
          required: "Password is required",
          minLength: {
            value: 5,
            message: "Your password is too short."
          },
        })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input {...register("password1", {
          required: true,
          minLength: {
            value: 5,
            message: "Your password is too short."
          },
        })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>add</button>
      </form>
    </div>
  );
}
export default ToDoList;