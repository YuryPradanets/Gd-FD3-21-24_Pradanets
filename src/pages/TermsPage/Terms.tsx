import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { styles } from '../../styles_and_other/styles';


export const TermsPage = () => { 
  return (
    <>
      <Content title="Условия сотрудничества" descrip='Мы предоставляем только самые выгодные условия сотрудничества с нами' styles={ styles.terms } />
      <Footer />
    </>
  )
}