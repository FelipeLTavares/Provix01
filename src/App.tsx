import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Inicio from "./pages/Inicio";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/empresa", element: <Empresa /> },
  { path: "/contato", element: <Contato /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
