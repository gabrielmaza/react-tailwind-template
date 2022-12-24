import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "./pages/private/comments/Comments.page";
import Favorite from "./pages/private/favorite/Favorite.page";
import Login from "./pages/public/login/Login.page";
import Product from "./pages/private/product/Product.page";
import Profile from "./pages/private/profile/Profile.page";
import RegisterConfirmation from "./pages/public/register/RegisterConfirmation.page";
import RegisterForm from "./pages/public/register/RegisterForm.page";
import RegisterValidation from "./pages/public/register/RegisterValidation.page";
import Home from "./pages/public/home/Home.page";
import Sales from "./pages/private/sale/Sales.page";
import Setting from "./pages/private/setting/Setting.page";
import Cart from "./pages/private/shopping/cart";
import Checkout from "./pages/private/shopping/checkout";
import Congrat from "./pages/private/shopping/Congrat.page";
import About from "./pages/public/about/About.page";
import PrivacyPolicy from "./pages/public/privacy-policy/PrivacyPolicy";
import Search from "./pages/public/search/Search.page";
import Error404 from "./pages/public/error/Error404.page";
import Notifications from "./pages/private/notifications/Notifications";
import NewProductForm from "./pages/private/new-product/NewProductForm.page";
import Purchases from "./pages/private/purchase/Purchases.page";
import MyProducts from "./pages/private/my-products/MyProducts";
import Contact from "./pages/public/contact/Contact.page";
import Support from "./pages/public/Support/Support.page";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/comments" element={<Comments />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route
            path="/register-confirmation"
            element={<RegisterConfirmation />}
          />
          <Route path="/register-form" element={<RegisterForm />} />
          <Route path="/register-validation" element={<RegisterValidation />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/new-product-form" element={<NewProductForm />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/congratulations" element={<Congrat />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/search" element={<Search />} />
          <Route path="/support" element={<Support />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
