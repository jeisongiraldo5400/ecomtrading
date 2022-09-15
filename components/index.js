import React from 'react';

import Index from './dashboard';

export default function Dashboard({ query }) {

    const views = ({ view }) => {
        return <Index view={view}/>;
    }

    return (
        <main>
            { views(query) }
        </main>
    )
}
