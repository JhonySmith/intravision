import React from 'react';
import {
  Comment,
  CommentHead,
  CommentInfo,
  CommentAvatar,
  CommentAuthor,
  CommentTime,
  CommentText,
} from './comment-item-styles.js';

function CommentItem(props) {
  const { comment } = props;

  return (
    <Comment>
      <CommentHead>
        <CommentAvatar />
        <CommentInfo>
          <CommentAuthor />
          <CommentTime />
        </CommentInfo>
      </CommentHead>
      <CommentText></CommentText>
    </Comment>
  );
}

export default CommentItem;
