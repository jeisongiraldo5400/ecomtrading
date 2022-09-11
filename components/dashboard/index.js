import React, { useState, useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';


//http
import { get_all_owners } from '../../lib/http';

export default function Dashboard() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_owners());
    }, []);

    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}