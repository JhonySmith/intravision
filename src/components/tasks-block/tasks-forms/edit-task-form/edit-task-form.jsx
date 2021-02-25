import React from 'react';
import PropTypes from 'prop-types';

import { TaskSection } from './edit-task-form-styles.js';

import EditFormHeader from './edit-form-header/edit-form-header.jsx';
import DetailInformation from './detail-information/detail-information.jsx';

function EditTaskForm(props) {
  const { setMode, task } = props;

  return (
    <TaskSection>
      <EditFormHeader setMode={setMode} task={task} />
      <DetailInformation task={task} />
    </TaskSection>
  );
}

EditTaskForm.propTypes = {
  setMode: PropTypes.func,
  task: PropTypes.object,
};

export default EditTaskForm;
