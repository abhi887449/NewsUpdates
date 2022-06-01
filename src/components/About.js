import React, { Component } from 'react'
import '../App.css';
export class About extends Component {
  render() {
    return (
      <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">About Me</h1>
      <div className='col-lg-6 mx-auto animation'>
        <p className="fs-5 mb-4">I am a Student, pursuing Bachelor of Technology in Computer Science and Engineering. I want to become a full stack developer, so i usually create this type of projects.</p>
        <p className="fs-5 mb-4">This is a new React-App which will show current news. It can also filter news according to your choice you can also search news in search bar by inputing apropriate keywords.</p>
        <a href='https://github.com/abhi887449' target="_blank" rel="noopener noreferrer" type="button" className="mx-2 btn btn-outline-secondary rounded-pill">Github</a>
        <a href='https://www.linkedin.com/in/abhi887449/' target="_blank" rel="noopener noreferrer" type="button" className="mx-2 btn btn-outline-secondary rounded-pill">LinkedIn</a>
      </div>
    </div>
  </div>
      </>
    )
  }
}

export default About
