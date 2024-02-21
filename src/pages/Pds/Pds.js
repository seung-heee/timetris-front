import React, { useEffect } from 'react';
import PdsLeft from './PdsLeft';
import PdsMiddle from './PdsMiddle';
import '../../css/pds.css'

const Pds = () => {
    return (
        <div>
            <PdsLeft/>
            <PdsMiddle/>
        </div>
    );
};

export default Pds;