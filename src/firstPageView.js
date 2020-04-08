import React from "react";

function Page(props) {
  return (
    <React.Fragment>
      {props.payments.payments && props.payments.payments.length}
    </React.Fragment>
  );
}

export default Page;
