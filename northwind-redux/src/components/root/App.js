import logo from '../../logo.svg';
import '../../App.css';
import { Container, Row } from 'reactstrap';
import Dashboard from './Dashboard';
import Navi from '../navi/Navi';

function App() {
  return (
    <div>
      <Container>
        <Row className='mt-3 mb-3'>
          <Navi/>
        </Row>
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
