import React, { useState, useRef } from 'react';
import { CommentBlock, CommentTextBlock, AddCommentButton } from './new-comment-styles.js';
import { editTask, getTask } from '../../../../../api/server-api.js';

function NewComment(props) {
  const { choosenTask, taskForSend, setChoosenTask } = props;

  const [active, setActive] = useState(false);

  const newCommentText = useRef(null);

  function Update() {
    getTask(choosenTask.id, setChoosenTask);
  }

  function addNewComment() {
    let taskCopy = Object.assign({}, taskForSend);
    taskCopy.comment = newCommentText.current.value;
    editTask(taskCopy, Update);
  }

  return (
    <CommentBlock>
      <CommentTextBlock
        onFocus={() => {
          setActive(true);
        }}
        placeholder="Добавление комментариев"
        ref={newCommentText}
      />
      {active ? (
        <AddCommentButton
          onClick={(evt) => {
            evt.preventDefault();
            addNewComment();
          }}
        >
          Добавить комментарий
        </AddCommentButton>
      ) : (
        ''
      )}
    </CommentBlock>
  );
}

export default NewComment;
