

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex gap-3 justify-center my-5'>
       <Link className='btn' to='/'>home</Link>
       <Link className='btn' to='/login'>Google Login</Link>
       <Link className='btn' to='/signup'>sign up</Link>
       <Link className='btn' to='/signin'>sign in</Link>
    </div>
  )
}

export default Header