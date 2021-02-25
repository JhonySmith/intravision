import React from 'react';
import PropTypes from 'prop-types';

import CloseButton from '../close-button/close-button.jsx';

import { FormHeader, FormTitle } from './edit-form-header-styles.js';

function EditFormHeader(props) {
  const { task, setMode } = props;
  return (
    <FormHeader>
      <FormTitle>
        №{task.id}
        {task.name}
      </FormTitle>
      <CloseButton setMode={setMode} />
    </FormHeader>
  );
}

EditFormHeader.propTypes = {
  task: PropTypes.object,
  setMode: PropTypes.func,
};

export default EditFormHeader;
