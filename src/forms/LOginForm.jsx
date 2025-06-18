import React from "react";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import {  useForm } from "react-hook-form";

export default function LOginForm() {
  // useForm Hook Methode
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    
  } = useForm();

  

  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "kayes@gmail.com", Password: "123456789" };

    const found =
      formData.email === user.email && formData.Password === user.Password;

    if (!found) {
      setError("root.random", {
        message: `User With Email ${formData.email} Not Found`,
        type: "random",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email : " error={errors.email}>
            <input
              {...register("email", { required: "Email Is Required" })}
              className={`p-2 border-2 box-border w-[300px] rounded-md ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Addrees"
            />
          </Field>
          <Field label="Password : " error={errors.Password}>
            <input
              {...register("Password", {
                required: "Password Is Required",
                minLength: {
                  value: 8,
                  message: "Password Must Be At Least 8 Characters",
                },
              })}
              className={`p-2 border-2 box-border w-[300px] rounded-md ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
              type="Password"
              name="Password"
              id="Password"
              placeholder="Enter Password"
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="p-3 m-auto text-md font-bold bg-orange-500 border border-gray-200 text-white cursor-pointer rounded-lg">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
