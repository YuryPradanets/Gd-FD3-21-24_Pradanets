import React from 'react';

type ContentProps = {
  textContent: string;
}

export const Content: React.FC<ContentProps> = ({ textContent }) => {
  return (
    <>
      <p>
        {textContent}
      </p>
    </>
  );
}