import React from 'react';

import CloseButton from '../close-button/close-button.jsx';

import { FormHeader, FormTitle } from './task-form-header-styles.js';

export default function TaskFormHeader(props) {
  const { setMode } = props;
  return (
    <FormHeader>
      <FormTitle>Новая заявка</FormTitle>
      <CloseButton setMode={setMode} />
    </FormHeader>
  );
}
