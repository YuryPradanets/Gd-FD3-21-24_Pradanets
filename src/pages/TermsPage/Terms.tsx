import React from "react";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";


export const TermsPage = () => { 
  return (
    <>
      <Header />
      <Content title="Условия сотрудничества" descrip='Мы предоставляем только самые выгодные условия сотрудничества с нами' />
      <Footer />
    </>
  )
}