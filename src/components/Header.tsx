import { Link } from 'react-router-dom';


export function Header() { 


  return (
    <div className='header'>
      <Link to="/">Home</Link>{''}
      <Link to="/about">About</Link>{''}
      <Link to="/posts">Posts</Link>{''}
      <Link to="/terms">Terms</Link>{''}
      <Link to ="/other">Other</Link>{''}
      
      
    </div>
  )
}