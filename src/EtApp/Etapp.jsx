import React, { useState } from 'react';
import Etform from './Etform'
import Etlist from './Etlist'

//import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

const ETApp = () => {

    const [track, settrack] = useState([]);

    return <>
        <Etform track={track} settrack={settrack} />
        <Etlist track={track} />
    </>;
}

export default ETApp