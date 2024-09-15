import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        }

        console.log(this.props.name + 'Child constructor');
    }

    componentDidMount() {
        console.log(this.props.name + 'Child componentDidMount');

        this.timer = setInterval(()=> {
            console.log("Interval is calling");
        }, 1000)
    }

    componentDidUpdate(preProps, preState) {
        if (this.state.count !== preState.count || this.state.count2 !== preState.count2) {
            // Code
        }

        // if (this.state.count2 !== preState.count2) {
        //     // Code
        // }
        console.log('Child componentDidUpdate');
    }

    componentWillUnmount() {
        // This will be called when the component will unmount from UI. For example we navigate to another page.
        console.log('Child componentWillUnmount');
        clearInterval(this.timer);
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        console.log("Child Render");
        // debugger;
        return (
            <div className="user-card">
                <img src={avatar_url} width={'200px'} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @jaiparkash77</h4>
            </div>
        )
    }
}

export default UserClass;

/*
*
* -------MOUNTING-----------
*
* Constructor (dummy)
* Render (dummy)
*           <HTML Dummy>
* Component Did Mount
*           <API call>
*           <this.setState> -> State variable is updated
*
* --------UPDATE---------
* 
* Render (API data)
* <HTML new api data>
* Component Did Update
*/