
//Component
import Dashboard from "../components/dashboard";

//Redux toolkit
import { store } from '../app/store';
import { Provider } from 'react-redux';

export default function Admin() {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    )
}