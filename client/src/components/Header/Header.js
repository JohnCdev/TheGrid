import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';

const Header = ({ children, headerText, headingLevel = 1, alignment = "center", display = true }) => {

    const H = `h${headingLevel}`

    const headingRef = useRef(null)

    const displayStyle  = display ? "show" : "none"; 

    useEffect(() => {
        headingRef.current.focus();
    }, []);

    return (
        <section id="controlHeader">
            <Helmet>
                <title>{`${headerText} | The Grid`}</title>
            </Helmet>
            <H ref={headingRef} tabIndex="-1" style={{ 'textAlign': 'alignment', 'display': displayStyle}}>
                {headerText}
            </H>
            {children}
        </section>
    );
}

export default Header;