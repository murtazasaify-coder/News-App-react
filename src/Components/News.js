import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-5">
            <h2>News-Monkey Top Headlines</h2>
            <div className="row mt-5">
                <div className="col-md-4">
                  <NewsItem title="News Item" description="desc"/>
                </div>
                <div className="col-md-4">
                  <NewsItem title="News Item" description="desc"/>
                </div>
                <div className="col-md-4">
                  <NewsItem title="News Item" description="desc"/>
                </div>
             </div>
        </div>
      </div>
    )
  }
}

export default News
