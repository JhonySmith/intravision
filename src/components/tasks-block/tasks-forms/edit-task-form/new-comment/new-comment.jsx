import React, { useState, useRef } from 'react';
import { CommentBlock, CommentTextBlock, AddCommentButton } from './new-comment-styles.js';
import { editTask, getTask } from '../../../../../api/server-api.js';

function NewComment(props) {
  const { comments, choosenTask, taskForSend, setChoosenTask } = props;

  const [active, setActive] = useState(false);

  const newCommentText = useRef(null);

  function Update() {
    getTask(choosenTask.id, setChoosenTask);
  }

  function addNewComment() {
    taskForSend.comment = newCommentText.current.value;
    editTask(taskForSend, Update);
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
