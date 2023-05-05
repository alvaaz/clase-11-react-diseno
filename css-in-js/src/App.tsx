import styled from "styled-components";
import { Button } from "./components/button";

const Group = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Typography = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
`;

function App() {
  return (
    <Group>
      <Typography>Botones</Typography>
      <Button $type="primary">Primary</Button>
      <Button $type="secondary">Secondary</Button>
      <Button disabled>Primary Disabled</Button>
      <Button $type="secondary" disabled>
        Secondary Disabled
      </Button>
    </Group>
  );
}

export default App;
