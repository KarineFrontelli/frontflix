import React from 'react';
import styled from 'styled-components';

import Footer from '../Footer';
import Menu from '../Menu';

const main = styled.main`
background-color: var(--black);
color: var(--white);
flex: 1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
`;

function PageDefault (props) {
    return (
    <>
        <Menu />
            <main>
            {props.children}
            </main>
                
        <Footer />
    </>
    );
}

export default PageDefault;