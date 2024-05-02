import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from './components/common/Loading.jsx';

// const Login = React.lazy(() => import('./auth/Login.jsx'));
const Login = React.lazy(() => import('./components/auth/Login.jsx'));
const ForgotPassword = React.lazy(() => import('./components/auth/ForgotPassword.jsx'));
const Signup = React.lazy(() => import('./components/auth/Signup.jsx'));
const TOtpCheck = React.lazy(() => import('./components/auth/TOtpCheck.jsx'));
const OtpCheck = React.lazy(() => import('./components/auth/OtpCheck.jsx'));
const NewPassword = React.lazy(() => import('./components/auth/NewPassword.jsx'));
const Dashboard = React.lazy(() => import('./components/dashboard/DashBoard'));
const MainLayout = React.lazy(() => import('./components/common/MainLayout.jsx'));
const DataTableFinal = React.lazy(() => import('./components/dashboard/DataTableFinal.jsx'));



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Log in form */}
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/"
            element={
              <React.Suspense fallback={<Loading></Loading>}>
                <Login></Login>
              </React.Suspense>
            } />
        </Route>

        {/* Signup form */}
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/signup"
            element={
              <React.Suspense fallback={<Loading></Loading>}>
                <Signup></Signup>
              </React.Suspense>
            } />
        </Route>

        {/* Forgot password form */}
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/forgotpassword"
            element={
              <React.Suspense fallback={<Loading></Loading>}>
                <ForgotPassword></ForgotPassword>
              </React.Suspense>
            } />
        </Route>

        {/* OTP check form */}
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/otpCheck"
            element={
              <React.Suspense fallback={<Loading></Loading>}>
                <OtpCheck></OtpCheck>
              </React.Suspense>
            } />
        </Route>

        {/* TOTP check form */}
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/totpCheck"
            element={
              <React.Suspense fallback={<Loading></Loading>}>
                <TOtpCheck></TOtpCheck>
              </React.Suspense>
            } />
        </Route>

        {/* New password form */}
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/newPassword"
            element={
              <React.Suspense fallback={<Loading></Loading>}>
                <NewPassword></NewPassword>
              </React.Suspense>
            } />
        </Route>

        {/* Dashboard route */}
        <Route element={<Dashboard></Dashboard>}>
          <Route path="/dashboard" />
        </Route>

        {/* Dashboard route */}
        <Route element={<Dashboard></Dashboard>}>
          <Route path="/dashboard/user"
            element={
              <React.Suspense fallback={<Loading></Loading>}>
                <DataTableFinal></DataTableFinal>
              </React.Suspense>
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}