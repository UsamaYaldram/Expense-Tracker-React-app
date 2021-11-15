import './App.css';
import Balance from './components/Balance';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import TranHistory from './components/TranHistory';
import Transection from './components/Transection';
import { MyProvider } from './context/Global';

function App() {
  return (
    
    <MyProvider className="main-div">
    <Header/>
    <div className="container">
    <Balance/>
    <Dashboard/>
    <Transection/>
    <TranHistory/>
    </div>
      </MyProvider>
  );
}

export default App;