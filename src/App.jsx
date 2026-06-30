import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Loading from "./components/Loading";
import { getAuthSession } from "./lib/utils";

function ProtectedRoute({ children }) {
  const session = getAuthSession();

  if (!session?.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {

  const GuestLanding = React.lazy(() => import("./pages/GuestLanding"));
  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  const Bookings = React.lazy(() => import("./pages/Bookings"));
  const Customers = React.lazy(() => import("./pages/Customers"));
  const Products = React.lazy(() => import("./pages/Products"));
  const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
  const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"));
  const ComponentPage = React.lazy(() => import("./pages/Component"));
  const FiturXyz = React.lazy(() => import("./pages/FiturXyz"));
  const NotFound = React.lazy(() => import("./pages/NotFound"));
  const Login = React.lazy(() => import("./pages/auth/Login"));
  const Register = React.lazy(() => import("./pages/auth/Register"));
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
  const PublicLayout = React.lazy(() => import("./layouts/PublicLayout"));
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<GuestLanding />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/bookings" element={<Bookings />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/customers/:id" element={<CustomerDetail />} />

          <Route path="/component" element={<ComponentPage />} />

          <Route path="/fitur-xyz" element={<FiturXyz />} />

          <Route path="/error" element={<NotFound />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;