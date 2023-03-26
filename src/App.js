import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/header/Header";
import ProductDetails from "./component/ProductDetails";
import Body from "./component/Body";
import ProductCart from "./component/ProductCart";
import store from "./component/utils/store";
import { Provider } from "react-redux";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <ProductCart />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
