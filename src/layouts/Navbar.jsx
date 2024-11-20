import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../redux/lang/actions';

const Navbar = () => {
  const lang = useSelector((state) => state.lang.lang);

  const dispatch = useDispatch();
  const handleLangChange = () => {
    dispatch(setLang(lang === 'en' ? 'id' : 'en'));
  };

  return (
    <nav className=' navbar bg-body-tertiary py-3'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button onClick={handleLangChange} className='btn btn-success'>
          {lang === 'en' ? 'ID' : 'E'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
