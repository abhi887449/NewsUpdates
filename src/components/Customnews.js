import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Customnews extends Component {
  render() {
    return (
      <>
        <div className='container d-flex justify-content-center' style={{ height: "50px",overflow:"auto" }} >
          <div className="d-flex ">
              <Link to='/business' className="mx-4 my-2 btn btn-outline-secondary rounded-pill">Business</Link>
              <Link to='/entertainment' className="mx-4 my-2 btn btn-outline-secondary rounded-pill">Entertainment</Link>
              <Link to='/health' className="mx-4 my-2 btn btn-outline-secondary rounded-pill">Health</Link>
              <Link to='/science' className="mx-4 my-2 btn btn-outline-secondary rounded-pill">Science</Link>
              <Link to='/sport' className="mx-4 my-2 btn btn-outline-secondary rounded-pill">Sports</Link>
              <Link to='/technology' className="mx-4 my-2 btn btn-outline-secondary rounded-pill">Technology</Link>
              </div>
        </div>
      </>
    )
  }
}

export default Customnews
