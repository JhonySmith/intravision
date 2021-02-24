import React, { useRef } from 'react';
import { MainForm, FormLabel, FormText, FormSubmitButton } from './form-styles.js';

import { connect } from 'react-redux';
import { ActionCreator } from '../../../../../reducer/reducer.js';

import { sendNewTask, getTasks } from '../../../../../api/server-api.js';

import { MODES } from '../../../../../constants/modes.js';

function Form(props) {
  const { setChoosenTaskID, setTasks, setMode } = props;
  const descriptionRef = useRef(null);
  const nameRef = useRef(null);

  const taskSended = (id) => {
    setChoosenTaskID(id);
    getTasks(setTasks);
    setMode(MODES.EDIT);
  };

  const createNewTask = () => {
    const newTask = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
    };

    sendNewTask(newTask, taskSended);
  };

  return (
    <MainForm>
      <FormLabel>
        Название
        <FormText areaHeigth="85" ref={nameRef} />
      </FormLabel>

      <FormLabel>
        Описание
        <FormText areaHeigth="134" ref={descriptionRef} />
      </FormLabel>

      <FormSubmitButton
        onClick={(evt) => {
          evt.preventDefault();
          createNewTask();
        }}
      >
        Сохранить
      </FormSubmitButton>
    </MainForm>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.currentTasks,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks(tasks) {
    dispatch(ActionCreator.setCurrentTasks(tasks));
  },
  setChoosenTaskID(id) {
    dispatch(ActionCreator.setChoosenTaskID(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
