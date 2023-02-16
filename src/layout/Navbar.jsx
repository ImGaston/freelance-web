import React, { useState } from 'react';
import Button from '../components/UI/Button';
import reactLogo from '../assets/react.svg';
import { NavLink } from 'react-router-dom';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';
//TODO: chequear el absolute para el menu en mobile
//TODO: listado en mobile ocupe toda la pantalla

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='flex flex-wrap border-b-2 border-black'>
      <div className=' flex w-full flex-row justify-between	p-4'>
        <img
          src={reactLogo}
          className='logo react'
          alt='React logo'
        />
        <button
          className='z-50 block cursor-pointer rounded px-3 py-1 text-4xl leading-none text-black outline-none focus:outline-none'
          type='button'
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <HiOutlineXMark value={{ size: '6em' }} />
          ) : (
            <HiBars3 value={{ size: '6em' }} />
          )}
        </button>
      </div>
      <div
        className={
          'absolute flex h-screen min-w-full flex-col items-center justify-evenly gap-10 bg-white/30 backdrop-blur-md lg:flex-row' +
          (navbarOpen ? ' flex' : ' hidden')
        }
      >
        <ul className='flex flex-col gap-6'>
          <NavLink
            className='cursor-pointer border-b-2 border-b-orange-50 text-3xl	hover:border-b-2 hover:border-black'
            to='/'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            Inicio
          </NavLink>
          <NavLink
            className='cursor-pointer border-b-2 border-b-orange-50 text-3xl	hover:border-b-2 hover:border-black'
            to='/metodo'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            Metodo
          </NavLink>
          <NavLink
            className='cursor-pointer border-b-2 border-b-orange-50 text-3xl	hover:border-b-2 hover:border-black'
            to='/proyectos'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            Proyectos
          </NavLink>
          <NavLink
            className='cursor-pointer border-b-2 border-b-orange-50 text-3xl	hover:border-b-2 hover:border-black'
            to='/contacto'
            onClick={() => setNavbarOpen(!navbarOpen)}
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
