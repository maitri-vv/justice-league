import React from 'react'
import Image from 'next/image'
import { images } from '@/next.config'
const Whatwedo = () => {
  return (
    <div>
     <h2 className="text-3xl text-black font-bold items-center text-center">
      What we do<div className="badge badge-primary text-xs badge-top">3</div>
    </h2>
    <div className="grid justify-center w-full pt-6 pb-6 bg-slate-800">
      <div className="grid grid-cols-2 gap-5 m-5 justify-items-center xl:grid-cols-3 xl:max-w-screen-xl lg:max-w-screen-lg ">
          <div className="shadow-xl card lg:card-side bg-base-100">
        <figure><img src="/images/img.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="justify-end card-actions">
          <div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
          </div>
        </div>
      </div>
      <div className="shadow-xl card lg:card-side bg-base-100">
        <figure><img src="/images/img.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="justify-end card-actions">
          <div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
          </div>
        </div>
      </div>
      <div className="shadow-xl card lg:card-side bg-base-100">
        <figure><img src="/images/img.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="justify-end card-actions">
          <div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
          </div>
        </div>
      </div>
                </div>
            </div>
            </div>
  )
}

export default Whatwedo
