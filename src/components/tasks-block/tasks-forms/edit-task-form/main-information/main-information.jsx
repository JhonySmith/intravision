import React from 'react';
import PropTypes from 'prop-types';

import CommentsList from '../comments-list/comments-list.jsx';
import NewComment from '../new-comment/new-comment.jsx';

import {
  MainForm,
  FormLabel,
  FormSubmitButton,
  DescriptionText,
} from './main-information-styles.js';

import { connect } from 'react-redux';
import { ActionCreator } from '../../../../../reducer/reducer.js';

import { editTask, getTasks } from '../../../../../api/server-api.js';

import { MODES } from '../../../../../constants/modes.js';

function MainInformation(props) {
  const { choosenTask, setTasks, setMode, taskForSend, setChoosenTask } = props;

  function SendNewTaskData() {
    editTask(taskForSend, sendOk);
  }

  function sendOk() {
    setMode(MODES.DEFAULT);
    getTasks(setTasks);
  }

  return (
    <MainForm>
      <FormLabel>
        Описание
        <DescriptionText>{choosenTask.description.toString()}</DescriptionText>
      </FormLabel>

      <NewComment
        comments={choosenTask.lifetimeItems}
        choosenTask={choosenTask}
        taskForSend={taskForSend}
        setChoosenTask={setChoosenTask}
      />

      <FormSubmitButton
        onClick={(evt) => {
          evt.preventDefault();
          SendNewTaskData();
        }}
      >
        Сохранить
      </FormSubmitButton>
      <CommentsList comments={choosenTask.lifetimeItems} />
    </MainForm>
  );
}

MainInformation.propTypes = {
  choosenTask: PropTypes.array,
  setTasks: PropTypes.func,
  setMode: PropTypes.func,
};

const mapStateToProps = (state) => ({
  tasks: state.currentTasks,
  choosenTask: state.choosenTask,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks(tasks) {
    dispatch(ActionCreator.setCurrentTasks(tasks));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainInformation);
