import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../../reducer/reducer.js';

import NewTaskForm from './new-task-form/new-task-form.jsx';
import EditTaskForm from './edit-task-form/edit-task-form.jsx';

import { MODES } from '../../../constants/modes.js';

function TasksForms(props) {
  const {
    mode,
    setMode,
    choosenTask,
    statuses,
    setStatuses,
    setUsers,
    users,
    setChoosenTask,
    setTasks,
  } = props;

  switch (mode) {
    case MODES.NEW:
      return <NewTaskForm setMode={setMode} setChoosenTask={setChoosenTask} />;
    case MODES.EDIT:
      return (
        <EditTaskForm
          setMode={setMode}
          task={choosenTask}
          setStatuses={setStatuses}
          statuses={statuses}
          setUsers={setUsers}
          setTasks={setTasks}
          users={users}
          setChoosenTask={setChoosenTask}
        />
      );
    default:
      return '';
  }
}

const mapStateToProps = (state) => ({
  tasks: state.currentTasks,
  choosenTask: state.choosenTask,
  statuses: state.statuses,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks(tasks) {
    dispatch(ActionCreator.setCurrentTasks(tasks));
  },
  setStatuses(statuses) {
    dispatch(ActionCreator.setStatuses(statuses));
  },
  setUsers(users) {
    dispatch(ActionCreator.setUsers(users));
  },
});

TasksForms.propTypes = {
  mode: PropTypes.string,
  setMode: PropTypes.func,
  choosenTask: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksForms);
