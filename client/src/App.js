import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './views/Home'
import Create from './views/Create';
import Details from './views/Details';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pets/new" element={<Create/>} />
        <Route path="/pets/:id" element={<Details/>} />
        <Route path="/pets/:id/edit" element={<Edit/>} />
      </Routes>
    </div>
  );
}
<Home></Home>
export default App;
