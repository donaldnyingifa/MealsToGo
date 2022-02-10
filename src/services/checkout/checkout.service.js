import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51KRbX9ClRnxBYuBUfLlpBgaVJFkXfRqSppSP3FzjvZWZRoizBVxjluV4OQyF1E5u81RSPhxjw5TUuaeZgr0LUT6f00C8Oje7ST"
);

export const cardTokenRequest = (card) =>
  stripe.createToken({ card });

export const payRequest = (
  token,
  amount,
  name
) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject(
        "something went wrong processing your payment"
      );
    }
    return res.json();
  });
};
