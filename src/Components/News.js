import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner1'
export class News extends Component {
  
    constructor(){
    super();
    this.state={
      articles:[],
      loading:true,
      page:1,
      

    }
  }

  async componentDidMount(){
      
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d2bfd08eeb9241a4aab7ab55518ca31b&page=1&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parseddata=await data.json();
      this.setState({
        articles : parseddata.articles,
        totalResults:parseddata.totalResults,
        loading:false,
      });
   }
   previousPage= async()=>{

    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d2bfd08eeb9241a4aab7ab55518ca31b&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parseddata=await data.json();

    this.setState({
      articles : parseddata.articles,
      page:this.state.page-1,
      loading:false
    });
    
   }
   nextPage= async()=>{
       
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d2bfd08eeb9241a4aab7ab55518ca31b&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parseddata=await data.json();

      this.setState({
        articles : parseddata.articles,
        page:this.state.page+1,
        loading:false
      });
    
  }


  render() {
    return (
      <div>
        <div className="container my-5">
            <h1 className='text-center'>News-Monkey Top Headlines</h1>
               {this.state.loading && <Spinner/>}
            <div className="row">
                   {   !this.state.loading && this.state.articles.map((element)=>{
                        return  <div className="col-md-4 mt-3" key={element.url} >
                                   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlimg={element.urlToImage} newsurl={element.url}/>
                                </div>
               })}
            </div>
        </div>
        <div className="container d-flex justify-content-between">
            <button type="button" className="btn btn-dark mb-2"  disabled={this.state.page<=1 || this.state.loading} onClick={this.previousPage}>&laquo; Previous</button>
            <button type="button" className="btn btn-dark mb-2" disabled={(this.state.page+1)>(Math.ceil(this.state.totalResults/this.props.pagesize))||this.state.loading} onClick={this.nextPage}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
