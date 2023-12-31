import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import JobList from "./pages/JOBLISTING/JobList";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/user/UserDashboard";
import UserRoute from "./components/UserRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserJobsHistory from "./pages/user/UserJobsHistory";
import HistoryJobUser from "./pages/user/HistoryJobUser";
import UserInfoDashboard from "./pages/user/UserInfoDashboard";
import HomeDashUser from "./pages/user/HomeDashUser";
import AdminRoute from "./components/AdminRoute";
import JobDetails from "./pages/JOBLISTING/JobDetails";
import DashAdminUser from "./pages/admin/DashAdminUser";
import AdminDashJobs from "./pages/admin/AdminDashJobs";
import AdminCatDash from "./pages/admin/AdminCatDash";
import Signup from "./pages/Signup/Signup";
import SignupCompany from "./pages/Signup/SignupCompany";
import JobOffers from "./pages/admin/JobOffers";
import CompanyRoute from "./components/CompanyRoute";
import CompanyDashUser from "./pages/company/CompanyDashUser";
import CompanyDashJobs from "./pages/company/CompanyDashJobs";
import CompanyJobOffers from "./pages/company/CompanyJobOffers";
import CompanyInfoDashboard from "./pages/company/CompanyInfoDashboard";
import CompanyAccountDashboard from "./pages/company/CompanyAccountDashboard";


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/login_signup" element={<Loginsignup />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/joblist" element={<JobList />} />
          <Route path="/search/location/:location" element={<JobList />} />
          <Route path="/search/:keyword" element={<JobList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupcompany" element={<SignupCompany />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
    

          <Route
            path="/AdminDash"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/AdminCatDash"
            element={
              <AdminRoute>
                <AdminCatDash />
              </AdminRoute>
            }
          />
          <Route
            path="/JobOffer"
            element={
              <AdminRoute>
                <JobOffers />
              </AdminRoute>
            }
          />
          <Route
            path="/CompanyJobOffer"
            element={
              <CompanyRoute>
                <CompanyJobOffers />
              </CompanyRoute>
            }
          />
          <Route
            path="/AdminUserDash"
            element={
              <AdminRoute>
                <DashAdminUser />
              </AdminRoute>
            }
          />

          <Route
            path="/AdminJobsDash"
            element={
              <AdminRoute>
                <AdminDashJobs />
              </AdminRoute>
            }
          />
          <Route
            path="/CompanyJobsDash"
            element={
              <CompanyRoute>
                <CompanyDashJobs />
              </CompanyRoute>
            }
          />
          <Route
            path="/JobHistory"
            element={
              <UserRoute>
                <UserJobsHistory />
              </UserRoute>
            }
          />
          <Route
            path="/user/JobHistory"
            element={
              <UserRoute>
                <HistoryJobUser />
              </UserRoute>
            }
          />
          <Route
            path="/user/UserInfocom"
            element={
              <UserRoute>
                <UserInfoDashboard />
              </UserRoute>
            }
          />
          <Route
            path="/CompanyInfo"
            element={
              <CompanyRoute>
                <CompanyInfoDashboard />
              </CompanyRoute>
            }
          />
          <Route
            path="/UserDash"
            element={
              <UserRoute>
                <UserDashboard />
              </UserRoute>
            }
          />
          <Route
            path="/CompanyDash"
            element={
              <CompanyRoute>
                <CompanyAccountDashboard />
              </CompanyRoute>
            }
          />
          {/* Home Dashboard For User */}
          <Route
            path="/UserHomeDash"
            element={
              <UserRoute>
                <HomeDashUser />
              </UserRoute>
            }
          />
          <Route
            path="/CompanyHomeDash"
            element={
              <CompanyRoute>
                <CompanyDashUser />
              </CompanyRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
