import React from 'react';
import User from './User'
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props){
    super(props);

    console.log('Parent constructor');
  }

  componentDidMount() {
    console.log('Parent componentDidMount');
}

  render() {
    console.log('Parent render');
    return (
      <div>
          <h1>About Page</h1>
          <h2>This is about page of namaste react.</h2>
          <UserClass name={"Jai Parkash (class)"} location={"Delhi (class)"} />
      </div>
    )
  }
}

// const About = () => {
  // return (
  //   <div>
  //       <h1>About Page</h1>
  //       <h2>This is about page of namaste react.</h2>
  //       {/* Functional Component */}
  //       <User name={"Jai Parkash (function)"} />

  //       {/* Class Component */}
  //       <UserClass name={"Jai Parkash (class)"} location={"Delhi (class)"} />
  //   </div>
  // )
// }

export default About