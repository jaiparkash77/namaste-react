import React from 'react';
import User from './User'
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
        <h1>About Page</h1>
        <h2>This is about page of namaste react.</h2>
        {/* Functional Component */}
        <User name={"Jai Parkash (function)"} />

        {/* Class Component */}
        <UserClass name={"Jai Parkash (class)"} location={"Delhi (class)"} />
    </div>
  )
}

export default About