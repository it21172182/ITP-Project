import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import NavBar from "./components/navbar/navBar";
// import Main from "./components/Main";
import EmpDash from "./components/Dashboard/EmpDash/EmpDash";
import Login from "./components/Login";
import AdminDash from "./components/Dashboard/AdminDash/AdminDash";
import MenuDash from "./components/Dashboard/MenuDash/MenuDash";
import Delivery from "./components/Dashboard/DeliveryDash/DeliveryDash";
import Dtable from "./pages/delivery/DeliveryTable/Dtable";
import Payment from "./pages/Order/Payment/payment";
import CustOwnMeal from "./pages/Menu/CustOwnMeal";
import OrderDetails from "./pages/Order/OrderForm/Addorderitem/Addorderitem";
import OrderForm from "./pages/Order/OrderForm/OrderForm";
import CustomerDash from "./components/Dashboard/CustomerDash/CustomerDash";

import EmpRegister from "./pages/Employee/EmpRegister/EmpRegister";
import Otable from "./pages/Order/OrderDetails/AllOrders/Allorders";
import Recept from "./pages/Order/Payment/Recept/Recept";
import BookTable from "./pages/Order/OrderTable/OrderTable";

import AttendanceForm from "./pages/Employee/Attendance/AttendanceForm/AttendanceForm";
import EmpDetails from "./pages/Employee/EmpDetails/EmpDetails";
import FinanceDash from "./components/Dashboard/FinanceDash/FinanceDash";
import OrderDash from "./components/Dashboard/OrderDash/OrderDash";
import StockDash from "./components/Dashboard/StockDash/StockDash";
import SupplierDash from "./components/Dashboard/SupplierDash/SupplierDash";
import Profile from "./pages/Employee/EmpProfile/Profile";

import AddSupplier from "./pages/Supplier/AddSupplier";
import Suppliers from "./pages/Supplier/Suppliers";
import UpdateSupplier from "./pages/Supplier/UpdateSupplier";

import Tracking from "./pages/delivery/Tracking/Tracking";

import ViewOwnMeal from "./pages/Menu/ViewOwnMeal";

import AddItem from "./pages/Stock/AddItem";
import ManageItem from "./pages/Stock/ManageItem";
import Report from "./pages/Stock/Report";
import ViewChart from "./pages/Stock/ViewChart";

import Addownmeal from "./pages/Menu/Addownmeal";
import OrderTable from "./pages/Order/OrderDetails/AllOrders/Orderdetailtable";
import Signup from "./pages/customer and event/Signup";
import CustomerLogin from "./pages/customer and event/customerLogin";

import AddNewEvent from "./pages/customer and event/addNewEvent";
import EventData from "./pages/customer and event/EventData";
import Newproduct from "./pages/customer and event/Newproduct";
import FItems from "./pages/customer and event/FItems";
import CustomerProfile from "./pages/customer and event/CustomerProfile";
import CustomerHome from "./pages/customer and event/customerHome";
import Header from "./pages/customer and event/Header";

import UpdateOwnMEal from "./pages/Menu/UpdateOwnMEal";

import SplyReqForm from "./pages/Stock/SplyReqForm";

import EditItems from "./pages/Stock/EditItems";

//import Addownmeal from "./pages/Menu/Addownmeal";
// import OrderTable from "./pages/Order/OrderDetails/AllOrders/Orderdetailtable";

//import Addownmeal from "./pages/Menu/Addownmeal";
//import OrderTable from "./pages/Order/OrderDetails/AllOrders/Orderdetailtable";

import UpdateEmp from "./pages/Employee/EmpDetails/UpdateEmp";
import EmpSalary from "./pages/Employee/EmpSalary/EmpSalary";
import AttendanceTable from "./pages/Employee/Attendance/AttendanceTable/AttendanceTable";
import TrackingView from "./pages/delivery/Tracking/TrackingView";
import EditSalary from "./pages/Employee/EmpSalary/EditSalary";
import AddFoodItem from "./pages/Menu/AddFoodItem";
import Fooditems from "./pages/Menu/fooditems";
import Fooditem from "./pages/Menu/Fooditem";
import Fooditemdetail from "./pages/Menu/Fooditemdetail";
import AddPackages from "./pages/Menu/AddPackages copy";
import Packages from "./pages/Menu/Packages";
import PackageDetails from "./pages/Menu/PackageDetails";

function App() {
  const user = localStorage.getItem("token");
  const location = useLocation();
  return (
    <>
      <NavBar />
      <NavBar />
      <Routes>
        {user && <Route path="/empdash" exact element={<EmpDash />} />}
        {user && <Route path="/admindash" exact element={<AdminDash />} />}
        {user && <Route path="/menudash" exact element={<MenuDash />} />}
        {user && <Route path="/deliverydash" exact element={<Delivery />} />}
        <Route path="/" exact element={<Login />} />
        {/* <Route path="/empdash" element={<Navigate replace to="/login" />} /> */}
        <Route path="/admindash" element={<Navigate replace to="/login" />} />
        <Route path="/deliverydash/dtable" element={<Dtable />} exact />
        <Route path="/menudash" element={<CustOwnMeal />} exact />
        <Route path="/stockdash/additem" exact element={<AddItem />} />
        <Route path="/stockdash/manageitem" exact element={<ManageItem />} />
        <Route path="/stockdash/report" exact element={<Report />} />
        <Route path="/stockdash/viewchart" exact element={<ViewChart />} />
        <Route path="/deliverydash/tracking" element={<Tracking />} exact />
        <Route path="/menudash/CustOwnMeal" element={<CustOwnMeal />} exact />
        <Route path="/menudash/addCustOwnMeal" element={<Addownmeal />} exact />
        <Route path="/admindash/empregister" element={<EmpRegister />} />
        <Route path="/payment" element={<Payment />} exact />
        <Route path="/orderd" element={<OrderDetails />} exact />
        <Route path="/orderform" element={<OrderForm />} exact />
        <Route path="/table" element={<Otable />} exact />
        <Route path="/addsupplier" element={<AddSupplier />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/updatesupp" element={<UpdateSupplier />} />
        <Route path="/admindash" element={<Navigate replace to="/login" />} />
        <Route path="/menudash" element={<CustOwnMeal />} exact />
        <Route path="/stockdash/additem" exact element={<AddItem />} />
        <Route path="/stockdash/manageitem" exact element={<ManageItem />} />
        <Route path="/stockdash/report" exact element={<Report />} />
        <Route path="/stockdash/viewchart" exact element={<ViewChart />} />
        {/* Delivery Manegment */}
        <Route path="/deliverydash/dtable" element={<Dtable />} exact />
        <Route path="/deliverydash/tracking" element={<Tracking />} exact />
        <Route path="/deliverydash/trackingview" element={<TrackingView />} />
        <Route path="/menudash" element={<CustOwnMeal />} exact />
        <Route path="/customdash" element={<CustomerDash />} exact />
        <Route path="/stockdash/additem" exact element={<AddItem />} />
        <Route path="/stockdash/manageitem" exact element={<ManageItem />} />
        <Route path="/stockdash/report" exact element={<Report />} />
        <Route path="/stockdash/viewchart" exact element={<ViewChart />} />
        <Route path="/stockdash/edititems" exact element={<EditItems />} />
        <Route path="/stockdash/splyreqform" exact element={<SplyReqForm />} />
        <Route path="/stockdash/additem" exact element={<AddItem />} />
        <Route path="/stockdash/manageitem" exact element={<ManageItem />} />
        <Route path="/stockdash/report" exact element={<Report />} />
        <Route path="/stockdash/viewchart" exact element={<ViewChart />} />
        {/* Delivery Manegment */}
        <Route path="/deliverydash/dtable" element={<Dtable />} exact />
        <Route path="/deliverydash/tracking" element={<Tracking />} exact />
        <Route path="/deliverydash/trackingview" element={<TrackingView />} />
        {/* Menu Management */}
        <Route path="/menudash/CustOwnMeal" element={<CustOwnMeal />} exact />
        <Route path="/menudash/addCustOwnMeal" element={<Addownmeal />} exact />
        <Route path="/menudash/CustOwnMeal" element={<CustOwnMeal />} exact />
        <Route path="/menudash/addCustOwnMeal" element={<Addownmeal />} exact />

        <Route path="/addfooditems" element={<AddFoodItem />} exact />
        <Route path="/fooditems" element={<Fooditems />} exact />
        <Route path="/fooditems/:id" element={<Fooditemdetail />} exact />

        <Route path="/addpackages" element={<AddPackages />} exact />
        <Route path="/packages" element={<Packages />} exact />
        <Route path="/packages/:id" element={<PackageDetails />} exact />

        <Route
          path="/menudash/ViewCustOwnMeal"
          element={<ViewOwnMeal />}
          exact
        />
        <Route
          path="/menudash/ViewCustOwnMeal/:id"
          element={<ViewOwnMeal />}
          exact
        />
        <Route path="/menudash/updateownmeal/:id" element={<UpdateOwnMEal />} />
        {/* Employee Management  */}
        <Route path="/admindash/empregister" element={<EmpRegister />} />
        <Route path="/admindash/empdetails" element={<EmpDetails />} />
        <Route path="/admindash/updateemp/:id" element={<UpdateEmp />} />
        <Route path="/admindash/empsalary" element={<EmpSalary />} />
        <Route path="/admindash/empattendance" element={<AttendanceTable />} />
        <Route path="/payment" element={<Payment />} exact />
        <Route path="/orderd" element={<OrderDetails />} exact />
        <Route path="/orderform" element={<OrderForm />} exact />
        <Route path="/table" element={<Otable />} exact />
        {/* supplier */}
        <Route path="/addsupplier" element={<AddSupplier />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/updatesupp" element={<UpdateSupplier />} />
        <Route path="/recept" element={<Recept />} exact />
        <Route path="/booktable" element={<BookTable />} />
        <Route path="/table" element={<OrderTable />} exact />
        <Route path="/orderdash/orderdetails" element={<OrderTable />} exact />
        {/*  customer and event*/}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
        <Route path="/CustomerHome" element={<CustomerHome />} />
        <Route path="/AddNewEvent" element={<AddNewEvent />} />
        <Route path="/EventData" element={<EventData />} />
        <Route path="/Newproduct" element={<Newproduct />} />
        <Route path="/FItems" element={<FItems />} />
        <Route path="/CustomerProfile" element={<CustomerProfile />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/admindash/empregister" element={<EmpRegister />} />
        <Route path="/admindash/empdetails" element={<EmpDetails />} />
        <Route path="/admindash/updateemp/:id" element={<UpdateEmp />} />
        <Route path="/admindash/empsalary" element={<EmpSalary />} />
        <Route path="/admindash/empattendance" element={<AttendanceTable />} />
        <Route path="/admindash/profile" element={<Profile />} />
        <Route path="/admindash/edtsalary/:id" element={<EditSalary />} />
        {/* order Management */}
        <Route path="/recept" element={<Recept />} exact />
        <Route path="/table/:id" element={<Otable />} />
        <Route path="/payment" element={<Payment />} exact />
        <Route path="/orderd" element={<OrderDetails />} exact />
        <Route path="/orderform" element={<OrderForm />} exact />
        <Route path="/table" element={<Otable />} exact />
        <Route path="/booktable" element={<BookTable />} />
        <Route path="/orderdash/orderdetails" element={<OrderTable />} exact />
        {/* supplier */}
        <Route path="/addsupplier" element={<AddSupplier />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/suppliers/:id" element={<UpdateSupplier />} />
        <Route path="/recept" element={<Recept />} exact />
        <Route path="/booktable" element={<BookTable />} />
        <Route path="/updatesupp" element={<UpdateSupplier />} />
        {/* <Route path="/table" element={<OrderTable />} exact /> */}
      </Routes>
    </>
  );
}

export default App;
