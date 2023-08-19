import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    constructor(){
    super();
    this.state={
      articles:[],
      loading:false

    }
  }

  async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d2bfd08eeb9241a4aab7ab55518ca31b";
      let data= await fetch(url);
      let parseddata=await data.json();
      this.setState({articles : parseddata.articles});
   }


  render() {
    return (
      <div>
        <div className="container my-5">
            <h2>News-Monkey Top Headlines</h2>
            <div className="row">
                   { this.state.articles.map((element)=>{
                        return  <div className="col-md-4 mt-3" key={element.url} >
                                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlimg={element.urlToImage} newsurl={element.url}/>
                                </div>
               })}
            </div>
        </div>
      </div>
    )
  }
}

export default News
