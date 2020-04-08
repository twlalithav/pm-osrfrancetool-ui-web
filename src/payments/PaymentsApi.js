import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Page from '../firstPageView'

function AllPayments() {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            const response = await axios.get(
                'https://api.covid19india.org/raw_data.json'
            );

            if(response.data) {
                setPatients(response.data.raw_data.reverse());
            }
        }
        fetchApi();
    }, [])

    return (<React.Fragment>
            <Page patients={patients}/>
        </React.Fragment>
    )
}

export default AllPayments;