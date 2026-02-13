import Counter from "./Components/Counter"
import LivePreview from "./Components/LivePreview";
import Toggle from "./Components/Toggle";



function App() {
  return (
    <div>
        <h1>My Counter</h1>
        <Counter />
        <h1>Toggle</h1>
        <Toggle />
        <h1>Live Preview</h1>
        <LivePreview />
    </div>
  )
}

export default App
