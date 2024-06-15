import React from "react";
import { DataProvider } from "./context/DataContext";
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from "./page/Home";
import CheckPrice from "./page/CheckPrice";
import About from "./page/About";
import PraKunOther from "./page/PraKunOther";
import InsureOther from "./page/InsureOther";
import Blogs from "./page/Blogs";
import Promotion from "./page/Promotion";
import Faqs from "./page/Faqs";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Register from "./page/Register";
import UserInfo from "./page/dashboarduser/UserInfo";
import ChangePassword from "./page/dashboarduser/ChangePassword";
import Orders from "./page/dashboarduser/Orders";
import Confirm from "./page/dashboarduser/Confirm";
import Renew from "./page/dashboarduser/Renew";
import HistoryOrder from "./page/dashboarduser/HistoryOrder";
import MainBackAdmin from './page/dashboardadmin/index';






import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "./assets/css/styles.css";

function App() {
  return (<DataProvider>
            <BrowserRouter>
              <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/checkprice"  element={<CheckPrice />} />
                  <Route path="/about"  element={<About />} />
                  <Route path="/prakun"  element={<PraKunOther />} />
                  <Route path="/prakun/:slug"  element={<InsureOther />} />
                  <Route path="/blogs"  element={<Blogs />} />
                  <Route path="/promotion"  element={<Promotion />} />
                  <Route path="/faq"  element={<Faqs />} />
                  <Route path="/contact"  element={<Contact />} />
                  <Route path="/login"  element={<Login />} />
                  <Route path="/register"  element={<Register />} />

                  <Route path="backend/*"  element={<UserInfo />} />
                  <Route path="backend/userinfo"  element={<UserInfo />} />
                  <Route path="backend/changepassword"  element={<ChangePassword />} />
                  <Route path="backend/renew"  element={<Renew />} />
                  <Route path="backend/orders"  element={<Orders />} />
                  <Route path="backend/confirm"  element={<Confirm />} />
                  <Route path="backend/history"  element={<HistoryOrder />} />

                  <Route path="manage/*"  element={<MainBackAdmin />} />

              </Routes>
            </BrowserRouter>
          </DataProvider>);
}

export default App;
