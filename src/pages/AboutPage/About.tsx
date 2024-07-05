import React from "react";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import {styles} from '../../styles_and_other/styles';


export function AboutPage() {
  return (
    <div>
      <Content title="Доставка и оплата" descrip="Доставка мёда осуществляется по Минску бесплатно от трех литров." styles={styles.about} />
      <Footer />
    </div>
  )
}