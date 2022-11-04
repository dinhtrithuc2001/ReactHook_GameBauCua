import { Provider } from 'react-redux';
import './App.css';
import BaiTapHookBauCua from './component/BaiTapHookBauCua';
import store from './redux/reducer/RootReducer'

function App() {
    return (
        <Provider store={store}>
            <BaiTapHookBauCua />
        </Provider>
    );
}

export default App;
