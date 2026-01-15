import React from 'react';

const Sidebar = ({handleCollapse, collapse}) => {

    return (
        <aside>
            <div className="sidebar"></div>
            <button onClick={handleCollapse} className="btn-collapse"> {"<"} </button>
        </aside>
    )
}

export default Sidebar