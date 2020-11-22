import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom'
import Home from './components/home'
import 'semantic-ui-css/semantic.min.css'
import './styles/app.css'
import DataContextProvider from "./components/DataProvider";
import Header from "./components/Header";

const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '500px',
    flexDirection:'column',
    flexWrap: 'wrap'
}

const headerStyle = {
    display:' flex',
    position:'relative',
    width:'80%',
    marginTop: '2rem',
    justifyContent: 'flex-end',
    marginBottom: '-2rem'
}
export default function App(props) {
    const [user, setUser] = useState({})

    return (
        <div style={appStyle}>
            <DataContextProvider>
                <div style={headerStyle}>
                    <Header/>
                </div>
                <Home/>
            </DataContextProvider>
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'))
