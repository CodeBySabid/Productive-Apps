import React, { useState } from 'react';
import { Github, Menu, X } from "lucide-react";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Assets/logo.png'
import HeroSection from './HeroSection';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className="bg-white w-full">
                <div className="w-full px-4 py-3 flex items-center justify-between">
                    <NavLink className="flex text-gradient-to-r from-[#632EE3] to-[#9F62F2] items-center gap-3 max-sm:gap-2 text-2xl text-black font-bold max-sm:text-xl" to={'/'}><img className='w-11 h-11 max-sm:w-9 max-sm:h-9' src={Logo} /><span className='bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text'> HERO.IO</span></NavLink>
                    <div className="hidden lg:flex items-center space-x-6 text-black">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text font-semibold' : 'text-black'
                        } to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text font-semibold' : 'text-black'
                        } to={'/mainapp'}>Apps</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text font-semibold' : 'text-black'
                        } to={'/installation'}>Installation</NavLink>
                    </div>
                    <NavLink to={'https://github.com/CodeBySabid'} className="hidden lg:flex btn btn-ghost px-9 py-6 text-2xl text-white border-none rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
                        <Github className='bg-transparent border w-8 h-8 rounded-full p-0.5' /> Contribute
                    </NavLink>
                    <div className="lg:hidden text-black">
                        <button onClick={() => setOpen(!open)}>
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
                {open && (
                    <div className="lg:hidden text-black bg-white shadow-lg px-6 py-4 space-y-4 flex flex-col text-center">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text font-semibold' : 'text-black'
                        } to={''}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text font-semibold' : 'text-black'
                        } to={'/mainapp'}>Apps</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text font-semibold' : 'text-black'
                        } to={'/installation'}>Installation</NavLink>
                        <NavLink to={'https://github.com/CodeBySabid'} className="w-full btn font-semibold border-none rounded py-1 px-2.5 text-white text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
                            <Github className='bg-transparent border rounded-full p-0.5' /> Contribute
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;