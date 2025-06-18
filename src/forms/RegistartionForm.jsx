import React from "react";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import InputNumber from "../components/InputNumber";

export default function RegistartionForm() {
  // useForm Hook Methode
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Register Details">
          <Field label="Picture : " error={errors.picture}>
            <input
              className="border-2  border-gray-200 p-2 rounded-md"
              {...register("picture", {
                required: "Picture is required",
              })}
              type="file"
              id="picture"
              name="picture"
            />
          </Field>
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

          <Field label="Full Name : " error={errors.fname}>
            <input
              {...register("fname", {
                required: "Full Name Is Required",
              })}
              className={`p-2 border-2 box-border w-[300px] rounded-md ${
                errors.fname ? "border-red-400" : "border-gray-200"
              }`}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter Full Name"
            />
          </Field>

          <Field label="Your Age : " error={errors.age}>
            {/* <input
              {...register("age", {
                required: "Your Age Is Required",
                max: {
                  value: 100,
                  message: "Age Must Be Between 0 To 100",
                },
              })}
              className={`p-2 border-2 box-border w-[300px] rounded-md ${
                errors.age ? "border-red-400" : "border-gray-200"
              }`}
              type="number"
              name="age"
              id="age"
              placeholder="Enter Your Age"
            /> */}

            <Controller
              name="age"
              control={control}
              defaultValue={1}
              render={({ field: { ref, ...field } }) => (
                <InputNumber
                  id="age"
                  className={`p-2 border box-border w-[300px] rounded-md ${
                    errors.age ? "border-red-400" : "border-gray-400"
                  }`}
                  {...field}
                  
                ></InputNumber>
              )}
              rules={{
                max: {
                  value: 100,
                  message: "Age can be between 0 and 100",
                },
              }}
            ></Controller>
          </Field>
        </FieldSet>

        <FieldSet label={"Enter Register Socials Handles"}>
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex justify-between items-center w-max"
              >
                <Field label="Socials Name : ">
                  <input
                    className="p-2 border-2 box-border w-[300px] rounded-md border-gray-200"
                    type="text"
                    {...register(`socials[${index}].name`)}
                    name={`socials[${index}].name`}
                    id={`socials[${index}].name`}
                  />
                </Field>

                <Field label="Socials URL : ">
                  <input
                    className="p-2 border-2 box-border w-[300px] rounded-md border-gray-200"
                    type="text"
                    {...register(`socials[${index}].url`)}
                    name={`socials[${index}].url`}
                    id={`socials[${index}].url`}
                  />
                </Field>

                <button
                  className="mt-8 text-2xl mr-2"
                  onClick={() => remove(index)}
                >
                  -
                </button>
              </div>
            );
          })}
          <button
            onClick={() =>
              append({
                name: "",
                url: "",
              })
            }
            className="p-3 m-auto text-md font-bold bg-orange-400 border border-gray-200 text-white cursor-pointer rounded-lg"
          >
            Add Socials Handle
          </button>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="p-3 m-auto text-md font-bold bg-purple-500 border border-gray-200 text-white cursor-pointer rounded-lg">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
}
