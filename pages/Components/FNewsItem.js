import React from 'react'

const FNewsItem =(props)=> {
    let { title, discription, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
      
      <div className='my-3'>
        
        <div className="card">
          <div style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>
        <span className=" badge rounded-pill bg-danger" >
          {source}
        </span>
        </div>
          <img src={imageUrl} className="" alt="..." />
          <div className="">
            <h5 className="">{title}...</h5>
            <p className="">{discription}...</p>
            <p className=""><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>

      </div>
    )
  }


export default FNewsItem