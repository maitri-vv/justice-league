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
        <figure><img src="/images/wwd1.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Our Mission</h2>
          <p>The mission of the Department of Justice is to uphold the rule of law, to keep our country safe, and to protect civil rights.</p>
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
        <figure><img src="/images/wwd3.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Our Values</h2>
          <p>Independence and Impartiality. We work each day to earn the public’s trust by following the facts and the law wherever they may lead, without prejudice.</p>
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
        <figure><img src="/images/wwd2.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Our actions</h2>
          <p>Respect. Our employees value differences in people and in ideas and treat everyone with fairness, dignity, and compassion.</p>
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
