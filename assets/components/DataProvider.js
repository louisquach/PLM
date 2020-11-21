import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const DataContext = createContext()

function DataContextProvider(props) {
    const [data,setData] = useState([{name: "beo", age: 3}])

    useEffect(async () => {
        await axios.get('/api/matches/list')
            .then( res => setData(res.data))
            .catch( err => console.log(err))
        },[]
    )

    const list = () => {

    }

    const deleteData = (id) => {

    }

    const update = () => {

    }

    return (
        <DataContext.Provider value={{data:data,list: () => list(), deleteData : () => deleteData(), update:() => update()} }>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;