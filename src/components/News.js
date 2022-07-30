import React, { Component } from 'react'
import Customnews from './Customnews';
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    category: "",
  }

  static propTypes = {
    apikey: PropTypes.string.isRequired,
    category: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      query: "",
      loading: false,
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?${this.props.category}&apiKey=${this.props.apikey}&pageSize=20&language=en`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({articles: parsedata.articles,loading: true,  totalResults: parsedata.totalResults });
  }
 
  gotopreviouspage = async () => {
    this.setState({ loading: false, articles: [] });
    let url = `https://newsapi.org/v2/top-headlines?${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=20&language=en`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: true, articles: parsedata.articles, page: this.state.page - 1 });
  }
  gotonextpage = async () => {
    this.setState({ loading: false, articles: [] });
    let url = `https://newsapi.org/v2/top-headlines?${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=20&language=en`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: true, articles: parsedata.articles, page: this.state.page + 1 });
  }
  searchquery = async () => {
    this.setState({ loading: false, articles: [] });
    let url = `https://newsapi.org/v2/everything?q=${this.state.query}&apiKey=${this.props.apikey}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: true, articles: parsedata.articles,  totalResults: parsedata.totalResults });
  }
  updateInputValue(e) {
    const val = e.target.value;
    // ...       
    this.setState({
      query: val
    });
  }
  render() {
    let {loading} = this.state;
    if (!loading) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
              <span ></span>
            </div>
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div className="container text-bg-dark">
            <h1 className='text-center my-3'>Headlines-Top news Updates</h1>
            <Customnews />
            <form class="d-flex justify-content-center my-3" role="search">
        <input className="form-control me-2" value={this.state.query} onChange={e => this.updateInputValue(e)} style={{width:"300px"}} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={this.searchquery} type="button">Search</button>
      </form>
            <div className="row">
              {this.state.articles.map((e) => {
                return <><div className="col" key={e.url}>
                  <Newsitems title={e.title} description={e.description} url={e.url} imgurl={e.urlToImage} />
                </div></>
              })}
            </div>
            <div className="d-flex justify-content-between container">
              <button disabled={this.state.page <= 1} onClick={this.gotopreviouspage} type="button" className="btn btn-secondary">&laquo; Previous</button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.gotonextpage} type="button" className="btn btn-secondary">Next &raquo;</button>
            </div>
          </div>



        </>
      )
    }
  }
}

export default News
