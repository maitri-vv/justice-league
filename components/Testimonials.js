import React from 'react'
import Image from 'next/image'
import { images } from '@/next.config'
const Testimonials = () => {
  return (
    <div>
     <div className="indicator justify-center w-full ">
  <span className="indicator-item indicator-bottom indicator-center badge badge-secondary"></span>
  <div className="grid w-16 h-16 bg-base-300 place-items-center">Testimonials</div>
</div>
    <div className="grid justify-center w-full pt-6 pb-6 bg-slate-800">
      <div className="grid grid-cols-2 gap-5 m-5 justify-items-center xl:grid-cols-3 xl:max-w-screen-xl lg:max-w-screen-lg ">
          <div className="shadow-xl card lg:card-side bg-base-100">
        <figure><img src="/images/img.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <div className="shadow-xl card lg:card-side bg-base-100">
        <figure><img src="/images/img.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <div className="shadow-xl card lg:card-side bg-base-100">
        <figure><img src="/images/img.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
                </div>
            </div>
            </div>
  )
}

export default Testimonials
