import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Propdrilling from "./pages/Propdrilling";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Landing = React.lazy(() => import("./pages/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/propDrilling"
            element={
              <Suspense fallback={<Loading />}>
                <Propdrilling />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
