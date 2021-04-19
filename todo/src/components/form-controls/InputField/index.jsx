import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { form, name, label, disabled } = props;
  const { errors, formState } = form;
  console.log(form);
  // const hasError = formState.touched[name] && errors[name];

  console.log(formState, errors);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState, formState }) => <TextField {...field} />}
      fullWidth
      label={label}
      disabled={disabled}
      // error={!!hasError}
      // helperText={errors?.[name].message}
    />
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
