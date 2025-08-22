"use client";

import { useFormState } from "react-dom";

const handleSubmit = async (previousState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const res =  await fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json());

  const data = res.slice(0,1);

  return { name, email, status: "submitted", data };
};

const FormState = () => {

  const [formState, formAction] = useFormState(handleSubmit, {
    name: "initial name",
    email: "init email",
  });

  return (
    <>
      <div>{JSON.stringify(formState.data)}</div>
      <div>{formState.email}</div>
      <div>{formState.name}</div>

      <form action={formAction} className="space-x-2">
        <input name="name" className="border-2 rounded-md p-1" />
        <input name="email" className="border-2 rounded-md p-1" />

        <button type="submit" className="bg-blue-400 px-4 py-1 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormState;