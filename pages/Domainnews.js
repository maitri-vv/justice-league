import React from 'react'
import { images } from '@/next.config'
const Domainnews = () => {
  return (
    <div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <img src="/images/img.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <img src="/images/img.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <img src="/images/img.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <img src="/images/img.jpg" className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <img src="/images/img.jpg" className="w-full" />
  </div>
  <div id="item6" className="carousel-item w-full max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <img src="/images/img.jpg" className="w-full" />
  </div>
  <div id="item7" className="carousel-item w-full max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <img src="/images/img.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-md">1</a> 
  <a href="#item2" className="btn btn-md">2</a> 
  <a href="#item3" className="btn btn-md">3</a> 
  <a href="#item4" className="btn btn-md">4</a>
  <a href="#item5" className="btn btn-md">5</a>
  <a href="#item6" className="btn btn-md">6</a>
  <a href="#item7" className="btn btn-md">7</a>
      
</div>
<div className="hero min-h-screen" style={{ backgroundImage: `url("/images/img.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Domainnews
