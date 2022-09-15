
//Layout Admin 
import { AdminLayout } from '../layouts/admin'

//Component
import Dashboard from "../components";

//useRouter
import { useRouter } from 'next/router'

//Redux toolkit
import { store } from '../app/store';
import { Provider } from 'react-redux';

export default function Admin() {

    const router = useRouter();

    return (
        <Provider store={store}>
            <AdminLayout title="Admin" page="Admin" query={router.query}>
                <Dashboard query={router.query} />
            </AdminLayout>
        </Provider>
    )
}