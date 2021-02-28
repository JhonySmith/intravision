import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { TaskSection, InfoWraper } from './edit-task-form-styles.js';
import MainInformation from './main-information/main-information';

import EditFormHeader from './edit-form-header/edit-form-header.jsx';
import DetailInformation from './detail-information/detail-information.jsx';

import { getStatuses, getUsers } from '../../../../api/server-api.js';

function EditTaskForm(props) {
  const { setMode, task, statuses, setStatuses, users, setUsers } = props;

  let taskForSend = {
    id: task.id,
    statusId: task.statusId,
    executorId: task.executorId,
  };

  useEffect(() => {
    getStatuses(setStatuses);
    getUsers(setUsers);
  }, [setStatuses, setUsers]);

  return (
    <TaskSection>
      <EditFormHeader setMode={setMode} task={task} />
      <InfoWraper>
        <MainInformation taskForSend={taskForSend} />

        <DetailInformation task={task} statuses={statuses} users={users} />
      </InfoWraper>
    </TaskSection>
  );
}

EditTaskForm.propTypes = {
  setMode: PropTypes.func,
  task: PropTypes.object,
};

export default EditTaskForm;
