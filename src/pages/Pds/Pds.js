import React, { useEffect } from 'react';
import PdsLeft from './PdsLeft';
// import PdsMiddle from './PdsMiddle';
import PdsTable from './PdsTable';
import '../../css/pds.css'

const Pds = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <PdsLeft />
                <PdsTable />
            </div>

        </div>
    );
};

export default Pds;