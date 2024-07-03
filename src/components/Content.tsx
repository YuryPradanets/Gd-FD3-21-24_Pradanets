import React from 'react';

type ContentProps = {
  title: string,
  descrip: string
}
export type { ContentProps };

export const Content = ({ title, descrip }: ContentProps) => {
    return (
    <div>
      <h1>{title }</h1>
      <p>{descrip}</p>
    </div>
  );
};
