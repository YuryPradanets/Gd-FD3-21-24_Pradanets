import React from "react";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import type {ContentProps } from '../../components/Content';

type StartText = {
  title: string;
  description: string;
}

const startText: StartText = {
  title: "О нашей пасеке:",
  description: "Наша история началась много лет назад, когда мы решили приступить к пчеловодству как семейному делу. С тех пор мы постоянно совершенствуем наши методы и технологии, чтобы предоставить нашим клиентам самый вкусный и полезный мед. Мы уделяем особое внимание заботе о пчелах, создавая для них благоприятные условия и обеспечивая высокое качество ухода. Наша продукция проходит строгий контроль качества на каждом этапе производства, чтобы гарантировать чистоту и натуральность каждого грамма меда. Приобретая наш мед, вы можете быть уверены в его высоком качестве. На нашей пасеке соблюдены все стандарты безопасности и гигиены."
};

export const StartPage = () => {
  return (
    <>
      <Header />
      <Content title={startText.title} descrip={startText.description}/>
      <Footer />
    </>
  );
}