import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import DropDowns from "./components/DropDowns";
import PasteButton from "./components/PasteButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
function App() {
  

  return (
    <>
      
      <DropDowns name="Code" />
      <DropDowns name="Time" />
      <PasteButton id="Home"/>
      <DropDowns name="Visibility" />
      <PasteButton id="View"/>
      <PasteButton id="Edit"/>
      

    

      
      
    </>
  )
}

export default App
