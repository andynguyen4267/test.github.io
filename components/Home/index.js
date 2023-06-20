import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import './background.js';


function Home() {
    return (
        <div className='container'>
            <div className='top-right'>
                <button className='button'>HOME</button>
                <button className='button'>ABOUT</button>
                <button className='button'>CONTACT</button>
            </div>
            <p>Hi, my name is</p>
            <h1>Andy Nguyen</h1>
            <p>SOFTWARE ENGINEER</p>
        </div>
    );
}

ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;