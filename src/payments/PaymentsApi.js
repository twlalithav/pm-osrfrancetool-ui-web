import React, { useState, useEffect } from "react";
import axios from "axios";

import Page from "../firstPageView";

function AllPayments() {
  const [payments, setPayments] = useState({});

  useEffect(() => {
    async function fetchApi() {
      const response = await axios.get(
        "https://gist.githubusercontent.com/shireeshaBongarala/c30fbb4fb212df8531f0fec624fb9753/raw/bd07c8aacecc9f53f3e5ad80b181e82e0e5b5eb9/payments.json"
      );
      if (response.data) {
        setPayments((p) => response.data);
      }
    }
    fetchApi();
  }, []);

  return (
    <React.Fragment>
      <Page payments={payments} />
    </React.Fragment>
  );
}

export default AllPayments;
