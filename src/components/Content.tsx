import React from 'react';

type ContentProps = {
  title: string,
  descrip: string,
  styles: any
}
export type { ContentProps };

export const Content = ({ title, descrip, styles }: ContentProps) => {
    return (
    <div className='content_Item'>
        <h1>{title}</h1>
      <p>{descrip}</p>
    </div>
  );
};
