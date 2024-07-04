import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, RouteProps } from 'react-router-dom';
import { PostsPage } from '../../pages/PostsPage/Posts';
import { PostDynamic } from '../../pages/PostsPage/Post_ID';

export const NotFound: React.FC = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

// export const AppErrorBoundary: React.FC<RouteProps> = ({ children }) => {
//   return (
//     <ErrorBoundary fallback={<NotFound />}>{children}</ErrorBoundary>
//   );
// };

export const MyRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostDynamic />} />
        </Route>
      </Routes>
    </Router>
  );
};