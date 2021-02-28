import styled from 'styled-components';

export const Comment = styled.li``;

export const CommentHead = styled.div`
  display: flex;
`;

export const CommentAvatar = styled.img`
  box-sizing: border-box;
  display: block;
  width: 40px;
  height: 40px;

  border: 2px solid #e8e8e8;
  border-radius: 50%;

  background-color: #f5f5f5;
`;

export const CommentInfo = styled.div`
  margin-left: 10px;
`;

export const CommentAuthor = styled.p`
  font-size: 12px;
  font-family: 'Ubuntu';
  color: #525460;
`;

export const CommentTime = styled.p`
  font-size: 12px;
  font-family: 'CorporateACyr';
  color: #63677c;
`;

export const CommentText = styled.p`
  display: block;
  box-sizing: border-box;
  width: 620px;

  margin-left: 50px;
  padding: 10px;

  border: 1px solid #dce3e7;
  border-radius: 5px;

  background-color: #e3e9f4;

  font-size: 14px;
  font-family: 'Roboto';
`;
