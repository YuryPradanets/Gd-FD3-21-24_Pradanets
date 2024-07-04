import React from 'react';
import { useParams } from 'react-router-dom';

export const PostDynamic: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Post {id}</h1>
      <p>Content of post {id} goes here...</p>
    </div>
  );
};