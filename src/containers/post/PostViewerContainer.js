import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PostViewerContainer = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {};

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return <div></div>;
};

export default PostViewerContainer;
