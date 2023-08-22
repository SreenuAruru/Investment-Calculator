import Investment from "./components/Investment";

function App() {
  return (
    <div>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Investment />
    </div>
  );
}

export default App;
