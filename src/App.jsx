import './App.css'
import Home from './pages/index'
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  const user = {
    username: "izan",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
