import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Inicio from "./pages/Inicio";
import Equipe from "./pages/Sobre nós";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/empresa", element: <Empresa /> },
  { path: "/contato", element: <Contato /> },
  { path: "/equipe", element: <Equipe /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
