// Import the useField hook from Formik for managing form fields
import { useField } from "formik";

// Define a custom input component that takes a label and other props
const CustomInput = ({ label, ...props }) => {
  // useField is a custom hook that will return field and meta objects
  // field contains props like 'name', 'value', 'onChange', and 'onBlur'
  // meta contains information about the field's error state and whether it has been touched
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
