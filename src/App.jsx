import { SearchBar } from "./components/SearchBar"

function App() {

  const handleSubmit = (term) => {
    console.log(`Hace la búsqueda con ${term}`);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
    </>
  )
}

export default App
