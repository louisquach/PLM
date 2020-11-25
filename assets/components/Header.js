import React, {useState} from 'react';
import { Input, Menu,Modal, Button } from 'semantic-ui-react'
import axios from 'axios'

const menuStyle ={
    height:'8vh',
    width:'auto',
    borderRadius: '3rem',
    padding: '0 2rem',
    backgroundColor:'#ec524b',
    color: 'white',
    fontSize:'1.6rem'
}
function Header(props) {
    const [activeItem, setActiveItem] = useState()
    const [showModal, setShowModal] = useState(false)

    const handleItemClick = (event, {name}) => {
        setActiveItem(name);
        if (name === 'print') {
            setShowModal(true)
        }
    }

    const exportPdf = async () => {
        setShowModal(false)
        await axios.get('/api/matches/export_pdf')
            .then( res => console.log(res))
            .catch( e => console.log(e))
    }

    const exportCsv = async () => {
        setShowModal(false)
        await axios.get('/api/matches/export_csv')
            .then( res => res.status === 200 ? window.open(res.request.responseURL): alert('There is an error, try again!'))
            .catch( e => console.log(e))
    }
    return (
       <>
        <Menu inverted style={menuStyle}>
            <Menu.Item
                name='home'
                style={{padding: 'auto 2rem', border: 'none'}}
                active={activeItem === "home"}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='print'
                style={{padding: 'auto 2rem', border: 'none'}}
                active={activeItem === 'print'}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    {
        showModal && <ExportFileModal
                        close={() => setShowModal(false)}
                        csvExport={exportCsv}
                        pdfExport={exportPdf}
                    />
    }
    </>
    );
}
const ExportFileModal = ({close, csvExport, pdfExport}) => {

    return (
            <Modal
                open={true}
                onClose={close}
                closeOnDimmerClick
                style={{height: 'auto', width: '50vw', marginTop: '20rem', marginLeft: '25rem', marginRight:'25rem', fontSize: '1.6rem'}}
            >
                <Modal.Header>EXPORT FILE</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        Which format you want to export?
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button style={{backgroundColor: 'red', fontSize: '1.5rem', color:'white'}} onClick={pdfExport}>PDF</Button>
                    <Button style={{backgroundColor: 'green', fontSize: '1.5rem', color:'white'}} onClick={csvExport}>CSV</Button>
                </Modal.Actions>
            </Modal>
    )
}


export default Header;


