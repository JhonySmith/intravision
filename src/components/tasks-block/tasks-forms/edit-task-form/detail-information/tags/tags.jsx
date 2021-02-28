import React from 'react';
import PropTypes from 'prop-types';

import { TagsBlock, TagItem } from './tags-styles.js';

function Tags(props) {
  const { tags } = props;

  return (
    <TagsBlock>
      {tags.map((tag) => (
        <TagItem>{tag.name}</TagItem>
      ))}
    </TagsBlock>
  );
}

Tags.propTypes = {
  tags: PropTypes.array,
};

export default Tags;
