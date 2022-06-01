import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
export class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" apikey={this.apikey} category={"category=general"} />}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/science" element={<News key="science" apikey={this.apikey} category={"category=science"} />}></Route>
            <Route exact path="/business" element={<News key="business" apikey={this.apikey} category={"category=business"} />}></Route>
            <Route exact path="/health" element={<News key="health" apikey={this.apikey} category={"category=health"} />}></Route>
            <Route exact path="/sport" element={<News key="sport" apikey={this.apikey} category={"category=sport"} />}></Route>
            <Route exact path="/technology" element={<News key="technology" apikey={this.apikey} category={"category=technology"} />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" apikey={this.apikey} category={"category=entertainment"} />}></Route>
          </Routes>
        </Router>
        <Footer />
      </>
    )
  }
}

export default App
