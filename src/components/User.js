import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(2);

    useEffect(()=> {
        console.log('UseEffect');

        const timer = setInterval(()=> {
            console.log("useEffect Interval is calling");
        }, 1000)

        // Unmounting
        return () => {
            console.log("useEffect return");
            clearInterval(timer);
        }
    }, []);

    console.log('Render')

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <button onClick={()=> setCount(count+1)}>Increase Count</button>
            <h2>Name: {props.name}</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: @jaiparkash77</h4>
        </div>
    )
}

export default User;