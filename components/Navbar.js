import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className="p-6 navbar bg-slate-900 text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="p-2 mt-3 font-semibold shadow menu menu-compact dropdown-content rounded-box w-52 bg-neutral">
            <li><Link href="/" className='hover:text-red-400'>HOME</Link></li>
            <li><a className='hover:text-red-400'>OUR PORTFOLIO</a></li>
            <li><Link href="/Aboutus" className='hover:text-red-400'>ABOUT US</Link></li>
            <li><button className="text-black rounded-md bg-slate-100"><Link href="/Contactus">CONTACT US</Link></button></li>
          </ul>
        </div>
        <a className="text-2xl font-bold normal-case btn btn-ghost">JUSTICE LEAGUE</a>
      </div>
      <div className="hidden mx-5 text-sm font-bold navbar-end lg:flex">
        <ul className="px-1 space-x-4 menu menu-horizontal">
            <li><Link href="/" className='hover:text-red-400'>HOME</Link></li>
            <li><a className='hover:text-red-400'>OUR PORTFOLIO</a></li>
            <li><Link href="/Aboutus" className='hover:text-red-400'>ABOUT US</Link></li>
            <li><button className="text-black rounded-md bg-slate-100"><Link href="/Contactus">CONTACT US</Link></button></li>
        </ul>
        
      </div>
     
    </div>
  )
}

export default Navbar
