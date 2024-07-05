import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Footer } from "../../components/Footer";
import { NotFoundPage } from "../NotFoundPage";

export const PostsPage: React.FC = () => {
  const [error, setError] = useState(false);
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    const ids: string[] = [];
    for (let i = 1; i <= 20; i++) {
      ids.push(`post-${i}`);
    }
    sessionStorage.setItem("postIds", JSON.stringify(ids));

  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const postId = (event.target as HTMLAnchorElement).getAttribute("href");
    const isPostIdValid = postId && sessionStorage.getItem("postIds")?.includes(postId.substring(1));

    if (id !== isPostIdValid) {
  setError(true);
}
  };

  return (
    <div>
      <h1>Posts</h1>
      {error ? <NotFoundPage /> : (
        <div>
          <ul>
            {JSON.parse(sessionStorage.getItem("postIds") || "[]").map((id: string) => (
              <li key={id}>
                <a href={`/post/${id}`} onClick={handleLinkClick} data-post-id={id}>
                  {`Post ${id}`}
                </a>
              </li>
            ))}
          </ul>
          <Footer />
        </div>
      )}
    </div>
  );
};