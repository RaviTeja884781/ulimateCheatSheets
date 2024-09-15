import React, { Suspense } from "react";
import { Spinner } from "react-ui-essentials";
import "./App.css";
import Banner from "./components/Banner";
import { Route, Routes } from "react-router-dom";
import components from "./Routes/components";
function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner variant="secondary" size="md" />
        </div>
      }
    >
      <div className="bg-gray-100 min-h-screen">
        <Banner />
        <Routes>
          {components.map((route, index) => {
            return (
              <Route
                exact={true}
                path={route.path}
                element={route.component}
                key={`${route.path}-${index}`}
              />
            );
          })}
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
