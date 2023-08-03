
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllRest from './Components/All_rest/AllRest';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import View from './Components/ViewRest/View'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header/>
        <Routes>
          {/* localhost://3000 - all restaurents */}
          <Route path='/' element={<AllRest/>}/>
          <Route path='/view/:id' element={<View/>}/>
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
