import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment-item/comment-item.jsx';

import { Comments } from './comment-list-styles';

function CommentsList(props) {
  const { comments } = props;

  return (
    <Comments>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </Comments>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array,
};

export default CommentsList;
