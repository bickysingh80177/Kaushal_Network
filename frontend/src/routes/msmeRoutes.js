import React from "react";
import { Route } from "react-router";
import Layout from "../components/common/Layout";
import MSME from "../components/msme/MSME";
import AddMSME from "../components/msme/AddMSME";
import EditMSME from "../components/msme/EditMSME";

const msmeRoutes = () => {
  return (
    <>
      <Route
        path="/msme"
        element={
          //   <PrivateRoute>
          <Layout>
            <MSME />
          </Layout>
          //   </PrivateRoute>
        }
      >
        <Route path="add" element={<AddMSME />} />
        <Route path="edit" element={<EditMSME />} />
      </Route>
    </>
  );
};

export default msmeRoutes;
