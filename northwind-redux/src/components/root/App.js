import logo from '../../logo.svg';
import '../../App.css';
import { Container, Row } from 'reactstrap';
import Dashboard from './Dashboard';
import Navi from '../navi/Navi';
import { Route, Routes } from 'react-router-dom';
import CartDetails from '../cart/CartDetails';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Container>
        <Row className='mt-3 mb-3'>
          <Navi/>
        </Row>
        <Routes>
          <Route exact path='/' Component={Dashboard}/>
          <Route exact path='/products' Component={Dashboard}/>
          <Route exact path='/cart' Component={CartDetails}/>
          <Route path="*" Component={NotFound}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
