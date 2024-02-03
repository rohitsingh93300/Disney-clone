import React, { useState } from 'react'
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    let Links = [
        { name: 'Home', link: '/home' },
        { name: 'Service', link: '/service' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ]

    let [Open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
                {/* logo here */}
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <BeakerIcon className="w-7 h-7 text-blue-600" />
                    <span className='font-bold'>Inscribe</span>
                </div>

                {/* Menu icon */}
                <div onClick={() => setOpen(!Open)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
                    {
                        Open ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>

                {/* nav links */}
                <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 md:static absolute md:z-auto z-[-1] left-0 w-full md:w-auto transition-all bg-white duration-500 ease-in ${Open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='font-semibold my-7 md:my-0 md:ml-8'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static font-semibold duration-500'>Get Started</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
