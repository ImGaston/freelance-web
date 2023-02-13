import React from 'react';
import Button from '../components/UI/Button';
import reactLogo from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='mx-4  flex flex-row justify-between border-b border-black py-4	pr-4'>
      <img
        src={reactLogo}
        className='logo react'
        alt='React logo'
      />
      <div className='flex flex-row gap-10'>
        <ul className='flex flex-row content-center items-center gap-6'>
          <NavLink
            className='cursor-pointer border-b border-b-orange-50	hover:border-b hover:border-black'
            to='/'
          >
            Inicio
          </NavLink>
          <NavLink
            className='cursor-pointer border-b border-b-orange-50	hover:border-b hover:border-black'
            to='/metodo'
          >
            Metodo
          </NavLink>
          <NavLink
            className='cursor-pointer border-b border-b-orange-50	hover:border-b hover:border-black'
            to='/proyectos'
          >
            Proyectos
          </NavLink>
          <NavLink
            className='cursor-pointer border-b border-b-orange-50	hover:border-b hover:border-black'
            to='/contacto'
          >
            Contacto
          </NavLink>
        </ul>
        <Button content={'Whatsapp'} />
      </div>
    </nav>
  );
};

export default Navbar;
