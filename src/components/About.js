import React from 'react';
import User from './User'
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props){
    super(props);

    // console.log('Parent constructor');
  }

  componentDidMount() {
    // console.log('Parent componentDidMount');
}

  render() {
    // console.log('Parent render');

    return (
      <div>
          <h1>About Page</h1>
          <h2>This is about page of namaste react.</h2>
          <User name={"Jai Parkash (function)"} location={"Delhi (function)"} />
          {/* <UserClass name={"Om Parkash (class)"} location={"Delhi (class)"} /> */}
      </div>
    )
  }
}

/*
Life cycle method for these components

- Parent Constructor
- Parent Render
  - First Child Constructor
  - First Child Render

  - Second Child Constructor
  - Second Child Constructor

  <DOM UPDATED - IN SINGLE BATCH>
  - First Child componentDidMount
  - Second Child componentDidMount

- Parent componentDidMount


*/

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