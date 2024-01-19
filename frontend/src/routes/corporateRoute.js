import React from "react";
import { Route } from "react-router";
import Corporate from "../components/corporate/Corporate";
import AddCorporate from "../components/corporate/AddCorporate";
import EditCorporate from "../components/corporate/EditCorporate";
import Layout from "../components/common/Layout";

const corporateRoute = () => {
  return (
    <>
      <Route
        path="/corporate"
        element={
          //   <PrivateRoute>
          <Layout>
            <Corporate />
          </Layout>
          //   </PrivateRoute>
        }
      >
        <Route path="/corporate/add" element={<AddCorporate />} />
        <Route path="/corporate/edit" element={<EditCorporate />} />
      </Route>
    </>
  );
};

export default corporateRoute;
