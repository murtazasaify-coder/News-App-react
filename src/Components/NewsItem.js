import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,url,newsId}=this.props;
    return (
      <div>
              <div class="card" style={{width: '18rem'}}>
                  <img src={url} alt="..."/>
                  <div class="card-body">
                      <h5 class="card-title">{title}</h5>
                      <p class="card-text">{description}</p>
                      <a href="/newsdetail/" class="btn btn-sm btn-primary">Read More</a>
                  </div>
              </div>
      </div>
    )
  }
}

export default NewsItem
