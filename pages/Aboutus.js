import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <div className='bg-slate-900 p-5'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box justify-center m-5">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box justify-center m-5">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box justify-center m-5">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus
