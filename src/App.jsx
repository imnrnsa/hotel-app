import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Loading from "./components/Loading";

function App() {

  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  const Bookings = React.lazy(() => import("./pages/Bookings"));
  const Customers = React.lazy(() => import("./pages/Customers"));
  const Products = React.lazy(() => import("./pages/Products"));
  const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
  const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"));
  const NotFound = React.lazy(() => import("./pages/NotFound"));
  const Login = React.lazy(() => import("./pages/auth/Login"));
  const Register = React.lazy(() => import("./pages/auth/Register"));
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/bookings" element={<Bookings />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/customers/:id" element={<CustomerDetail />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/forgot" element={<Forgot />} />

        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;