import React from 'react';
import PropTypes from 'prop-types';
import { ExecutorList, ExecutorItem, ExecutorBlock } from './executor-styles.js';

function Executor(props) {
  const { users, currentExecutorID, setExecutorId } = props;

  function getCurrentExecutor(id) {
    setExecutorId(id);
  }

  return (
    <ExecutorBlock>
      <ExecutorList
        onChange={(evt) => {
          getCurrentExecutor(evt.target.value);
        }}
      >
        {users.map((user) => {
          const selected = currentExecutorID === user.id ? 'selected' : '';
          return (
            <ExecutorItem value={user.id} selected={selected}>
              {user.name}
            </ExecutorItem>
          );
        })}
      </ExecutorList>
    </ExecutorBlock>
  );
}

Executor.propTypes = {
  statuses: PropTypes.array,
  currentStatusID: PropTypes.string,
};

export default Executor;
