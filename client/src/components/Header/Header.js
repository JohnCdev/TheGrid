import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';

const Header = ({ children, headerText, headingLevel = 1, alignment = "center", display=true }) => {

    const H = `h${headingLevel}`

    const headingRef = useRef(null)

    useEffect(() => {
        headingRef.current.focus();
    }, []);

    return (
        <section id="controlHeader">
            <Helmet>
                <title>{`${headerText} | The Grid`}</title>
            </Helmet>
            {display ? <H ref={headingRef} tabIndex="-1" style={{'textAlign': alignment}}>
                {headerText}
            </H>
            :
            null}
            {children}
        </section>
    );
}

export default Header;