import React from 'react';
import CloseButton from '../close-button/close-button.jsx';
import { FormHeader, FormTitle } from './edit--form-header-styles.js';

function EditFormHeader(props) {
  const { task } = props;
  return (
    <FormHeader>
      <FormTitle>
        №{task.id}
        {task.name}
      </FormTitle>
      <CloseButton />
    </FormHeader>
  );
}

export default EditFormHeader;
