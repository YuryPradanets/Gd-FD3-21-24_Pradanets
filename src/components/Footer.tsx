import '../index';


export function Footer() {
  let footerText = 'Все права защищены';
  return(
  <div className='footer'>
    <div className='footer_item'>
      <h3 >&copy;{footerText}</h3>
    </div>
  </div>
  )
 }