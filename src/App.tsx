import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Inicio from "./pages/Inicio";
import Teste from "./pages/Teste";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/empresa", element: <Empresa /> },
  { path: "/contato", element: <Contato /> },
  { path: "/teste", element: <Teste /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
