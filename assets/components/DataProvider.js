import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const DataContext = createContext()

function DataContextProvider(props) {
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get('/api/matches/list')
            .then( res => setData(res.data))
            .catch( err => console.log(err))
        },[]
    )

    const insertData = async () => {
        await axios.get('/api/matches/insert')
            .then( res => console.log(res.status))
            .catch( e => console.log(e))
    }

    const deleteData = (id) => {

    }

    const update = () => {

    }

    return (
        <DataContext.Provider value={{data, deleteData : () => deleteData(), update:() => update() }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;