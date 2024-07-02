import React from "react";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";

type PostsProps = {
  textPosts: string;
}

export const PostsPage = () => {
  return (
    <>
      <Header />;
       <Content textContent = "Page POSTS" />
      <Footer />
      
    </>
  );
}