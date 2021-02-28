import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import localization from 'moment/locale/ru';

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
  let commentTime = moment(comment.createdAt).locale('ru', localization).format('DD MMMM, HH:mm');

  return (
    <Comment>
      <CommentHead>
        <CommentAvatar />
        <CommentInfo>
          <CommentAuthor>{comment.userName}</CommentAuthor>
          <CommentTime>{commentTime} прокомментировал</CommentTime>
        </CommentInfo>
      </CommentHead>
      <CommentText>{comment.comment}</CommentText>
    </Comment>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentItem;
