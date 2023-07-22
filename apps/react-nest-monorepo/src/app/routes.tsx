import {Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "./features/Home/Home";
import {DefaultLayout} from "./layouts/default-layouts/DefaultLayout";

export const AppRoutes = () => {
  return (<Routes>
      <Route
        path={'/'}
        element={
          <DefaultLayout>
            <Home/>
          </DefaultLayout>
        }
      />
    </Routes>
  )
}
