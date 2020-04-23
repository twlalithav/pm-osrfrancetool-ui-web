import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AllPayments from "./PaymentsApi";

import axios from "axios";

let container = null;

beforeEach(() => {
  axios.get = jest.fn(() =>
    Promise.resolve({
      data: {
        payments: [
          {
            id: 1,
            amount: 1000,
            beneficiaryName: "Sakura",
            beneficiaryAccountNumber: 12345,
          },
          {
            id: 2,
            amount: 1000,
            beneficiaryName: "Mikan",
            beneficiaryAccountNumber: 12346,
          },
        ],
      },
    })
  );
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<AllPayments />, container);
  });

  expect(container.querySelector("p").textContent).toBe("Beneficiary : Sakura");
});
