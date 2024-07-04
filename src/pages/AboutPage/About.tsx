import React from "react";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import styles from './About.module.css';

interface styles {
  container: string;
  title: string;
}

export function AboutPage() {
  return (
    <div className={styles.container}>
      <Header />
      <Content title="Доставка и оплата" descrip="Доставка мёда осуществляется по Минску бесплатно от трех литров." />
      <Footer />
    </div>
  )
}