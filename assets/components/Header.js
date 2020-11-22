import React, {useState} from 'react';
import { Input, Menu } from 'semantic-ui-react'
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

    const handleItemClick = (event, {name}) => {
        setActiveItem(name);
    }
    return (
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
    );
}

export default Header;