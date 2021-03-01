import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { TaskSection, InfoWraper } from './edit-task-form-styles.js';
import MainInformation from './main-information/main-information';

import EditFormHeader from './edit-form-header/edit-form-header.jsx';
import DetailInformation from './detail-information/detail-information.jsx';

import { getStatuses, getUsers } from '../../../../api/server-api.js';

function EditTaskForm(props) {
  const { setMode, task, statuses, setStatuses, users, setUsers, setChoosenTask, setTasks } = props;

  const [statusId, setStatusId] = useState(task.statusId);
  const [executorId, setExecutorId] = useState(task.executorId);

  let taskForSend = {
    id: task.id,
    statusId: statusId,
    executorId: executorId,
  };

  useEffect(() => {
    getStatuses(setStatuses);
    getUsers(setUsers);
  }, [setStatuses, setUsers]);

  return (
    <TaskSection>
      <EditFormHeader setMode={setMode} task={task} />
      <InfoWraper>
        <MainInformation
          taskForSend={taskForSend}
          setChoosenTask={setChoosenTask}
          setMode={setMode}
          setTasks={setTasks}
        />

        <DetailInformation
          task={task}
          statuses={statuses}
          users={users}
          setChoosenTask={setChoosenTask}
          setStatusId={setStatusId}
          setExecutorId={setExecutorId}
        />
      </InfoWraper>
    </TaskSection>
  );
}

EditTaskForm.propTypes = {
  setMode: PropTypes.func,
  task: PropTypes.object,
};

export default EditTaskForm;
