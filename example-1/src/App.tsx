import { Card } from "./components/card";

const data = [
  {
    title: "2010x Mix",
    description: "Jacob Collier, Daryl Hall & John Oates, Jason Mraz",
    imageUrl: "/ed-sheeran.png",
    color: "rgb(254 205 211)",
  },
  {
    title: "2010x Mix",
    description: "Jacob Collier, Daryl Hall & John Oates, Jason Mraz",
    imageUrl: "/los-tres.png",
    color: "rgb(94 234 212)",
  },
  {
    title: "2010x Mix",
    description: "Jacob Collier, Daryl Hall & John Oates, Jason Mraz",
    imageUrl: "/alejandro.png",
    color: "rgb(125 211 252)",
  },
  {
    title: "2010x Mix",
    description: "Jacob Collier, Daryl Hall & John Oates, Jason Mraz",
    imageUrl: "/john-mayer.png",
    color: "rgb(217 249 157)",
  },
];

function App() {
  return (
    <>
      <div className="flex gap-4">
        {data.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            color={item.color}
          />
        ))}
      </div>
    </>
  );
}

export default App;
