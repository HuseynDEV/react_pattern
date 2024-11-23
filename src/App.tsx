import Counter from "./components/Counter"
import DarkMode from "./components/DarkMode"
import { UserForm } from "./components/UserForm"

const App = () => {

  return (
    <>
      <h1>React Pattern</h1>
      <Counter />
      <UserForm />
      <DarkMode />
    </>
  )
}

export default App