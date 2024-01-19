import React from "react";
import { Route } from "react-router";
import Network from "../components/network/Network";
import Layout from "../components/common/Layout";
import AddNetwork from "../components/network/AddNetwork";
import EditNetwork from "../components/network/EditNetwork";

const networkRoute = () => {
  return (
    <>
      <Route
        path="/network"
        element={
          //   <PrivateRoute>
          <Layout>
            <Network />
          </Layout>
          //   </PrivateRoute>
        }
      >
        <Route path="/network/add" element={<AddNetwork />} />
        <Route path="/network/edit" element={<EditNetwork />} />
      </Route>
    </>
  );
};

export default networkRoute;
