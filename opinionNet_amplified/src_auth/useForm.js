import {useState} from 'react';

export default function useForm(callback, initialState = {}, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
//checks to see if a value was changed, then sets a new value
  function onChange({name, value}) {
    let newValue = value;
    if (name !== 'password') newValue = value.toLowerCase();
    setValues({...values, [name]: newValue});
  }
//checks to see if some sort of submission has been made, then changes state
  function onSubmit() {
    const errors = validate(values);
    const isEmpty = !Object.values(errors).some(
      error => error !== null && error !== '',
    );
    if (isEmpty) {
      callback();
      setValues(initialState);
      setErrors({});
    } else {
      setErrors(validate(values));
    }
  }

  return {
    onChange,
    onSubmit,
    errors,
    values,
  };
}
