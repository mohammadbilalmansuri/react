import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { useState } from "react";

// in this form we have used the useFormik hook method.
const BasicForm = () => {
  const [formData, setFormData] = useState();

  const onSubmit = async (values, actions) => {
    setFormData(values);
    console.log(formData);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // for some delay
    // console.log(actions);
    actions.resetForm();
  };

  const {
    values, // An object representing the form's values
    errors, // An object containing any validation errors
    touched, // It’s a way to keep an eye on whether someone has clicked or typed in a field and then moved on. It helps you figure out when to show error messages.
    isSubmitting, // A boolean indicating whether the form is currently submitting
    handleBlur, // A function to handle the blur event on form fields
    handleChange, // A function to handle changes in form fields
    handleSubmit, // A function to handle form submission
  } = useFormik({
    initialValues: {
      // An object representing the initial values of the form
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema, // A Yup schema used for validation
    onSubmit, // A function that gets called when the form is submitted
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};
export default BasicForm;
