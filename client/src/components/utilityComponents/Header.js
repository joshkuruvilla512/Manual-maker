import React, { memo } from 'react';
import logo from '../images/Manual Maker Logo.png';

export default memo(function Header() {
    return (
        <div>
            <img src={logo} id="manualMakerLogo" alt={"logo"} />
            <h1 id="headerTitle">Manual Maker Header</h1>
        </div>
    )
})
