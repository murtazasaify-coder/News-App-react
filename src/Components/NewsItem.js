import React from "react";

const NewsItem =(props)=> {
 
    let { title, description, urlimg, newsurl, author, time, source } = props;
    return (
      <div>
        <div className="card mx-2">
          <div
            style=
            {{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right:'0'
            }}>
                <span className=" badge rounded-pill bg-danger" style={{ zIndex: "1", left: "90%" }}>{source}</span>
          </div>
          <img src={urlimg ? urlimg: "https://image.cnbcfm.com/api/v1/image/107287878-1692248610087-gettyimages-1250413357-Rural_Infrastructure_Construction_In_China.jpeg?v=1692323081&w=1920&h=1080"} alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on{" "} {new Date(time).toGMTString()}{" "}</small></p>
              <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
