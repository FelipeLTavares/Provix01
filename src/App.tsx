import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Empresa from "./pages/Empresa";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/empresa", element: <Empresa /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
