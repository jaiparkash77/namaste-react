import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
            count2: 1,
        }

        console.log(this.props.name + 'Child constructor');
    }

    componentDidMount() {
        console.log(this.props.name + 'Child componentDidMount');

        // Api call        
    }

    render() {
        const {name, location} = this.props;
        const { count, count2 } = this.state;
        console.log('Child render');

        return (
            <div className="user-card">
                <h1>Count: {count}, Count: {count2}</h1>
                <button onClick={()=> {
                    // Never update state variable directly
                    // If we have to update multiple state at once then we can do it in setState, no need to create multiple setState to update for different states.

                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2,
                    })
                }}>Increase Count</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @jaiparkash77</h4>
            </div>
        )
    }
}

export default UserClass;