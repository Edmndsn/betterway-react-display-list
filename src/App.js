import { namesList } from "./data.js";

export default function App() {
  return (
    <div className="App">
      {namesList.map(item => {
        return (
          <ul>
            <li key={item}>{item},</li>
          </ul>
        );
      })}
    </div>
  );
}

