import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div>
              <div class="card" style={{width: '18rem'}}>
                  <img src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0816%2Fr1211512_1296x729_16%2D9.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                      <h5 class="card-title">{title}</h5>
                      <p class="card-text">{description}</p>
                      <a href="/newsdetail" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
      </div>
    )
  }
}

export default NewsItem
