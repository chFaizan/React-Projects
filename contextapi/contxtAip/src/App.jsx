
import './App.css'
import { UserProvider } from './CreatingContext';
import Header from "./Header";

function App() {

  return (
    <UserProvider>
      <>
      <Header />
      </>
    </UserProvider>
  )
}

export default App
