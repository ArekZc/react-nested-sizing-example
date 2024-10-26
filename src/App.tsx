import logo from './assets/react.svg';
import { Button } from './components/Button';
import './App.css';
import { Icon } from './components/Icon';

function App() {
  return (
    <div className="container">
      <Button size="xs">
        <Icon src={logo} /> Extra small
      </Button>

      <Button size="sm">
        <Icon src={logo} /> Small
      </Button>
      <Button>
        <Icon src={logo} /> Medium
      </Button>
      <Button size="lg">
        <Icon src={logo} /> Large
      </Button>
      <Button size="xl">
        <Icon src={logo} /> Extra large
      </Button>
    </div>
  );
}

export default App;
