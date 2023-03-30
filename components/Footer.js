import React from 'react'
import Link from 'next/link';
import {AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
    
  return (
    <div>
        <footer className="justify-between p-16 footer bg-slate-900 text-neutral-content">
        <div>
    <span className="text-xl footer-title">Services</span> 
    <Link href="/"className="text-lg link link-hover">Home</Link> 
    <Link href="/Domainnews" className="text-lg link link-hover">Know Your Case</Link> 
    <Link href="/NewsSection" className="text-lg link link-hover">Daily News</Link> 
    <Link href="/Contactus" className="text-lg link link-hover">Complaint</Link>
  </div> 
  <div>
    <span className="text-xl footer-title">Other Links</span> 
    <Link href="https://doj.gov.in/" target="_blank" className="text-lg link link-hover">Department of Justice</Link> 
    <Link href="https://lawmin.gov.in/" className="text-lg link link-hover">Ministry of Law</Link> 
    <Link href="https://legalaffairs.gov.in/" className="text-lg link link-hover">Legal Affairs</Link> 
    <Link href="https://www.ojp.gov/" className="text-lg link link-hover">Office of Justice</Link>
  </div> 
  <div>
    <span className="text-lg footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
    <AiFillFacebook size={40}/>
    <AiFillTwitterCircle size={40}/> 
    <AiFillLinkedin size={40}/>
    </div>
    <div className="grid-flow-col">
    
    <p className='p-3 text-lg text-center'>Copyright ©JusticeLeague - All right reserved</p>
  </div> 
  </div>
  
   </footer> 
       
    </div>
  )
}

export default Footer
