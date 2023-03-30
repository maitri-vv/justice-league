import React from 'react'
// import { DatePicker } from '@/components/DatePicker'
const Contactus = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                  <label className="label">
                      <span className="label-date">Date</span>
                  </label>
                  <input type="date" placeholder="Date" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Number</span>
                </label>
                <input type="number" placeholder="Number" className="input input-bordered" />
                </div>

                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Complain</span>
                </label>
                <textarea type="text" placeholder="Complain" className="input input-bordered resize-none h-32" />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contactus
