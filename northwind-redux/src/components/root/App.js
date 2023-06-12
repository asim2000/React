import logo from '../../logo.svg';
import '../../App.css';
import { Container } from 'reactstrap';
import Dashboard from './Dashboard';
import Navi from '../navi/Navi';

function App() {
  return (
    <div>
      <Container>
        <Navi/>
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
