import React from 'react';
import './../assets/SidebarOption.css';

function SidebarOption({ selected, optionName, Icon }) {
    return (
        <div className={`sidebarOption ${selected && "selected"}`}>
            { Icon && <Icon className="sidebarOption__icon" />}
            <h2 className="sidebarOption__title">{optionName}</h2>
        </div>
    )
}

export default SidebarOption;
