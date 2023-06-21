import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import SideBar from './components/SideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, BrowserRouter, Route, useNavigate, NavLink } from 'react-router-dom';
import Home2 from './components/Home2';
import SingUp from './components/SingUp';
import SingIN from './components/SingIN';
import TargetList from './components/TargetList';
import { useState } from 'react';
import Test from './components/Test';






function App() {
  // const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(

    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );


  return (
    <div className="App p-3">
      <Container fluid className='maincountainer p-5'>
        <BrowserRouter>


          <Row className='row1 h-100 overflow-hidden w-100'>



            <Routes >
              <Route path="/" element={<SingUp />} />
              <Route path="/SingIN" element={<SingIN />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/TargetList/:userId" element={("authenticated", true) ? <TargetList /> : <SingIN />} />
              <Route path="/Home2" element={<Home2 />} />
              <Route path="/Test" element={<Test />} />
              <Route path="/home2/:userId" element={<Home2 />} />

            </Routes >

          </Row>

        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
