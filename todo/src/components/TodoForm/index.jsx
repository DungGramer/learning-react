import { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../form-controls/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const TodoForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });
  // const [value, setValue] = useState('');

  // function handleValueChange(e) {
  //   setValue(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!onSubmit) return;
  //   const formValue = {
  //     title: value,
  //   };
  //   onSubmit(formValue);

  //   // Reset form
  //   setValue('');
  // }

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const submit = (values) => {
    console.log('TODO FORM: ', values);
  };

  return (
    <form onSubmit={form.handleSubmit(submit)}>
      {/* <input type="text" value={value} onChange={handleValueChange} /> */}
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

export default TodoForm;
