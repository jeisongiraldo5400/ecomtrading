

import Header from '../components/shared/header';
import Sidebar from '../components/shared/sidebar';


export const AdminLayout = ({ children, query}) => {
    return (
        <>
            <Header />

            <div className="container-layout">
                <div>
                    <Sidebar query={query} />
                </div>
                <div className="dashboard mr-10 mt-5">
                    {
                        children
                    }
                </div>
            </div>            
        </>
    )
}