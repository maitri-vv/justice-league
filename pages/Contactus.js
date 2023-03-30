import React from 'react'
// import { DatePicker } from '@/components/DatePicker'
const Contactus = () => {
  return (
    <div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Your Complaint here!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
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
                    <span className="label-text">Complaint</span>
                </label>
                <textarea type="text" placeholder="Complaint" className="h-32 resize-none input input-bordered" />
                </div>
                <div className="mt-6 form-control">
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
