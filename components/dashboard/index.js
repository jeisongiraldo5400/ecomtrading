
import Home from './home';
import Owner from './owners';
import Stores from './stores';

// eslint-disable-next-line import/no-anonymous-default-export
export default function Index({ view }) {
        
    return(
        <div>
            { views(view) }
        </div>
    )
}


const views = (view) => {

    switch(view) {
        case 'Home':
            return <Home />;
        case 'Owner':
            return <Owner />;
        case 'Stores':
            return <Stores />;
        default: return <Home />;
    }
}