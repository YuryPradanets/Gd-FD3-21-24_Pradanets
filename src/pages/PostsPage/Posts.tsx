import React, { useEffect } from 'react';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const PostsPage: React.FC = () => {
  useEffect(() => {
    const ids: string[] = [];
    for (let i = 1; i <= 20; i++) {
      ids.push(`post-${i}`);
    }
    sessionStorage.setItem('postIds', JSON.stringify(ids));
  }, [])

  return (
    <div>
      <Header />
      <h1>Posts</h1>
      <ul>
        {JSON.parse(sessionStorage.getItem('postIds') || '[]').map((id: string) => (
          <li key={id}>
            <a href={`/post/${id}`}>Post {id}</a>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};