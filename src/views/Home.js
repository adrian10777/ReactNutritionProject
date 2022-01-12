import React from "react";

const Home = props => {
    // data, properties (props), state -> all things that we can use/control over the course of our component's lifestyle
    // component lifestyle: loaded? rendered (shown on screen)? changed state? re-rendered?
    return (
        <div className='home'>
            <h1>This will be the homepage.</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Foods</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Home;