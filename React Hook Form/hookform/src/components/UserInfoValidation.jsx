import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "../App.css";

const UserInfoValidation = () => {
  const form = useForm({
    defaultValues: {
      name: "faizan",
      email: "faizan@gmail.com",
      number: ["", ""],
      address: {
        country: "Pakistan",
        city: "",
        province: "",
      },
      listPNumber: [{ number: "" }],
    },
    mode: "all",
  });

  const { register, handleSubmit, control, watch, getValues, formState: { errors } } = form;
  const { fields, append, remove } = useFieldArray({ name: "listPNumber", control });

  const [category, setCategory] = useState("country");
  const [options, setOptions] = useState([]);
  const [countrys] = useState(["Pakistan", "India", "USA", "Canada", "Australia"]);
  const [cities] = useState({
    Pakistan: ["Lahore", "Islamabad", "Karachi"],
    India: ["Delhi", "Mumbai", "Bangalore"],
    USA: ["Dallas", "New York", "Los Angeles"],
    Canada: ["Toronto", "Calgary", "Montreal"],
    Australia: ["Melbourne", "Sydney", "Perth"],
  });
  const [provinces] = useState({
    Lahore: ["Punjab"],
    Islamabad: ["Federal"],
    Karachi: ["Sindh"],
    Delhi: ["Delhi"],
    Mumbai: ["Maharashtra"],
  });

  useEffect(() => {
    setOptions(countrys);
  }, [countrys]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    if (selectedCategory === "country") {
      setOptions(countrys);
    } else if (selectedCategory === "city") {
      const selectedCountry = watch("address.country");
      setOptions(cities[selectedCountry]?.map(city => `${selectedCountry} - ${city}`) || []);
    } else if (selectedCategory === "province") {
      const selectedCity = watch("address.city");
      const selectedCountry = watch("address.country");

      const availableProvinces = provinces[selectedCity] || [];
      const fallbackProvinces = selectedCountry === "Pakistan" ? ["Punjab", "Sindh", "KPK", "Balochistan"] : [];

      setOptions(availableProvinces.length > 0 ? availableProvinces : fallbackProvinces);
    } else {
      setOptions([]);
    }
  };

  const formSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="userForm">
      <h1>React Hook Form</h1>
      <h2>User Info Detail</h2>
      <form onSubmit={handleSubmit(formSubmit)} className="userDetailForm">
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Please fill in your name.",
              minLength: { value: 3, message: "Please add a valid name." },
              validate: (value) => value !== "admin" || "Please choose another name.",
            })}
            placeholder="Enter Your Name"
          />
          <p style={{ color: "red", fontSize: 14 }}>{errors.name?.message}</p>
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Please enter your email.",
              validate: {
                lengthError: (value) => value.length > 6 || "Invalid email format.",
              },
            })}
            placeholder="Enter Your Email"
          />
          <p style={{ color: "red", fontSize: 14 }}>{errors.email?.message}</p>
        </div>
        <div className="formGroup">
          <label>Primary Number</label>
          <input
            type="number"
            {...register("number.0", {
              required: "Primary number is required.",
              validate: (value) => value.length > 6 || "Invalid number.",
            })}
          />
          <p style={{ color: "red", fontSize: 14 }}>{errors.number?.[0]?.message}</p>
        </div>
        <div className="formGroup">
          <label>Secondary Number</label>
          <input type="number" {...register("number.1")} />
        </div>
        <div className="formGroup">
          <label>Category</label>
          <select onChange={handleCategoryChange} value={category}>
            <option value="country">Country</option>
            <option value="city">City</option>
            <option value="province">Province</option>
          </select>
          {category && (
            <div style={{ display: "inline-block", marginLeft: "10px" }}>
              <label>Options</label>
              <select {...register("address.categoryOption")}>
                <option value="">Select Option</option>
                {options.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div>
          <h5>Add More Phone Numbers</h5>
          {fields.map((e, index) => (
            <div key={e.id} className="formGroup">
              <input
                type="text"
                {...register(`listPNumber.${index}.number`, {
                  required: "Phone number cannot be empty",
                  validate: { nonEmpty: (value) => value.trim() !== "" || "This field cannot be empty" },
                })}
              />
              <p style={{ color: "red", fontSize: 14 }}>{errors.listPNumber?.[index]?.number?.message}</p>
              {index > 0 && <button type="button" onClick={() => remove(index)}>Remove</button>}
            </div>
          ))}
          <button type="button" onClick={() => append({ number: "" })}>Add More</button>
        </div>
        <div className="formGroup">
          <input type="submit" value="Save" />
          <button type="button" onClick={() => console.log(getValues())}>Get Values</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default UserInfoValidation;
