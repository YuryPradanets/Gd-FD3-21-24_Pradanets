import {Link} from "react-router-dom";
import {v4 } from 'uuid';
import { Footer } from "../../components/Footer";

export function Other() {
  const ids = new Array(20).fill(0).map(() => v4());
  return (
    <>
      <h3>URL adresses:</h3>
      <ol>
        {ids.map(id => <li key={id}><Link to={`${id}`}> {id}</Link></li>)}
      </ol>
      <Footer />
    </>
  );
}