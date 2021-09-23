import createModal from "./components/Modal"

const App = () => {
  return (
    <div className="app" >
      <button
        onClick={() => createModal(<h1>Success</h1>)} >Open Modal</button>
    </div>
  )
}

export default App