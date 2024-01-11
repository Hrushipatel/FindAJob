import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faCog, faGripLines, faRightFromBracket, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import '../styling/style.css';

function SideBar() {
    const [open, setOpen] = useState(false);

    const changeState = () => {
        setOpen(!open);
    };

    return (
        <div className="GripLine">
            <div style={{ visibility: open ? 'hidden' : 'visible' }}>
                <FontAwesomeIcon icon={faGripLines} className='FontAwesomeIcon' onClick={changeState} />
            </div>
            <div className={`SideMenu ${open ? 'active' : ''}`} >
            <FontAwesomeIcon icon={faTimes} className='FontAwesomeIcon1'  onClick={changeState}/>
                <div className='side-menu-items'>
                    <p> <FontAwesomeIcon icon={faUser}/> Profile </p>
                    <p> <FontAwesomeIcon icon={faCog}/> Settings </p>
                    <p> <FontAwesomeIcon icon={faBookOpen}/> Applications </p>
                    <p> <FontAwesomeIcon icon={faRightFromBracket}/> Log Out</p>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
