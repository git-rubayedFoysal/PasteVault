import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./Store/Store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Create, Pastes, ViewPaste, Error, EditPaste } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Pastes />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "paste/:id",
        element: <ViewPaste />,
      },
      {
        path: "edit/:id",
        element: <EditPaste />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
