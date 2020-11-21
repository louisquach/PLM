import React from 'react';
import ReactDom from 'react-dom'
import Home from './components/home'

export default function App(props) {
    return (
        <div>
            <Home/>
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'))
