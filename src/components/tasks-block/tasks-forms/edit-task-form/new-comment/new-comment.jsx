import React, { useState, useRef } from 'react';
import { CommentBlock, CommentTextBlock, AddCommentButton } from './new-comment-styles.js';
import { editTask } from '../../../../../api/server-api.js';

function NewComment(props) {
  const { comments, choosenTask, taskForSend } = props;

  const [active, setActive] = useState(false);

  const newCommentText = useRef(null);

  function addNewComment() {
    taskForSend.comment = newCommentText.current.value;
    editTask(taskForSend);
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
