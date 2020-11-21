import React,{useState} from 'react';
import ReactDom from 'react-dom'
import Home from './components/home'
import 'semantic-ui-css/semantic.min.css'
import './styles/app.css'

export default function App(props) {
    const [user, setUser] = useState({})

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '500px'}}>
            <Home/>
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'))
