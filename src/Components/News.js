import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner1'
import PropTypes  from 'prop-types';
export class News extends Component {
  static defaultProps = {
    country:'in',
    pagesize:'5',
    category:'general',
  }
   static PropsTypes = {
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor(){
    super();
    this.state={
      articles:[],
      loading:true,
      page:1,
    }}

    async fetchfunc(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2bfd08eeb9241a4aab7ab55518ca31b&page=${this.state.page}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parseddata=await data.json();
      this.setState({
        articles : parseddata.articles,
        totalResults:parseddata.totalResults,
        loading:false,
      });}

  async componentDidMount(){
       this.fetchfunc();
   }
   previousPage= async()=>{
    await this.setState({page:this.state.page-1})
    await this.fetchfunc();
  }
   nextPage= async()=>{
     await this.setState({page:this.state.page+1})
     await this.fetchfunc();
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
                                   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlimg={element.urlToImage} newsurl={element.url} time={element.publishedAt} author={element.author} source={element.source.name}/>
                                </div>
               })}
            </div>
        </div>
        <div className="container d-flex justify-content-between">
           {!this.state.loading && <button type="button" className="btn btn-dark mb-2"  disabled={this.state.page<=1 } onClick={this.previousPage}>&laquo; Previous</button>} 
           {!this.state.loading && <button type="button" className="btn btn-dark mb-2" disabled={(this.state.page+1)>(Math.ceil(this.state.totalResults/this.props.pagesize))} onClick={this.nextPage}>Next &raquo;</button>}
        </div>
      </div>
    )
  }
}

export default News
