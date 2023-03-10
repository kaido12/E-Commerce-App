import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import DeliveryPolicy from "./pages/DeliveryPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/store" element={<Store />} />
            <Route  path="/store/:id" element={<SingleProduct />} />
            <Route  path="/blog" element={<Blog />} />
            <Route  path="/blog/:id" element={<SingleBlog />} />
            <Route  path="/cart" element={<Cart />} />
            <Route  path="/checkout" element={<Checkout />} />
            <Route  path="/compare-products" element={<CompareProducts />} />
            <Route  path="/wishlist" element={<Wishlist />} />
            <Route  path="/signin" element={<SignIn />} />
            <Route  path="/signup" element={<SignUp />} />
            <Route  path="/forgot-password" element={<ForgotPassword />} />
            <Route  path="/reset-password" element={<ResetPassword />} />
            <Route  path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route  path="/refund-policy" element={<RefundPolicy />} />
            <Route  path="/delivery-policy" element={<DeliveryPolicy />} />
            <Route  path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
