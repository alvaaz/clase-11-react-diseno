import { Button } from "./components/button";

function App() {
  return (
    <div className="inline-flex flex-col items-start gap-4">
      <h1 className="font-sans text-2xl text-black font-semibold">Botones</h1>
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
