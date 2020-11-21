import React, {createContext, useState} from 'react';
import axios from 'axios'

const DataProvider = createContext()

function DataContext(props) {
    const [data,setData] = useState([])

    useEffect(() => {
        console.log("hehehe")
        },[]
    )

    const list = () => {

    }

    const deleteData = (id) => {

    }

    const update = () => {

    }

    return (
        <DataProvider value={{data, deleteData, update} }>
            {React.children}
        </DataProvider>
    );
}

export default DataContext;