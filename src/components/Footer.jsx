import React from 'react';

const Footer = (props) => {
    const { text } = props;
    return <footer className='text-light bg-dark text-center h4 py-3 mb-0 mt-3'>{text}</footer>
};

export default Footer;
