import React from "react";
import { Route } from "react-router";
import Layout from "../components/common/Layout";
import ServiceProviders from "../components/service_providers/ServiceProviders";
import AddServiceProviders from "../components/service_providers/AddServiceProviders";
import EditServiceProviders from "../components/service_providers/EditServiceProviders";

const serviceproviderRoute = () => {
  return (
    <>
      <Route
        path="/service_provider"
        element={
          //   <PrivateRoute>
          <Layout>
            <ServiceProviders />
          </Layout>
          //   </PrivateRoute>
        }
      >
        <Route path="add" element={<AddServiceProviders />} />
        <Route path="edit" element={<EditServiceProviders />} />
      </Route>
    </>
  );
};

export default serviceproviderRoute;
