import React from 'react'
import Image from 'next/image'
import { images } from '@/next.config'
const Whatwedo = () => {
  return (
    <div>
     <h2 className="items-center p-5 m-4 text-4xl font-bold text-center text-black bg-slate-200">
      What we do
    </h2>
    <div className="grid justify-center w-full pt-6 pb-6 bg-slate-800">
      <div className="grid grid-cols-2 gap-10 m-5 justify-items-center xl:grid-cols-3 xl:max-w-screen-xl lg:max-w-screen-lg ">
          <div className="shadow-xl card lg:card-side bg-base-100">
        <figure><img src="/images/wwd1.jpg" alt="Album" className=''/></figure>
        <div className="card-body">
          <h2 className="card-title">Our Mission</h2>
          <p>The mission of the Department of Justice is to uphold the rule of law, to keep our country safe, and to protect civil rights.</p>
          <div className="justify-end card-actions">
          <div className="gap-1 rating">
  <input type="radio" name="rating-3" className="bg-red-400 mask mask-heart" />
  <input type="radio" name="rating-3" className="bg-orange-400 mask mask-heart" checked />
  <input type="radio" name="rating-3" className="bg-yellow-400 mask mask-heart" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="bg-green-400 mask mask-heart" />
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
          <div className="gap-1 rating">
  <input type="radio" name="rating-3" className="bg-red-400 mask mask-heart" />
  <input type="radio" name="rating-3" className="bg-orange-400 mask mask-heart" checked />
  <input type="radio" name="rating-3" className="bg-yellow-400 mask mask-heart" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="bg-green-400 mask mask-heart" />
</div>
          </div>
        </div>
      </div>
      <div className="shadow-xl card lg:card-side bg-base-100">
        <figure><img src="/images/wwd2.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Our principles</h2>
          <p>Excellence. We work every day to provide the highest levels of service to the American people and to be a responsible steward of the taxpayers’ dollars.</p>
          <div className="justify-end card-actions">
          <div className="gap-1 rating">
  <input type="radio" name="rating-3" className="bg-red-400 mask mask-heart" />
  <input type="radio" name="rating-3" className="bg-orange-400 mask mask-heart" checked />
  <input type="radio" name="rating-3" className="bg-yellow-400 mask mask-heart" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="bg-green-400 mask mask-heart" />
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
