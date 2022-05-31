import React from 'react';
import { Input } from 'antd';
import {
  StyledInputField,
  StyledInputFieldTItle,
} from './ProfileInputField.style';
import PropTypes from 'prop-types';

const ProfileInputField = ({ title, name, onChange, placeholder, value }) => {
  const changeHandler = event =>
    onChange(event.target.name, event.target.value);
  return (
    <StyledInputField>
      <StyledInputFieldTItle>{title}</StyledInputFieldTItle>
      <Input
        placeholder={placeholder}
        onChange={changeHandler}
        name={name}
        value={value}
      />
    </StyledInputField>
  );
};

ProfileInputField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default ProfileInputField;
