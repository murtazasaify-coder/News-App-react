import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner1'
import PropTypes  from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

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
   capfirst=(string)=> {
    return string[0].toUpperCase() +string.slice(1);
}
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0
      
    }
    document.title=`${this.capfirst(this.props.category)}-NewsMonkey`;
  }

    async fetchfunc(){
      this.props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
      let data= await fetch(url);
      let parseddata=await data.json();
      this.props.setProgress(30);
      
      this.setState({
        articles : parseddata.articles,
        totalResults:parseddata.totalResults,
        loading:false,
      });
      this.props.setProgress(100);
      console.log("artilcles" + this.state.articles.length +"totalrsults"+this.state.totalResults);
    }

  async componentDidMount(){
       this.fetchfunc();
   }

  fetchMoreData = async() => {
    // await this.setState({page:this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    let data= await fetch(url);
    let parseddata=await data.json();
    this.setState({
      articles : this.state.articles.concat(parseddata.articles),
      totalResults:parseddata.totalResults,
      page:this.state.page+1,
    });
    console.log("artilcles" + this.state.articles.length +"totalrsults"+this.state.totalResults);
    
  };


  render() {
    return (
      <div>
        <div className="  my-5">
            <h1 className='text-center'>NewsMonkey-Top {this.capfirst(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner/>  }
               <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.page<=Math.ceil(this.state.totalResults/this.props.pagesize)}
                    loader={<Spinner/>}
               >
                  <div className="container my-5">
                        <div className="row">
                          {  this.state.articles.map((element)=>{
                                return  <div className="col-md-4 mt-3" key={element.url} >
                                              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlimg={element.urlToImage} newsurl={element.url} time={element.publishedAt} author={element.author} source={element.source.name}/>
                                        </div>
                          })}
                        </div>
                  </div>
              </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default News
