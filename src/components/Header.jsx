import React from 'react'; 
const Header = (props) => {
    const { title } = props;
    return <h1 className="header">{title}</h1>
}

export default Header