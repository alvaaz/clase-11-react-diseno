import { Button } from "./components/button";

function App() {
  return (
    <div className="wrapper">
      <h1 className="heading">Botones</h1>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="primary" disabled>
        Primary Disabled
      </Button>
      <Button type="secondary" disabled>
        Secondary Disabled
      </Button>
    </div>
  );
}

export default App;
