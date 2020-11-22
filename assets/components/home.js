import React, {useContext, useEffect, useState} from 'react';
import { Icon, Table,Menu } from 'semantic-ui-react'
import {DataContext} from "./DataProvider";
import Pagination from "react-js-pagination";

const headerCell = {
    backgroundColor:'#0278ae',
    color: 'white',
    justifyContent: 'center',
    border: 'none'
}

function Home(props) {
    const context = useContext(DataContext)
    const matches = context.data
    const [activePage, setActivePage] = useState(1);
    const [matchNum, setMatchNum] = useState(null)
    const [arrayDisplay, setArrayDisplay] = useState([])

    const handlePageChange = (page) => {
        setActivePage(page);
        console.log(page)
    }

    useEffect( async () => {
        await setMatchNum(Math.ceil(matches.length/17))
        mapThroughMatches()
        },[matches, matchNum, activePage]
     )

    const mapThroughMatches = () => {
        if ( matchNum && matchNum > 0) {
            const start = matchNum*(activePage - 1)
            const end = start + matchNum
            const arrayMatches = matches.slice(start,end)
            setArrayDisplay(arrayMatches)
        }
    }
    console.log(arrayDisplay)
    return (
        <div>
            <Table celled style={{width: '80vw', marginTop: '50px'}}>
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell style={headerCell}>Date</Table.HeaderCell>
                        <Table.HeaderCell style={headerCell}>Match</Table.HeaderCell>
                        <Table.HeaderCell style={headerCell}>Subscribe</Table.HeaderCell>
                        <Table.HeaderCell style={headerCell}>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        arrayDisplay.length > 0 && arrayDisplay.map( match => {
                                return (
                                    <Table.Row key={match.id}>
                                        <Table.Cell>{match.day}</Table.Cell>
                                        <Table.Cell>{match.home} vs {match.away}</Table.Cell>
                                        <Table.Cell><button>No</button></Table.Cell>
                                        <Table.Cell>Action</Table.Cell>
                                    </Table.Row>
                                )
                        })
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
                                <Pagination
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activePage={activePage}
                                    itemsCountPerPage={matchNum}
                                    totalItemsCount={matches.length}
                                    pageRangeDisplayed={10}
                                    onChange={handlePageChange}
                                />
                            </div>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
}

export default Home;