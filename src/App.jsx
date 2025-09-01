import { ThemeProvider } from "./components/ThemeProvider.jsx";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import NavbarRouter from "./Router/NavbarRouter.jsx";
import FullPageRouter from "./Router/FullPageRouter.jsx";
import UserPage from "./pages/UserPage.jsx";
import { CartProvider } from "./customHooks/CartContext.jsx";
import { ProductsProvider } from "./customHooks/ProductsContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<NavbarRouter />}>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        <Route element={<FullPageRouter />}>
          <Route path="user" element={<UserPage />} />
        </Route>
      </>
    )
  );

  return (
    <ProductsProvider>
      <CartProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ThemeProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
